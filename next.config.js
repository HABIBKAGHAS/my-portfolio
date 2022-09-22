/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    APP_EMAIL: process.env.APP_EMAIL,
    APP_PASS: process.env.APP_PASS,
  },
};

module.exports = nextConfig;
