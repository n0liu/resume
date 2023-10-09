import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
// 加载进度条
import CanvasLoader from "../Loader";
const Ball = (props) => {
  // 纹理
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {/* 环境光 */}
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        {/* 20面体 */}
        <icosahedronBufferGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={"#fff8eb"}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          map={decal}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
        />
      </mesh>
    </Float>
  );
};
const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      // 保留视图缓冲区
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* suspense可以等待加载 */}
      {/* 加载模型,fallback是没加载完成时执行的回调 */}
      <Suspense fallback={<CanvasLoader />}>
        {/* 轨道控制 */}
        <OrbitControls enableZoom={false} />
        {/* 3D模型 */}
        <Ball imgUrl={icon} />
      </Suspense>
      {/* 预加载 */}
      <Preload all />
    </Canvas>
  );
};
export default BallCanvas;
