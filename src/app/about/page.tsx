import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description: "Our history, leadership, vision, mission and values.",
};

export default function AboutPage() {
  return <AboutContent />;
}
