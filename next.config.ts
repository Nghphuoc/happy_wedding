import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Keep sharing metadata in <head>, including for Zalo crawlers.
    htmlLimitedBots: /.*/,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
