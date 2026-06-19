import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.beforeandafterpic.com" }],
        destination: "https://beforeandafterpic.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
