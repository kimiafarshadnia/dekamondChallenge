import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Random User",
  description: "Dekamond Challenge",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <main className="container mx-auto p-6 flex items-center justify-center min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}