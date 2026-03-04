import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ViewTransitions } from "next-view-transitions";
import Container from "@/components/layout/Container";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FLOATING_NAV_ITEMS } from "@/constants/navigations";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
});

const siteUrl = "https://vernontamba.com";
const siteTitle = "Vernon Tamba | Frontend Developer Portfolio";
const siteDescription =
  "A personal web portfolio by Vernon Tamba. Explore projects, skills, experience, and ways to get in touch.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Vernon Tamba",
  },
  description: siteDescription,
  applicationName: "Vernon Tamba Portfolio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "Vernon Tamba Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          "bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-auto",
        )}
      >
        <ViewTransitions>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <FloatingNav navItems={FLOATING_NAV_ITEMS} />
            <Container>{children}</Container>
          </ThemeProvider>
        </ViewTransitions>
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
