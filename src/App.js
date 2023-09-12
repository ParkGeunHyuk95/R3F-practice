import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Center,
  useGLTF,
  Environment,
  Backdrop,
} from "@react-three/drei";
import { useRef } from "react";
import Shirt from "./component/Shirt";
import BackDrop from "./component/BackDrop";
export const App = ({ position = [-1, 0, 2.5], fov = 25 }) => (
  <Canvas
    shadows
    camera={{ position, fov }}
    eventSource={document.getElementById("root")}
    eventPrefix="client"
  >
    <ambientLight intensity={0.5} />
    <Environment preset="city" />
    <Center>
      <Shirt />1
      <BackDrop />
    </Center>
    <OrbitControls />
  </Canvas>
);

export default App;
