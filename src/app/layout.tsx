import type { Metadata } from "next";
import "./globals.css";

import { Lexend } from 'next/font/google';

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "PoE Builds",
  description: "High quality Path of Exile builds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={lexend.className}
      >
        {children}
      </body>
    </html>
  );
}
