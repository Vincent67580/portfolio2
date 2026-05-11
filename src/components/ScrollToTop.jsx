import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // On remonte tout en haut dès que le chemin (URL) change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;