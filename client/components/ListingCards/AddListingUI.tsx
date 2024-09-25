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
      soldOut: false,
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phoneNumber: formData.get("phoneNumber"),
      title: formData.get("title"),
      shortDescription: formData.get("shortDescription"),
      detailDescription: formData.get("detailDescription"),
      websiteURL: formData.get("websiteURL"),
      websiteRegistrationDate: formData.get("websiteRegistrationDate"),
      websiteName: formData.get("websiteName"),
      websiteCategory: formData.get("websiteCategory"),
      websitePlatform: formData.get("websitePlatform"),
      domainSeller: formData.get("domainSeller"),
      domainRegistrationDate: formData.get("domainRegistrationDate"),
      domainRenewalDate: formData.get("domainRenewalDate"),
      domainKeywords: formData.get("domainKeywords"),
      hostingPlatform: formData.get("hostingPlatform"),
      isWebsiteMonetized: formData.get("isWebsiteMonetized"),
      monetizationPlatform: formData.get("monetizationPlatform"),
      websiteMonetizationDate: formData.get("websiteMonetizationDate"),
      monetizationCountry: formData.get("monetizationCountry"),
      pinVerified: formData.get("pinVerified"),
      lastMonthTraffic: formData.get("lastMonthTraffic"),
      lastSixMonthTraffic: formData.get("lastSixMonthTraffic"),
      lastMonthEarnings: formData.get("lastMonthEarnings"),
      paymentReceived: formData.get("paymentReceived"),
      lastSixMonthEarnings: formData.get("lastSixMonthEarnings"),
      domainSellingPrice: formData.get("domainSellingPrice"),
    };

    dispatch(addListingService(userEnteredAddListingObj));

    navigate.push("/");
  };
  return (
    <>
      <form onSubmit={onFormSubmit} name="login-form" id="addListingForm">
        {/* Basic Details */}
        <div className="flex flex-row gap-3 w-full flex-wrap md:flex-nowrap lg:flex-nowrap bg-slate-50 p-3">
          <div className="w-full">
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1 mt-3">
                Full Name
              </span>
              <input
                type="text"
                alt="Full Name"
                name="fullName"
                title="Full Name"
                autoComplete="false"
                required
                placeholder="Please Enter Full Name"
                className="mt-1 px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
              />
            </label>
          </div>
          <div className="w-full">
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1 mt-3">
                Email
              </span>
              <input
                type="email"
                alt="email"
                name="email"
                title="Email "
                autoComplete="false"
                required
                placeholder="Please Enter Your Email Address"
                className="mt-1 px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
              />
            </label>
          </div>
          <div className="w-full">
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1 mt-3">
                Phone Number
              </span>
              <input
                type="number"
                alt="phoneNumber"
                name="phoneNumber"
                title="phoneNumber"
                autoComplete="false"
                required
                placeholder="Please Enter Your Phone Number"
                className="mt-1 px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-row gap-3 w-full flex-wrap md:flex-nowrap lg:flex-nowrap bg-slate-50 p-3 mt-2">
          <label className="w-full">
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
        </div>
        {/* description */}
        <div className="flex flex-row gap-3 w-full flex-wrap md:flex-nowrap lg:flex-nowrap bg-slate-50 p-3 mt-2">
          <label className="w-full">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1 mt-3">
              Short Description
            </span>
            <textarea
              name="shortDescription"
              title="Short Description"
              autoComplete="false"
              required
              placeholder="Please Enter Short Description"
              className="resize-y mt-1 px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
            ></textarea>
          </label>
        </div>

        {/* detail Description */}
        <div className="flex flex-row gap-3 w-full flex-wrap md:flex-nowrap lg:flex-nowrap bg-slate-50 p-3 mt-2">
          <label className="w-full">
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
        </div>

        {/* Website Details */}
        <div className="flex flex-row gap-3 w-full flex-wrap md:flex-nowrap lg:flex-nowrap bg-slate-50 p-3 mt-2">
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
                defaultValue={"https://"}
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
        </div>

        {/* Website Category & Platform */}
        <div className="flex flex-row gap-3 w-full flex-wrap md:flex-nowrap lg:flex-nowrap bg-slate-50 p-3 mt-2">
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
                Website Platform
              </span>
              <input
                type="text"
                alt="Website Platform"
                name="websitePlatform"
                title="Website Platform"
                autoComplete="false"
                required
                placeholder="Wordpress / wix / custom"
                className="mt-1 px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
              />
            </label>
          </div>
        </div>

        {/* Domain Details  */}
        <div className="flex flex-row gap-3 w-full flex-wrap md:flex-nowrap lg:flex-nowrap bg-slate-50 p-3 mt-2">
          <div className="w-full">
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1 mt-3">
                Domain Seller
              </span>
              <input
                type="text"
                alt="Domain Seller"
                name="domainSeller"
                title="Domain Seller"
                autoComplete="false"
                required
                placeholder="Godaddy or Hostinger etc..."
                className="mt-1 px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
              />
            </label>
          </div>

          <div className="w-full">
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1 mt-3">
                Domain Registration Date
              </span>
              <input
                type="date"
                alt="Domain Registration Date"
                name="domainRegistrationDate"
                title="Domain Registration Date"
                autoComplete="false"
                required
                placeholder="Domain Registration Date"
                className="mt-1 px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
              />
            </label>
          </div>
          <div className="w-full">
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1 mt-3">
                Domain Renewal Date
              </span>
              <input
                type="date"
                alt="Domain Renewal Date"
                name="domainRenewalDate"
                title="Domain Renewal Date"
                autoComplete="false"
                required
                placeholder="Domain Renewal Date"
                className="mt-1 px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
              />
            </label>
          </div>
        </div>

        {/* domainKeywords, hostingPlatform */}
        <div className="flex flex-row gap-3 w-full flex-wrap md:flex-nowrap lg:flex-nowrap bg-slate-50 p-3 mt-2">
          <div className="w-full">
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1 mt-3">
                Domain Keywords
              </span>
              <input
                type="text"
                alt="Domain Keywords"
                name="domainKeywords"
                title="Domain Keywords"
                autoComplete="false"
                required
                placeholder="Please Enter Domain Keywords"
                className="mt-1 px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
              />
            </label>
          </div>

          <div className="w-full">
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1 mt-3">
                Hosting Platform
              </span>
              <input
                type="text"
                alt="Hosting Platform"
                name="hostingPlatform"
                title="Hosting Platform"
                autoComplete="false"
                required
                placeholder=" Hostinger, Godaddy etc..."
                className="mt-1 px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
              />
            </label>
          </div>
        </div>

        {/* Google Adsense */}
        <div className="flex flex-row gap-3 w-full flex-wrap md:flex-nowrap lg:flex-nowrap bg-slate-50 p-3 mt-2">
          <div className="w-full">
            <label className="block mt-3" htmlFor="select-buyer-seller">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1">
                Is Website Monetized?
              </span>
              <select
                required
                name="isWebsiteMonetized"
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
                Monetization Platform
              </span>
              <input
                type="text"
                alt="Monetization Platform"
                name="monetizationPlatform"
                title="Monetization Platform"
                autoComplete="false"
                required
                placeholder=" Google Adsense / other"
                className="mt-1 px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
              />
            </label>
          </div>

          <div className="w-full">
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1 mt-3">
                Website Monetization Date
              </span>
              <input
                type="date"
                alt="Website Monetization Date"
                name="websiteMonetizationDate"
                title="Website Monetization Date"
                autoComplete="false"
                required
                placeholder=" Please Enter Website Monetization Date"
                className="mt-1 px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
              />
            </label>
          </div>
        </div>

        {/* Monetization country and pin Verified */}
        <div className="flex flex-row gap-3 w-full flex-wrap md:flex-nowrap lg:flex-nowrap bg-slate-50 p-3 mt-2">
          <div className="w-full">
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1 mt-3">
                Monetization Country
              </span>
              <input
                type="text"
                alt="Monetization Country"
                name="monetizationCountry"
                title="Monetization Country"
                autoComplete="false"
                required
                placeholder=" India / USA etc..."
                className="mt-1 px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
              />
            </label>
          </div>

          <div className="w-full">
            <label className="block mt-3" htmlFor="select-buyer-seller">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1">
                Pin Verified
              </span>
              <select
                required
                name="pinVerified"
                id="pinVerified"
                className="mt-1 px-3 py-2 bg-white border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
              >
                <option value="None">None</option>
                <option value="buyer">Yes</option>
                <option value="seller">No</option>
              </select>
            </label>
          </div>
        </div>

        {/*  Traffic */}

        <div className="flex flex-row gap-3 w-full flex-wrap md:flex-nowrap lg:flex-nowrap bg-slate-50 p-3 mt-2">
          <div className="w-full">
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1 mt-3">
                Last Month Traffic
              </span>
              <input
                type="number"
                alt="Last Month Traffic"
                name="lastMonthTraffic"
                title="Last Month traffic"
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
                Last 6 Month Traffic
              </span>
              <input
                type="number"
                alt="last 6 Month Traffic"
                name="lastSixMonthTraffic"
                title="Last 6 Month Traffic"
                autoComplete="false"
                required
                placeholder="500k or 1000k"
                className="mt-1 px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
              />
            </label>
          </div>
        </div>

        {/* Earnings */}

        <div className="flex flex-row gap-3 w-full flex-wrap md:flex-nowrap lg:flex-nowrap bg-slate-50 p-3 mt-2">
          <div className="w-full">
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1 mt-3">
                Last Month Earnings
              </span>
              <input
                type="number"
                alt="last Month Earnings"
                name="lastMonthEarnings"
                title="Last Month Earning"
                autoComplete="false"
                required
                placeholder="1000k or 20000k"
                className="mt-1 px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
              />
            </label>
          </div>
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
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1 mt-3">
                Last 6 Month Earnings
              </span>
              <input
                type="number"
                alt="last 6 Month Earnings"
                name="lastSixMonthEarnings"
                title="Last Six Month Earnings"
                autoComplete="false"
                required
                placeholder="1000k or 20000k"
                className="mt-1 px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-row gap-3 w-full flex-wrap md:flex-nowrap lg:flex-nowrap bg-slate-50 p-3 mt-2">
          <div className="w-full">
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1 mt-3 text-xl">
                Domain Selling Price
              </span>
              <input
                type="number"
                alt="Domain Selling Price (In INR)"
                name="domainSellingPrice"
                title="Domain Selling Price (In Rupees)"
                autoComplete="false"
                required
                placeholder="100 or 20000 Rupees"
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
