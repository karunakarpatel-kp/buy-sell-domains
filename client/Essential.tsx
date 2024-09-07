import TataWelcomImage from "@Public/safari-overview-d-banner-27-23.jpg";
import vehicleMasti from "@Public/welcome-vehiclemasti.png";

export const DateMonthYearForBlogPost = (lastUpdateTime: string) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(lastUpdateTime);
  const day = date.getDate();
  const month = months[date.getMonth()]; // Months are 0-based in JavaScript Dates
  const year = date.getFullYear();
  // console.log(`${day}/${month}/${year}`, "DATE");
  return `${day}, ${month}, ${year}`;
};

export const dynamicLastUpdatedTime = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Adding 1 because months are 0-indexed
  const day = String(currentDate.getDate()).padStart(2, "0");
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+05:30`;
  return formattedDate;
};

interface Base_Url_Props {
  HOME_PAGE_BASE_URL: string;
  CARS_PAGE_BASE_URL: string;
  TATA_PAGE_BASE_URL: string;
}

export const BASE_URLS: Base_Url_Props = {
  HOME_PAGE_BASE_URL: process.env.HOME_PAGE_BASE_URL!,
  CARS_PAGE_BASE_URL: `${process.env.HOME_PAGE_BASE_URL}/cars`,
  TATA_PAGE_BASE_URL: `${process.env.HOME_PAGE_BASE_URL}/cars/tata`,
  // KIA_PAGE_BASE_URL: "https://www.vehiclemasti.com/cars/kia",
};

interface Blog_Post_URL_Props {
  HOME_PAGE_ABSOLUTE: string;
  HOME_PAGE_RELATIVE: string;

  PRIVACY_PAGE_ABSOLUTE: string;
  PRIVACY_PAGE_RELATIVE: string;

  CONTACT_PAGE_ABSOLUTE: string;
  CONTACT_PAGE_RELATIVE: string;

  DISCLAIMER_PAGE_ABSOLUTE: string;
  DISCLAIMER_PAGE_RELATIVE: string;

  CARS_HOME_PAGE_ABSOLUTE: string;
  CARS_HOME_PAGE_RELATIVE: string;

  TATA_SAFARI_BLOG_PAGE_ABSOLUTE: string;
  TATA_SAFARI_BLOG_PAGE_RELATIVE: string;
}

export const blogPostURLS: Blog_Post_URL_Props = {
  HOME_PAGE_ABSOLUTE: BASE_URLS.HOME_PAGE_BASE_URL,
  HOME_PAGE_RELATIVE: "/",

  PRIVACY_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/privacy`,
  PRIVACY_PAGE_RELATIVE: "/privacy",

  CONTACT_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/contact`,
  CONTACT_PAGE_RELATIVE: "/contact",

  DISCLAIMER_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/disclaimer`,
  DISCLAIMER_PAGE_RELATIVE: "/disclaimer",

  CARS_HOME_PAGE_ABSOLUTE: `${BASE_URLS.CARS_PAGE_BASE_URL}`,
  CARS_HOME_PAGE_RELATIVE: "/cars",

  TATA_SAFARI_BLOG_PAGE_ABSOLUTE: `${BASE_URLS.TATA_PAGE_BASE_URL}/tata_safari`,
  TATA_SAFARI_BLOG_PAGE_RELATIVE: "/cars/tata/tata_safari",
};

interface Tag {
  tag: string;
  href: string;
}

interface BlogPage {
  absoluteURL: string;
  relativeURL: string;
  title: string;
  description: string;
  lastUpdateTime: string;
  publishedTime: string;
  featuredImage: any;
  featuredImageAltText: string;
  ogImageURL: string;
  changeFrequency: "weekly" | "always" | "never" | "daily" | "monthly";
  category?: string;
  tags: { tag: string; href: string }[];
}
interface Tag {
  tag: string;
  href: string;
}

interface HomePage extends BlogPage {
  tags: { tag: string; href: string }[];
}
interface PolicyPage extends BlogPage {}
interface ContactPage extends BlogPage {}
interface DisclaimerPage extends BlogPage {}
interface CarsHomePage extends BlogPage {}
interface TataSafariBlogPage extends BlogPage {}

interface SEOObjProps {
  HOME_PAGE: HomePage;
  POLICY_PAGE: PolicyPage;
  CONTACT_PAGE: ContactPage;
  DISCLAIMER_PAGE: DisclaimerPage;
  CARS_HOME_PAGE: CarsHomePage;
  TATA_SAFARI_BLOG_POST: TataSafariBlogPage;
}

export const SEO_OBJ: SEOObjProps = {
  // HomePage
  HOME_PAGE: {
    absoluteURL: blogPostURLS.HOME_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.HOME_PAGE_RELATIVE,
    title: "VehicleMasti: A hub for Automobile enthusiasts.",
    description:
      "Welcome to VehicleMasti Blog! This is the perfect place for people who love automobiles whether you are a car enthusiast or a casual driver. You'll find easy-to-understand articles, maintenance tips, and reviews about different automobile manufacturers. Join our community and let's learn and grow together in the world of automobiles!",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-10-20T19:07:55+00:00",
    featuredImage: vehicleMasti,
    featuredImageAltText: "vehiclemasti-header-image",
    tags: [{ tag: "Homepage", href: "/" }],
    ogImageURL: `${process.env.HOME_PAGE_BASE_URL}/public/safari-overview-d-banner-27-23.jpg`,
    changeFrequency: "weekly",
  },

  POLICY_PAGE: {
    absoluteURL: blogPostURLS.PRIVACY_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.PRIVACY_PAGE_RELATIVE,
    title: "Privacy Policy | VehicleMasti",
    description:
      "Welcome to VehicleMasti privacy policy. In here you can find all the details about privacy policy of VehcileMasti",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-12-09T19:07:55+00:00",
    featuredImage: vehicleMasti,
    ogImageURL: `${process.env.HOME_PAGE_BASE_URL}/public/safari-overview-d-banner-27-23.jpg`,
    changeFrequency: "weekly",
    featuredImageAltText: "vehiclemasti-header-image",
    tags: [{ tag: "Policy Page", href: "/privacy" }],
  },

  CONTACT_PAGE: {
    absoluteURL: blogPostURLS.CONTACT_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.CONTACT_PAGE_RELATIVE,
    title: "Contact Us | VehicleMasti",
    description:
      "Welcome to VehicleMasti contact page. In here you can find all the details of about VehicleMasti contact information and a way to contact administrator of the VehicleMasti site.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-12-09T19:07:55+00:00",
    featuredImage: vehicleMasti,
    featuredImageAltText: "vehiclemasti-header-image",
    ogImageURL: `${process.env.HOME_PAGE_BASE_URL}/public/safari-overview-d-banner-27-23.jpg`,
    changeFrequency: "weekly",
    tags: [{ tag: "Contact Page", href: "/contact" }],
  },

  DISCLAIMER_PAGE: {
    absoluteURL: blogPostURLS.DISCLAIMER_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.DISCLAIMER_PAGE_RELATIVE,
    title: "Disclaimer | VehicleMasti",
    description:
      "Welcome to VehicleMasti disclaimer page. In here you can find all the details of about VehicleMasti's Disclaimer and its policies.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-12-09T19:07:55+00:00",
    featuredImage: vehicleMasti,
    featuredImageAltText: "vehiclemasti-header-image",
    ogImageURL: `${process.env.HOME_PAGE_BASE_URL}/public/safari-overview-d-banner-27-23.jpg`,
    changeFrequency: "weekly",
    tags: [{ tag: "Disclaimer Page", href: "/disclaimer" }],
  },

  CARS_HOME_PAGE: {
    absoluteURL: blogPostURLS.CARS_HOME_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.CARS_HOME_PAGE_RELATIVE,
    title: "Cars: A Hub for Cars Enthusiasts | VehicleMasti",
    description:
      "Welcome to VehicleMasti, a car informational page where I share my passion for cars and everything related to them. Here, I will write about different types of cars, their features, advantages, reviews, latest news, prices, comparisons, disadvantages, tips, tricks, and many more. Stay updated with the latest news about cars and let us learn and grow together in the world of innovative cars.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-10-20T19:07:55+00:00",
    featuredImage: vehicleMasti,
    featuredImageAltText: "vehiclemasti-header-image",
    ogImageURL: `${process.env.HOME_PAGE_BASE_URL}/public/safari-overview-d-banner-27-23.jpg`,
    changeFrequency: "weekly",
    tags: [{ tag: "Cars", href: "/cars" }],
  },

  TATA_SAFARI_BLOG_POST: {
    absoluteURL: blogPostURLS.TATA_SAFARI_BLOG_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.TATA_SAFARI_BLOG_PAGE_RELATIVE,
    title: "Tata Safari Facelift 2023: A closer look into modern SUV.",
    description:
      "Here is the ultimate guide to the Tata Safari SUV, where everything you need to know about this car. Here, I will highlight the Tata Safari 2023 facelift car, prices, reviews, exterior, interior, mileage, color, images, facelift, on-road prices, power, comfort, and many more about the Tata Safari car. Read on to find out more.",
    publishedTime: "2023-11-14T09:07:55+00:00",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    featuredImageAltText: "Tata-safari-banner",
    featuredImage: TataWelcomImage,
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/welcome-page.png`,
    changeFrequency: "weekly",
    category: "Tata",
    tags: [
      { tag: "Cars", href: `${blogPostURLS.CARS_HOME_PAGE_RELATIVE}` },
      { tag: "Tata Safari", href: `${blogPostURLS.TATA_SAFARI_BLOG_PAGE_RELATIVE}` },
      { tag: "Tata", href: `${blogPostURLS.TATA_SAFARI_BLOG_PAGE_RELATIVE}` },
      { tag: "Vehiclemasti", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
  },
};

export const blogPostsObj = [
  {
    id: 1,
    url: SEO_OBJ.TATA_SAFARI_BLOG_POST.relativeURL,
    title: SEO_OBJ.TATA_SAFARI_BLOG_POST.title,
    description: SEO_OBJ.TATA_SAFARI_BLOG_POST.description,
    lastUpdateTime: SEO_OBJ.TATA_SAFARI_BLOG_POST.lastUpdateTime,
    publishedTime: SEO_OBJ.TATA_SAFARI_BLOG_POST.publishedTime,
    tags: SEO_OBJ.TATA_SAFARI_BLOG_POST.tags,
    featuredImage: SEO_OBJ.TATA_SAFARI_BLOG_POST.featuredImage,
    featuredImageAltText: SEO_OBJ.TATA_SAFARI_BLOG_POST.featuredImageAltText,
  },
  // {
  //   id: 1,
  //   url: SEO_OBJ.TATA_SAFARI_BLOG_POST.relativeURL,
  //   title: SEO_OBJ.TATA_SAFARI_BLOG_POST.title,
  //   description: SEO_OBJ.TATA_SAFARI_BLOG_POST.description,
  //   lastUpdateTime: SEO_OBJ.TATA_SAFARI_BLOG_POST.lastUpdateTime,
  //   publishedTime: SEO_OBJ.TATA_SAFARI_BLOG_POST.publishedTime,
  //   tags: SEO_OBJ.TATA_SAFARI_BLOG_POST.tags,
  //   featuredImage: SEO_OBJ.HOME_PAGE.featuredImage,
  //   featuredImageAltText: SEO_OBJ.TATA_SAFARI_BLOG_POST.featuredImageAltText,
  // },
];
