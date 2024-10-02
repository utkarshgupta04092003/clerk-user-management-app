import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";
import React from "react";
import Navbar from "./_components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "User Management",
  description: "User Management Platform Using Clerk",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
