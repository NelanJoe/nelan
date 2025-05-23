import { Inter } from "next/font/google";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  fallback: ["system-ui", "Helvetica", "Arial", "sans-serif"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <main className={`${inter.className} antialiased`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
