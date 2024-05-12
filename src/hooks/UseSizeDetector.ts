import { useEffect, useState } from "react";

function UseSizeDetector() {
  const [innerHeight, setInnerHeight] = useState<number | undefined>();
  const [innerWidth, setInnerWidth] = useState<number | undefined>();

  useEffect(() => {
    const handleResize = () => {
      setInnerHeight(window.innerHeight);
      setInnerWidth(window.innerWidth);
    };

    setInnerHeight(window.innerHeight);
    setInnerWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { innerHeight, innerWidth };
}

export default UseSizeDetector;
