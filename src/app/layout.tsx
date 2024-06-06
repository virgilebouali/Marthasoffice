import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '700'] });

interface CustomMetadata extends Metadata {
  canonical?: string;
}

export const metadata: CustomMetadata = {
  title: "Martha's Office by Cynthia Cereyon",
  description: "Mon travail est de simplifier le votre. Un apport & une expertise plurifonctionnelles pour vous libérer de vos tâches administratives et vous permettre de faire croître votre business en toute confiance.",
  canonical: "https://www.votresite.com",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const { title, description, canonical } = metadata;

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={String(description ?? '')} />
        <meta name="keywords" content="Martha's Office, Cynthia Cereyon, gestion administrative, expertise plurifonctionnelle, simplifier votre travail" />
        <meta name="author" content="Cynthia Cereyon" />
        <meta property="og:title" content={String(title ?? '')} />
        <meta property="og:description" content={String(description ?? '')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={String(canonical ?? '')} />
        <meta property="og:image" content="/path/to/image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={String(title ?? '')} />
        <meta name="twitter:description" content={String(description ?? '')} />
        <meta name="twitter:image" content="/path/to/image.jpg" />
        <link rel="icon" href="/favicon-32x32.png" sizes="any" />
        <link rel="canonical" href={String(canonical ?? '')} />
        <title>{String(title ?? '')}</title>
      </head>
      <body className={poppins.className}>
        <div className="shadow-2xl shadow-white bg-pink">{children}</div>
      </body>
    </html>
  );
}
