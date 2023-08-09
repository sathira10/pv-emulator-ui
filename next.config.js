/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath: '/pv-emulator',
  assetPrefix: '/pv-emulator/',
  images: { unoptimized: true }
}

module.exports = nextConfig
