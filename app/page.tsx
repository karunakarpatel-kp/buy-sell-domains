import { SEO_OBJ, blogPostsObj } from "Essential";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CustomMetaData } from "../components/MetaData/CustomMetaData";
import ListingCard from "@Components/ListingCards/ListingCard";
import RainfallAnimation from "@Components/Animations/RainfallAnimation";

export const metadata: any = CustomMetaData({ presentURL: SEO_OBJ.HOME_PAGE.absoluteURL });

const Home = () => {
  return (
    <>
      {/* Confetti */}
      <RainfallAnimation />
      <div className="border-0 border-black ">
        <ListingCard />
      </div>
    </>
  );
};

export default Home;
