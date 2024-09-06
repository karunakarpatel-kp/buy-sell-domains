import React, { ReactNode } from "react";

interface websiteListingLayoutProps {
  children: ReactNode;
}

const YoutubeListingsLayout = (props: websiteListingLayoutProps) => {
  return (
    <section className="mt-20 prose prose-slate md:prose-lg lg:prose-lg md:prose-img:h-[520px] lg:max-w-screen-2xl dark:prose-invert ">
      {props.children}
    </section>
  );
};

export default YoutubeListingsLayout;
