import { SEO_OBJ } from "Essential";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const postURLs = Object.values(SEO_OBJ).map((page: any) => {
    return {
      url: page.absoluteURL,
      lastModified: page.lastUpdateTime,
      changeFrequency: page.changeFrequency,
      priority: 1,
    };
  });
  return postURLs;
  // return [
  //   {
  //     url: "",
  //     changeFrequency: "always",
  //   },
  // ];
}
