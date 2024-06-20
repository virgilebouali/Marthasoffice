
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['cdn.rareblocks.xyz', 'assets.website-files.com'],
    },
    i18n: {

      locales: ['en', 'fr'],
      defaultLocale: 'fr',

    },
  };
  
  export default nextConfig;
  