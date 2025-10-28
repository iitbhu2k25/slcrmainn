import React, { ReactNode } from "react";
import Navbar from "@/components/applayout/Navbar";
import Footer from "@/components/applayout/Footer";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
const garamond = EB_Garamond({ subsets: ["latin"], weight: "400" });

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={garamond.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
