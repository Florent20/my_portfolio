import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Cursor } from "@/components/layout/Cursor";
import { Preloader } from "@/components/layout/Preloader";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollBackground } from "@/components/layout/ScrollBackground";
import { CursorTrail } from "@/components/layout/CursorTrail";
import { MotionProvider } from "@/components/providers/MotionProvider";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://louisflorentbwam.dev"),
  title: {
    default: "Bwam Louis-Florent — Frontend Engineer",
    template: "%s — Bwam Louis-Florent",
  },
  description:
    "Frontend engineer turn designs into smooth, accessible interfaces that feel alive.",
  openGraph: {
    type: "website",
    url: "https://louisflorentbwam.dev",
    siteName: "Bwam Louis-Florent",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} dark`}>
      <body className="grain vignette bg-transparent text-white antialiased">
        <ScrollBackground />
        <MotionProvider>
          <Preloader />
          <CursorTrail />
          <Cursor />
          <SmoothScroll>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
        </MotionProvider>
      </body>
    </html>
  );
}