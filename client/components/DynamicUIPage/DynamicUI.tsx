"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import sampleImg from "@Public/safari-overview-d-banner-27-23.jpg";
import SmallCards from "@Components/SmallCards/SmallCards";
import Sidebar from "@Components/Sidebar/Sidebar";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import NextJsImageSlide from "@Components/NextjsImageSlide/NextjsImageSlide";
import { renderNextImage } from "@Components/PhotoAlbum/PhotoAlbum";

import { RowsPhotoAlbum } from "react-photo-album";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import TypedAnimation from "@Components/Animations/TypedAnimation";
import { useAppSelector } from "app/GlobalStore/store";
import { useRouter } from "next/navigation";

const DynamicUI = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = React.useState(-1);
  const userSelectedList = useAppSelector((state) => state.addListingSlice.userSelectedList);
  const userLoggedIn = useAppSelector((state) => state.loginSlice.loginServiceState.userLoggedIn);
  const navigate = useRouter();
  let soldOut = false;

  useEffect(() => {
    if (userSelectedList === null || !userLoggedIn) {
      navigate.push("/");
      return;
    }
  }, [userSelectedList, userLoggedIn]);

  console.log(userSelectedList[0]);

  return (
    <section className="border-0 border-green-700 grid grid-cols-12  p-2">
      <section className="col-span-12 md:col-span-8 lg:col-span-8 border-0 border-black">
        <h1 className="!text-3xl pl-1 pr-2">{userSelectedList !== null && userSelectedList[0].title}</h1>
        <p className="description ">
          <span className="font-semibold">Description:</span>{" "}
          {userSelectedList !== null && userSelectedList[0].shortDescription}
        </p>
        <div className="imageContainer px-1 ">
          <Image src={sampleImg} alt="image" />
        </div>
        <p>{userSelectedList !== null && userSelectedList[0].detailDescription}</p>

        <div className="grid grid-cols-12 pt-5 gap-2">
          <SmallCards
            Query="Website Name"
            Answer={userSelectedList !== null && userSelectedList[0].websiteName}
            colSpan={4}
          />
          <SmallCards
            Query="Website Type"
            Answer={userSelectedList !== null && userSelectedList[0].websiteCategory}
            colSpan={4}
          />
          <SmallCards
            Query="Website Starting Date"
            Answer={userSelectedList !== null && userSelectedList[0].websiteRegistrationDate}
            colSpan={4}
          />
        </div>

        <div className="grid grid-cols-12 pt-5 gap-2">
          <SmallCards
            Query="Domain Renewal Date"
            Answer={userSelectedList !== null && userSelectedList[0].domainRenewalDate}
            colSpan={4}
          />
          <SmallCards
            Query="Keywords"
            Answer={userSelectedList !== null && userSelectedList[0].domainKeywords}
            colSpan={4}
          />
          <SmallCards
            Query="Platform"
            Answer={userSelectedList !== null && userSelectedList[0].hostingPlatform}
            colSpan={4}
          />
        </div>

        <div className="grid grid-cols-12 pt-5 gap-2">
          <SmallCards
            Query="Pin Verified"
            Answer={userSelectedList !== null && userSelectedList[0].pinVerified}
            colSpan={6}
          />
          <SmallCards
            Query="Payment Received"
            Answer={userSelectedList !== null && userSelectedList[0].paymentReceived}
            colSpan={6}
          />
        </div>
        <div className=" pt-5 pb-10 border-2 border-slate-100 my-2  h-auto px-3">
          <div className="text-xl font-bold text-center text-brandColor">Image Proof</div>
          <RowsPhotoAlbum
            spacing={20}
            photos={[
              { src: "/google-analytics-nextjs.png", width: 1080, height: 780 },
              { src: "/safari-overview-d-banner-27-23.jpg", width: 1600, height: 1200 },
              { src: "/google-analytics-nextjs.png", width: 1080, height: 780 },
              { src: "/google-analytics-nextjs.png", width: 1080, height: 780 },
              { src: "/safari-overview-d-banner-27-23.jpg", width: 1600, height: 1200 },
            ]}
            render={{ image: renderNextImage }}
            sizes={{
              size: "1168px",
              sizes: [{ viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" }],
            }}
            onClick={({ index: current }) => setIndex(current)}
          />

          <Lightbox
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            slides={[
              { src: "/google-analytics-nextjs.png" },
              { src: "/safari-overview-d-banner-27-23.jpg" },
              { src: "/google-analytics-nextjs.png" },
            ]}
            render={{ slide: NextJsImageSlide }}
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          />
        </div>

        <div className="grid grid-cols-12 pt-5 gap-2">
          {/* <SmallCards Query="About Website" Answer="Google Adsense Approved Pin Verified 57$ Balance" colSpan={12} /> */}
        </div>

        <div className="grid grid-cols-12 pt-5 gap-2">
          <SmallCards
            Query="Monetization Platform"
            Answer={userSelectedList !== null && userSelectedList[0].monetizationPlatform}
            colSpan={4}
          />
          <SmallCards
            Query="Site Monetization Date"
            Answer={userSelectedList !== null && userSelectedList[0].websiteMonetizationDate}
            colSpan={4}
          />
          <SmallCards
            Query="Monetization Country"
            Answer={userSelectedList !== null && userSelectedList[0].monetizationCountry}
            colSpan={4}
          />
        </div>

        <div className="grid grid-cols-12 pt-5 gap-2">
          <SmallCards
            Query="Monthly Traffic"
            Answer={userSelectedList !== null && userSelectedList[0].lastMonthTraffic}
            colSpan={6}
          />
          <SmallCards
            Query="Last 6 Months Traffic"
            Answer={userSelectedList !== null && userSelectedList[0].lastSixMonthTraffic}
            colSpan={6}
          />
        </div>
        <div className="grid grid-cols-12 pt-5 gap-2">
          <SmallCards
            Query="Last 1 Month Earning"
            Answer={userSelectedList !== null && userSelectedList[0].lastMonthEarnings}
            colSpan={6}
          />
          <SmallCards
            Query="Last 6 Month Earning"
            Answer={userSelectedList !== null && userSelectedList[0].lastSixMonthEarnings}
            colSpan={6}
          />
        </div>
      </section>

      {/* Sidebar Goes Here */}
      <Sidebar />
    </section>
  );
};

export default DynamicUI;
