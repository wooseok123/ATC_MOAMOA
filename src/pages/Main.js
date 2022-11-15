import React from "react";
import MainBack1 from "../imgs/MainBack1.png";
import MainBack2 from "../imgs/MainBack2.png";
import MainFront1 from "../imgs/MainFront1.png";
import MainFront2 from "../imgs/MainFront2.png";
import MainCloud1 from "../imgs/MainCloud1.png";
import MainCloud2 from "../imgs/MainCloud2.png";
import walkingBoots from "../imgs/blackBoots_walking.gif";
import { Main1Cloud, Main2Cloud } from "../styledComponents";

import MainBgImg from "../components/MainBgImg";

const Main = () => {
  return (
    <div className="Main__Wrapper">
      <div className="MainCloud__Wrapper">
        <Main1Cloud src={MainCloud1}></Main1Cloud>
        <Main2Cloud src={MainCloud2}></Main2Cloud>
      </div>
      <div className="MainBg__Wrapper">
        <MainBgImg src={MainBack1} />
        <MainBgImg src={MainBack2} />
        <MainBgImg src={MainFront1} />
        <MainBgImg src={MainFront2} />
        <img style={{ width: "100px", zIndex: 6 }} src={walkingBoots}></img>
        <div
          style={{
            zIndex: "5",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "100px",
          }}
        >
          Press To Start
        </div>
      </div>
    </div>
  );
};

export default Main;
