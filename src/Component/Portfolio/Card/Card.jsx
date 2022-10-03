import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import { StyledCard } from "./StyledCard";

function Card(props) {
  return (
    <>
      <StyledCard id="openModal" onClick={() => props.changeModalData(props)}>
        <div className="img">
          <img src={props.image} alt="" />
        </div>
        <div className="category">
          <p className="category">{props.category}</p>
        </div>
        <div className="description">
          <p className="description">{props.description}</p>
          <a href="#popup" className="arrow">
            <FiArrowRightCircle className="icon" />
          </a>
        </div>
      </StyledCard>
    </>
  );
}

export default Card;
