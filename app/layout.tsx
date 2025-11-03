// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seongbeen Park | Portfolio",
  description:
    "CS student & builder — UC/UCSD transfer + startup & personal projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50 antialiased">
        <div className="min-h-screen max-w-5xl mx-auto px-4 md:px-6 py-6 flex flex-col">
          {/* Header */}
          <header className="flex items-center justify-between mb-10">
            <a href="/" className="text-sm font-semibold tracking-tight">
              Seongbeen Park
              <span className="ml-2 rounded bg-slate-800 px-2 py-0.5 text-[10px]">
                NYK_Portfolio
              </span>
            </a>
            <nav className="flex gap-4 text-sm text-slate-200">
              <a href="/" className="hover:text-white">
                Home
              </a>
              <a href="/projects" className="hover:text-white">
                Projects
              </a>
              <a href="/about" className="hover:text-white">
                About
              </a>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </nav>
          </header>

          {/* Page content */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="mt-12 py-6 text-xs text-slate-500">
            © {new Date().getFullYear()} Seongbeen Park. Built with Next.js &
            Tailwind.
          </footer>
        </div>
      </body>
    </html>
  );
}