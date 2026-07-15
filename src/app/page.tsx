import HomeContent from "./HomeContent";
import { getSiteContent } from "@/lib/api";

export default async function HomePage() {
  const content = await getSiteContent();
  return <HomeContent content={content} />;
}
