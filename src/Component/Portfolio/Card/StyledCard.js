import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  height: 300px;
  width: 280px;
  margin-left: 22%;
  flex-direction: column;
  background: whitesmoke;
  padding: 3rem 1rem;
  border-radius: 15px;
  box-shadow: 4px 6px 6px grey;
  margin-bottom: 50px;
  color: #292525;
  transition: 0.5s all ease;
  cursor: pointer;
  .arrow {
    display: flex;
    justify-content: center;
  }
  &:hover {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(128, 128, 128, 1) 50%,
      #000000 100%
    );
    color: white;
    transform: scale(1.1);
    .icon {
      color: white;
      transform: rotate(-90deg);
    }
  }
  .category {
    text-align: center;
    font-weight: bold;
  }
  .description {
    text-align: center;
    margin-top: -3px;
  }
  img {
    height: 240px;
    width: 100%;
    border-radius: 10px;
  }
  .icon {
    transition: 0.5s all ease;
    font-size: 2rem;
  }
  .primaryBtn {
    margin: 20px 10px;
    cursor: pointer;
    font-weight: 500;
    padding: 13px 25px;
    border-radius: 15px;
    font-size: 0.8rem;
    border: none;
    color: white;
    background: #185adb;
    transition: all 0.25s ease;
  }

  .primaryBtn:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px -10px rgba(24, 90, 219, 0.6);
  }
  @media (max-width: 600px) {
    margin-left: 5% !important;
    height: 300px;
    width: 230px;
    img {
      height: 200px;
    }
  }
`;
