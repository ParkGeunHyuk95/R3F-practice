import React from "react";
import { AiFillCamera, AiOutlineArrowLeft } from "react-icons/ai";

const Customizer = ({ setStage }) => {
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

  return (
    <section key="custom">
      <div className="customizer">
        <div className="color-options">
          {colors.map((color) => (
            <div
              key={color}
              className="circle"
              style={{ background: color }}
            ></div>
          ))}
        </div>
        <div className="decals">
          <div className="decals--container">
            {decals.map((decal) => (
              <div key={decal} className="decal">
                <img src={decal + "_thumb.png"} alt="brand" />
              </div>
            ))}
          </div>
        </div>
        <button className="share" style={{ background: "black" }}>
          DOWNLOAD
          <AiFillCamera size="1.3em" />
        </button>
        <button
          onClick={() => setStage("intro")}
          className="exit"
          style={{ background: "black" }}
        >
          GO BACK
          <AiOutlineArrowLeft size="1.3em" />
        </button>
      </div>
    </section>
  );
};

export default Customizer;
