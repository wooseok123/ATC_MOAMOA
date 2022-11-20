import styled from "styled-components";
import IntroBg from "./imgs/IntroBg.png";
import CharacterBg from "./imgs/CharacterBg.png";
import creatorBg from "./imgs/creator/creator_bg.png";
export const MainBgEachImg = styled.div`
  z-index: 4;
  position: absolute;
  width: 100%;
  height: 600px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;

export const Main1Cloud = styled.img`
  width: 250px;
  position: absolute;
  top: -20px;
  z-index: 2;
  opacity: 0.8;
  animation: animateCloud2 11s infinite;
  animation-timing-function: linear;
  @keyframes animateCloud2 {
    0% {
      left: -800px;
    }
    100% {
      left: 130%;
    }
  }
`;

export const Main2Cloud = styled.img`
  width: 400px;
  position: absolute;
  top: -30px;
  z-index: 2;
  opacity: 0.8;
  animation: animateCloud2 15s infinite;
  animation-timing-function: linear;
  @keyframes animateCloud2 {
    0% {
      left: -600px;
    }
    100% {
      left: 130%;
    }
  }
`;

export const MainLogoFly = styled.div`
  font-weight: 400;
  font-size: 32px;
  z-index: 5;
  background-color: rgba(255, 255, 255, 70%);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 100px;
  animation: upAndDown 1s infinite;
  animation-timing-function: ease-in-out;
  margin-top: 20px;
  cursor: pointer;
  @keyframes upAndDown {
    0% {
      transform: translateY(-5px);
    }
    50% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-5px);
    }
  }
`;

export const CharacterContainer = styled.div`
  width: 100%;
  background-image: url(${CharacterBg});
  background-repeat: repeat;
  background-size: cover;
  overflow: hidden;
`;

export const CreatorContainer = styled.div`
  width: 100%;
  background-image: url(${creatorBg});
  background-repeat: repeat;
  background-size: cover;
  overflow: hidden;
`;

export const SectionMainTitle = styled.h2`
  opacity: 0%;
  padding: 5px;
  text-align: start;
  font-weight: 400;
  font-size: 58px;
  margin-bottom: 14px;
  color: ${(prop) => (prop.color == "white" ? "white" : "black")};
`;

export const IntroductionContainer = styled.div`
  width: 100%;

  background-image: url(${IntroBg});
  background-repeat: cover no-repeat;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IntroductionEartch = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
`;

export const ItemDescTitle = styled.div``;
