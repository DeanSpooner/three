import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import CameraControls from "./CameraControls";
import "../styles/App.css";
import question from "../assets/question.png";

extend({ OrbitControls });

const Box = props => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  const texture = useMemo(() => new THREE.TextureLoader().load(question), []);

  return (
    <mesh {...props} ref={mesh} scale={[1, 1, 1]}>
      <boxBufferGeometry args={[2, 2, 2]} />
      <meshBasicMaterial attach="material">
        <primitive attach="map" object={texture} />
      </meshBasicMaterial>
    </mesh>
  );
};

const Test1 = () => {
  return (
    <Canvas className="canvas">
      <Box position={[0, 0, 0]} />
      <CameraControls />
    </Canvas>
  );
};

export default Test1;
