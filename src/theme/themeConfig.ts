import type { ThemeConfig } from "antd";

/**
 * Central brand theme for the company website.
 * Tune these tokens (or replace with values pulled from the CMS later) to
 * re-skin the whole site. Kept intentionally minimal and professional.
 */
export const BRAND = {
  primary: "#0F766E", // deep medical teal — trust, health
  primaryDark: "#0B5750",
  accent: "#C79A3A", // muted gold accent for highlights
  ink: "#0F1C1A", // near-black text
  muted: "#5B6B68", // secondary text
  bgSoft: "#F4F7F6", // soft section background
  border: "#E3E9E7",
} as const;

export const themeConfig: ThemeConfig = {
  cssVar: { key: "brand" },
  token: {
    colorPrimary: BRAND.primary,
    colorLink: BRAND.primary,
    colorInfo: BRAND.primary,
    colorTextBase: BRAND.ink,
    borderRadius: 8,
    fontFamily:
      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontSize: 15,
    lineHeight: 1.65,
  },
  components: {
    Button: {
      controlHeight: 44,
      controlHeightLG: 52,
      fontWeight: 600,
      primaryShadow: "none",
    },
    Menu: {
      horizontalItemSelectedColor: BRAND.primary,
      itemColor: BRAND.ink,
      fontSize: 15,
    },
    Layout: {
      headerBg: "#FFFFFF",
      bodyBg: "#FFFFFF",
      footerBg: BRAND.ink,
    },
    Card: {
      borderRadiusLG: 14,
    },
    Typography: {
      titleMarginBottom: "0.4em",
    },
  },
};
