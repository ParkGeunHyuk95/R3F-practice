import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import React, { useRef } from "react";
import { useRecoilValue } from "recoil";
import { colorState } from "../atoms";

const BackDrop = () => {
  const shadows = useRef();
  const color = useRecoilValue(colorState);
  useFrame((state, delta) => {
    easing.dampC(shadows.current.getMesh().material.color, color, 0.25, delta);
  });
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal //그림자를 좀 더 부드럽게
      frames={60} // 그림자 누적에 사용되는 프레임 수, 높을수록 부드러운 그림자
      alphaTest={0.85} //그림자 불투명도
      scale={10} //크기
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={4} //조명의 수
        radius={9} //조명 반경
        intensity={0.55}
        ambient={0.25} //주변 조명 강도
        position={[5, 5, -10]}
      />
    </AccumulativeShadows>
  );
};

export default BackDrop;
