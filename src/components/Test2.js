import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import "../styles/App.css";

import beachball from "../assets/beachball.jpeg";

const Box = props => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
    mesh.current.rotation.x += 0.01;
  });

  const texture = useMemo(() => new THREE.TextureLoader().load(beachball), []);

  return (
    <mesh {...props} ref={mesh} scale={[1, 1, 1]}>
      <sphereGeometry args={[1.5, 16, 16]} />
      <meshBasicMaterial attach="material">
        <primitive attach="map" object={texture} />
      </meshBasicMaterial>
    </mesh>
  );
};

const Test2 = () => {
  return (
    <Canvas className="canvas">
      <Box position={[0, 0, 0]} />
    </Canvas>
  );
};

export default Test2;
