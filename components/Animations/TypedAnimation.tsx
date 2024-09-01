"use client";
import React from "react";
import Typed from "typed.js";

const TypedAnimation = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Facebook", "Instagram", "Whatsapp", "Twitter"],
      typeSpeed: 100,
      loop: true,
      smartBackspace: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div className="App text-xl font-semibold mb-4 mt-5">
      If you love this blog, please share it on <span ref={el} className="text-sky-700 dark:text-slate-300" />
    </div>
  );
};

export default TypedAnimation;
