import TypedAnimation from "@Components/Animations/TypedAnimation";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaSadTear } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const Sidebar = () => {
  let soldOut = true;
  return (
    <section className=" col-span-12 md:col-span-4 lg:col-span-4 border-0 border-red-700 p-3 px-5">
      {/* First Card */}
      <div className="flex flex-col  justify-between   border border-slate-300 shadow-sm p-2 px-8 py-4">
        <div className="text-2xl font-semibold mb-4">Selling Price</div>
        <div className="text-3xl font-bold mb-4">₹ 40,000</div>
        <span className="border border-brandColor border-dotted w-3/4 my-2 m-auto"></span>

        <div className="text-2xl font-semibold mb-4">Suraj Commission</div>
        <div className="text-3xl font-bold mb-4">₹ 4,000</div>
        <span className="border border-brandColor border-dotted w-3/4 my-2 m-auto"></span>

        <div className=" mt-2">
          {soldOut ? (
            <Link
              href="/cars"
              className="no-underline flex justify-center items-center text-xl bg-brandColor text-white p-2 px-6 rounded-lg hover:bg-white  hover:text-[#36106a] hover:ease-in-out border hover:border-brandColor "
            >
              Sold Out
              <FaSadTear fontSize="medium" className="ml-2 hover:text-[#36106a]" />
            </Link>
          ) : (
            <Link
              href="/websites/first-website"
              className="no-underline flex justify-center items-center text-xl bg-white  text-[#36106a] hover:ease-in-out border border-brandColor p-2 px-6 rounded-lg hover:bg-brandColor hover:text-white"
            >
              Contact Suraj Sharma
              <FaArrowRight fontSize="medium" className="ml-2 hover:text-[#36106a] " />
            </Link>
          )}
          <div className="mt-4">
            <Link
              href="/websites/first-website"
              className="no-underline flex justify-center items-center text-xl bg-brandColor  text-white hover:bg-white  hover:text-[#36106a] hover:ease-in-out border hover:border-brandColor p-2 px-6 rounded-lg"
            >
              Contact Via WhatsApp
              <FaArrowRight fontSize="medium" className="ml-2 hover:text-[#36106a] " />
            </Link>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className="flex flex-col justify-between  border border-slate-300 shadow-sm p-2 px-8 py-4 mt-6">
        <div className="text-2xl font-semibold mb-4 ">Seller Information</div>
        <span className="border border-brandColor border-dotted w-3/4 dark:border-white "></span>
        <ol className="list-disc">
          <li>
            <span className="flex items-center ">
              <span className="pr-3">Email Verified</span>
              <span>
                <MdVerified className="text-brandColor dark:text-white" />
              </span>
            </span>
          </li>
          <li>
            <span className="flex items-center ">
              <span className="pr-3">Phone Number Verified</span>
              <span>
                <MdVerified className="text-brandColor dark:text-white" />
              </span>
            </span>
          </li>
          <li>
            <span className="flex items-center ">
              <span className="pr-3">Contact Infomration Verified</span>
              <span>
                <MdVerified className="text-brandColor dark:text-white" />
              </span>
            </span>
          </li>
          <li>
            <span className="flex items-center ">
              <span className="pr-3">Governament ID Verified</span>
              <span>
                <MdVerified className="text-brandColor dark:text-white" />
              </span>
            </span>
          </li>
        </ol>
      </div>

      {/* Third Card */}
      <div className="flex flex-col justify-between  border border-slate-300 shadow-sm p-2 px-8 py-4 mt-6">
        <div className="text-2xl font-semibold mb-4">International Payments</div>
        <span className="border border-brandColor border-dotted w-3/4 dark:border-white "></span>
        <ol className="list-disc">
          <li>
            <span className="flex items-center ">
              <span className="pr-3">Paypal Verified</span>
              <span>
                <MdVerified className="text-brandColor dark:text-white" />
              </span>
            </span>
          </li>
          <p>
            If you are From united states , united kingdom , Pakistan & Any other country still you can buy and sell
            websites with www.google.com, We have manual payment option for international clients. For More Info
            Whatsapp us at +919999999999.
          </p>
        </ol>
      </div>

      {/* Fourth Card */}
      <div className="flex flex-col justify-between  border border-slate-300 shadow-sm p-2 px-8 py-4 mt-6">
        <div className="text-2xl font-semibold mb-4">Payment Methods</div>
        <span className="border border-brandColor border-dotted w-3/4 dark:border-white "></span>
        <ol className="list-disc">
          <li>
            <span className="flex items-center ">
              <span className="pr-3">UPI </span>
              <span>
                <MdVerified className="text-brandColor dark:text-white" />
              </span>
            </span>
          </li>
          <li>
            <span className="flex items-center ">
              <span className="pr-3">Bank Transfer</span>
              <span>
                <MdVerified className="text-brandColor dark:text-white" />
              </span>
            </span>
          </li>
          <li>
            <span className="flex items-center ">
              <span className="">Paypal [12% Extra Fee on Paypal, Payoneer, Binance]</span>
              <span>
                <MdVerified className="text-brandColor dark:text-white" />
              </span>
            </span>
          </li>
        </ol>
      </div>

      {/* Fifth Card */}
      <div className="flex flex-col justify-between  border border-slate-300 shadow-sm p-2 px-8 py-4 mt-6">
        <div className="text-2xl font-semibold mb-4">Advice From Suraj Sharma</div>
        <span className="border border-brandColor border-dotted w-3/4 dark:border-white "></span>
        <p>
          For Both Seller and Buyer Safety we recommend make payment via flippingTraders only, If the Buyer or Seller is
          asking for direct payment tell us about that we will take strict action, to avoid Scams Always do the payment
          via the above Buy Now Button.
        </p>
      </div>

      {/* Sixth Card */}
      <div className="flex flex-col justify-between  border border-slate-300 shadow-sm p-2 px-8 py-4 mt-6">
        <div className="text-2xl font-semibold mb-4">Suraj Sharma Legal Advice</div>
        <span className="border border-brandColor border-dotted w-3/4 "></span>
        <p>
          Suraj Sharma Always Care about buyers and sellers and we completely monitor every single deal and messages to
          make our platform more secure
        </p>
      </div>

      {/* Sixth Card */}
      <div className="flex flex-col justify-between  border border-slate-300 shadow-sm p-2 px-8 py-4 mt-6">
        <div className="text-2xl font-semibold mb-4">Suraj Sharma Advice</div>
        <span className="border border-brandColor border-dotted w-3/4 "></span>
        <TypedAnimation />
      </div>
    </section>
  );
};

export default Sidebar;
