import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";
import { getSiteContent } from "@/lib/api";

export const metadata: Metadata = {
  title: "Services",
  description: "Our pharmaceutical manufacturing, R&D, quality and distribution services.",
};

export default async function ServicesPage() {
  const content = await getSiteContent();
  return <ServicesContent content={content} />;
}
