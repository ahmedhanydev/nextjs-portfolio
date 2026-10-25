import type { Metadata, Viewport } from "next";
import { Instrument_Serif, JetBrains_Mono, Manrope, Noto_Naskh_Arabic } from "next/font/google";
import "../styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Reveal from "@/components/Reveal";
import { site } from "@/data/portfolio";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});
const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});
// Only used by Arabic testimonials, so it isn't preloaded
const arabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500"],
  variable: "--font-arabic",
  preload: false,
});

const title = `${site.name} — ${site.role}`;
const ogDescription = "Fast, accessible web products with React & Next.js. Based in Cairo, working worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  openGraph: { type: "website", title, description: ogDescription, images: [site.ogImage] },
  twitter: { card: "summary_large_image", title, description: ogDescription, images: [site.ogImage] },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "dark light",
  themeColor: "#14120F",
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  address: { "@type": "PostalAddress", addressLocality: "Cairo", addressCountry: "EG" },
  knowsAbout: ["React", "Next.js", "TypeScript", "Technical SEO", "Accessibility"],
  sameAs: site.socials.map((s) => s.href),
};

// Inline no-flash script: apply the saved theme before paint (dark is the default)
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t;}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`js ${serif.variable} ${sans.variable} ${mono.variable} ${arabic.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <div className="grain" aria-hidden="true" />
        <Cursor />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
