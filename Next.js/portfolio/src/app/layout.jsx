import { Geist, Geist_Mono, Caveat } from "next/font/google";
import "./globals.css";
import FullScreenNavbar from "@/components/FullScreenNavbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import ThemeProvider from "@/components/ThemeProvider";
import { LoadingProvider } from "@/components/LoadingContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shobhit Shrivastava | Portfolio",
  description: "Full-Stack Developer & AI Integrator",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black dark:bg-black dark:text-white transition-colors duration-500 selection:bg-violet-500 selection:text-white">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LoadingProvider>
            <Preloader />
            <CustomCursor />
            <SmoothScroll>
              <FullScreenNavbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </SmoothScroll>
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
