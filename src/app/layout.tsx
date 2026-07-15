import type { Metadata, Viewport } from "next";
import "./globals.css";
import "antd/dist/reset.css";
import Providers from "@/components/Providers";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { site } from "@/data/site";
import { getSiteContent } from "@/lib/api";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
const DESCRIPTION =
  "A quality-focused pharmaceutical manufacturer delivering safe, effective and affordable medicines.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.company.name} — ${site.company.tagline}`,
    template: `%s — ${site.company.name}`,
  },
  description: DESCRIPTION,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    siteName: site.company.name,
    title: `${site.company.name} — ${site.company.tagline}`,
    description: DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.company.name} — ${site.company.tagline}`,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F766E",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const content = await getSiteContent();
  return (
    <html lang="en">
      <body>
        <Providers>
          <SiteHeader company={content.company} logoUrl={content.logoUrl} nav={content.nav} />
          <main>{children}</main>
          <SiteFooter
            company={content.company}
            nav={content.nav}
            footerAbout={content.pages.global.footerAbout}
          />
        </Providers>
      </body>
    </html>
  );
}
