
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      // `images.domains` is deprecated; use `remotePatterns` to whitelist
      // external image hosts.
      remotePatterns: [
        { protocol: 'https', hostname: 'cdn.rareblocks.xyz' },
        { protocol: 'https', hostname: 'assets.website-files.com' }
      ]
    },
  };
  
  export default nextConfig;
  