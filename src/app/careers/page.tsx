import type { Metadata } from "next";
import CareersContent from "./CareersContent";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join our team and help build healthier communities. Explore current openings.",
};

export default function CareersPage() {
  return <CareersContent />;
}
