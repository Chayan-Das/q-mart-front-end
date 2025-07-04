/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/products",
        destination: "https://q-mart-backend.vercel.app/api/products",
      },
    ];
  },
};

module.exports = nextConfig;
