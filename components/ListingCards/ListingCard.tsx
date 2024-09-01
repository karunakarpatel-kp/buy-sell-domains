import Image from "next/image";
import React from "react";

import sampleImage from "@Public/google-analytics-nextjs.png";
import { FaArrowAltCircleRight, FaArrowRight, FaSadTear } from "react-icons/fa";
import { GiLockedFortress } from "react-icons/gi";
import Link from "next/link";
import SmallCards from "@Components/SmallCards/SmallCards";

interface ListingCardProps {}

const ListingCard = (props: ListingCardProps) => {
  let soldOut = false;
  return (
    <>
      <Link href="/websites" className="no-underline" title="Hello">
        <div className="grid grid-cols-12 shadow-lg m-0 p-0 mt-5 z-30 bg-white dark:bg-slate-900 relative">
          <div className="col-span-12 md:col-span-4 lg:col-span-4 p-0">
            <Image src={sampleImage} alt="google-analytics-image" width={520} className="p-1 m-auto" />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6 ">
            <div className="text-2xl font-semibold p-2 pl-3">
              Title: Main Heading In Here Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, in.
            </div>
            <div className="text-wrap text-xl p-2 pl-3 font-normal">
              Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi, aspernatur voluptas eum
              excepturi totam voluptates eius accusantium quibusdam eaque debitis vero. Reprehenderit, natus explicabo
              tempora iste quas libero distinctio.s
            </div>

            <div className="grid grid-cols-12 pt-5 gap-2">
              <SmallCards Query="Category" Answer="News Website" colSpan={3} />
              <SmallCards Query="Registration Date" Answer="January 25 2024" colSpan={3} />
              <SmallCards Query="Monetization " Answer="Google Adsense" colSpan={3} />
              <SmallCards Query="Monthly Income" Answer="₹ 40,000" colSpan={3} />
            </div>
          </div>
          <div className="flex flex-col text-center lg:justify-around col-span-12 md:col-span-2 lg:col-span-2 border my-2 mx-4 py-5 md:border lg:border-0 lg:border-l lg:border-l-slate-300 dark:border-l-slate-600 border-dotted">
            <div className="text-xl font-semibold my-4 lg:my-0">Selling Price</div>
            <div className="text-3xl font-bold my-4 lg:my-0">₹ 40,000</div>
            <div className="">
              {soldOut ? (
                <Link
                  href="/cars"
                  className="no-underline flex justify-center items-center text-xl bg-brandColor text-white p-2 px-6 rounded-lg hover:bg-white  hover:text-[#36106a] hover:ease-in-out border hover:border-brandColor  dark:hover:bg-slate-900 dark:hover:text-white dark:hover:border-white dark:bg-slate-900 "
                >
                  Sold Out
                  <FaSadTear fontSize="medium" className="ml-2 hover:text-[#36106a]" />
                </Link>
              ) : (
                <Link
                  href="/websites/first-website"
                  className="no-underline flex justify-center items-center text-xl bg-brandColor  text-white hover:bg-white  hover:text-[#36106a] hover:ease-in-out border hover:border-brandColor p-2 px-6 rounded-lg  dark:hover:bg-slate-900 dark:hover:text-white dark:hover:border-white dark:bg-slate-900"
                >
                  View
                  <FaArrowRight fontSize="medium" className="ml-2 hover:text-[#36106a] " />
                </Link>
              )}
            </div>
          </div>
          {soldOut && (
            <div className="soldOutWrapper absolute top-2 left-2">
              <div className="text-xl font-bold text-red-600 z-40 border border-red-400  px-2 py-1 bg-red-100  dark:hover:bg-slate-900 dark:hover:text-white dark:hover:border-white">
                Sold Out
              </div>
            </div>
          )}
        </div>
      </Link>

      <Link href="/youtube-channels" className="no-underline" title="Hello">
        <div className="grid grid-cols-12 shadow-lg m-0 p-0 mt-5 z-30 bg-white dark:bg-slate-900 relative">
          <div className="col-span-12 md:col-span-4 lg:col-span-4 p-0">
            <Image src={sampleImage} alt="google-analytics-image" width={520} className="p-1 m-auto" />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6 ">
            <div className="text-2xl font-semibold p-2 pl-3">
              Title: Main Heading In Here Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, in.
            </div>
            <div className="text-wrap text-xl p-2 pl-3 font-normal">
              Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi, aspernatur voluptas eum
              excepturi totam voluptates eius accusantium quibusdam eaque debitis vero. Reprehenderit, natus explicabo
              tempora iste quas libero distinctio.s
            </div>

            <div className="grid grid-cols-12 pt-5 gap-2">
              <SmallCards Query="Category" Answer="News Website" colSpan={3} />
              <SmallCards Query="Registration Date" Answer="January 25 2024" colSpan={3} />
              <SmallCards Query="Monetization " Answer="Google Adsense" colSpan={3} />
              <SmallCards Query="Monthly Income" Answer="₹ 40,000" colSpan={3} />
            </div>
          </div>
          <div className="flex flex-col text-center lg:justify-around col-span-12 md:col-span-2 lg:col-span-2 border my-2 mx-4 py-5 md:border lg:border-0 lg:border-l lg:border-l-slate-300 dark:border-l-slate-600 border-dotted">
            <div className="text-xl font-semibold my-4 lg:my-0">Selling Price</div>
            <div className="text-3xl font-bold my-4 lg:my-0">₹ 40,000</div>
            <div className="">
              {soldOut ? (
                <Link
                  href="/cars"
                  className="no-underline flex justify-center items-center text-xl bg-brandColor text-white p-2 px-6 rounded-lg hover:bg-white  hover:text-[#36106a] hover:ease-in-out border hover:border-brandColor  dark:hover:bg-slate-900 dark:hover:text-white dark:hover:border-white dark:bg-slate-900 "
                >
                  Sold Out
                  <FaSadTear fontSize="medium" className="ml-2 hover:text-[#36106a]" />
                </Link>
              ) : (
                <Link
                  href="/websites/first-website"
                  className="no-underline flex justify-center items-center text-xl bg-brandColor  text-white hover:bg-white  hover:text-[#36106a] hover:ease-in-out border hover:border-brandColor p-2 px-6 rounded-lg  dark:hover:bg-slate-900 dark:hover:text-white dark:hover:border-white dark:bg-slate-900"
                >
                  View
                  <FaArrowRight fontSize="medium" className="ml-2 hover:text-[#36106a] " />
                </Link>
              )}
            </div>
          </div>
          {soldOut && (
            <div className="soldOutWrapper absolute top-2 left-2">
              <div className="text-xl font-bold text-red-600 z-40 border border-red-400  px-2 py-1 bg-red-100  dark:hover:bg-slate-900 dark:hover:text-white dark:hover:border-white">
                Sold Out
              </div>
            </div>
          )}
        </div>
      </Link>
    </>
  );
};

export default ListingCard;

{
  /* <Link href="/youtube-channels" className="no-underline" title="Hello">
        <div className="grid grid-cols-12 shadow-lg m-0 p-0 mt-5 z-30 bg-white dark:bg-slate-900 relative">
          <div className="col-span-4 p-0">
            <Image src={sampleImage} alt="google-analytics-image" width={520} className="p-1 m-auto" />
          </div>
          <div className="col-span-6 ">
            <div className="text-2xl font-semibold p-2 pl-3">
              Title: Main Heading In Here Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, in.
            </div>
            <div className="text-wrap text-xl p-2 pl-3 font-normal">
              Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi, aspernatur voluptas eum
              excepturi totam voluptates eius accusantium quibusdam eaque debitis vero. Reprehenderit, natus explicabo
              tempora iste quas libero distinctio.s
            </div>

            <div className="grid grid-cols-12 pt-5 gap-2">
              <SmallCards Query="Category" Answer="News Channel" colSpan={3} />
              <SmallCards Query="Subscribers" Answer="20k" colSpan={3} />
              <SmallCards Query="Monetization " Answer="Google Adsense" colSpan={3} />
              <SmallCards Query="Monthly Income" Answer="₹ 40,000" colSpan={3} />
            </div>
          </div>
          <div className="flex flex-col justify-around items-center col-span-2 border-l border-l-slate-300 dark:border-l-slate-600  border-dotted">
            <div className="text-xl font-semibold">Selling Price</div>
            <div className="text-3xl font-bold">₹ 40,000</div>
            <div className="">
              {soldOut ? (
                <Link
                  href="/cars"
                  className="no-underline flex justify-center items-center text-xl bg-brandColor text-white p-2 px-6 rounded-lg hover:bg-white  hover:text-[#36106a] hover:ease-in-out border hover:border-brandColor  dark:hover:bg-slate-900 dark:hover:text-white dark:hover:border-white "
                >
                  Sold Out
                  <FaSadTear fontSize="medium" className="ml-2 hover:text-[#36106a]" />
                </Link>
              ) : (
                <Link
                  href="/youtube-channels/first-yt-channel"
                  className="no-underline flex justify-center items-center text-xl bg-brandColor  text-white hover:bg-white  hover:text-[#36106a] hover:ease-in-out border hover:border-brandColor dark:hover:bg-slate-900 dark:hover:text-white dark:hover:border-white p-2 px-6 rounded-lg"
                >
                  View Channel
                  <FaArrowRight fontSize="medium" className="ml-2 hover:text-[#36106a] " />
                </Link>
              )}
            </div>
          </div>
          {soldOut && (
            <div className="soldOutWrapper absolute top-2 left-2">
              <div className="text-xl font-bold text-red-600 z-40 border border-red-400  px-2 py-1 bg-red-100">
                Sold Out
              </div>
            </div>
          )}
        </div>
      </Link> */
}
