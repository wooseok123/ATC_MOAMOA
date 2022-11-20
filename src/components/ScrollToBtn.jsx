// ScrollToButton.jsx

import React from "react";
import { Main1Cloud, Main2Cloud, MainLogoFly } from "../styledComponents";
import { scrollTo } from "../utils/scrollTo.js";

const ScrollToButton = ({ toId, toRef, duration, children }) => {
  const handleClick = () => scrollTo({ id: toId, ref: toRef, duration });

  return <MainLogoFly onClick={handleClick}>{children}</MainLogoFly>;
};

export default ScrollToButton;
