import React, { useState, useEffect } from "react";
import Card from "./Card/Card";
import Modal from "./Modal/Modal";
import FriendChat from "../../assets/friend-chat.png";
import Bettris from "../../assets/bettris.png";
import Gilshop from "../../assets/gilshop.png";
import Emojis from "../../assets/emojis.png";
import Carousel from "nuka-carousel";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { StyledPortfolio } from "./StyledPortfolio";

function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const cards = [
    {
      key: 0,
      category: "WEB DESIGN",
      linkCode: "https://codesandbox.io/s/github/gilbe96/friend-chat-frontend",
      linkApp: "https://friend-gi-chat.netlify.app",
      description: "It's a real time chat",
      longDescription:
        "It's a real time chat. You will have the options to send messages and rexeive them quickly. You can use it on PC and mobile.",
      skills: ["React", "Node", "MongoDB", "Socket-io", "Style-Component"],
      name: "Friend Chat",
      image: FriendChat,
    },
    {
      key: 1,
      category: "WEB DESIGN",
      linkCode: "https://codesandbox.io/s/github/gilbe96/bettris",
      linkApp: "https://bettris.netlify.app",
      description: "It's a good game to enjoy accompanied",
      longDescription:
        "It's a good game to enjoy accompanied or alone. It's similar to the Tetris. You can use only PC. It's a compatible with Firefox Morzilla.",
      skills: ["JS", "P5", "CSS"],
      name: "Bettris",
      image: Bettris,
    },
    {
      key: 2,
      category: "WEB DESIGN",
      linkCode: "https://codesandbox.io/s/github/gilbe96/emojis",
      linkApp: "https://emojis-gi.netlify.app",
      description: "It's the emoji library",
      longDescription:
        "It's the the emoji library. This site shows the data of most of the emojis that are currently used to facilitate their use in other sites. You can use it on PC and mobile.",
      skills: ["TS", "React", "Next", "Tailwind CSS"],
      name: "Emojis",
      image: Emojis,
    },
    {
      key: 3,
      category: "WEB DESIGN",
      linkCode: "https://codesandbox.io/s/github/gilbe96/gilshop",
      linkApp: "https://gilshop.netlify.app",
      description: "It's the home page of a suit sales site",
      longDescription:
        "It's the home page of a suit sales site. This shows that a good design can be achieved with the use of few resources. You can use it on PC and mobile.",
      skills: ["JS", "CSS", "AOS"],
      name: "Gilshop",
      image: Gilshop,
    },
  ];
  const [modalData, setModalData] = useState(cards[0]);

  const changeModalData = (props) => {
    setModalData({
      key: props.key,
      linkCode: props.linkCode,
      linkApp: props.linkApp,
      longDescription: props.longDescription,
      skills: props.skills,
      name: props.name,
      image: props.image,
    });
    setIsOpen(true);
  };
  return (
    <>
      <Modal
        className="modal"
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        longDescription={modalData.longDescription}
        key={modalData.key}
        skills={modalData.skills}
        linkCode={modalData.linkCode}
        linkApp={modalData.linkApp}
        name={modalData.name}
        image={modalData.image}
      />
      <StyledPortfolio className="container" id="portfolio">
        <h2 className="title-section">PORTFOLIO</h2>
        <div className="content">
          <Carousel
            renderCenterLeftControls={({ previousSlide }) => (
              <button onClick={previousSlide}>
                <FaCaretLeft />
              </button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <button onClick={nextSlide}>
                <FaCaretRight />
              </button>
            )}
            cellAlign="center"
            slidesToShow={1}
            className="carousel"
          >
            {cards.map((card) => (
              <Card
                className="card"
                changeModalData={changeModalData}
                key={card.key}
                category={card.category}
                linkCode={card.linkCode}
                linkApp={card.linkApp}
                description={card.description}
                longDescription={card.longDescription}
                skills={card.skills}
                name={card.name}
                image={card.image}
              />
            ))}
          </Carousel>
        </div>
      </StyledPortfolio>
    </>
  );
}

export default Portfolio;
