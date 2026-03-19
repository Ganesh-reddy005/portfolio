import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ganesh Reddy - Portfolio",
  description: "Portfolio website of Ganesh Reddy, a passionate software developer specializing in web and mobile applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
