import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
const Computers = ({ isMobile }) => {
  // 加载模型
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      {/* 半球光 */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      {/* 点光 */}
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      {/* 加载模型的scene */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};
// 画布
const ComputersCanvas = () => {
  // 是不是在移动端
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // 尺寸看是不是符合
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    // 设置是不是移动端
    setIsMobile(mediaQuery.matches);
    // 窗口大小改变时,重新判断
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    // 监听窗口的改变
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    // 回调
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      frameloop="demand"
      shadows
      // fov 视角
      camera={{ position: [20, 3, 5], fov: 25 }}
      // 保留视图缓冲区
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* suspense可以等待加载 */}
      {/* 加载模型 */}
      <Suspense fallback={<CanvasLoader />}>
        {/* 轨道控制 */}
        <OrbitControls
          // 不能缩放
          enableZoom={false}
          // 只能旋转特定角度
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* 3D模型 */}
        <Computers isMobile={isMobile} />
      </Suspense>
      {/* 预加载 */}
      <Preload all />
    </Canvas>
  );
};
export default ComputersCanvas;
