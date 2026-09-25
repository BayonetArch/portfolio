import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.18.214"],
  devIndicators: {
    position: "bottom-right", 
  }
  /* config options here */
};

export default nextConfig;
