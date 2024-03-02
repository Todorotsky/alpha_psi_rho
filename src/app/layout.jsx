import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TopBanner from "@/components/TopBanner";
const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "UNLV - Alpha Psi Rho",
  description: "Delta Chapter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={outfit.className}>
        <TopBanner />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
