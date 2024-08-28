import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  
    return [
      {
        url: `https://moonlistservers.com/`,
        lastModified: new Date(),
        priority: 1,
      },
      {
        url: `https://moonlistservers.com/create-minecraft-server`,
        lastModified: new Date(),
        priority: 0.9,
      },
      {
        url: `https://moonlistservers.com/about`,
        lastModified: new Date(),
        priority: 0.9,
      },
      {
        url: `https://moonlistservers.com/contact`,
        lastModified: new Date(),
        priority: 0.9,
      },
      {
        url: `https://moonlistservers.com/privacy`,
        lastModified: new Date(),
        priority: 0.9,
      },
      {
        url: `https://moonlistservers.com/terms`,
        lastModified: new Date(),
        priority: 0.9,
      },
    ];
  }