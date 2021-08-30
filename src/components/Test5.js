import React, { useRef } from "react";
import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import CameraControls from "./CameraControls";
import "../styles/App.css";
import "../styles/Test5.css";

extend({ OrbitControls });

const Dodecahedron1 = props => {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef();

  // Subscribe this component to the render-loop, rotate the mesh every frame

  useFrame(t => [
    (ref.current.position.x = Math.sin(t.clock.elapsedTime * 2) * 2),
    (ref.current.position.y = Math.cos(t.clock.elapsedTime * 2) * 2),
    (ref.current.position.z = Math.cos(t.clock.elapsedTime) * 2),
    (ref.current.rotation.x = Math.sin(t.clock.elapsedTime) / 2),
    (ref.current.rotation.z = Math.cos(t.clock.elapsedTime) * 2),
  ]);

  useThree(({ camera }) => {
    camera.rotation.set(0, 0, 77);
  });
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh {...props} ref={ref}>
      <dodecahedronBufferGeometry args={[1, 1]} />
      <meshNormalMaterial flatShading="true"></meshNormalMaterial>
    </mesh>
  );
};

const Dodecahedron2 = props => {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef();

  // Subscribe this component to the render-loop, rotate the mesh every frame

  useFrame(t => [
    (ref.current.position.x = Math.cos(t.clock.elapsedTime * 2) * -2),
    (ref.current.position.y = Math.sin(t.clock.elapsedTime * 2) * -2),
    (ref.current.position.z = Math.sin(t.clock.elapsedTime) * 2 - 1),
    (ref.current.rotation.x = Math.sin(t.clock.elapsedTime) / 2),
    (ref.current.rotation.z = Math.cos(t.clock.elapsedTime) * 2 - 1),
  ]);

  useThree(({ camera }) => {
    camera.rotation.set(0, 0, 77);
  });
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh {...props} ref={ref}>
      <dodecahedronBufferGeometry args={[1, 3]} />
      <meshNormalMaterial flatShading="false"></meshNormalMaterial>
    </mesh>
  );
};

const Test5 = () => {
  return (
    <Canvas className="canvas canvasTest5">
      <Dodecahedron1 position={[0, 0, 0]} className="dodecahedron" />
      <Dodecahedron2
        position={[0, 0, 0]}
        className="dodecahedron"
        scale={0.5}
      />
      <CameraControls />
    </Canvas>
  );
};

export default Test5;
