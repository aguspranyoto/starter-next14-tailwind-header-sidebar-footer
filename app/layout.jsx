"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/layouts/header";
import Footer from "@/layouts/footer";
import Sidebar from "@/layouts/sidebar";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [nav, setNav] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header setNav={setNav} nav={nav} />
        <Sidebar nav={nav} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
