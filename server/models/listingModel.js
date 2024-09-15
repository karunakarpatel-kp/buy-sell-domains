const { default: mongoose } = require("mongoose");

const ListingModel = mongoose.Schema({
  id: { type: String, unique: true, required: true },
  soldOut: { type: Boolean, required: true },
  websiteURL: { type: String, unique: true, required: true },
  title: { type: String, required: true },
  listDescription: { type: String, required: true },
  category: { type: String, required: true },
  registrationDate: { type: String, required: true },
  monetization: { type: String, required: true },
  monthlyIncome: { type: Number, required: true },
  sellingPrice: { type: String, required: true },
  pageDescripton: { type: String, required: true },
  pinVerified: { type: String, required: true },
  paymentReceived: { type: String, required: true },
  websiteName: { type: String, required: true },
  websiteType: { type: String, required: true },
  websiteStartingDate: { type: String, required: true },
  domainRenewalDate: { type: String, required: true },
  keywords: { type: String, required: true },
  platForm: { type: String, required: true },
  imagesForProof: { type: Array, required: true },
  aboutWebsite: { type: String, required: true },
  monetizationPlatform: { type: String, required: true },
  siteMonetizationDate: { type: String, required: true },
  monetizationCountry: { type: String, required: true },
  expectedMonthlyTraffic: { type: String, required: true },
  last1MonthEarning: { type: Number, required: true },
  last6MonthEarning: { type: Number, required: true },
});

module.exports = mongoose.model("ListingModel", ListingModel);
