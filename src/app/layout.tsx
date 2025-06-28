import type { Metadata } from "next";
import "../styles/globals.scss";
import Head from "next/head";
import CustomCursor from "@/components/global/CustomCursor";

export const metadata: Metadata = {
  title: "PHorse Explorer",
  description: "Official Explorer, Leaderboard and Referral of Planet Horse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <link rel="icon" href="/favicon.ico"></link>

        <style>{`
          :where(html, body, *, *::before, *::after) {
            cursor: none !important;
          }
          input[type="text"],
          input[type="email"],
          input[type="search"],
          input[type="range"],
          textarea,
          [contenteditable="true"] {
            cursor: text !important;        
          }
        `}</style>
      </head>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
