import type { Metadata } from "next";
import ProductsContent from "./ProductsContent";
import { getSiteContent } from "@/lib/api";

export const metadata: Metadata = {
  title: "Products",
  description: "Our range of quality-assured medicines across multiple therapeutic categories.",
};

export default async function ProductsPage() {
  const content = await getSiteContent();
  return <ProductsContent content={content} />;
}
