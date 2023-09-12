import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useRecoilState } from "recoil";
import { colorState } from "../atoms";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
export const Shirt = (props) => {
  const [color, setColor] = useRecoilState(colorState);
  const { nodes, materials } = useGLTF("/shirt_baked_collapsed.glb");

  //   materials.lambert1.color = new THREE.Color(color);
  useFrame((state, delta) => {
    easing.dampC(materials.lambert1.color, color, 0.25, delta);
  });
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
      />
    </group>
  );
};

useGLTF.preload("/shirt_baked_collapsed.glb");

export default Shirt;
