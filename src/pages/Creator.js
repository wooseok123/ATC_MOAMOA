import React, { useEffect, useRef } from "react";
import ag from "../imgs/creator/aigyeong.svg";
import gy from "../imgs/creator/gwonyoung.svg";
import jh from "../imgs/creator/jihyeon.svg";
import ws from "../imgs/creator/wooseok.svg";
import { CreatorContainer, SectionMainTitle } from "../styledComponents";
import { slideUp } from "../utils/slide";

const Creator = () => {
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
    <CreatorContainer>
      <SectionMainTitle
        id="title"
        ref={(el) => (slideEffects.current[0] = el)}
        style={{ textAlign: "start", padding: "4px" }}
      >
        제작자들의 방
      </SectionMainTitle>
      <div style={{ width: "100%", marginTop: "180px" }}>
        <div
          style={{
            position: "relative",
            height: "180px",
            width: "100%",
          }}
        >
          <img
            style={{ position: "absolute", left: "40px", top: "40px" }}
            src={gy}
          ></img>
        </div>
        <div
          style={{
            position: "relative",
            height: "180px",
            width: "100%",
          }}
        >
          <img
            style={{ position: "absolute", right: "0px", top: "-10px" }}
            src={jh}
          ></img>
        </div>
        <div
          style={{
            position: "relative",
            height: "180px",
            width: "100%",
          }}
        >
          <img
            style={{ position: "absolute", left: "10px", top: "-80px" }}
            src={ag}
          ></img>
        </div>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100px",
          }}
        >
          <img
            style={{ position: "absolute", right: "10px", top: "-150px" }}
            src={ws}
          ></img>
        </div>
      </div>
    </CreatorContainer>
  );
};

export default Creator;
