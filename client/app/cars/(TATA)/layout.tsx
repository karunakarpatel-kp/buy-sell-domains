import React from "react";
import { MdLightMode } from "react-icons/md";
import { FaArrowCircleUp } from "react-icons/fa";
import Link from "next/link";
import Sharing from "@Components/SocialShare/Sharing";
import TypedAnimation from "@Components/Animations/TypedAnimation";

const TataBlogPostLayoutUI = (props: any) => {
  return (
    <>
      <section
        className="p-7 mt-20 md:mt-20 mb-4 prose-lg prose-slate md:prose-lg lg:prose-xl dark:prose-invert  lg:max-w-screen-lg m-auto   prose-h1:leading-slug md:prose-img:h-[520px]  prose-img:rounded-lg min-h-[64vh]"
        id="top"
      >
        {props.children}
        <section>
          <TypedAnimation />
        </section>
      </section>
      <section className=" max-w-screen-lg m-auto ">
        <Sharing />
      </section>
      <section>
        <Link href="#top" className=" scroll-smooth ">
          <div className="darkMode fixed bottom-32 right-0 border bg-brandColor text-white border-slate-700 p-2 pt-3 px-4 cursor-pointer rounded-s-2xl dark:bg-slate-900  dark:text-black shadow-inner z-50 scroll-smooth">
            <FaArrowCircleUp size={25} fill="white" className="animate-bounce" />
          </div>
        </Link>
      </section>
    </>
  );
};

export default TataBlogPostLayoutUI;
