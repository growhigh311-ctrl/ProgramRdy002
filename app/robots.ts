import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://reddyreal.live";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/_next/", "/login", "/register"],
      },
    ],
    host: baseUrl,
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
