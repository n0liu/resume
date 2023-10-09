import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
// 包装组件为高阶组件
const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      // 从左侧弹出的动画
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {/* id=about/work/contact... */}
        {/* navbar的li点击跳转,比如跳转是#about,就会找id为about的元素 */}
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
