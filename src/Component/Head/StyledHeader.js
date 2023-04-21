import styled from "styled-components";

export const StyledHeader = styled.div`
  .active {
    padding-bottom: 0.7rem;
    position: fixed;
    top: 0;
    z-index: 1000;
    width: 100%;
    background-color: #132639;
    box-shadow: 2px 3px 12px rgb(190, 209, 228);
    transition: 0.5s;
  }
  header {
    .container {
      padding-top: 20px;
      display: flex;
      justify-content: space-between;
    }
  }
  .logo {
    margin-top: -5px;
    height: 90px;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .navlink {
    .nav-links-mobile {
      display: flex;
    }
    ul li {
      margin-left: 30px;
      margin-top: -30px;
      a {
        transition: 0.5s;
        font-size: 25px;
        font-weight: 120%;
        letter-spacing: 1px;
        color: white;
        &:hover {
          color: #e93494;
        }
      }
    }
    button {
      margin-top: 10px;
      visibility: hidden;
    }
  }
  .f_flex {
    display: flex;
  }

  @media (max-width: 768px) {
    ul {
      padding-top: 30px;
      li {
        width: 100%;
        transition: 0.5s;
        text-transform: uppercase;
        line-height: 70px;

        a {
          font-size: 20px !important;
        }
      }
    }
    .nav-links-mobile {
      position: absolute;
      display: block !important;
      list-style: none;
      box-shadow: 0 50px 100px -20px rgb(43, 34, 34),
        0 30px 60px -30px rgb(43, 34, 34);
      left: 0;
      top: 0;
      margin-top: 0;
      transition: all 0.5s ease-in-out;
      width: 50%;
      height: 100vh;
      background-color: #132639;
      z-index: 888;
    }
    .link {
      display: none;
    }
    .open-btn {
      right: 5%;
      margin-right: 30px;
    }
    .close-btn {
      right: 50%;
    }
    button {
      visibility: visible !important;
      position: absolute;
      right: 5%;
      padding: 8px 10px;
      border-radius: 30px;
      transition: 0.5s all ease;
      background-color: #2a99b4;
      z-index: 1100;
      box-shadow: 2px 3px 8px rgb(43, 34, 34);
      cursor: pointer;
      color: whitesmoke;
      &:hover {
        background-color: rgb(223, 132, 155);
        box-shadow: 6px 6px 8px rgb(43, 34, 34);
      }
      .close,
      .open {
        display: block !important;
        z-index: 999;
        font-size: 20px;
      }
    }
  }
`;
