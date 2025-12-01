
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
<<<<<<< HEAD
      // `images.domains` is deprecated; use `remotePatterns` to whitelist
      // external image hosts.
      remotePatterns: [
        { protocol: 'https', hostname: 'cdn.rareblocks.xyz' },
        { protocol: 'https', hostname: 'assets.website-files.com' }
      ]
=======
      domains: ['cdn.rareblocks.xyz', 'assets.website-files.com'],
    },
    i18n: {

      locales: ['en', 'fr'],
      defaultLocale: 'fr',

>>>>>>> ffb32841ddabed46d039076eb7e704db7b482ec8
    },
  };
  
  export default nextConfig;
  