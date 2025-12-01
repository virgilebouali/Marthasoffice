/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
          { protocol: 'https', hostname: 'cdn.rareblocks.xyz' },
          { protocol: 'https', hostname: 'assets.website-files.com' }
      ]
  },
  
  // REMPLACEZ 'redirects' PAR CETTE SECTION 'rewrites'
  async rewrites() {
      return [
          {
              source: '/',
              // Réécrit l'URL racine vers la locale par défaut sans changer l'URL dans la barre d'adresse
              destination: '/fr', 
          },
      ];
  },
  // FIN DE 'rewrites'
};

export default nextConfig;