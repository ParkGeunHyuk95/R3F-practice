import React, { useState } from "react";
import { Logo } from "@pmndrs/branding";
import { AiOutlineHighlight, AiOutlineShopping } from "react-icons/ai";
import Intro from "./Intro";
import Customizer from "./Customizer";

const OverLay = () => {
  const [stage, setStage] = useState("intro");
  return (
    <div className="container">
      <header>
        <Logo width="40" height="40" />
        <div>
          <AiOutlineShopping size="3em" />
        </div>
      </header>
      {stage === "intro" ? (
        <Intro setStage={setStage} />
      ) : (
        <Customizer setStage={setStage} />
      )}
    </div>
  );
};

export default OverLay;
