import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css" ; 
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "REVENUE DASHBOARD || FRONTEND INTREFACE WITHOUT ALL THE WORKING STUFF",
  description: "THIS APP IS MADE FOR A LEARNING PURPOSE WITH NEXTJS AND TAILWIND TECH STACK ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-stone-950 bg-stone-100`}>
        {children}
      </body>
    </html>
  );
}
