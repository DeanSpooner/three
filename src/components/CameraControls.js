import { useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls

  const {
    camera,
    gl: { domElement },
  } = useThree();

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame(state => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={true}
      maxAzimuthAngle={Math.PI * 4}
      maxPolarAngle={Math.PI}
      minAzimuthAngle={-Math.PI * 4}
      minPolarAngle={0}
    />
  );
};

export default CameraControls;
