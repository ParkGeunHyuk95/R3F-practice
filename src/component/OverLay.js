import React, { useState } from "react";
import { Logo } from "@pmndrs/branding";
import { AiOutlineShopping } from "react-icons/ai";
import Intro from "./Intro";
import Customizer from "./Customizer";
import { motion, AnimatePresence } from "framer-motion";
const OverLay = () => {
  const [stage, setStage] = useState("intro");
  const transition = { type: "spring", duration: 0.8 };
  const config = {
    initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
    animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
    exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
  };
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
      <AnimatePresence>
        {stage === "intro" ? (
          <Intro key="main" config={config} setStage={setStage} />
        ) : (
          <Customizer key="custom" config={config} setStage={setStage} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default OverLay;
