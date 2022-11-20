import React, { useEffect, useRef, useState } from "react";
import { CharacterContainer, SectionMainTitle } from "../styledComponents";
import Hwa1 from "../imgs/Cartoon/1hwa.svg";
import Hwa2 from "../imgs/Cartoon/2hwa.svg";
import Hwa3 from "../imgs/Cartoon/3hwa.svg";
import Hwa4 from "../imgs/Cartoon/4hwa.svg";
import cartoonBanner from "../imgs/Cartoon/cartoonBanner.svg";
import cartoonFooter from "../imgs/Cartoon/cartoonFooter.svg";
import { slideUp } from "../utils/slide";

const Cartoon = () => {
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

  const [modalIdx, setModalIdx] = useState(false);

  const changeIdx = (e) => {
    const targetIdx = e.target.alt;
    setModalIdx(targetIdx);
  };
  return (
    <CharacterContainer style={{ position: "relative" }}>
      <SectionMainTitle id="title" ref={(el) => (slideEffects.current[0] = el)}>
        Cartoons
      </SectionMainTitle>
      <div style={{ width: "100%", marginBottom: "60px", marginTop: "40px" }}>
        <img src={cartoonBanner} style={{ width: "100%" }}></img>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <div style={{ width: "40%" }} onClick={changeIdx}>
          <img style={{ width: "80%" }} src={Hwa1} alt={1}></img>
        </div>
        <div style={{ width: "40%" }} onClick={changeIdx}>
          <img style={{ width: "80%" }} src={Hwa2} alt={2}></img>
        </div>
        <div style={{ width: "40%" }} onClick={changeIdx}>
          <img style={{ width: "80%" }} src={Hwa3} alt={3}></img>
        </div>
        <div style={{ width: "40%" }} onClick={changeIdx}>
          <img style={{ width: "80%" }} src={Hwa4} alt={4}></img>
        </div>
      </div>
      <div style={{ marginTop: "100px" }}>
        <img style={{ width: "210px" }} src={cartoonFooter}></img>
      </div>
      {modalIdx ? (
        <div
          style={{
            zIndex: 100,
            position: "fixed",
            top: "0px",
            width: "380px",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <div
            style={{
              textAlign: "right",
            }}
          >
            <p
              onClick={changeIdx}
              alt={false}
              style={{
                cursor: "pointer",
                color: "white",
                fontSize: "40px",
                marginRight: "10px",
                marginTop: "10px",
              }}
            >
              X
            </p>
          </div>
          <div
            style={{
              width: "95%",
              margin: "0 auto",
              height: "80vh",
              position: "relative",
              overflow: "auto",
            }}
            className="scrollCartoon"
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={require(`../imgs/Cartoon/manhwa${modalIdx}.svg`)}></img>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </CharacterContainer>
  );
};

export default Cartoon;
