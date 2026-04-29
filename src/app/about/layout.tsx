import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About - Insideout Automation",
  description: "",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
