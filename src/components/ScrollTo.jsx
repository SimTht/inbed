import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTo = ({ children }) => {
  const locationScroll = useLocation();

  useEffect(() => {
    if (locationScroll.hash === "#form") {
      const form = document.getElementById("anchor-form");
      window.scrollTo(0, 0);
      form.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [locationScroll]);

  return <>{children}</>;
};

export default ScrollTo;
