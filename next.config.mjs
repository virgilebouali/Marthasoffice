
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        { protocol: 'https', hostname: 'cdn.rareblocks.xyz' },
        { protocol: 'https', hostname: 'assets.website-files.com' }
      ]
    },
    i18n: {
      locales: ['en', 'fr'],
      defaultLocale: 'fr',
    },
  };
  
  export default nextConfig;
  