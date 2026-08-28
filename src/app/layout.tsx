import type { Metadata } from "next";
import { Orbitron, Rajdhani, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/UI/CustomCursor";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammed Sherif U | Computer Science Engineering Student & Aspiring Software Developer",
  description:
    "Computer Science Engineering student and aspiring software developer building practical web and AI-powered applications using Java, JavaScript, Flask, React, databases, and modern AI technologies.",
  keywords: [
    "Mohammed Sherif U",
    "Computer Science Engineering Student",
    "Aspiring Software Developer",
    "Coimbatore Portfolio",
    "React Developer",
    "PRIJSM V5",
    "Flask",
    "SQL",
  ],
  authors: [{ name: "Mohammed Sherif U" }],
  creator: "Mohammed Sherif U",
  openGraph: {
    title: "Mohammed Sherif U | Computer Science Engineering Student & Aspiring Software Developer",
    description:
      "Computer Science Engineering student and aspiring software developer building practical web and AI-powered applications using Java, JavaScript, Flask, React, databases, and modern AI technologies.",
    url: "https://github.com/sherif0786",
    siteName: "Mohammed Sherif U Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Sherif U | Computer Science Engineering Student & Aspiring Software Developer",
    description:
      "Computer Science Engineering student and aspiring software developer building practical web and AI-powered applications using Java, JavaScript, Flask, React, databases, and modern AI technologies.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${rajdhani.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
