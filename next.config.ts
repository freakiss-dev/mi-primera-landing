import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/mi-primera-landing",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
