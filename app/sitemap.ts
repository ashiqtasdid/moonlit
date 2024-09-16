import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  
    return [
      {
        url: `https://moonlitservers.com/`,
        lastModified: new Date(),
        priority: 1,
      },
      {
        url: `https://moonlitservers.com/minecraft`,
        lastModified: new Date(),
        priority: 0.9,
      },
      {
        url: `https://moonlitservers.com/terraria`,
        lastModified: new Date(),
        priority: 0.9,
      },
      {
        url: `https://moonlitservers.com/about`,
        lastModified: new Date(),
        priority: 0.9,
      },
      {
        url: `https://moonlitservers.com/contact`,
        lastModified: new Date(),
        priority: 0.9,
      },
      {
        url: `https://moonlitservers.com/privacy`,
        lastModified: new Date(),
        priority: 0.9,
      },
      {
        url: `https://moonlitservers.com/terms`,
        lastModified: new Date(),
        priority: 0.9,
      },
    ];
  }