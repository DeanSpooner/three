import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import "../styles/App.css";

const Box = props => {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) =>
    !active
      ? [(ref.current.rotation.x += 0.01), (ref.current.rotation.y += 0.01)]
      : [(ref.current.rotation.x += 0.03), (ref.current.rotation.y += 0.03)]
  );
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={active ? 2 : 1}
      onClick={event => setActive(!active)}
      onPointerOver={event => setHover(true)}
      onPointerOut={event => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={hovered ? 0x22ff55 : active ? 0xff5500 : 0x0055ff}
      />
    </mesh>
  );
};

const Pyramid = props => {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) =>
    !active
      ? [(ref.current.rotation.x += 0.01), (ref.current.rotation.y += 0.01)]
      : [(ref.current.rotation.x += 0.03), (ref.current.rotation.y += 0.03)]
  );
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={active ? 2 : 1}
      onClick={event => setActive(!active)}
      onPointerOver={event => setHover(true)}
      onPointerOut={event => setHover(false)}
    >
      <coneGeometry args={[1, 1, 3]} />
      <meshStandardMaterial
        color={hovered ? 0x860030 : active ? 0xffffff : 0xca9801}
      />
    </mesh>
  );
};

const Test3 = () => {
  return (
    <Canvas className="canvas">
      <pointLight position={[10, 10, 10]} />
      <Box position={[-3.5, 0, 0]} className="box" />
      <Box position={[3.5, 0, 0]} className="box" />
      <Pyramid position={[0, 0, 0]} className="pyramid" />
    </Canvas>
  );
};

export default Test3;
