"use client";
import React, { useState, useEffect } from "react";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { SEO_OBJ, blogPostsObj } from "Essential";

const Sharing = () => {
  const pathName = usePathname();
  const [grabbedTitle, setGrabbedTitle] = useState("");
  const [grabbedURL, setGrabbedURL] = useState("");
  const filteredSinglePost = blogPostsObj.filter((singleBlogPost) => singleBlogPost.url === pathName);

  useEffect(() => {
    setGrabbedTitle(filteredSinglePost[0].title);
    setGrabbedURL(process.env.HOME_PAGE_BASE_URL + pathName);
  }, []);

  return (
    <>
      <div className="border-0 flex gap-5 pl-8">
        <FacebookMessengerShareButton appId="" url={grabbedURL} title={grabbedTitle}>
          <FacebookIcon size={40} />
        </FacebookMessengerShareButton>
        <WhatsappShareButton url={grabbedURL} title={grabbedTitle}>
          <WhatsappIcon size={40} />
        </WhatsappShareButton>
        <TwitterShareButton url={grabbedURL} title={grabbedTitle}>
          <TwitterIcon size={40} />
        </TwitterShareButton>
        <LinkedinShareButton url={grabbedURL} title={grabbedTitle}>
          <LinkedinIcon size={40} />
        </LinkedinShareButton>
        <EmailShareButton url={grabbedURL} title={grabbedTitle}>
          <EmailIcon size={40} />
        </EmailShareButton>
      </div>
    </>
  );
};

export default Sharing;
