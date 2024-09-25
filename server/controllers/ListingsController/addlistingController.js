const asyncHandler = require("express-async-handler");
const listingModel = require("../../models/listingModel");

const addListingController = asyncHandler(async (req, res, next) => {
  const {
    soldOut,
    id,
    fullName,
    email,
    phoneNumber,
    title,
    shortDescription,
    detailDescription,
    websiteURL,
    websiteRegistrationDate,
    websiteName,
    websiteCategory,
    websitePlatform,
    domainSeller,
    domainRegistrationDate,
    domainRenewalDate,
    domainKeywords,
    hostingPlatform,
    isWebsiteMonetized,
    monetizationPlatform,
    websiteMonetizationDate,
    monetizationCountry,
    pinVerified,
    lastMonthTraffic,
    lastSixMonthTraffic,
    lastMonthEarnings,
    paymentReceived,
    lastSixMonthEarnings,
    domainSellingPrice,
  } = req.body;

  try {
    const addListing = new listingModel({
      soldOut,
      id,
      fullName,
      email,
      phoneNumber,
      title,
      shortDescription,
      detailDescription,
      websiteURL,
      websiteRegistrationDate,
      websiteName,
      websiteCategory,
      websitePlatform,
      domainSeller,
      domainRegistrationDate,
      domainRenewalDate,
      domainKeywords,
      hostingPlatform,
      isWebsiteMonetized,
      monetizationPlatform,
      websiteMonetizationDate,
      monetizationCountry,
      pinVerified,
      lastMonthTraffic,
      lastSixMonthTraffic,
      lastMonthEarnings,
      paymentReceived,
      lastSixMonthEarnings,
      domainSellingPrice,
    });
    const savingListing = await addListing.save();
    res.send({ data: savingListing, message: "Your product has been added successfully" });
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = addListingController;
