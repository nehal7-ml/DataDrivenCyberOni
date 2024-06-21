import { useCallback, useEffect, useState } from "react";

export default function useScroll(threshold: number) {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
<<<<<<< HEAD
    //console.log(window.scrollY);
    setScrolled(window.scrollY > threshold);
=======
    setScrolled(window.pageYOffset > threshold);
>>>>>>> upstream/main
  }, [threshold]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return scrolled;
}
