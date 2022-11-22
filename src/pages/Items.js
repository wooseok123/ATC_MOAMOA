import React, { useEffect, useRef, useState } from "react";
import { CharacterContainer, SectionMainTitle } from "../styledComponents";
import fac from "../imgs/Items/fac.svg";
import vaccum from "../imgs/Items/Vaccum.svg";
import jet from "../imgs/Items/Water_jet.svg";
import umbrella from "../imgs/Items/umbrella.svg";
import firework from "../imgs/Items/fireworks.svg";
import screw from "../imgs/Items/screw.svg";
import battery from "../imgs/Items/battery.svg";
import watering from "../imgs/Items/watering.svg";
import software from "../imgs/Items/software.svg";
import { descArr } from "../data";
import { slideUp } from "../utils/slide";
const Items = () => {
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

  const [descIdx, setDescName] = useState(0);
  const changeDesc = (e) => {
    const itemName = e.target.parentNode.id;

    setDescName(itemName);
  };
  return (
    <CharacterContainer style={{ position: "relative" }}>
      <div style={{ position: "relative" }}>
        <SectionMainTitle
          id="title"
          ref={(el) => (slideEffects.current[0] = el)}
          style={{ position: "absolute", top: "10px", left: "10px" }}
        >
          Items
        </SectionMainTitle>
        <img src={fac}></img>
        <div
          style={{
            fontSize: "40px",
            color: "white",
            position: "absolute",
            bottom: "0px",
            backgroundColor: "#33575F",
            width: "100%",
            textAlign: "start",
          }}
        >
          <p style={{ fontFamily: "Black Han Sans", marginLeft: "20px" }}>
            MAIN ITEMS
          </p>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "-65px",
            left: "9px",
            display: "flex",
            width: "360px",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "70px",
              height: "70px",
              backgroundColor: `${descIdx == 0 ? "#FFC8C8" : "white"}`,
              border: `${descIdx == 0 ? "4px solid #FF5B5B" : "none"}`,
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            id={0}
            onClick={changeDesc}
          >
            <img style={{ width: "90%" }} src={vaccum}></img>
          </div>
          <div
            style={{
              width: "70px",
              height: "70px",
              backgroundColor: `${descIdx == 1 ? "#FFC8C8" : "white"}`,
              border: `${descIdx == 1 ? "4px solid #FF5B5B" : "none"}`,
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            id={1}
            onClick={changeDesc}
          >
            <img style={{ width: "90%" }} src={jet}></img>
          </div>
          <div
            style={{
              width: "70px",
              height: "70px",
              backgroundColor: `${descIdx == 2 ? "#FFC8C8" : "white"}`,
              border: `${descIdx == 2 ? "4px solid #FF5B5B" : "none"}`,
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            id={2}
            onClick={changeDesc}
          >
            <img style={{ width: "90%" }} src={umbrella}></img>
          </div>
          <div
            style={{
              width: "70px",
              height: "70px",
              backgroundColor: `${descIdx == 3 ? "#FFC8C8" : "white"}`,
              border: `${descIdx == 3 ? "4px solid #FF5B5B" : "none"}`,
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            id={3}
            onClick={changeDesc}
          >
            <img style={{ width: "90%" }} src={firework}></img>
          </div>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <div
          style={{
            margin: "0 auto",
            width: "360px",
            height: "120px",
            marginTop: "90px",
            borderRadius: "15px",
            backgroundColor: "white",
            border: "1px solid #D9D9D9",
          }}
        >
          <div
            style={{
              height: "38px",
              backgroundColor: "#A1E3FF",
              borderRadius: "15px 15px 0px 0px",
              fontSize: "24px",
              backgroundColor: `${descArr[descIdx].bgColor}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontFamily: "Black Han Sans",
                color: `${descArr[descIdx].color}`,
              }}
            >
              {descArr[descIdx].title}
            </p>
          </div>
          <div style={{ textAlign: "start", padding: "11px" }}>
            {descArr[descIdx].content.map((line) => {
              return (
                <p
                  style={{
                    fontFamily: "NanumSquareNeo-Variable",
                    fontSize: "16px",
                  }}
                >
                  {line}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div style={{ position: "relative", paddingTop: "80px" }}>
        <div
          style={{
            fontSize: "40px",
            color: "white",
            position: "absolute",
            bottom: "0px",
            backgroundColor: "#33575F",
            width: "100%",
            textAlign: "start",
          }}
        >
          <p style={{ fontFamily: "Black Han Sans", marginLeft: "20px" }}>
            MAIN ITEMS
          </p>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "-65px",
            left: "8px",
            display: "flex",
            width: "360px",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "70px",
              height: "70px",
              backgroundColor: "white",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img style={{ width: "90%" }} src={screw}></img>
          </div>
          <div
            style={{
              width: "70px",
              height: "70px",
              backgroundColor: "white",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",

              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img style={{ width: "90%" }} src={battery}></img>
          </div>
          <div
            style={{
              width: "70px",
              height: "70px",
              backgroundColor: "white",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img style={{ width: "90%" }} src={watering}></img>
          </div>
          <div
            style={{
              width: "70px",
              height: "70px",
              backgroundColor: "white",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img style={{ width: "90%" }} src={software}></img>
          </div>
        </div>
      </div>
      <div style={{ position: "relative", paddingBottom: "40px" }}>
        <div
          style={{
            margin: "0 auto",
            width: "360px",
            height: "120px",
            marginTop: "90px",
            borderRadius: "15px",
            backgroundColor: "black",
            border: "1px solid #D9D9D9",
            textAlign: "center",
          }}
        >
          <div
            style={{
              textAlign: "start",
              padding: "11px",
              fontSize: "24px",
              color: "white",
              textAlign: "center",
              transform: "rotate(-3deg)",
            }}
          >
            <p style={{ fontFamily: "Black Han Sans" }}>
              박사가 잃어버린 부품들!
            </p>
            <p style={{ fontFamily: "Black Han Sans" }}>
              숨겨진 부품을 다 찾으면
            </p>
            <p style={{ fontFamily: "Black Han Sans" }}>
              좋은 일이 생길지도...?!
            </p>
          </div>
        </div>
      </div>
    </CharacterContainer>
  );
};

export default Items;
