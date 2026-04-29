import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Products - Insideout Automation",
  description: "",
};

export default function ProductsLayout({
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
