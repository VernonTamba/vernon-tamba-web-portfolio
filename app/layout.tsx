import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import Container from "@/components/layout/Container";
import { Spotlight } from "@/components/ui/spotlight-new";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vernon's Portfolio",
  description:
    "Welcome to Vernon's personal portfolio website, showcasing projects, skills, and experiences in web development and design. Explore my work, learn about my journey, and get in touch for collaborations or opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className="bg-black/[0.96] antialiased bg-grid-white/[0.02]">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Container>{children}</Container>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
