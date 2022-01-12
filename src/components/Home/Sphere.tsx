import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { PointsMaterial, TextureLoader } from "three";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

const Sphere: React.FC = () => {
  const sphereRef = useRef<any>();
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    sphereRef.current.rotation.y = elapsedTime / 6;
    sphereRef.current.rotation.z = elapsedTime / 6;
    sphereRef.current.rotation.x = elapsedTime / 6;
  });
  return (
    <>
      <pointLight color="white" position={[1, 0, 5]} intensity={1.2} />
      <points ref={sphereRef}>
        <sphereGeometry args={[2, 32, 32]} attach="geometry" />

        <pointsMaterial size={0.01} color="white" />
      </points>
      <OrbitControls enableZoom={false} enableRotate={true} rotateSpeed={0.4} />
    </>
  );
};

export default Sphere;
