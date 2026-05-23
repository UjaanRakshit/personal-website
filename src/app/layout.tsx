import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import BinderShell from "@/components/binder/BinderShell";

export const metadata: Metadata = {
  title: "Ujaan Rakshit",
  description:
    "Ujaan Rakshit. Computer Science at Georgia Tech.",
  metadataBase: new URL("https://ujaanrakshit.com"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <BinderShell>{children}</BinderShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
