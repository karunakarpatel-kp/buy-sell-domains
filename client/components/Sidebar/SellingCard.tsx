import { createRZPayOrder } from "app/GlobalStore/Slices/RazorPaySlice/rzPayOrderSlice";
import { useAppDispatch, useAppSelector } from "app/GlobalStore/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FaArrowRight, FaSadTear } from "react-icons/fa";

const SellingCard = () => {
  const rzPaymentOrder = useAppSelector((state) => state.rzPayOrderSlice.rzPayOrder.paymentOrder);
  let soldOut = false;
  const dispatch = useAppDispatch();
  const navigate = useRouter();

  const onBuyNowClickHandler = () => {
    const orderCartObj = {
      amount: 5000,
      currency: "INR",
      receipt: "Karna1",
    };
    dispatch(createRZPayOrder(orderCartObj));
  };

  useEffect(() => {
    if (rzPaymentOrder !== null) {
      navigate.push("/checkout");
    }
  }, [rzPaymentOrder]);

  return (
    <div className="flex flex-col  justify-between   border border-slate-300 shadow-sm p-2 px-8 py-4">
      <div className="text-2xl font-semibold mb-4">Selling Price</div>
      <div className="text-3xl font-bold mb-4">₹ 40,000</div>
      <span className="border border-brandColor border-dotted w-3/4 my-2 m-auto"></span>

      <div className="text-2xl font-semibold mb-4">Suraj Commission</div>
      <div className="text-3xl font-bold mb-4">₹ 4,000</div>
      <span className="border border-brandColor border-dotted w-3/4 my-2 m-auto"></span>

      <div className="mt-2">
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

        <div className="mt-4">
          <Link
            href="/websites/first-website"
            className="no-underline flex justify-center items-center text-xl bg-brandColor  text-white hover:bg-white  hover:text-[#36106a] hover:ease-in-out border hover:border-brandColor p-2 px-6 rounded-lg"
            onClick={onBuyNowClickHandler}
          >
            Buy Now
            <FaArrowRight fontSize="medium" className="ml-2 hover:text-[#36106a]  animate-pulse" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellingCard;
