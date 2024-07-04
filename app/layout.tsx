import type { Metadata } from 'next'
import './globals.css'
import { Footer, Navbar } from '@/components'
import Providers from '@/components/Providers'




export const metadata: Metadata = {
  title: "Kacper's Portfolio",
  description: 'Portfolio presenting my front end skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
          <Providers>
            <Navbar />
              {children}
            <Footer />
          </Providers>
         
      </body>
     </html>
  )
}
