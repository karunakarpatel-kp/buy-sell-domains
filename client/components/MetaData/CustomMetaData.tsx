import { SEO_OBJ, blogPostsObj } from "Essential";
import { Metadata } from "next";
import React from "react";

// const CustomMetaData = (props: Metadata) => {
//   const metaDataObj = {
//     title: "Next.js Application",
//     generator: "Next.js",
//     applicationName: "Next.js",
//     referrer: "origin-when-cross-origin",
//     keywords: ["Vehiclemasti", "cars", "tata", "kia"],
//     authors: [{ name: "Karunakar Patel", url: process.env.HOME_PAGE_BASE_URL }],
//     creator: "Karunakar Patel",
//     publisher: "Karunakar Patel",
//     formatDetection: {
//       email: false,
//       address: false,
//       telephone: false,
//     },
//   };
//   return metaDataObj;
// };

export function CustomMetaData(props: any) {
  const { presentURL } = props;
  const SEO_OBJ_VALUES = Object.values(SEO_OBJ);

  const filteredURL = SEO_OBJ_VALUES.map((singleOBJ) => singleOBJ.absoluteURL).filter(
    (singleOBJURL) => singleOBJURL === presentURL
  );

  const filteredOBJ = SEO_OBJ_VALUES.filter((singleOBJ) => {
    return singleOBJ.absoluteURL === presentURL;
  });
  // console.log({ filteredOBJ, filteredURL });

  const metaDataOBJ: Metadata = {
    metadataBase: new URL(filteredOBJ[0].absoluteURL),
    title: filteredOBJ[0].title,
    description: filteredOBJ[0].description,
    verification: {
      google: "G-PH29P82N32",
    },
    category: filteredOBJ[0].category,
    keywords: ["Karunakar Patel", "Tata", "tata safari"],
    creator: "Karunakar Patel",
    openGraph: {
      title: filteredOBJ[0].title,
      description: filteredOBJ[0].description,
      type: "article",
      publishedTime: filteredOBJ[0].publishedTime,
      modifiedTime: filteredOBJ[0].lastUpdateTime,
      authors: ["Karunakar Patel"],
      images: [filteredOBJ[0].ogImageURL],
    },

    twitter: {
      card: "summary_large_image",
      site: "https://twitter.com/Karna_Patel_",
      creator: "@Karna_Patel_",
      creatorId: "https://twitter.com/Karna_Patel_",
    },

    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
  // console.log(metaDataOBJ, "META DATA OBJ");
  return metaDataOBJ;
}
