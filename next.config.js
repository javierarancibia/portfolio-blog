/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.shopify.com"],
  },
  env: {
    STOREFRONT_ACCESS_TOKEN: process.env.STOREFRONT_ACCESS_TOKEN,
    SHOP_URL: process.env.SHOP_URL,
  },
};

module.exports = nextConfig;
