import { Inter } from "next/font/google";
import "./globals.css";
import SiteConfig from "@/app/config/site";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `${SiteConfig.name} | ${SiteConfig.name_en}`,
  description: SiteConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang={SiteConfig.lang} dir={SiteConfig.dir}>
      <body className={`${inter.className} bg-base-100`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
