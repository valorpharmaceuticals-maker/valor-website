import type { Metadata, Viewport } from "next";
import "./globals.css";
import "antd/dist/reset.css";
import Providers from "@/components/Providers";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: `${site.company.name} — ${site.company.tagline}`,
    template: `%s — ${site.company.name}`,
  },
  description:
    "A quality-focused pharmaceutical manufacturer delivering safe, effective and affordable medicines.",
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F766E",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
