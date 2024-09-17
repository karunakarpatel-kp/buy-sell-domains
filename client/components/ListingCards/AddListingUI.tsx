"use client";
import { addListingService } from "app/GlobalStore/Slices/ListingSlice/addListingSlice";
import { sendNotificationToast } from "app/GlobalStore/Slices/UISlice/UISlice";
import { useAppDispatch, useAppSelector } from "app/GlobalStore/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const AddListingUI = () => {
  const dispatch = useAppDispatch();
  const navigate = useRouter();
  const userLoggedIn = useAppSelector((state) => state.loginSlice.loginServiceState.userLoggedIn);

  useEffect(() => {
    if (!userLoggedIn) {
      navigate.push("/login");
    }
  }, [userLoggedIn]);

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData: any = new FormData(form);

    const userEnteredAddListingObj = {
      id: uuidv4(),
      websiteURL: formData.get("websiteURL"),
      soldOut: false,
      title: formData.get("title"),
      listDescription: formData.get("shortDescription"),
      category: formData.get("websiteCategory"),
      registrationDate: formData.get("websiteRegistrationDate"),
      pageDescripton: formData.get("detailDescription"),
      pinVerified: formData.get("pinVerified"),
      paymentReceived: formData.get("paymentReceived"),
      websiteName: formData.get("websiteName"),
      websiteStartingDate: formData.get("websiteRegistrationDate"),
      domainRenewalDate: formData.get("domainRenewalDate"),
      platForm: formData.get("platformName"),
      monetizationPlatform: formData.get("monetizedPlatform"),
      expectedMonthlyTraffic: formData.get("monthlyTraffic"),
      last1MonthEarning: formData.get("lastOneMonthEarning"),
      last6MonthEarning: formData.get("lastSixMonthEarning"),
      // Final Obj
      monetization: "Google Adsense",
      websiteType: "Monetized Website",
      keywords: "Google, Karunakar Patel",
      siteMonetizationDate: "05/05/2024",
      monetizationCountry: "India",
      monthlyIncome: 20000,
      sellingPrice: 400000,
      imagesForProof: ["images", "image second"],
      aboutWebsite: "Google Adsense Approved Pin Verified 57$ Balance",
      monetized: formData.get("monetized"),
    };

    // dispatch(addListingService(userEnteredAddListingObj))
    dispatch(
      sendNotificationToast({ Toast: { message: "You have added your product successfully", variant: "success" } })
    );
    navigate.push("/");
  };
  return (
    <>
      <form onSubmit={onFormSubmit} name="login-form" id="addListingForm">
        <div className="flex flex-row gap-3 w-full flex-wrap md:flex-nowrap lg:flex-nowrap">
          <div className="w-full">
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1 mt-3">
                First Name
              </span>
              <input
                type="text"
                alt="FirstName"
                name="FirstName"
                title="FirstName"
                autoComplete="false"
                required
                placeholder="Please Enter FirstName"
                className="mt-1 px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
              />
            </label>
          </div>
          <div className="w-full">
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1 mt-3">
                Last Name
              </span>
              <input
                type="text"
                alt="lastName"
                name="title"
                title="Last Name"
                autoComplete="false"
                required
                placeholder="Please Enter LastName"
                className="mt-1 px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
              />
            </label>
          </div>
        </div>
        <label className="block">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1 mt-3">
            Title
          </span>
          <input
            type="text"
            alt="Title"
            name="title"
            title="Title"
            autoComplete="false"
            required
            placeholder="Please Enter Title"
            className="mt-1 px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
          />
        </label>

        <label className="block">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1 mt-3">
            Short Description
          </span>
          <textarea
            name="shorDescription"
            title="Short Description"
            autoComplete="false"
            required
            placeholder="Please Enter Short Description"
            className="resize-y mt-1 px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
          ></textarea>
        </label>

        <label className="block">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1 mt-3">
            Detail Description
          </span>
          <textarea
            name="detailDescription"
            title="Detail Description"
            autoComplete="false"
            required
            placeholder="Please Enter Detail Description"
            className="resize-y mt-1 px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1 h-48"
          ></textarea>
        </label>

        <div className="flex flex-row gap-3 w-full flex-wrap md:flex-nowrap lg:flex-nowrap">
          <div className="w-full">
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1 mt-3">
                Website Name
              </span>
              <input
                type="text"
                alt="Website Name"
                name="websiteName"
                title="Website Name"
                autoComplete="false"
                required
                placeholder="Please Enter Website Name"
                className="mt-1 px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
              />
            </label>
          </div>
          <div className="w-full">
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1 mt-3">
                Website URL
              </span>
              <input
                type="url"
                alt="website url"
                name="websiteURL"
                title="Website URL"
                autoComplete="false"
                required
                placeholder="Please Enter Website URL"
                className="mt-1 px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
              />
            </label>
          </div>

          <div className="w-full">
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1 mt-3">
                Website Registration Date
              </span>
              <input
                type="date"
                alt="Website Registration Date"
                name="websiteRegistrationDate"
                title="Website Registration Date"
                autoComplete="false"
                required
                placeholder="Please Enter Website Registration Date"
                className="mt-1 px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
              />
            </label>
          </div>
        </div>
        {/*  */}

        <div className="flex flex-row gap-3 w-full flex-wrap md:flex-nowrap lg:flex-nowrap">
          <div className="w-full">
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1 mt-3">
                Website Category
              </span>
              <input
                type="text"
                alt="Website Category"
                name="websiteCategory"
                title="Website Category"
                autoComplete="false"
                required
                placeholder="Personal Blog/ News Website"
                className="mt-1 px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
              />
            </label>
          </div>
          <div className="w-full">
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1 mt-3">
                Platform Name
              </span>
              <input
                type="text"
                alt="Platform Name"
                name="platformName"
                title="Platform Name"
                autoComplete="false"
                required
                placeholder="Wordpress / wix / custom"
                className="mt-1 px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-row gap-3 w-full flex-wrap md:flex-nowrap lg:flex-nowrap">
          <div className="w-full">
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1 mt-3">
                Domain Renewal Date
              </span>
              <input
                type="date"
                alt="Website Renewal Date"
                name="domainRenewalDate"
                title="Domain Renewal Date"
                autoComplete="false"
                required
                placeholder="Please Enter Domain Renewal Date"
                className="mt-1 px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
              />
            </label>
          </div>

          <div className="w-full">
            <label className="block mt-3" htmlFor="select-buyer-seller">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1">
                Monetized?
              </span>
              <select
                required
                name="monetized"
                id="monetized"
                className="mt-1 px-3 py-2 bg-white border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
              >
                <option value="None">None</option>
                <option value="buyer">Yes</option>
                <option value="seller">No</option>
              </select>
            </label>
          </div>

          <div className="w-full">
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1 mt-3">
                Monetized Platform
              </span>
              <input
                type="text"
                alt="Monetized Platform"
                name="monetizedPlatform"
                title="Monetized Platform"
                autoComplete="false"
                required
                placeholder=" Google Adsense / other"
                className="mt-1 px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-row gap-3 w-full flex-wrap md:flex-nowrap lg:flex-nowrap">
          <div className="w-full">
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1 mt-3">
                Monthly Traffic
              </span>
              <input
                type="number"
                alt="Monthly Traffic"
                name="monthlyTraffic"
                title="Monthly Traffic"
                autoComplete="false"
                required
                placeholder="50k or 100k"
                className="mt-1 px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
              />
            </label>
          </div>

          <div className="w-full">
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1 mt-3">
                Last 1 Month Earnings
              </span>
              <input
                type="number"
                alt="last 1 Month Earning"
                name="lastOneMonthEarning "
                title="Last 1 Month Earning"
                autoComplete="false"
                required
                placeholder="50k or 100k"
                className="mt-1 px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
              />
            </label>
          </div>

          <div className="w-full">
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1 mt-3">
                Last 6 Month Earnings
              </span>
              <input
                type="number"
                alt="last 6 Month Earning"
                name="lastSixMonthEarning"
                title="Last 6 Month Earning"
                autoComplete="false"
                required
                placeholder="1000k or 20000k"
                className="mt-1 px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-row gap-3 w-full flex-wrap md:flex-nowrap lg:flex-nowrap">
          <div className="w-full">
            <label className="block mt-3" htmlFor="select-buyer-seller">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1">
                Payment Received?
              </span>
              <select
                required
                name="paymentReceived"
                id="payment-received"
                className="mt-1 px-3 py-2 bg-white border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
              >
                <option value="None">None</option>
                <option value="buyer">Yes</option>
                <option value="seller">No</option>
              </select>
            </label>
          </div>

          <div className="w-full">
            <label className="block mt-3" htmlFor="select-buyer-seller">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1">
                Pin Verified?
              </span>
              <select
                required
                name="pinVerified"
                id="pin-verified"
                className="mt-1 px-3 py-2 bg-white border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
              >
                <option value="None">None</option>
                <option value="buyer">Yes</option>
                <option value="seller">No</option>
              </select>
            </label>
          </div>

          <div className="w-full">
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1 mt-3">
                Website Moentization Date
              </span>
              <input
                type="date"
                alt="Website Monetization Date"
                name="Website Monetization Date"
                title="Website Monetization Date"
                autoComplete="false"
                required
                placeholder="Please Enter Website Monetization Date"
                className="mt-1 px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
              />
            </label>
          </div>
        </div>

        {/* Submit */}
        <label className="block mt-3">
          <input
            type="submit"
            name="Login"
            autoComplete="false"
            required
            className="px-3 py-2 bg-brandColor block  rounded-md focus:ring-1 text-white w-3/6 mt-6 mb-3 font-semibold text-lg m-auto cursor-pointer hover:bg-white hover:text-brandColor hover:border-brandColor hover:border"
            placeholder="Login"
          />
        </label>
      </form>
    </>
  );
};

export default AddListingUI;
