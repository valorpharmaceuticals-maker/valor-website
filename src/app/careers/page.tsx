import type { Metadata } from "next";
import CareersContent from "./CareersContent";
import { getSiteContent } from "@/lib/api";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join our team and help build healthier communities. Explore current openings.",
};

export default async function CareersPage() {
  const content = await getSiteContent();
  return <CareersContent content={content} />;
}
