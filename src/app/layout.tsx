import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gemiers",
  icons:{
   icon: '/gemiers.png'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} ${geistMono.variable} 
          antialiased 
          min-h-screen 
          flex flex-col 
          bg-[#f0ebf8]
        `}
      >
        <Navbar />
        
        <main className="flex-grow">
          {children}
        </main>

<Link
      href="https://wa.me/5493705233808?text=Hola!%20Quiero%20más%20info%20sobre%20las%20clases%20de%20Gemiers"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </Link>

        <Footer />
      </body>
    </html>
  );
}

