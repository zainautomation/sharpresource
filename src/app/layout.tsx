import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sharpresources.co.uk"),
  title: {
    default: "Sharp Resources | Recruitment to Recruitment Search",
    template: "%s | Sharp Resources",
  },
  description:
    "A recruitment to recruitment search firm placing IT, Digital and ERP recruitment consultants, managers and directors with clients worldwide. Founded in 2012.",
  openGraph: {
    title: "Sharp Resources",
    description: "We are in the relationship business.",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${fraunces.variable} ${manrope.variable} antialiased`}>
      <body className="min-h-screen bg-paper text-ink">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
