import styled from "styled-components";

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
  animation: animateCloud2 30s infinite;
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
  animation: animateCloud2 20s infinite;
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
