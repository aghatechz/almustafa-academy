import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Al-Mustafa Academy | Developing Youth, Empowering Futures",
  description: "Building courageous, educated & pious youth through Tarbiyat, academic excellence, and leadership training since 2012.",
  keywords: ["Al-Mustafa Academy", "Islamic Education", "Youth Empowerment", "Tarbiyat", "Workshops", "Academia", "Pakistan"],
  authors: [{ name: "Al-Mustafa Academy Team" }],
  openGraph: {
    title: "Al-Mustafa Academy | Developing Youth, Empowering Futures",
    description: "Building courageous, educated & pious youth through Tarbiyat, academic excellence, and leadership training since 2012.",
    siteName: "Al-Mustafa Academy Pakistan",
    locale: "en_PK",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased bg-white text-zinc-900 min-h-screen selection:bg-zinc-900 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}




