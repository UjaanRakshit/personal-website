import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import BinderShell from "@/components/binder/BinderShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://ujaanrakshit.com"),
  title: {
    default: "Ujaan Rakshit",
    template: "%s · Ujaan Rakshit",
  },
  description:
    "Ujaan Rakshit. Computer Science at Georgia Tech. Systems, GPU, and quant work.",
  openGraph: {
    title: "Ujaan Rakshit",
    description: "Computer Science at Georgia Tech. Systems, GPU, and quant work.",
    url: "https://ujaanrakshit.com",
    siteName: "Ujaan Rakshit",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ujaan Rakshit",
    description: "Computer Science at Georgia Tech. Systems, GPU, and quant work.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen">
        <BinderShell />
        <span hidden>{children}</span>
      </body>
    </html>
  );
}
