import { MetadataRoute } from "next";

export default function projectsSitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://thedevfaysal.com";
  const projects = [
    {
      id: "sustainify",
      slug: "sustainify",
      name: "Sustainify - Eco-Friendly Marketplace",
    },
    {
      id: "project2",
      slug: "project2",
      name: "Project 2",
    },
    {
      id: "project3",
      slug: "project3",
      name: "Project 3",
    },
  ];

  return projects.map((project) => ({
    url: `${baseUrl}#projects`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));
}
