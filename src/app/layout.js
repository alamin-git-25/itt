import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Insaf Tour & Travels",
  description: "A trasted Travel Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <main className="bg-[#000214]">
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
