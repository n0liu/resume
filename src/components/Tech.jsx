import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <motion.div>
      <div className="flex flow-row flex-wrap justify-center gap-10">
        {technologies.map((technologie) => (
          <div className="w-28 h-28" key={technologie.name}>
            {/* 3D模型,小球 */}
            <BallCanvas icon={technologie.icon} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Tech, "tech");
