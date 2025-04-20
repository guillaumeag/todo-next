import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Todo Next",
  description: "Todo Next is a simple todo app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
