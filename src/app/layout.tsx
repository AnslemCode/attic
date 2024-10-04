import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Attio",
  description: "CRM Platform for conversion",
};

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const gilroyBold = localFont({
  src: [
    {
      path: "../../public/font/gilroy_bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-gilroy",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${gilroyBold.variable}`}>
        {children}
      </body>
    </html>
  );
}
