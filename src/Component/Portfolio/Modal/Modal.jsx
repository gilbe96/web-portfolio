import React from "react";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { StyledModal } from "./StyledModal";

const Modal = (props) => {
  console.log(props.linkCode2, props.linkCode);
  return (
    <StyledModal>
      <div className={props.isOpen ? "darkBG isOpen" : "darkBG"} />
      <div className={props.isOpen ? "centered isOpen" : "centered"}>
        <div className="modal">
          <div className="modalHeader">
            <h1 className="heading">{props.name}</h1>
          </div>
          <button className="closeBtn" onClick={() => props.setIsOpen(false)}>
            <RiCloseLine />
          </button>
          <div className="modalContent">
            <div className="modal-img left">
              <img src={props.image} alt="" />
            </div>
            <div className="modal-text right">
              <h3>{props.longDescription}</h3>
              <div className="btn-content">
                <a href={props.linkApp}>
                  <span>Project</span>
                  <MdOutlineDesktopWindows className="icon" />
                </a>
                <a href={props.linkCode}>
                  <span>Code</span>
                  <FaCode className="icon" />
                </a>
                {props.linkCode2 && (
                  <a href={props.linkCode2}>
                    <span>BE</span>
                    <FaCode className="icon" />
                  </a>
                )}
              </div>
              <div className="modal-skills">
                {props.skills.map((skill) => (
                  <p id={props.key} className="skill">
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledModal>
  );
};

export default Modal;
