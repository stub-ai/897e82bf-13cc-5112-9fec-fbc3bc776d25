const routeValue = process.env.NEXT_PUBLIC_ROUTE || '';

/** @type {import('next').NextConfig} */
console.log(routeValue)
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: `${routeValue}`,
  basePath: `${routeValue}`,
}

module.exports = nextConfig
