import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { DM_Sans, EB_Garamond, Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Anointing Health Care – Home",
  description:
    "Flexible, person-centred mental health outreach and home care services across Cumbria and the North West.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <body
        className={`${dmSans.variable} ${ebGaramond.variable} ${nunitoSans.variable}`}
      >
        {children}
      </body>
      <Footer />
    </html>
  );
}
