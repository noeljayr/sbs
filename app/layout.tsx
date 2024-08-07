import type { Metadata } from "next";
import "/css/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";

export const metadata: Metadata = {
  title: "Smart Brain Studies",
  description: "Landing Page For Smart Brain Studies E-learning Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
          <div className="blob"></div>
        <div className="content hide-scrollbar">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
