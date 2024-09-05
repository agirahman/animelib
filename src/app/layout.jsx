// layout.jsx
import { Righteous, Bebas_Neue, Montserrat_Alternates, Gabarito } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import MainContent from "@/components/SideContent/MainContent"

const montserrat = Montserrat_Alternates({ subsets: ["latin"], weight: "500" });

export const metadata = {
  title: "AnimeLib",
  description: "Website Anime Library",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-primary`}>
        <Navbar />
        <MainContent>{children}</MainContent>
      </body>
    </html>
  );
}
