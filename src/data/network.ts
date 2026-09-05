export interface NetworkSite {
  title: string;
  url: string;
  description: string;
}

export const socialLinks = {
  substack: "https://alexmerced.substack.com",
  linkedin: "https://www.linkedin.com/in/alexmerced",
  x: "https://x.com/alexmercedcoder",
  github: "https://github.com/AlexMercedCoder",
  youtube: "https://youtube.com/@AlexMercedCoder",
  youtubeData: "https://youtube.com/@alexmerceddata",
};

export const networkSites: NetworkSite[] = [
  {
    title: "AlexMerced.com",
    url: "https://alexmerced.com",
    description: "Main personal portal and developer advocacy homepage",
  },
  {
    title: "AlexMerced.blog",
    url: "https://alexmerced.blog",
    description: "Technical essays on web development, data engineering, and AI",
  },
  {
    title: "DataLakehouseHub.com",
    url: "https://datalakehousehub.com",
    description: "Practitioner resource for open lakehouses and Apache Iceberg",
  },
  {
    title: "AgenticAnalyticsNow.com",
    url: "https://agenticanalyticsnow.com",
    description: "Architectural foundations for autonomous agentic analytics",
  },
  {
    title: "WhoIsAlexMerced.com",
    url: "https://whoisalexmerced.com",
    description: "Biographical journey, music, publications, and background",
  },
];
