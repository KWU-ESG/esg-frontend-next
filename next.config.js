/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://13.209.73.204:8080/:path*",
      },
    ];
  },
};
