import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo(0, 0);
  }, [pathname]); // Re-run effect when pathname changes

  return null;
};

export default ScrollTop;