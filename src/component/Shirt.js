import React, { useRef } from "react";
import { useGLTF, Decal, useTexture } from "@react-three/drei";
import { useRecoilState, useRecoilValue } from "recoil";
import { colorState, decalState } from "../atoms";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
export const Shirt = (props) => {
  const [color, setColor] = useRecoilState(colorState);
  const decal = useRecoilValue(decalState);
  const texture = useTexture(`${decal}.png`);
  const { nodes, materials } = useGLTF("/shirt_baked_collapsed.glb");

  //   materials.lambert1.color = new THREE.Color(color);
  useFrame((state, delta) => {
    easing.dampC(materials.lambert1.color, color, 0.25, delta);
  });
  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.T_Shirt_male.geometry}
      material={materials.lambert1}
    >
      <Decal
        position={[0, 0.04, 0.15]}
        rotation={[0, 0, 0]}
        scale={0.15}
        map={texture}
      />
    </mesh>
  );
};

useGLTF.preload("/shirt_baked_collapsed.glb");

export default Shirt;
