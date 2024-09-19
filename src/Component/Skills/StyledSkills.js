import styled from "styled-components";

export const StyledSkills = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 40px;
  }
  .images {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .content-img {
      display: flex;
      align-items: center;
      text-align: center;
      flex-direction: column;
      p {
        width: 100%;
        visibility: hidden;
        z-index: 50;
        margin-top: -1px;
        margin-bottom: -5px;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
      }
      .title-up {
        margin-top: -20px !important;
      }
      .title-m-up {
        margin-top: -10px !important;
      }
      .title-s-up {
        margin-top: 5px !important;
      }
      .title-xs-up {
        margin-top: 8px !important;
      }
      img {
        height: 100px;
        width: 100px;
        transition: 0.5s all ease-out;
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        z-index: 20;
      }
      &:hover {
        img {
          transform: scale(1.6);
          margin-left: 1.5rem;
          margin-right: 1.5rem;
          -webkit-filter: grayscale(0%);
          filter: grayscale(0%);
        }
        p {
          visibility: visible;
        }
      }
    }
  }
  @media (max-width: 450px) {
    h2 {
      font-weight: bold;
    }
    .images {
      gap: 0.5rem;
      .content-img {
        img {
          height: 80px;
          width: 80px;
          &:hover {
            transform: scale(1.2);
          }
        }
      }
    }
  }
`;
