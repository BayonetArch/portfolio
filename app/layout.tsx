import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import SwitchTheme from "./components/SwitchTheme";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import { Command } from "lucide-react";
import Footer from "./components/Footer";
import { geistMono, geistPixel, geistSans, oswald } from "./fonts";

export const metadata: Metadata = {
  title: "Portfolio of Sudip Paudel",
  description:
    "A fullstack developer from Nepal who loves to code frontend,backend and some system stuff.",
};

function Logo() {
  return (
    <Link href="/" className="flex gap-1 items-center ">
      <Command className="size-5 text-chart-5" />
    </Link>
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    /* documented way to supress the hydration warning(i think)*/
    <html
      lang="en"
      className={`${oswald.variable} ${geistPixel.variable} ${geistMono.variable} ${geistSans.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="flex justify-between p-4 sticky top-0 z-20 bg-background border-b border-border/60">
            <Logo />
            <div className="flex gap-2 items-center justify-center">
              <SwitchTheme />
              <Navbar />
            </div>
          </header>
          <div className="mt-6"> {children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
