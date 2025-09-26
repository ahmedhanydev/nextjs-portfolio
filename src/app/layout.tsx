import { Montserrat } from "next/font/google";
import "../styles/globals.css";
import ClientProviders from "@/components/providers/ClientProviders";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const metadata = {
  title: "Ahmed Portfolio",
  description: "Personal portfolio of Ahmed – Frontend Developer",
};

// Inline no-flash script for theme (very small, executed before paint)
const themeScript = `(() => {try {const s=localStorage.getItem('theme');const m=window.matchMedia('(prefers-color-scheme: dark)').matches;const t=(s==='light'||s==='dark')?s:(m?'dark':'light');if(t==='dark') document.documentElement.classList.add('dark');document.documentElement.setAttribute('data-theme',t);} catch(e) {}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
      </head>
      <body className={`${montserrat.variable} font-mont bg-light dark:bg-dark min-h-screen`}>        
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
