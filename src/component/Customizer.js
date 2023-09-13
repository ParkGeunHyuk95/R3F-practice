import React from "react";
import { AiFillCamera, AiOutlineArrowLeft } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { colorState, decalState } from "../atoms";
import { motion } from "framer-motion";
const Customizer = ({ setStage, config }) => {
  const colors = [
    "#ccc",
    "#EFBD4E",
    "#80C670",
    "#726DE8",
    "#EF674E",
    "#353934",
    "Purple",
  ];
  const decals = ["react", "three2", "pmndrs"];
  const [shirtColor, setShirtColor] = useRecoilState(colorState);
  const [decal, setDecal] = useRecoilState(decalState);

  const onClickDownloadBtn = () => {
    const link = document.createElement("a");
    link.setAttribute("download", "canvas.png");
    link.setAttribute(
      "href",
      document
        .querySelector("canvas")
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream")
    );
    link.click();
  };
  return (
    <motion.section {...config} key="custom">
      <div className="customizer">
        <div className="color-options">
          {colors.map((color) => (
            <div
              key={color}
              className="circle"
              style={{ background: color }}
              onClick={() => {
                setShirtColor(color);
              }}
            ></div>
          ))}
        </div>
        <div className="decals">
          <div className="decals--container">
            {decals.map((decal) => (
              <div key={decal} className="decal">
                <img
                  onClick={() => setDecal(decal)}
                  src={decal + "_thumb.png"}
                  alt="brand"
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => onClickDownloadBtn()}
          className="share"
          style={{ background: shirtColor }}
        >
          DOWNLOAD
          <AiFillCamera size="1.3em" />
        </button>
        <button
          onClick={() => setStage("intro")}
          className="exit"
          style={{ background: shirtColor }}
        >
          GO BACK
          <AiOutlineArrowLeft size="1.3em" />
        </button>
      </div>
    </motion.section>
  );
};

export default Customizer;
