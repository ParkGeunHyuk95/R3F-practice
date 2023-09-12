import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import Shirt from "./component/Shirt";
export const App = () => (
  <Canvas
    camera={{ position: [-1, 0, 5.5], fov: 50 }}
    eventSource={document.getElementById("root")}
    eventPrefix="client"
  >
    <ambientLight intensity={0.5} />
    <Center>
      <Shirt />
    </Center>
    <OrbitControls />
  </Canvas>
);

export default App;
