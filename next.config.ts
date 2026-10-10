import { dirname } from "path";
import { fileURLToPath } from "url";

import type { NextConfig } from "next";

const rootDir = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
  turbopack: {
    root: rootDir,
  },
};

export default nextConfig;