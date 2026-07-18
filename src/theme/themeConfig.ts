import type { ThemeConfig } from "antd";

/**
 * Central brand theme for the company website.
 * Tune these tokens (or replace with values pulled from the CMS later) to
 * re-skin the whole site. Kept intentionally minimal and professional.
 */
export const BRAND = {
  primary: "#1E63B4", // confident azure blue — trust, clarity
  primaryDark: "#123E77", // deep navy-blue for gradients/hover
  accent: "#46B4E8", // bright sky-blue accent for highlights
  ink: "#0B2545", // deep navy text
  muted: "#5A6E88", // slate-blue secondary text
  bgSoft: "#EFF5FC", // soft sky-tinted section background
  border: "#DAE4F1", // light blue-grey border
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
