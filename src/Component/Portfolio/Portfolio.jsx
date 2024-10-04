import React, { useState, useEffect } from "react";
import Card from "./Card/Card";
import Modal from "./Modal/Modal";
import FriendChat from "../../assets/friend-chat.png";
import Bettris from "../../assets/bettris.png";
import Gilshop from "../../assets/gilshop.png";
import Emojis from "../../assets/emojis.png";
import Hangman from "../../assets/hangman.png";
import CookBook from "../../assets/cook-book.png";
import Carousel from "nuka-carousel";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { StyledPortfolio } from "./StyledPortfolio";
import Aos from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cards = [
    {
      key: 0,
      category: "WEB DESIGN",
      linkCode: "https://codesandbox.io/s/github/gilbe96/friend-chat-frontend",
      linkCode2: "https://codesandbox.io/s/github/gilbe96/friend-chat-backend",
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
      linkCode2: null,
      linkApp: "https://bettris.netlify.app",
      description: "It's similar to the Tetris",
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
      linkCode2: null,
      linkApp: "https://emojis-gi.netlify.app",
      description: "It's an emoji library",
      longDescription:
        "It's an emoji library. This site shows the data of most of the emojis that are currently used to facilitate their use in other sites. You can use it on PC and mobile.",
      skills: ["TS", "React", "Next", "Tailwind CSS"],
      name: "Emojis",
      image: Emojis,
    },
    {
      key: 3,
      category: "WEB DESIGN",
      linkCode: "https://codesandbox.io/s/github/gilbe96/hangman-game",
      linkCode2: null,
      linkApp: "https://hangman-gi.netlify.app",
      description: "It's a hangman game",
      longDescription:
        "It's a hangman game. This is a fun site and good to refresh your memory or learn new words. You can use it on PC and mobile.",
      skills: ["TS", "React", "Style-Component"],
      name: "Hangman",
      image: Hangman,
    },
    {
      key: 4,
      category: "WEB DESIGN",
      linkCode: "https://codesandbox.io/s/github/gilbe96/cook-book",
      linkCode2: null,
      linkApp: "https://cook-book-gi.netlify.app",
      description: "It's is a Latin cook book",
      longDescription:
        "It's is a Latin cook book. This is an interesting site to learn to cook delicious Latin dishes . You can use it on PC and mobile.",
      skills: ["TS", "React", "Style-Component", "Chakra Ui"],
      name: "Cook Book",
      image: CookBook,
    },
    {
      key: 5,
      category: "WEB DESIGN",
      linkCode: "https://codesandbox.io/s/github/gilbe96/gilshop",
      linkCode2: null,
      linkApp: "https://gilshop.netlify.app",
      description: "It's the home page of sales",
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
      linkCode2: props.linkCode2,
      linkApp: props.linkApp,
      longDescription: props.longDescription,
      skills: props.skills,
      name: props.name,
      image: props.image,
    });
    setIsOpen(true);
  };

  useEffect(() => {
    Aos.init();
  }, []);

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
        linkCode2={modalData.linkCode2}
        linkApp={modalData.linkApp}
        name={modalData.name}
        image={modalData.image}
      />
      <StyledPortfolio className="container" id="portfolio">
        <h2 className="title-section">PORTFOLIO</h2>
        <div className="content" data-aos="zoom-in" data-aos-duration="1500">
          <Carousel
            renderCenterLeftControls={({ previousSlide }) => (
              <button onClick={previousSlide}>
                <FaCaretLeft className="icon" />
              </button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <button onClick={nextSlide}>
                <FaCaretRight className="icon" />
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
                linkCode2={card.linkCode2}
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
};

export default Portfolio;
