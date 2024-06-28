import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {TooltipProvider} from "@/shared/ui/tooltip";
import {ThemeProvider} from "@/widgets/theme-provider";
import Particles from "@/shared/magicui/particles";
import { Toaster } from "@/shared/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Романов Ярослав",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
          <TooltipProvider>
            <Particles
                  className="w-screen h-screen fixed top-0 left-0 pointer-events-none"
                  quantity={100}
                  ease={80}
                  color={"accent"}
                  refresh
              />
            {children}
            <Toaster />
          </TooltipProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}
