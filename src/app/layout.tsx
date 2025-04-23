import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

// Use the Inter font from Google Fonts
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jacob Love - Personal Portfolio",
  description: "A personal website showcasing my work, passions, and interests",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-black text-white`}>
        <Navigation />
        <main className="flex-grow">{children}</main>
        <footer className="bg-gray-900 text-gray-300 p-4 text-center border-t border-gray-800">
          © {new Date().getFullYear()} Jacob Love. All rights reserved.
        </footer>
      </body>
    </html>
  );
}