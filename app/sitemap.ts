import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  
    return [
      {
        url: `/`,
        lastModified: new Date(),
        priority: 1,
      },
      {
        url: `/`,
        lastModified: new Date(),
        priority: 0.9,
      },
      {
        url: `/`,
        lastModified: new Date(),
        priority: 0.9,
      },
      {
        url: `/`,
        lastModified: new Date(),
        priority: 0.9,
      },
      {
        url: `/`,
        lastModified: new Date(),
        priority: 0.9,
      },
      {
        url: `/`,
        lastModified: new Date(),
        priority: 0.9,
      },
      {
        url: `/`,
        lastModified: new Date(),
        priority: 0.3,
      },
      {
        url: `/`,
        lastModified: new Date(),
        priority: 0.8,
      },
      {
        url: `/`,
        lastModified: new Date(),
        priority: 0.6,
      },
      {
        url: `/`,
        lastModified: new Date(),
        priority: 0.6,
      },
    ];
  }