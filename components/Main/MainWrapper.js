import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95vw;
  height: 90vh;

  /* theme */
  &.night {
    background: #202020;
  }

  /* shadow */
  border-radius: 50px;
  box-shadow: 0px 7px 29px 0px rgba(100, 100, 111, 0.4);
  background: #f3f3f3;

  /* badge */
  .location {
    border-radius: 30px;
    width: 50%;
    padding: 5px 0;
    background-color: #17171750;
    backdrop-filter: blur(5px);
    svg {
      font-size: 20px;
    }
  }

  /* swiper */
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    background: transparent;
    padding: 20px 0 !important;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  /* swiper */
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
        width: 100%;
        height: 100%;
        object-fit: cover;
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
    }
  }
  .right {
    padding: 3%;
    background: #f3f3f3;
    width: 40%;
    height: 100%;
    border-radius: 40px;
    color: #000000;

    /* theme */
    &.night {
      background-color: #202020 !important;
      color: #fff;
    }
    /* theme */

    /* tabs */
    .tabs {
      list-style: none;
      width: 80%;
      height: 45px;
      border-radius: 50px;
      padding: 0;
      display: flex;
      justify-content: space-evenly;
      background: #333;
      color: #ccc;
      position: relative;

      span {
        background: #007aff;
        z-index: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        border-radius: 50px;
        box-shadow: 0px 7px 29px 0px rgba(100, 100, 111, 0.4);

        transition: 0.3s ease-in-out;
      }
      .tab {
        cursor: pointer;
        text-align: center;
        z-index: 2;
        width: 50%;
        padding: 10px;
        border-radius: 50px;
        &.active {
          color: #fff;
          font-weight: bold;
          transition: 0.3s ease-in-out;
        }
      }
    }
    /* tabs */

    .weather-card {
      margin: auto;
      width: 80%;
      border-radius: 20px;
      padding: 30px 20px;
      background: linear-gradient(145deg, #e6e6e6, #ffffff);
      box-shadow: 11px 11px 22px #d1d1d1, -11px -11px 22px #ffffff;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      &.night {
        color: #fff;
        background: linear-gradient(145deg, #222222, #1d1d1d);
        box-shadow: 5px 5px 14px #0d0d0d, -5px -5px 14px #333333;
        span {
          color: #fff !important;
        }
      }
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
        img {
          width: 100%;
        }
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
  @media (max-width: 880px) {
    .left {
      width: 100% !important;
      height: 50vh;
      .input-wrapper {
        padding: 10% 0 !important;
      }
    }
    .right {
      width: 100% !important;
    }
  }
`;
export default MainWrapper;
