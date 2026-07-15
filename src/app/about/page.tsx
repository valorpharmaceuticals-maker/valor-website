import type { Metadata } from "next";
import AboutContent from "./AboutContent";
import { getSiteContent } from "@/lib/api";

export const metadata: Metadata = {
  title: "About Us",
  description: "Our history, leadership, vision, mission and values.",
};

export default async function AboutPage() {
  const content = await getSiteContent();
  return <AboutContent content={content} />;
}
