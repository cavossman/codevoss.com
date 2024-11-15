import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import "../util/fontawesome";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next/types";

const inter = Inter({ subsets: ["latin"] });

const schema = [
  {
    "@context": "https://schema.org/",
    "@type": "Organization",
    url: "https://codevoss.com/",
    logo: "https://codevoss.com/logo.png",
    name: "CodeVoss LLC",
    email: "cavossman@gmail.com",
    description: "Your partner in software development.",
  },
  {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "CodeVoss LLC",
    url: "https://codevoss.com/",
    description: "Materialize ideas and results.",
    inLanguage: "en-US",
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(`https://codevoss.com`),
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-dark text-white min-h-screen ${inter.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        {schema.map((obj, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
          />
        ))}
      </body>
      <GoogleAnalytics gaId="G-68PG63X3CD" />
    </html>
  );
}
