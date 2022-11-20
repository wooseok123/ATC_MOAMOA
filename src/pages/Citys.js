import React, { useEffect, useRef } from "react";
import { IntroductionContainer, SectionMainTitle } from "../styledComponents";
import building1 from "../imgs/Citys/건물 1.svg";
import building2 from "../imgs/Citys/건물 2.svg";
import building3 from "../imgs/Citys/건물 3.svg";
import building5 from "../imgs/Citys/건물 5.svg";
import building6 from "../imgs/Citys/건물 6.svg";
import building7 from "../imgs/Citys/건물 7.svg";
import building8 from "../imgs/Citys/건물 8.svg";
import building9 from "../imgs/Citys/건물 9.svg";
import building10 from "../imgs/Citys/건물 10.svg";
import building11 from "../imgs/Citys/건물 11.svg";
import building12 from "../imgs/Citys/건물 12.svg";
import building13 from "../imgs/Citys/건물 13.svg";
import CityRoad from "../imgs/Citys/CityRoad.svg";
import { slideUp } from "../utils/slide";
import { MainLogoFly } from "../styledComponents";

const Citys = () => {
  const slideEffects = useRef([]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      slideUp(slideEffects);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        slideUp(slideEffects);
      });
    };
  }, []);

  return (
    <IntroductionContainer style={{ width: "100%", position: "relative" }}>
      <SectionMainTitle
        style={{ color: "white" }}
        ref={(el) => (slideEffects.current[12] = el)}
        id="title"
      >
        Welcome To Our Citys
      </SectionMainTitle>
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ zIndex: 1 }}>
          <img src={CityRoad}></img>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            zIndex: 2,
          }}
        >
          <div
            ref={(el) => (slideEffects.current[0] = el)}
            id="left"
            className="building"
          >
            <img src={building1}></img>
          </div>
          <div
            style={{ position: "relative", height: "200px" }}
            ref={(el) => (slideEffects.current[1] = el)}
            className="building"
            id="left"
          >
            <img
              src={building2}
              style={{ position: "absolute", top: "-30px" }}
            ></img>
          </div>
          <div
            style={{ position: "relative", height: "200px" }}
            ref={(el) => (slideEffects.current[2] = el)}
            className="building"
            id="left"
          >
            <img
              src={building3}
              style={{ position: "absolute", top: "16px" }}
            ></img>
          </div>
          <div
            style={{ position: "relative", height: "280px" }}
            ref={(el) => (slideEffects.current[3] = el)}
            className="building"
            id="left"
          >
            <img
              src={building5}
              style={{ position: "absolute", top: "30px" }}
            ></img>
          </div>
          <div
            style={{ height: "220px" }}
            ref={(el) => (slideEffects.current[4] = el)}
            className="building"
            id="left"
          >
            <img src={building6}></img>
          </div>
          <div
            style={{ height: "280px" }}
            ref={(el) => (slideEffects.current[5] = el)}
            className="building"
            id="left"
          >
            <img src={building7}></img>
          </div>
          <div
            style={{ height: "320px" }}
            ref={(el) => (slideEffects.current[6] = el)}
            className="building"
            id="left"
          >
            <img src={building8}></img>
          </div>
          <div
            style={{ height: "280px" }}
            ref={(el) => (slideEffects.current[7] = el)}
            className="building"
            id="left"
          >
            <img src={building9}></img>
          </div>
          <div
            style={{ height: "290px" }}
            ref={(el) => (slideEffects.current[8] = el)}
            className="building"
            id="left"
          >
            <img src={building10}></img>
          </div>
          <div
            style={{ height: "250px" }}
            ref={(el) => (slideEffects.current[9] = el)}
            className="building"
            id="left"
          >
            <img src={building11}></img>
          </div>
          <div
            ref={(el) => (slideEffects.current[10] = el)}
            id="left"
            className="building"
          >
            <img src={building12}></img>
          </div>
          <div
            style={{ position: "relative", zIndex: 5 }}
            ref={(el) => (slideEffects.current[11] = el)}
            className="building"
            id="left"
          >
            <img
              src={building13}
              style={{ position: "absolute", top: "-30px", left: "-60px" }}
              id="left"
            ></img>
          </div>
        </div>
      </div>
      <MainLogoFly
        style={{
          position: "absolute",
          bottom: "220px",
          fontSize: "64px",
          color: "white",
          zIndex: 3,
          backgroundColor: "transparent",
        }}
      >
        <p style={{ width: "200px" }}>What's Next?</p>
      </MainLogoFly>
    </IntroductionContainer>
  );
};

export default Citys;
