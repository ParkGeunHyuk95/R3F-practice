import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { easing } from "maath";

const CameraRig = ({ children }) => {
  const group = useRef();

  useFrame((state, delta) => {
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0], //포인터 움직임에 따른 카메라 회전값 설정
      0.25, //회전 및 감쇠 속도
      delta //프레임간의 시간 간격
    );
    //카메라 흐름 제어
  });

  return <group ref={group}>{children}</group>;
};

export default CameraRig;
