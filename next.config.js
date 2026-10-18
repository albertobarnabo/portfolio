/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    // InterVous is its own Vercel project (basePath /intervous); serve it under this domain.
    return [
      { source: "/intervous", destination: "https://intervous.vercel.app/intervous" },
      { source: "/intervous/:path*", destination: "https://intervous.vercel.app/intervous/:path*" },
    ];
  },
};

module.exports = nextConfig;
