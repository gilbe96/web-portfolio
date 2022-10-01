import styled from "styled-components";

export const StyledHome = styled.div`
display: flex;
position: relative;
gap: 6rem;
h1 {
  font-size: 70px;
  font-weight: bold;
  span {
    color: #df7373;
  }
}
h2 {
  font-size: 40px;
  font-weight: bold;
}
p {
  font-size: 18px;
  line-height: 30px;
  margin-top: 30px;
}
.left {
  .hero_btn {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    flex-wrap: wrap;
    h4 {
      font-weight: 500;
      letter-spacing: 2px;
      font-size: 15px;
      margin: 30px 0 30px 0;
    }
    a {
      margin-right: 30px;
      padding: 8px 10px;
      border-radius: 30px;
      .icon {
        font-size: 150%;
      }
      transition: 0.5s all ease;
      box-shadow: 2px 3px 8px rgb(43, 34, 34);
      cursor: pointer;
      background-color: #2a99b4;
      color: whitesmoke;
      &:hover {
        background-color: rgb(223, 132, 155);
        box-shadow: 6px 6px 8px rgb(43, 34, 34);
      }
    }
    .button {
      display: flex;
      justify-content: center;
    }
    img {
      width: 20px;
      height: 20px;
    }
  }
}
.rigth {
  width: 40%;
  position: relative;
}
.right_img {
  background: linear-gradient(70deg, #9e9797, white);
  box-shadow: 2px 3px 8px rgb(43, 34, 34);
  border-radius: 10px;
  height: 580px;
  width: 500px;
  margin-top: 20%;
  img {
    position: absolute;
    top: 0;
    margin-right: -550px;
    height: 650px;
  }
}
@media (max-width: 1035px) {
  .right_img {
    width: 400px;
  }
}
@media (max-width: 900px) {
  padding-top: 20px;
  h1 {
    font-size: 40px;
    font-weight: bold;
    span {
      color: #df7373;
    }
  }
  h2 {
    font-size: 20px;
    font-weight: bold;
  }
  p {
    font-size: 18px;
    line-height: 30px;
    margin-top: 30px;
  }
  .right_img {
    height: 450px;
    img {
      padding-top: 30px;
      position: absolute;
      top: 0;
      margin-right: -480px;
      height: 500px;
    }
  }
}
@media (max-width: 840px) {
  .right_img {
    width: 350px;
  }
}
@media (max-width: 778px) {
  .right_img {
    width: 300px;
    height: 350px;
    margin-left: -60px;
    img {
      height: 350px;
      margin-right: -380px;
    }
  }
}
@media (max-width: 648px) {
  flex-direction: column-reverse;
  align-items: center !important;
  justify-content: center;
  margin-left: 40px;
  gap: 0;
  .hero_btn {
    justify-content: space-around !important;
  }
  .left {
    width: 100%;
  }
  img {
    margin-right: -380px;
  }
}
@media (max-width: 552px) {
  a {
    margin-right: 15px !important;
    .icon {
      font-size: 100% !important;
    }
  }
  .right_img {
    width: 220px;
    height: 300px;
    img {
      height: 300px;
      margin-right: -200px;
    }
  }
}
`;