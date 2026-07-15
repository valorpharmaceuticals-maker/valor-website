import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description: "Our pharmaceutical manufacturing, R&D, quality and distribution services.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
