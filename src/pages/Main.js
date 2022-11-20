import React, { useRef } from "react";
import MainBack1 from "../imgs/MainBack1.png";
import MainBack2 from "../imgs/MainBack2.png";
import MainFront1 from "../imgs/MainFront1.png";
import MainFront2 from "../imgs/MainFront2.png";
import MainCloud1 from "../imgs/MainCloud1.png";
import MainCloud2 from "../imgs/MainCloud2.png";
import logo from "../imgs/logo.png";
import walkingBoots from "../imgs/blackBoots_walking.gif";
import { Main1Cloud, Main2Cloud, MainLogoFly } from "../styledComponents";
import ScrollToButton from "../components/ScrollToBtn";
import MainBgImg from "../components/MainBgImg";

const Main = ({ scrollIntro }) => {
  return (
    <div className="Main__Wrapper">
      <div style={{ zIndex: 10, position: "absolute", top: "50px" }}>
        <img src={logo} style={{ width: "100%" }}></img>
      </div>
      <div className="MainCloud__Wrapper">
        <Main1Cloud src={MainCloud1}></Main1Cloud>
        <Main2Cloud src={MainCloud2}></Main2Cloud>
      </div>
      <div className="MainBg__Wrapper">
        <MainBgImg src={MainBack1} />
        <MainBgImg src={MainBack2} />
        <MainBgImg src={MainFront1} />
        <MainBgImg src={MainFront2} />
        <img style={{ width: "180px", zIndex: 6 }} src={walkingBoots}></img>
        <MainLogoFly onClick={scrollIntro}>Press To Start</MainLogoFly>
      </div>
    </div>
  );
};

export default Main;
