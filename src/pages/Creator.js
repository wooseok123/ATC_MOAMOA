import React, { useEffect, useRef, useState } from "react";
import ag from "../imgs/creator/aigyeong.svg";
import gy from "../imgs/creator/gwonyoung.svg";
import jh from "../imgs/creator/jihyeon.svg";
import ws from "../imgs/creator/wooseok.svg";
import {
  CreatorContainer,
  SectionMainTitle,
  BlackBg,
} from "../styledComponents";
import { slideUp } from "../utils/slide";
import malRight from "../imgs/creator/malPoong_right.svg";
import malLeft from "../imgs/creator/malPoong_left.svg";

const Creator = () => {
  const slideEffects = useRef([]);

  const [modalUp, setModalUp] = useState("close");

  const handleModalTarget = (e) => {
    const modalTarget = e.target.id;
    setModalUp(modalTarget);
  };
  console.log(modalUp);
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
    <CreatorContainer style={{ position: "relative" }}>
      {modalUp === "close" ? "" : <BlackBg></BlackBg>}

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
            style={{
              position: "absolute",
              left: "40px",
              top: "40px",
              zIndex: `${modalUp == "gy" ? 5 : 3}`,
              cursor: "pointer",
            }}
            src={gy}
            id="gy"
            onClick={handleModalTarget}
          ></img>
          {modalUp == "gy" ? (
            <>
              <img
                src={malLeft}
                style={{
                  position: "absolute",
                  zIndex: 5,
                  right: "50px",
                  top: "-90px",
                  width: "200px",
                }}
              ></img>
              <div
                style={{
                  position: "absolute",
                  zIndex: 5,
                  right: "50px",
                  top: "-40px",
                  width: "200px",
                }}
              >
                앙뇽앙뇽
              </div>
              <div
                style={{
                  position: "absolute",
                  fontSize: "35px",
                  color: "black",
                  right: "55px",
                  top: "-90px",
                  zIndex: 5,
                  cursor: "pointer",
                }}
                id="close"
                onClick={handleModalTarget}
              >
                x
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        <div
          style={{
            position: "relative",
            height: "180px",
            width: "100%",
          }}
        >
          <img
            style={{
              zIndex: `${modalUp == "jh" ? 5 : 3}`,
              position: "absolute",
              right: "0px",
              top: "-10px",
              cursor: "pointer",
            }}
            id="jh"
            src={jh}
            onClick={handleModalTarget}
          ></img>
          {modalUp == "jh" ? (
            <>
              <img
                src={malRight}
                style={{
                  position: "absolute",
                  zIndex: 5,
                  left: "70px",
                  top: "-130px",
                  width: "200px",
                }}
              ></img>
              <div
                style={{
                  position: "absolute",
                  zIndex: 5,
                  left: "73gggpx",
                  top: "-78px",
                  width: "200px",
                }}
              >
                이것저것 그렸습니다.
              </div>
              <div
                style={{
                  position: "absolute",
                  fontSize: "35px",
                  color: "black",
                  left: "80px",
                  top: "-130px",
                  zIndex: 5,
                  cursor: "pointer",
                }}
                id="close"
                onClick={handleModalTarget}
              >
                x
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        <div
          style={{
            position: "relative",
            height: "180px",
            width: "100%",
          }}
        >
          <img
            style={{
              zIndex: `${modalUp == "ag" ? 5 : 3}`,
              position: "absolute",
              left: "10px",
              top: "-80px",
              cursor: "pointer",
            }}
            id="ag"
            src={ag}
            onClick={handleModalTarget}
          ></img>
          {modalUp == "ag" ? (
            <>
              <img
                src={malLeft}
                style={{
                  position: "absolute",
                  zIndex: 5,
                  right: "65px",
                  top: "-190px",
                  width: "200px",
                }}
              ></img>
              <div
                style={{
                  position: "absolute",
                  zIndex: 5,
                  right: "65px",
                  top: "-153px",
                  width: "200px",
                }}
              >
                <p>모아모아</p>
                <p>&nbsp;픽셀로</p>
                <p>모아모아</p>
              </div>
              <div
                style={{
                  position: "absolute",
                  fontSize: "35px",
                  color: "black",
                  right: "75px",
                  top: "-190px",
                  zIndex: 5,
                  cursor: "pointer",
                }}
                id="close"
                onClick={handleModalTarget}
              >
                x
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100px",
          }}
        >
          <img
            style={{
              zIndex: `${modalUp == "ws" ? 5 : 3}`,
              position: "absolute",
              right: "10px",
              top: "-150px",
              cursor: "pointer",
            }}
            id="ws"
            src={ws}
            onClick={handleModalTarget}
          ></img>
          {modalUp == "ws" ? (
            <>
              <img
                src={malRight}
                style={{
                  position: "absolute",
                  zIndex: 5,
                  left: "65px",
                  top: "-250px",
                  width: "200px",
                }}
              ></img>
              <div
                style={{
                  position: "absolute",
                  zIndex: 5,
                  left: "75px",
                  top: "-200px",
                  width: "200px",
                  textAlign: "start",
                  padding: "5px",
                }}
              >
                솔의 눈 안좋아합니다.
              </div>
              <div
                style={{
                  position: "absolute",
                  fontSize: "35px",
                  color: "black",
                  left: "75px",
                  top: "-250px",
                  zIndex: 5,
                  cursor: "pointer",
                }}
                id="close"
                onClick={handleModalTarget}
              >
                x
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </CreatorContainer>
  );
};

export default Creator;
