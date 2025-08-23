import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "aMORA - Sua Casa com Apenas 5% de Entrada",
  description:
    "Compre sua casa própria com apenas 5% de entrada. Teste antes de comprar por até 3 anos. Revolucione sua jornada imobiliária com a aMORA.",
  keywords: "imóveis, casa própria, financiamento, 5% entrada, aMORA, real estate",
  authors: [{ name: "aMORA Team" }],
  openGraph: {
    title: "aMORA - Sua Casa com Apenas 5% de Entrada",
    description: "Compre sua casa própria com apenas 5% de entrada. Teste antes de comprar por até 3 anos.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
