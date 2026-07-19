import type { MetadataRoute } from "next";

const routes = [
  "",
  "/our-firm",
  "/our-attorneys",
  "/our-attorneys/justin-aronson",
  "/our-attorneys/mitchell-cornwell",
  "/practice-areas",
  "/practice-areas/family-law",
  "/practice-areas/construction-law",
  "/practice-areas/complex-commercial-litigation",
  "/practice-areas/trusts-estates",
  "/contact",
  "/privacy",
  "/accessibility",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://www.aronsonlaw.com${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/contact" ? 0.9 : 0.8,
  }));
}
