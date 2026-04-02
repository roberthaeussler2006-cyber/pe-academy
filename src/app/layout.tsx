import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "../components/Sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PE Academy | Private Equity Learning Portal",
  description: "Master private equity fundamentals, LBO mechanics, and interview preparation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Sidebar />
        <main className="lg:ml-64 min-h-screen pt-14 lg:pt-0">
          {children}
        </main>
      </body>
    </html>
  );
}
