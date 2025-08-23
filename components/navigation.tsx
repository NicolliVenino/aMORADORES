"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Home, Calculator, Users, Building2, GitCompare } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { icon: Home, label: "Buscar Imóveis", href: "/buscar" },
    { icon: Calculator, label: "Simulador", href: "/simulador" },
    { icon: GitCompare, label: "Comparar", href: "/comparacao" },
    { icon: Users, label: "Colaborar", href: "/colaboracao" },
    { icon: Building2, label: "Corretor", href: "/corretor" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-amora-blue rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">🏠</span>
          </div>
          <span className="font-heading font-black text-xl text-amora-blue">aMORA</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center space-x-2 text-muted-foreground hover:text-amora-blue transition-colors"
            >
              <item.icon className="w-4 h-4" />
              <span className="font-body">{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="hidden sm:inline-flex bg-transparent border-amora-purple text-amora-purple hover:bg-amora-purple hover:text-white"
          >
            Entrar
          </Button>
          <Button className="hidden sm:inline-flex bg-amora-blue hover:bg-amora-blue/90">Começar Agora</Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-amora-purple/10 transition-colors"
                  >
                    <item.icon className="w-5 h-5 text-amora-blue" />
                    <span className="font-body">{item.label}</span>
                  </Link>
                ))}
                <div className="pt-4 space-y-2">
                  <Button
                    variant="outline"
                    className="w-full bg-transparent border-amora-purple text-amora-purple hover:bg-amora-purple hover:text-white"
                  >
                    Entrar
                  </Button>
                  <Button className="w-full bg-amora-blue hover:bg-amora-blue/90">Começar Agora</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
