import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '700'], });

export const metadata: Metadata = {
  
  title: "Martha's Office by Cynthia Cereyon",
  description: "Mon travail est de simplifier le votre",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body className={poppins.className}>
        <div className=" shadow-2xl shadow-white bg-pink">{children}</div></body>
    </html>
  );
}
