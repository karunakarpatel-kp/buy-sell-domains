import React from "react";
import SubscriptionCard from "./SubscriptionCard";

export const BasicCardList = [
  {
    available: true,
    description: "Paypal [12% Extra Fee on Paypal, Payoneer, Binance]",
  },
  {
    available: false,
    description: "Paypal [12% Extra Fee on Paypal, Payoneer, Binance]",
  },
  {
    available: true,
    description: "Paypal [12% Extra Fee on Paypal, Payoneer, Binance]",
  },
  {
    available: true,
    description: "Paypal [12% Extra Fee on Paypal, Payoneer, Binance]",
  },
  {
    available: false,
    description: "Paypal ",
  },
];

const SubscriptionContainer = () => {
  return (
    <div className="border-0 border-slate-200 grid grid-cols-12 gap-2">
      <div className="col-span-12 lg:col-span-3 mx-3 lg:mx-0">
        <SubscriptionCard title="Basic" price={9999} list={BasicCardList} />
      </div>
      <div className="col-span-12 lg:col-span-3 mx-3 lg:mx-0">
        <SubscriptionCard title="Basic" price={9999} list={BasicCardList} />
      </div>
      <div className="col-span-12 lg:col-span-3 mx-3 lg:mx-0">
        <SubscriptionCard title="Basic" price={9999} list={BasicCardList} />
      </div>
      <div className="col-span-12 lg:col-span-3 mx-3 lg:mx-0">
        <SubscriptionCard title="Basic" price={9999} list={BasicCardList} />
      </div>
    </div>
  );
};

export default SubscriptionContainer;
