"use client"

import { Inter } from 'next/font/google'
import './globals.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from 'react';
import NavbarComponent from '@/components/NavbarComponent';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body className={`${inter.className} mt-24`}>
        <NavbarComponent />
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  )
}
