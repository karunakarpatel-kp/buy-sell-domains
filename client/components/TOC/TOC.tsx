"use client";
import React, { useState } from "react";

const TOC = (props: any) => {
  const [openTOC, setOpenTOC] = useState<boolean>(false);

  const onTOCClickHandler = () => {
    setOpenTOC(!openTOC);
  };

  const onTOCItemClickHandler = () => {
    setOpenTOC(!openTOC);
  };

  return (
    <div className="relative">
      <div
        className={`relative border border-slate-200 dark:border-slate-700 rounded-lg md:text-lg md:px-4 md:p-2 cursor-pointer w-full shadow-inner mb-0 h-40 overflow-hidden ${
          openTOC ? " h-full overflow-auto transition-colors duration-1000" : ""
        }`}
      >
        <div
          className="border-0 border-sky-400 clear-left p-0 m-0 prose prose-slate prose-a:no-underline hover:prose-a:underline hover:prose-a:underline-offset-8 dark:prose-invert md:prose-lg "
          onClick={onTOCItemClickHandler}
        >
          {props.children}
        </div>
        <div
          className={`inset-x-0 -bottom-1 flex justify-center  pt-32 pb-3 pointer-events-none dark:from-slate-900 absolute ${
            !openTOC ? "bg-gradient-to-t from-white" : ""
          } `}
        >
          <button
            type="button"
            className="relative bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-10 px-4 rounded-lg flex items-center dark:bg-slate-700 dark:hover:bg-slate-600 pointer-events-auto"
            onClick={onTOCClickHandler}
          >
            {openTOC ? "Collapse ..." : "Expand more ..."}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TOC;
