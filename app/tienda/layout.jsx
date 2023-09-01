import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import SubNavbar from "@/components/SubNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tienda en Next JS 13",
  description: "Generated by create next app",
};

export default function TiendaLayout({ children }) {
  return (
    <div className={inter.className}>
      <SubNavbar />

      {children}
    </div>
  );
}