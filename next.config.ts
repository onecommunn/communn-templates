import BuilderDevTools from "@builder.io/dev-tools/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = BuilderDevTools()({
  images: {
    domains: [
      "cdn.builder.io",
      "images.unsplash.com",
      "upload-community-files-new.s3.ap-south-1.amazonaws.com",
    ],
  },
});

export default nextConfig;
