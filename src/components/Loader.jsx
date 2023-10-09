import { Html, useProgress } from "@react-three/drei";
const Loader = () => {
  // 进度条
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
        }}
      > 
        {/* 显示进度 */}
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
