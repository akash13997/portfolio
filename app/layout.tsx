import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { profile } from "@/lib/data";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const siteUrl = "https://akashsingh.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — Full Stack Developer`,
    template: `%s — ${profile.name}`
  },
  description: profile.summary,
  keywords: ["Akash Singh", "Full Stack Developer", "React Developer", "Next.js Developer", "Frontend Engineer"],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — Full Stack Developer`,
    description: profile.summary,
    url: siteUrl,
    siteName: profile.name,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Full Stack Developer`,
    description: profile.summary
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: profile.email,
    address: profile.location,
    url: siteUrl,
    sameAs: [profile.github, profile.linkedin]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${display.variable} ${body.variable} ${mono.variable} font-body antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
