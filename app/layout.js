import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

const garamond = EB_Garamond({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
