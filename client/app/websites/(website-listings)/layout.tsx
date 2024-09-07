import TypedAnimation from "@Components/Animations/TypedAnimation";
import Sharing from "@Components/SocialShare/Sharing";
import Link from "next/link";
import React, { ReactNode } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

interface websiteListingLayoutProps {
  children: ReactNode;
}

const WebsiteListingsLayout = (props: websiteListingLayoutProps) => {
  return (
    <>
      <section
        className="mt-20 prose-lg  prose-slate md:prose-lg lg:prose-xl md:prose-img:h-[520px] lg:max-w-screen-2xl dark:prose-invert min-h-full "
        id="top"
      >
        {props.children}
        <section>
          <TypedAnimation />
        </section>
      </section>
      {/* <section className=" max-w-screen-lg m-auto ">
        <Sharing />
      </section> */}
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

export default WebsiteListingsLayout;
