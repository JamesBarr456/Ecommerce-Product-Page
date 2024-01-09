import { useEffect } from "react";

export const useResizeListener = (minWidth, callback, deps = []) => {
  useEffect(() => {
    const handleResize = () => {
      if (
        window.innerWidth >= minWidth &&
        callback &&
        typeof callback === "function"
      ) {
        callback();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [minWidth, callback, ...deps]);
};
