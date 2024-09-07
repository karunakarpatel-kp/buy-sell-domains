import { SEO_OBJ, blogPostsObj } from "Essential";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CustomMetaData } from "components/MetaData/CustomMetaData";

export const metadata: any = CustomMetaData({ presentURL: SEO_OBJ.HOME_PAGE.absoluteURL });

export default function Home() {
  return (
    <>
      <div className="LoadingUI grid  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-11 md:gap-14 mt-24 mb-8 mx-2 ">
        {blogPostsObj.map((singleBlogPost, index) => {
          return (
            <div
              key={index}
              className=" shadow-md md:shadow-xl mt-0 m-auto p-3 md:p-5 no-underline ring-1 ring-gray-200 dark:ring-slate-600 rounded-md hover:bg-slate-50  dark:bg-slate-900 dark:hover:bg-slate-800 h-full "
            >
              <Link href={singleBlogPost.url} className="no-underline">
                <h1 className="text-3xl leading-snug  break-words font-bold font-sans mb-0 px-1">
                  {singleBlogPost.title}
                </h1>
                <Image
                  src={singleBlogPost.featuredImage}
                  alt={singleBlogPost.featuredImageAltText}
                  className="mt-3 mb-3  h-[230px] ring-1 rounded-md"
                />
                <p className="text-xl mt-0  font-normal line-clamp-5 leading-relaxed">{singleBlogPost.description}</p>
                <div className="flex space-x-4  justify-start">
                  {singleBlogPost.tags.map((singleTag, index) => {
                    return (
                      <div
                        className="no-underline border border-slate-100 bg-slate-100 dark:bg-slate-900 dark:border-slate-700 rounded-lg px-3 py-1 text-base"
                        key={index}
                      >
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
}
