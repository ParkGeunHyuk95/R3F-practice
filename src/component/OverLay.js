import React, { useState } from "react";
import { Logo } from "@pmndrs/branding";
import { AiOutlineShopping } from "react-icons/ai";
import Intro from "./Intro";
import Customizer from "./Customizer";
import { motion } from "framer-motion";
const OverLay = () => {
  const [stage, setStage] = useState("intro");
  return (
    <div className="container">
      <motion.header
        initial={{ opacity: 0, y: -120 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1.0, delay: 1 }}
      >
        <Logo width="40" height="40" />
        <div>
          <AiOutlineShopping size="3em" />
        </div>
      </motion.header>
      {stage === "intro" ? (
        <Intro setStage={setStage} />
      ) : (
        <Customizer setStage={setStage} />
      )}
    </div>
  );
};

export default OverLay;
