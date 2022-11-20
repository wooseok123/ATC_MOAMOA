import "./App.css";
import Main from "./pages/Main";
import Introduction from "./pages/Introduction";
import Characters from "./pages/Characters";
import Citys from "./pages/Citys";
import Items from "./pages/Items";
import Creator from "./pages/Creator";
import Cartoon from "./pages/Cartoon";
import { useRef } from "react";
import { scrollTo } from "./utils/scrollTo";

function App() {
  const introRef = useRef();
  const handleClick = () => {
    scrollTo({ id: "intro", ref: introRef, duration: 1000 });
  };

  // const scrollToIntro = () => {
  //   window.scrollTo({
  //     top: introRef.current.offsetTop,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <div className="App">
      <Main scrollIntro={handleClick} />

      <Introduction props={introRef} id="intro" />

      <Characters />

      <Citys />

      <Items />

      <Creator />

      <Cartoon />
    </div>
  );
}

export default App;
