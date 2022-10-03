import styled from "styled-components";

export const StyledPortfolio = styled.div`
display: flex;
justify-content: center;
position: relative;
margin-top: 20px;
align-items: center;
flex-wrap: wrap;
h2 {
  margin-left: 20px;
  text-align: center;
  width: 100%;
  font-size: 40px;
}
.content {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  align-items: center;
  width: 100%;
  .slider-list {
    padding: 2rem;
  }
  .slider-container {
    width: 50% !important;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .slider-frame {
      width: 100% !important;
    }
    .slider-control-centerleft {
      button {
        cursor: pointer;
        padding: 0.3rem 0.4rem;
        border-radius: 50px;
        font-size: 20px;
        background-color: #df7373;
        color: white;
        box-shadow: 3px 3px 10px black;
        transition: 0.5s all ease;
        margin-left: 22px;
        &:hover {
          transform: scale(1.2);
          background-color: #c94040;
        }
      }
    }
    .slider-control-centerright {
      button {
        cursor: pointer;
        padding: 0.3rem 0.4rem;
        border-radius: 50px;
        font-size: 20px;
        background-color: #df7373;
        color: white;
        box-shadow: 3px 3px 10px black;
        transition: 0.5s all ease;
        margin-right: 25px;
        &:hover {
          transform: scale(1.2);
          background-color: #c94040;
        }
      }
    }
  }
}
@media (min-width: 1101px) and (max-width: 1200px) {
  .slider-frame {
    margin-left: -100px !important;
  }
}
@media (min-width: 871px) and (max-width: 1100px) {
  .slider-frame {
    margin-left: -100px !important;
  }
  .slider-control-centerright {
    margin-right: -35px;
  }
  .slider-control-centerleft {
    margin-left: -70px;
  }
  .slide {
    margin-right: 70px;
  }
}

@media (max-width: 870px) {
  h2 {
    font-weight: bold;
  }
  .content {
    align-items: center;
    .slider-list {
      gap: 3rem !important;
    }
    .slider-container {
      width: 100% !important;
      display: flex;
      justify-content: center;
      align-items: center;
      .slider-frame {
        width: 100% !important;
      }
      .slider-control-centerleft {
        margin-left: -15px;
        button {
          cursor: pointer;
          padding: 0.1rem 0.2rem;
          border-radius: 50px;
          font-size: 20px;
          background-color: #df7373;
          color: white;
          box-shadow: 3px 3px 10px black;
          transition: 0.5s all ease;
          &:hover {
            transform: scale(1.2);
            background-color: #c94040;
          }
        }
      }
      .slider-control-centerright {
        margin-right: -15px;
        button {
          cursor: pointer;
          padding: 0.1rem 0.2rem;
          border-radius: 50px;
          font-size: 20px;
          background-color: #df7373;
          color: white;
          box-shadow: 3px 3px 10px black;
          transition: 0.5s all ease;
          &:hover {
            transform: scale(1.2);
            background-color: #c94040;
          }
        }
      }
    }
  }
}
`;