import React, { useEffect, useRef } from "react";
import BlackBoots from "../imgs/BlackBoots.png";
import Drdr from "../imgs/Dr.dr.png";
import Meow from "../imgs/Meow.png";
import Azae from "../imgs/Azae.png";
import cryingKid from "../imgs/Crying_kid.png";
import Gurumi from "../imgs/Gurumi.png";
import blackDesc from "../imgs/blackboots_desc.png";
import DrdrDesc from "../imgs/Drdr_desc.png";

const Characters = () => {
  const slideEffects = useRef([]);

  useEffect(() => {
    window.addEventListener("scroll", slideUp);
    return () => {
      window.removeEventListener("scroll", slideUp);
    };
  }, []);

  const slideUp = () => {
    slideEffects.current.forEach((el) => {
      const currentEl = el.getBoundingClientRect();
      if (currentEl.top < 700) {
        if (el.classList[1]) return;

        if (el.id == "blackboots") {
          el.classList.add("showLeft");
        } else if (el.id == "Drdr") {
          el.classList.add("showRight");
        } else if (el.id == "subs") {
          el.classList.add("showUp");
        }
      }
    });
  };

  return (
    <div>
      <h2 style={{ fontSize: "64px", marginBottom: "40px" }}>Characters</h2>
      <div className="character__main">
        <div
          ref={(el) => (slideEffects.current[0] = el)}
          id="blackboots"
          className="character"
        >
          <img src={BlackBoots}></img>
          <div>
            <img src={blackDesc}></img>
          </div>
          <p
            style={{
              position: "absolute",
              bottom: "20px",
              right: "0px",
              transform: "rotate(-15deg)",
              fontSize: "30px",
            }}
          >
            Our Main Character!
          </p>
        </div>
        <div
          className="character"
          id="Drdr"
          ref={(el) => (slideEffects.current[1] = el)}
        >
          <div>
            <img src={DrdrDesc}></img>
          </div>
          <img src={Drdr}></img>
          <p
            style={{
              position: "absolute",
              bottom: "20px",
              left: "0px",
              transform: "rotate(20deg)",
              fontSize: "30px",
            }}
          >
            Our Genius Inventor!
          </p>
        </div>
      </div>
      <div className="character__sub">
        <div
          id="subs"
          className="sub_characters"
          ref={(el) => (slideEffects.current[2] = el)}
        >
          <img src={Azae} id="Azae"></img>
          <img src={Meow} id="Meow"></img>
          <img src={Gurumi} id="Gurumi"></img>
          <img src={cryingKid} id="cryingKid"></img>
        </div>
      </div>
    </div>
  );
};

export default Characters;
