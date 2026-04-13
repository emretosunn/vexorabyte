import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { PlexusBackground } from "@/components/plexus-background";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-logo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vexorabyte",
  description: "Vexorabyte modern uygulamalar gelistirir.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <body className="relative min-h-full overflow-x-hidden bg-black font-sans text-white">
        <PlexusBackground />
        <div className="relative z-10 flex min-h-full flex-col">{children}</div>
      </body>
    </html>
  );
}
