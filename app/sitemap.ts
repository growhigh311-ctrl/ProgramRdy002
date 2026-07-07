import { MetadataRoute } from "next";

const BASE_URL = "https://reddyreal.live";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about-us`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact-us`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/terms-and-conditions`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/indian-card-games`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Reddy Anna ID pages
    {
      url: `${BASE_URL}/reddy-anna-id/cricket-id`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/reddy-anna-id/demo-id`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/reddy-anna-id/ipl-betting-id`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Reddy Anna Sports pages
    {
      url: `${BASE_URL}/reddy-anna-sports/cricket-betting`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/reddy-anna-sports/football-betting`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/reddy-anna-sports/tennis-betting`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/reddy-anna-sports/live-betting`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/reddy-anna-sports/horse-racing`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  return staticRoutes;
}
