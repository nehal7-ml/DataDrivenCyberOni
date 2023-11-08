'use client'
import { motion, useScroll } from "framer-motion";

function ProgressBar() {
    const { scrollYProgress } = useScroll();

    return (  <motion.div
        className="fixed top-32 left-0 h-2 w-full bg-gradient-purple origin-left"
        style={{ scaleX: scrollYProgress }}
      />);
}

export default ProgressBar;