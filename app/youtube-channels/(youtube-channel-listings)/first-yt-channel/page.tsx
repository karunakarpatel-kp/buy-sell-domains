"use client";

import Image from "next/image";
import React, { useState } from "react";

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

const FirstYTChannelPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = React.useState(-1);
  let soldOut = false;
  return (
    <section className="border-0 border-green-700 grid grid-cols-12  p-2">
      <section className="col-span-8 border-0 border-black">
        <h1 className="!text-3xl pl-1 pr-2">
          Title: Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit unde odio provident explicabo delectus
          magni! Minima repellat quibusdam similique
        </h1>
        <p className="description ">
          <span className="font-semibold">Description</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Cumque suscipit molestias corrupti incidunt laborum architecto amet sed fuga quasi dolorem explicabo aperiam
          necessitatibus doloremque atque in perferendis, ad quae aspernatur quidem optio neque esse assumenda
          voluptates debitis quis! Assumenda atque ducimus sint accusantium voluptatem, doloribus cum. Illo
          necessitatibus qui omnis officia excepturi recusandae aspernatur veritatis.
        </p>
        <div className="imageContainer px-1 ">
          <Image src={sampleImg} alt="image" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, voluptatum perferendis? Incidunt laborum,
          veritatis odit illo soluta facilis facere officia dolore minus laudantium expedita qui natus! Magni officia
          nesciunt quis atque tempore, libero, quaerat laborum aut qui necessitatibus repudiandae doloremque porro
          dolorem rem optio pariatur asperiores illo nisi. Rem corrupti dolore fugit id iure labore facilis eligendi aut
          itaque, laudantium quis ex numquam totam reprehenderit autem ut, ipsum laboriosam dolor. Dolore, laboriosam
          accusantium tempore id ipsum nesciunt, quia ea adipisci iure illo, maiores veritatis minima mollitia ducimus
          nam temporibus quaerat tempora iste cumque eos quos ratione nemo? Repellat adipisci necessitatibus sunt beatae
          dicta dolores dolorum sit numquam aliquam. Ex molestiae possimus amet debitis iste vitae minima nulla fuga
          tempora quod.
        </p>

        <div className="grid grid-cols-12 pt-5 gap-2">
          <SmallCards Query="Pin Verified" Answer="Yes" colSpan={6} />
          <SmallCards Query="Payment Received" Answer="No" colSpan={6} />
        </div>

        <div className="grid grid-cols-12 pt-5 gap-2">
          <SmallCards Query="Website Name" Answer="https://www.google.com" colSpan={4} />
          <SmallCards Query="Website Type" Answer="Monetized Website" colSpan={4} />
          <SmallCards Query="Website Starting Date" Answer="22/03/2024" colSpan={4} />
        </div>

        <div className="grid grid-cols-12 pt-5 gap-2">
          <SmallCards Query="Domain Renewal Date" Answer="22/03/2026" colSpan={4} />
          <SmallCards Query="Keywords" Answer="google.com" colSpan={4} />
          <SmallCards Query="Platform" Answer="Wordpress" colSpan={4} />
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
          <SmallCards Query="About Website" Answer="Google Adsense Approved Pin Verified 57$ Balance" colSpan={12} />
        </div>

        <div className="grid grid-cols-12 pt-5 gap-2">
          <SmallCards Query="Monetization Platform" Answer="Google Adsense " colSpan={4} />
          <SmallCards Query="Site Monetization Date" Answer="05/05/2024" colSpan={4} />
          <SmallCards Query="Monetization Country" Answer="India" colSpan={4} />
        </div>

        <div className="grid grid-cols-12 pt-5 gap-2">
          <SmallCards Query="Monthly Earning" Answer="NA" colSpan={6} />
          <SmallCards Query="Expected Monthly Traffic" Answer="NA" colSpan={6} />
        </div>
        <div className="grid grid-cols-12 pt-5 gap-2">
          <SmallCards Query="Last 1 Month Earning" Answer="NA" colSpan={6} />
          <SmallCards Query="Last 6 Month Earning" Answer="NA" colSpan={6} />
        </div>

        {/* Typed Animation */}
        <TypedAnimation />
      </section>

      {/* Sidebar Goes Here */}
      <Sidebar />
    </section>
  );
};

export default FirstYTChannelPage;
