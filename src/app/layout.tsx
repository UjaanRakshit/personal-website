import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import DynamicBackground from "@/components/DynamicBackground";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Ujaan Rakshit - Developer & Creative",
  description: "Personal portfolio of Ujaan Rakshit - A passionate developer, creative thinker, and problem solver.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
        <DynamicBackground />
        {children}
      </body>
    </html>
  );
}
