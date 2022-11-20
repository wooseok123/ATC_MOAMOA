import React, { useEffect, useRef, useState } from "react";
import BlackBoots from "../imgs/BlackBoots.svg";
import Drdr from "../imgs/Dr.dr.svg";
import Meow from "../imgs/Meow.svg";
import Azae from "../imgs/Azae.svg";
import cryingKid from "../imgs/Crying_kid.svg";
import Gurumi from "../imgs/Gurumi.svg";
import blackDesc from "../imgs/blackboots_desc.png";
import DrdrDesc from "../imgs/Drdr_desc.png";
import { SectionMainTitle, CharacterContainer } from "../styledComponents";
import { slideUp } from "../utils/slide";
import CharSubLogo from "../imgs/Char_Subs.png";

const Characters = () => {
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
  console.log(slideEffects);

  return (
    <CharacterContainer>
      <SectionMainTitle ref={(el) => (slideEffects.current[5] = el)} id="title">
        Characters
      </SectionMainTitle>
      <div className="character__main">
        <div>
          <div style={{ width: "100%", display: "flex", position: "relative" }}>
            <img
              id="left"
              className="character"
              style={{ width: "50%" }}
              src={BlackBoots}
              ref={(el) => (slideEffects.current[0] = el)}
            ></img>
            <div
              id="right"
              className="character"
              ref={(el) => (slideEffects.current[1] = el)}
              style={{ width: "50%" }}
            >
              <img style={{ width: "100%" }} src={blackDesc}></img>
              <p
                style={{
                  position: "absolute",
                  bottom: "3px",
                  right: "-28px",
                  transform: "rotate(-15deg)",
                  fontSize: "30px",
                }}
              >
                Our Main Character!
              </p>
            </div>
          </div>
          <div style={{ width: "100%", display: "flex", position: "relative" }}>
            <div
              id="left"
              ref={(el) => (slideEffects.current[2] = el)}
              className="character"
              style={{ width: "50%" }}
            >
              <img style={{ width: "100%" }} src={DrdrDesc}></img>
              <p
                style={{
                  position: "absolute",
                  bottom: "5px",
                  left: "-20px",
                  transform: "rotate(20deg)",
                  fontSize: "30px",
                  width: "100%",
                }}
              >
                Our Genius Inventor!
              </p>
            </div>
            <img
              ref={(el) => (slideEffects.current[3] = el)}
              id="right"
              className="character"
              style={{ width: "50%" }}
              src={Drdr}
            ></img>
          </div>
        </div>
      </div>
      <div className="character__sub">
        <div
          id="subs"
          className="sub_characters"
          ref={(el) => (slideEffects.current[4] = el)}
        >
          <div style={{ width: "100%" }}>
            <img src={CharSubLogo} style={{ width: "100%" }}></img>
          </div>

          <div className="sub_chars">
            <img src={Azae} id="Azae"></img>
            <div
              style={{
                backgroundColor: "#FF5B5B",
                width: "100%",
                height: "40px",
                color: "white",
              }}
            >
              AZAE
            </div>
          </div>
          <div
            className="sub_chars"
            style={{ backgroundColor: "#FFF1A8", height: "320px" }}
          >
            <img src={Meow} id="Meow"></img>
            <div
              style={{
                backgroundColor: "#FF8731",
                width: "100%",
                height: "40px",
                color: "white",
              }}
            >
              MEOW
            </div>
          </div>
          <div
            className="sub_chars"
            style={{
              backgroundColor: "#B2EECA",
              height: "320px",
              marginTop: "22px",
            }}
          >
            <img src={Gurumi} id="Gurumi"></img>
            <div
              style={{
                backgroundColor: "#3FBE81",
                width: "100%",
                height: "40px",
                color: "white",
              }}
            >
              GURUMI
            </div>
          </div>
          <div
            className="sub_chars"
            style={{
              backgroundColor: "#A1E3FF",
              height: "320px",
              marginTop: "22px",
            }}
          >
            <img src={cryingKid} id="cryingKid"></img>
            <div
              style={{
                backgroundColor: "#2694D2",
                width: "100%",
                height: "40px",
                color: "white",
                fontSize: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              CRYING KID
            </div>
          </div>
        </div>
      </div>
    </CharacterContainer>
  );
};

export default Characters;
