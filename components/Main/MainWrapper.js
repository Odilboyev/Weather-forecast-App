import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  width: 95vw;
  height: 90vh;

  /* shadow */
  border-radius: 50px;
  box-shadow: rgba(100, 100, 111, 0.4) 0px 7px 29px 0px;
  background: #f3f3f3;

  .left {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 60%;
    height: 100%;
    position: relative;
    border-radius: 40px;
    background: #f3f3f3;

    /* video */
    .background {
      border-radius: 40px;
      position: absolute;
      overflow: hidden;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      video {
        width: 140%;
        object-fit: contain;
      }
    }
    .content {
      border-radius: 40px;
      background: #00349420;
      padding: 5%;
      z-index: 5;
      height: 100%;
      width: 100%;

      .input-wrapper {
        height: 100%;
        padding: 20% 0;

        .input {
          padding: 10px 20px;
          background: #ffffff20;
          backdrop-filter: blur(10px);
          border-radius: 5px;
          input {
            color: #fff;

            background: transparent;
            border: none;
            outline: none;
          }
          button {
            color: #fff;

            border: none;
            outline: none;
            background: transparent;
            svg {
              font-size: 20px;
            }
          }
        }
      }

      h2 {
        text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.5);
      }
      .location {
        border-radius: 25px;
        width: 40%;
        padding: 5px 0;
        background-color: #17171750;
        backdrop-filter: blur(5px);
        svg {
          font-size: 20px;
        }
      }
    }
  }
  .right {
    padding: 5%;
    background: #f3f3f3;
    width: 40%;
    height: 100%;
    border-radius: 40px;
    color: #000000;

    .weather-card {
      width: 110%;
      border-radius: 20px;
      padding: 30px 20px;
      background: #fff;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      .card-left {
        width: 48%;
        text-align: center;
      }
      .line {
        width: 1%;
        height: 200px;
        border-radius: 20%;
        background: #333;
      }
      .card-right {
        padding-left: 20px;
        text-align: left;
        width: 48%;
        p {
          margin-bottom: 0.5rem;
          color: #353f47;

          span {
            color: #000;
            font-weight: bold;
          }
        }
      }
    }
  }
`;
export default MainWrapper;
