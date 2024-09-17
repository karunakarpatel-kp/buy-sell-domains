"use client";
import React from "react";
import { FaCircleNotch } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { FaCircleExclamation } from "react-icons/fa6";

interface SubscriptionCardProps {
  title: string;
  price: number;
  list: { available: boolean; description: string }[];
  sellerChosenSubscriptionCard: any;
}

const SubscriptionCard = (props: SubscriptionCardProps) => {
  const { title, price, list } = props;
  return (
    <div className="border border-slate-200 shadow-md ">
      <div className={`headTitle border border-slate-200 text-center text-white p-6 bg-brandColor`}>
        <h3 className="text-white text-3xl font-semibold m-0 mb-4">{title}</h3>
        <p className="text-md font-semibold mb-0 text-slate-100">For 365 days</p>
      </div>
      <div className="price bg-slate-100 text-center text-4xl font-bold py-7 ">{`$${price}`}</div>

      <div className="feature-list border-0 border-yellow-500">
        <ol className="list-none  m-0 p-0 divide-y divide-slate-200  last-of-type:border-b last-of-type:border-b-slate-200">
          {props.list.map((singleItem, index: any) => {
            return (
              <li key={index} className={`py-2 ${singleItem.available ? "" : "decoration-brandColor line-through"}`}>
                <span className="flex items-center  ">
                  <span className=" pr-4 pl-2">
                    {singleItem.available ? (
                      <MdVerified className="text-brandColor dark:text-white text-xl" />
                    ) : (
                      <FaCircleExclamation className="text-brandColor dark:text-white text-xl" />
                    )}
                  </span>
                  <span className="text-lg font-medium">{singleItem.description}</span>
                </span>
              </li>
            );
          })}
        </ol>
        <button
          onClick={() => props.sellerChosenSubscriptionCard({ title, price, list })}
          className={`button  no-underline flex justify-center items-center text-xl bg-brandColor text-white cursor-pointer hover:ease-in-out border border-brandColor p-2 px-6 rounded-lg hover:bg-white hover:text-brandColor w-3/4 m-auto my-4`}
        >
          Purchase Now
        </button>
      </div>
    </div>
  );
};

export default SubscriptionCard;
