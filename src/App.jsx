import { BrowserRouter } from "react-router-dom";
import {
  About,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Contact,
} from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          {/* 顶部导航 */}
          <Navbar />
          {/* 模型部分 */}
          <Hero />
        </div>
        {/* 介绍 */}
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          {/* 联系方式 */}
          <Contact />
          {/* 3D模型-背景-星星 */}
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
