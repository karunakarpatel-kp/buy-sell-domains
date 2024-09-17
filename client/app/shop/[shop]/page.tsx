import TypedAnimation from "@Components/Animations/TypedAnimation";
import DynamicUI from "@Components/DynamicUIPage/DynamicUI";
import ListingCard from "@Components/ListingCards/ListingCard";
import { blogPostsObj } from "Essential";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Websites List",
  description: "This is the Basic Description for the Websites Page",
};

const ShopDynamicPage = () => {
  return (
    <>
      <section
        className="mt-20 prose-lg  prose-slate md:prose-lg lg:prose-xl md:prose-img:h-[520px] lg:max-w-screen-2xl dark:prose-invert min-h-full "
        id="top"
      >
        <DynamicUI />
      </section>
      <div>
        <TypedAnimation />
      </div>

      <section>
        <Link href="#top" className=" scroll-smooth ">
          <div className="darkMode fixed bottom-32 right-0 border bg-black text-white border-slate-700 p-2 pt-3 px-4 cursor-pointer rounded-s-2xl dark:bg-slate-900  dark:text-black shadow-inner z-50 scroll-smooth">
            <FaArrowCircleUp size={25} fill="white" className="animate-bounce" />
          </div>
        </Link>
      </section>
    </>
  );
};

export default ShopDynamicPage;
