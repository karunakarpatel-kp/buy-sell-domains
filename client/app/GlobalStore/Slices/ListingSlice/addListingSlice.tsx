import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface addListingServiceProps {
  id: string;
  soldOut: boolean;
  websiteURL: string;
  title: string;
  listDescription: string;
  category: string;
  registrationDate: string;
  monetization: string;
  monthlyIncome: string;
  sellingPrice: string;
  pageDescripton: string;
  pinVerified: string;
  paymentReceived: string;
  websiteName: string;
  websiteType: string;
  websiteStartingDate: string;
  domainRenewalDate: string;
  keywords: string;
  platForm: string;
  imagesForProof: string[];
  aboutWebsite: string;
  monetizationPlatform: string;
  siteMonetizationDate: string;
  monetizationCountry: string;
  expectedMonthlyTraffic: string;
  last1MonthEarning: string;
  last6MonthEarning: string;
  addListingService: {
    addListingServiceStatus: "PENDING" | "FULFILLED" | "REJECTED";
    addListingServiceData: any;
  };
  userSelectedList: any;
}

const initialState: addListingServiceProps = {
  id: "",
  soldOut: false,
  websiteURL: "",
  title: "",
  listDescription: "",
  category: "",
  registrationDate: "",
  monetization: "",
  monthlyIncome: "",
  sellingPrice: "",
  pageDescripton: "",
  pinVerified: "",
  paymentReceived: "",
  websiteName: "",
  websiteType: "",
  websiteStartingDate: "",
  domainRenewalDate: "",
  keywords: "",
  platForm: "",
  imagesForProof: [""],
  aboutWebsite: "",
  monetizationPlatform: "",
  siteMonetizationDate: "",
  monetizationCountry: "",
  expectedMonthlyTraffic: "",
  last1MonthEarning: "",
  last6MonthEarning: "",
  addListingService: {
    addListingServiceStatus: "PENDING",
    addListingServiceData: null,
  },
  userSelectedList: null,
};

export const addListingService = createAsyncThunk("addListingService", async (incomingObj, thunkAPI) => {
  const data = JSON.stringify(incomingObj);
  const config = {
    url: "http://localhost:5050/add-listing",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const resP = await axios(config);
    const dataResp = await resP.data;
    return dataResp;
  } catch (err: any) {
    return err.response.message;
  }
});

const addListingSlice = createSlice({
  name: "addListingSlice",
  initialState,
  reducers: {
    sendUserSelectedList: (state, action: PayloadAction<any>) => {
      state.userSelectedList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addListingService.pending, (state, action) => {
      state.addListingService.addListingServiceStatus = "PENDING";
      state.addListingService.addListingServiceData = null;
    });
    builder.addCase(addListingService.fulfilled, (state, action) => {
      state.addListingService.addListingServiceStatus = "FULFILLED";
      state.addListingService.addListingServiceData = action.payload;
    });
    builder.addCase(addListingService.rejected, (state, action) => {
      state.addListingService.addListingServiceStatus = "REJECTED";
      state.addListingService.addListingServiceData = null;
    });
  },
});

export const { sendUserSelectedList } = addListingSlice.actions;

export default addListingSlice.reducer;
