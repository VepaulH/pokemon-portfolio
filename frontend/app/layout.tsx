import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import { SakuraFall } from "./_components/SakuraFall";

const pixelFont = Press_Start_2P({
  variable: "--font-pixel",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pokémon Portfolio",
  description: "A Pokémon battle themed portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pixelFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SakuraFall />
        {children}
      </body>
    </html>
  );
}
