import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center } from "@react-three/drei";
export const App = () => (
  <Canvas camera={{ position: [-1, 0, 5.5], fov: 50 }}>
    <Center>
      <Shirt />
    </Center>
    <OrbitControls />
  </Canvas>
);

const Shirt = () => {
  return (
    <mesh>
      <boxGeometry args={[0.9, 0.9, 0.9]} />
      <meshNormalMaterial />
    </mesh>
  );
};

export default App;
