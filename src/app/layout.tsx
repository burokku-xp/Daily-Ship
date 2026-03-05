import type { Metadata } from "next";
import Link from "next/link";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daily Ship",
  description: "Daily Ship - ブログ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="font-sans antialiased">
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-border">
            <div className="max-w-content mx-auto px-6 py-4 flex items-center justify-between">
              <Link href="/" className="text-xl font-bold text-text no-underline hover:text-primary transition-colors">
                Daily Ship
              </Link>
              <nav className="flex gap-6">
                <Link href="/" className="text-text no-underline hover:text-primary transition-colors">
                  ホーム
                </Link>
                <Link href="/blog" className="text-text no-underline hover:text-primary transition-colors">
                  ブログ
                </Link>
              </nav>
            </div>
          </header>
          <main className="flex-1">
            {children}
          </main>
          <footer className="border-t border-border mt-auto">
            <div className="max-w-content mx-auto px-6 py-6">
              <p className="text-sub-text text-sm">
                © {new Date().getFullYear()} Daily Ship. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
