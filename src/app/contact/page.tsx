import type { Metadata } from "next";
import ContactContent from "./ContactContent";
import { getSiteContent } from "@/lib/api";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with our team — enquiries, partnerships and support.",
};

export default async function ContactPage() {
  const content = await getSiteContent();
  return <ContactContent content={content} />;
}
