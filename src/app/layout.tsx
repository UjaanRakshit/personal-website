import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import CommandBar from "@/components/CommandBar";

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
      <body className="min-h-screen flex justify-center">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <main className="w-full max-w-[600px] px-6 py-14 md:py-20 pb-32">
            <Header />
            {children}
          </main>
          <CommandBar />
          <p className="fixed bottom-3 right-4 text-xs text-muted/70 select-none pointer-events-none">
            {new Date().getFullYear()} © ujaan rakshit
          </p>
        </ThemeProvider>
      </body>
    </html>
  );
}
