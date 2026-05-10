import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Providers from "@/components/layout/Providers";
import Navbar from "@/components/layout/Navbar";
import LiquidBackground from "@/components/ui/LiquidBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f7f5" },
    { media: "(prefers-color-scheme: dark)", color: "#080810" },
  ],
};

export const metadata: Metadata = {
  title: "Sripriya — ELT Specialist & Corporate Trainer",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  description:
    "Portfolio of Sripriya T — experienced ELT freelancer, Cambridge Examiner, corporate trainer and soft skills coach based in Chennai, India.",
  keywords: [
    "ELT",
    "English Language Training",
    "Corporate Trainer",
    "Cambridge Examiner",
    "Soft Skills",
    "Employability Training",
    "Chennai",
    "Sripriya T",
  ],
  authors: [{ name: "Sripriya T" }],
  openGraph: {
    title: "Sripriya T — ELT Specialist & Corporate Trainer",
    description:
      "Experienced educator and corporate trainer specialising in English instruction, soft skills, and employability training.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full">
        <Providers>
          <LiquidBackground />
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
