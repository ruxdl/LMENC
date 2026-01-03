/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production' || process.env.GITHUB_ACTIONS === 'true'
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // only apply basePath/assetPrefix in production (GitHub Pages)
  ...(isProd ? { basePath: '/LMENC', assetPrefix: '/LMENC' } : {}),
  images: {
    unoptimized: true
  }
}
module.exports = nextConfig
