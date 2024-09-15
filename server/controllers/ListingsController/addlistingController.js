const asyncHandler = require("express-async-handler");
const listingModel = require("../../models/listingModel");

const addListingController = asyncHandler(async (req, res, next) => {
  const {
    id,
    soldOut,
    websiteURL,
    title,
    listDescription,
    category,
    registrationDate,
    monetization,
    monthlyIncome,
    sellingPrice,
    pageDescripton,
    pinVerified,
    paymentReceived,
    websiteName,
    websiteType,
    websiteStartingDate,
    domainRenewalDate,
    keywords,
    platForm,
    imagesForProof,
    aboutWebsite,
    monetizationPlatform,
    siteMonetizationDate,
    monetizationCountry,
    expectedMonthlyTraffic,
    last1MonthEarning,
    last6MonthEarning,
  } = req.body;

  try {
    const addListing = new listingModel({
      id,
      soldOut,
      websiteURL,
      title,
      listDescription,
      category,
      registrationDate,
      monetization,
      monthlyIncome,
      sellingPrice,
      pageDescripton,
      pinVerified,
      paymentReceived,
      websiteName,
      websiteType,
      websiteStartingDate,
      domainRenewalDate,
      keywords,
      platForm,
      imagesForProof,
      aboutWebsite,
      monetizationPlatform,
      siteMonetizationDate,
      monetizationCountry,
      expectedMonthlyTraffic,
      last1MonthEarning,
      last6MonthEarning,
    });
    const savingListing = await addListing.save();
    res.send(savingListing);
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = addListingController;
