import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import Navbar from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SignupDialog } from "@/components/shared/signup-dialog";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Riguelni Documentation",
  description: "Documentation for the Riguelni Platform",
  metadataBase: new URL("https://riguelni-docs.vercel.app"),
  keywords: [
    "Riguelni",
    "documentation",
    "freelancing platform",
    "Algerian developers",
    "technical documentation",
    "development practices",
    "modern architecture"
  ],
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  authors: [{ name: "Riguelni Team" }],
  openGraph: {
    title: "riguelni-docs.vercel.app",
    description: "A modern, intuitive documentation platform for developers",
    url: "https://riguelni-docs.vercel.app",
    siteName: "Riguelni.docs - Modern Documentation Platform",
    locale: "en_US",
    type: "website",
    images: [{ url: "/logo.svg", width: 32, height: 32 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Riguelni.docs - Modern Documentation Platform",
    description: "A modern, intuitive documentation platform for developers",
    images: ["/logo.svg"],
  },
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="riguelni-theme"
        >
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <SignupDialog />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}