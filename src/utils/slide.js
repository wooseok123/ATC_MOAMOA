export const slideUp = (slideEffects) => {
  slideEffects.current.forEach((el) => {
    const currentEl = el.getBoundingClientRect();

    if (currentEl.top < 600) {
      if (el.id == "title") {
        el.classList.add("showLeft");
      }
      if (el.classList[1]) return;

      if (el.id == "left") {
        el.classList.add("showLeft");
      } else if (el.id == "right") {
        el.classList.add("showRight");
      } else if (el.id == "subs") {
        el.classList.add("showUp");
      } else if (el.id == "leftTilt") {
        el.classList.add("showLeftTilt");
      } else if (el.id == "rightTilt") {
        el.classList.add("showRightTilt");
      } else if (el.id == "fadeIn") {
        el.classList.add("fadeIn");
      }
    }
  });
};
