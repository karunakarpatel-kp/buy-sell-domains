import { blogPostsObj } from "Essential";
import React from "react";

const AppLayoutLoadingUI = () => {
  return (
    <div className="h-dvh">
      <div className="loadingUI border-0 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-14 mt-24 mb-8">
        {blogPostsObj.map((singleBlogPost, index) => {
          return (
            <div
              className="min-h-36 h-full  border border-slate-200 dark:border-slate-700 space-y-2 mx-2 p-2 py-4  shadow-none dark:shadow-lg rounded-lg "
              key={index}
            >
              <div className="title bg-slate-200 dark:bg-slate-700 h-10 animate-pulse rounded-sm"></div>
              <div className="title bg-slate-200 dark:bg-slate-700 min-h-36 animate-pulse rounded-sm"></div>
              <div className="title px-1 space-y-2">
                <span className="h-3 animation-pulse bg-slate-200 dark:bg-slate-700 block rounded-sm"></span>
                <span className="h-3 animation-pulse bg-slate-200 dark:bg-slate-700 block rounded-sm"></span>
                <span className="h-3 animation-pulse bg-slate-200 dark:bg-slate-700 block rounded-sm"></span>
                <span className="h-3 animation-pulse bg-slate-200 dark:bg-slate-700 block rounded-sm"></span>
              </div>
              <div className="title bg-slate-200 dark:bg-slate-700 h-10 animate-pulse"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AppLayoutLoadingUI;
