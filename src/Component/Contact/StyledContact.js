import styled from "styled-components";

export const StyledContact = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4rem;
  margin-top: 2rem;
  align-items: center;
  margin-bottom: 300px;
  h2 {
    font-size: 40px;
    width: 100%;
    text-align: center;
    margin-bottom: -50px;
  }
  h4 {
    font-size: 20px;
    font-weight: bold;
    width: 100%;
    text-align: center;
  }
  .content-message {
    width: 35%;
    height: 300px;
    textarea {
      outline: 0;
      width: 90%;
      height: 280px;
      padding: 20px 30px;
      box-sizing: border-box;
      border: 2px solid #c5a6a6;
      border-radius: 7px;
      background-color: #faf4f4;
      font-size: 18px;
      resize: none;
      transition: 0.5s all ease;
      box-shadow: 4px 4px 12px gray;
      &:focus {
        background-color: white;
        border: 2px solid blueviolet;
      }
      &::-webkit-scrollbar {
        width: 10px;
        &-thumb {
          background-color: rgb(104, 104, 145);
          border-radius: 20px;
        }
        &-track {
          background: transparent;
        }
      }
    }
  }
  .content-contact {
    width: 30%;
    height: 300px;
  }
  input {
    outline: 0;
    width: 90%;
    padding: 1rem 2rem;
    border: 2px solid #c5a6a6;
    border-radius: 7px;
    background-color: #faf4f4;
    font-size: 18px;
    box-shadow: 4px 4px 12px gray;
    margin-bottom: 1rem;
    transition: 0.5s all ease;
    &:focus {
      background-color: white;
      border: 2px solid blueviolet;
    }
  }
  button {
    padding: 12px 12px;
    border-radius: 50px;
    transition: 0.5s all ease;
    box-shadow: 2px 3px 8px rgb(43, 34, 34);
    cursor: pointer;
    background-color: #2a99b4;
    margin-top: 20px;
    color: whitesmoke;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100px;
    .icon {
      font-size: 150%;
    }
    &:hover {
      background-color: rgb(223, 132, 155);
      box-shadow: 6px 6px 8px rgb(43, 34, 34);
    }
  }
  @media (max-width: 760px) {
    flex-direction: column;
    gap: 0rem;
    .content-message {
      width: 100%;
      margin-top: 150px;
      margin-left: 24px;
      h4 {
        margin-left: -27px;
      }
    }
    .content-contact {
      margin-top: 50px;
      width: 80%;
      margin-left: -50px;
    }
  }
`;