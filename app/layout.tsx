import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import Container from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import SmoothScrolling from "@/components/smooth-scrolling/SmoothScrolling";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FLOATING_NAV_ITEMS } from "@/constants/navigations";
import { ViewTransitions } from "next-view-transitions";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vernon's Portfolio",
  description:
    "Welcome to Vernon's personal portfolio website, showcasing projects, skills, and experiences in web development and design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          "bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-auto",
        )}
      >
        <ViewTransitions>
          <SmoothScrolling>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <FloatingNav navItems={FLOATING_NAV_ITEMS} />
              <Container>{children}</Container>
            </ThemeProvider>
          </SmoothScrolling>
        </ViewTransitions>
      </body>
    </html>
  );
}
