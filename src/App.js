import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center, Environment } from "@react-three/drei";
import Shirt from "./component/Shirt";
import BackDrop from "./component/BackDrop";
import CameraRig from "./component/CameraRig";
import { useState } from "react";
export const App = ({ position = [-1, 0, 2.5], fov = 25 }) => {
  return (
    <Canvas
      shadows
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position, fov }}
      eventSource={document.getElementById("root")}
      eventPrefix="client"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <CameraRig>
        <Center>
          <Shirt />
          <BackDrop />
        </Center>
      </CameraRig>
      <OrbitControls />
    </Canvas>
  );
};

export default App;
