/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
// Detect GitHub Pages deploy (CI) or explicit env var NEXT_PUBLIC_GHPAGES
const isGhPages = process.env.GITHUB_ACTIONS === 'true' || process.env.NEXT_PUBLIC_GHPAGES === 'true'

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // only apply basePath/assetPrefix when building for GitHub Pages
  ...(isGhPages ? { basePath: '/LMENC', assetPrefix: '/LMENC' } : {}),
  images: {
    unoptimized: true
  }
}
module.exports = nextConfig
