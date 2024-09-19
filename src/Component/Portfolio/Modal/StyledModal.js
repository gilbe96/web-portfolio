import styled from "styled-components";

export const StyledModal = styled.div`
  .darkBG {
    background-color: rgba(0, 0, 0, 0.2);
    width: 120vw;
    height: 1000vh;
    z-index: 4444;
    top: -100%;
    left: -100%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
  .centered {
    transition: 0.5s all ease-in-out;
    position: fixed;
    top: -100%;
    left: 47%;
    transform: translate(-50%, -50%);
    z-index: 6666;
  }

  .isOpen {
    top: 50% !important;
    left: 47% !important;
  }

  .modal {
    background: linear-gradient(70deg, #9e9797, white);
    color: white;
    border-radius: 16px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  }

  .modalHeader {
    height: 50px;
    background: white;
    overflow: hidden;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }

  .heading {
    margin: 0;
    color: #2c3e50;
    font-weight: 500;
    font-size: 30px;
    text-align: center;
  }

  .modalContent {
    display: flex;
    padding: 1rem;
    font-size: 14px;
    color: #2c3e50;
    text-align: center;
    gap: 3rem;
    .modal-img {
      width: 50%;
      img {
        height: 300px;
        border-radius: 15px;
        box-shadow: 3px 6px 10px rgb(65, 57, 57);
      }
    }
    .modal-text {
      gap: 3rem;
      width: 50%;
      h3 {
        text-align: justify;
        font-size: 16px;
        color: #001a33;
      }
      .btn-content {
        display: flex;
        gap: 0.7rem;
        margin-bottom: 1rem;
        a {
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 15px;
          transition: 0.5s all ease;
          box-shadow: 2px 3px 8px rgb(43, 34, 34);
          display: flex;
          align-items: center;
          cursor: pointer;
          background-color: #2a99b4;
          color: whitesmoke;
          &:hover {
            background-color: rgb(223, 132, 155);
            box-shadow: 6px 6px 8px rgb(43, 34, 34);
          }
          span {
            font-weight: bold;
          }
          .icon {
            font-size: 1.5rem;
          }
        }
      }
      .modal-skills {
        display: flex;
        gap: 0.5rem;
        padding: 0.5rem;
        flex-wrap: wrap;
        .skill {
          padding: 0.2rem 0.7rem;
          border-radius: 15px;
          background-color: #c75a5a;
          color: white;
        }
      }
    }
  }

  .closeBtn {
    cursor: pointer;
    font-weight: 500;
    padding: 4px 8px;
    border-radius: 70px;
    border: none;
    font-size: 1.5rem;
    color: #2c3e50;
    background: #6e6565;
    color: white;
    transition: all 0.25s ease;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
    position: absolute;
    right: 0;
    top: 0;
    align-self: flex-end;
    margin-top: -15px;
    margin-right: -15px;
    margin-bottom: -10px;
  }

  .closeBtn:hover {
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
    transform: scale(1.3);
  }

  .deleteBtn {
    margin-top: 10px;
    cursor: pointer;
    font-weight: 500;
    padding: 11px 28px;
    border-radius: 12px;
    font-size: 0.8rem;
    border: none;
    color: #fff;
    background: #ff3e4e;
    transition: all 0.25s ease;
  }

  .deleteBtn:hover {
    box-shadow: 0 10px 20px -10px rgba(255, 62, 78, 0.6);
    transform: translateY(-5px);
    background: #ff3e4e;
  }

  .cancelBtn {
    margin-top: 10px;
    cursor: pointer;
    font-weight: 500;
    padding: 11px 28px;
    border-radius: 12px;
    font-size: 0.8rem;
    border: none;
    color: #2c3e50;
    background: #fcfcfc;
    transition: all 0.25s ease;
  }

  .cancelBtn:hover {
    box-shadow: none;
    transform: none;
    background: whitesmoke;
  }
  @media (max-width: 670px) {
    .modalContent {
      flex-direction: column;
      gap: 1rem;
      .modal-img {
        width: 100%;
        img {
          height: 200px;
        }
      }
      .modal-text {
        width: 100%;
      }
    }
  }
`;
