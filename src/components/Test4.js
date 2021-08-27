import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

import "../styles/App.css";

import logo from "../assets/cd-logo-short.png";

const Cylinder = props => {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef();

  // Set up state for the hovered and active state
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) =>
    !active
      ? [(ref.current.rotation.x += 0.01), (ref.current.rotation.y += 0.005)]
      : [(ref.current.rotation.x += 0.03)]
  );

  useThree(({ camera }) => {
    camera.rotation.set(0, 0, 77);
  });

  const texture = useMemo(() => new THREE.TextureLoader().load(logo), []);

  texture.center = new THREE.Vector2(0.5, 0.5);
  texture.rotation = Math.PI;
  texture.flipY = true;

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={active ? 2 : 1}
      onClick={event => setActive(!active)}
    >
      <cylinderGeometry args={[3, 3, 0.6, 32]} />
      <meshBasicMaterial attach="material" lightMapIntensity="0.5">
        <primitive attach="map" object={texture} />
      </meshBasicMaterial>
    </mesh>
  );
};

const Test4 = () => {
  return (
    <Canvas className="canvas">
      <Cylinder position={[0, 0, 0]} className="pyramid" />
    </Canvas>
  );
};

export default Test4;
