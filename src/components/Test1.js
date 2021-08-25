import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import "../styles/App.css";

import question from "../assets/question.png";

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
    </Canvas>
  );
};

export default Test1;
