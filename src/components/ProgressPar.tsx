import  { useState, useEffect } from "react";

const ScrollProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / windowHeight) * 100;
      setScrollPercentage(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);
  

  return (
    <div style={{
      
      
      width: `${scrollPercentage}%`,
      height: "3px",
      backgroundColor: "#408c7b",
      transition: "width 0.2s ease",
      zIndex: 9999
    }} />
  );
};

export default ScrollProgressBar;
