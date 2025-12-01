/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
          { protocol: 'https', hostname: 'cdn.rareblocks.xyz' },
          { protocol: 'https', hostname: 'assets.website-files.com' }
      ]
  },
  
  // NOUVELLE SECTION DE REDIRECTIONS
  async redirects() {
      return [
          {
              source: '/',
              // Redirige l'URL racine (https://www.marthas-office.com/) 
              // vers votre langue par défaut
              destination: '/fr', 
              permanent: true, // Utilise le code d'état 308 (Permanent Redirect)
          },
      ];
  },
  // FIN DE LA NOUVELLE SECTION
};

export default nextConfig;