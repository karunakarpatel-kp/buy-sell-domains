import { blogPostsObj } from "Essential";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Blog Page",
  description: "This is the Basic Description for the Blog Page",
};

const BlogPage = () => {
  return (
    <>
      <div className=" grid  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-14 mt-8 mb-8">
        {blogPostsObj.map((singleBlogPost, index) => {
          return (
            <div
              key={index}
              className="shadow-xl mt-0 m-auto p-5 no-underline ring-1 ring-gray-200 dark:ring-slate-600 rounded-md hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-900 h-full"
            >
              <Link href={singleBlogPost.url} className="no-underline">
                <h1 className="text-3xl leading-snug  break-words font-bold font-sans mb-0">{singleBlogPost.title}</h1>
                <Image
                  src={singleBlogPost.featuredImage}
                  alt={singleBlogPost.featuredImageAltText}
                  className="mt-3 mb-3"
                />
                <p className="text-xl mt-0 leading-normal font-normal  ">{singleBlogPost.description}</p>
                <div>
                  {singleBlogPost.tags.map((singleTag, index) => {
                    return (
                      <div className="underline" key={index}>
                        {singleTag.tag}
                      </div>
                    );
                  })}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlogPage;
