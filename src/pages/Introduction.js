import React, { useEffect, useRef, useState } from "react";
import {
  SectionMainTitle,
  IntroductionContainer,
  IntroductionEarth,
} from "../styledComponents";
import introEarth from "../imgs/intro_earth.svg";
import { slideUp } from "../utils/slide";
import { TypeAnimation } from "react-type-animation";

const Introduction = ({ props }) => {
  const slideItems = useRef([]);
  const [isIntro, setIsIntro] = useState(false);
  const detectFirst = (vab) => {
    if (vab.current.getBoundingClientRect().top < 100) {
      setIsIntro(true);
    } else {
      setIsIntro(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      slideUp(slideItems);
      detectFirst(props);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        slideUp(slideItems);
        detectFirst(props);
      });
    };
  }, []);

  return (
    <IntroductionContainer ref={props}>
      <SectionMainTitle
        color={"white"}
        ref={(el) => (slideItems.current[4] = el)}
        id="title"
        style={{ fontSize: "51px" }}
      >
        Post-Plant-Era
      </SectionMainTitle>
      <IntroductionEarth src={introEarth}></IntroductionEarth>

      <div
        style={{
          width: "110%",
          height: "20px",
          backgroundColor: "#A38D16",
          transform: "rotate(8deg) translateY(20px)",
          marginTop: "25px",
          opacity: "0%",
        }}
        ref={(el) => (slideItems.current[1] = el)}
        id="rightTilt"
      ></div>
      <div
        style={{
          width: "105%",
          height: "28px",
          backgroundColor: "#FFDC23",
          transform: "rotate(-8deg)",
          fontSize: "37px",
          letterSpacing: "-4px",
          wordSpacing: "0px",
          lineHeight: "35px",
          textAlign: "center",
          wordBreak: "break-all",
          display: "block",

          opacity: "0%",
        }}
        id="leftTilt"
        ref={(el) => (slideItems.current[2] = el)}
      >
        <p style={{ fontFamily: "Black Han Sans" }}>
          포스트 플랜트 시대란 무엇인가?
        </p>
      </div>
      <div
        id="fadeIn"
        ref={(el) => (slideItems.current[3] = el)}
        style={{
          margin: "50px 0px 30px 0px",
          width: "360px",
          fontfamily: "font-family: 'Jua'",
          color: "white",
          fontSize: "24px",
          border: "2px solid white",
          borderRadius: "10px",
          padding: "15px",
          height: "450px",
          wordBreak: "break-all",
          opacity: "0%",
        }}
      >
        MOAMOA PLANT의 배경이 되는 시대인 포스트 플랜트 시대는 환경 오염으로
        인해 식물이 사라져버린 시대를 말합니다. 환경오염과 기후위기에 대한
        경고는 지속적으로 나왔지만, 결국 인류는 지구를 오염시켰고, 그 결과
        식물이 사라진 시대가 등장합니다. 환경 보호보다는 기술에 집중한 사람들은
        식물을 대체한 ‘인공식물’을 만들어냈고, 인공식물의 등장 이후 ‘진짜’식물에
        관한 사람들의 관심은 급속도로 줄어듭니다. 그렇게 자연 없이 모두 인공물로
        구성된 세계가 탄생했습니다.
      </div>
    </IntroductionContainer>
  );
};

export default Introduction;
