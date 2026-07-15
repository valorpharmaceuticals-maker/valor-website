import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This app lives inside a larger monorepo; pin the tracing root to itself so
  // Next doesn't pick up a sibling lockfile as the workspace root.
  outputFileTracingRoot: __dirname,
  transpilePackages: [
    "antd",
    "@ant-design/icons",
    "@ant-design/cssinjs",
    "@ant-design/nextjs-registry",
    "rc-util",
    "rc-pagination",
    "rc-picker",
    "rc-table",
    "rc-tree",
    "rc-input",
  ],
  images: {
    // Placeholder remote source; replace/remove when CMS media is wired.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
