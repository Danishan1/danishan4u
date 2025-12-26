/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  experimental: {
    // Enables Server Components if needed
    serverActions: {},
    optimizeCss: false,
  },

  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },

  turbopack: {
    resolveAlias: {
      "#components": "./src/components",
      "#constants": "./src/constants",
      "#configs": "./src/configs",
      "#layouts": "./src/layouts",
      "#mypages": "./src/mypages",
      "#stores": "./src/stores",
      "#translations": "./src/translations",
      "#utils": "./src/utils",
      "#widgets": "./src/widgets",
    },
  },
  transpilePackages: ['@itsrighttime/ui-components'], 
};

export default nextConfig;
