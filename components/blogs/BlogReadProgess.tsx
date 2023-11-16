'use client'
import { motion, useScroll } from "framer-motion";
import { RefObject } from "react";

function ProgressBar({container}: {container?: RefObject<HTMLElement>}) {
    const { scrollYProgress } = useScroll({target: container , offset: ["start", "end"]});

    return (  <motion.div
        className="fixed top-24 left-0 h-2 w-full bg-gradient-purple origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />);
}

export default ProgressBar;