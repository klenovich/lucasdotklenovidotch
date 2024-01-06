import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lucas Klenovich',
  description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col md:flex-row max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <aside className="md:w-1/3 md:mr-8 mb-10 md:mb-0 overflow-auto md:h-screen">
            <div className="flex flex-col">
              <Link href="/"><h1 className="text-4xl font-serif font-bold text-[#000080]">Lucas Klenovich</h1></Link>
              <p className="mt-4 font-serif font-semibold">Email</p>
              <a className="font-serif text-[#000080]" href="mailto:lucas@klenovi.ch">
                lucas@klenovi.ch
              </a>
              <p className="mt-3 font-serif font-semibold">LinkedIn</p>
              <a className="font-serif text-[#000080]" href="https://www.linkedin.com/in/lucasdk">
                /in/lucasdk
              </a>
              <p className="mt-3 font-serif font-semibold">GitHub</p>
              <a className="font-serif text-[#000080]" href="https://github.com/klenovich">
                /klenovich
              </a>
              <p className="mt-3 font-serif font-semibold">CV</p>
              <a className="font-serif text-[#000080]" href="#">
                PDF
              </a>
            </div>
          </aside>
          <main className="md:w-3/4 overflow-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

