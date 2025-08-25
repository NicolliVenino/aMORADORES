"use client"

import { useState } from "react"
import { useAuth } from "@/hooks/useAuth"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Home, Calculator, Users, Building2, GitCompare } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, signOut } = useAuth()

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
          <div className="w-8 h-8 flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-lg flex items-center gap-2">
        <img src="/amoraLogo.jpg" alt="Home" className="w-6 h-6" /></span>

          </div>
          <span className="font-heading font-black text-xl text-primary">aMORADORES</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <item.icon className="w-4 h-4" />
              <span className="font-sans">{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          {/* Se o usuário NÃO está logado, mostra botões de login */}
          {!user && (
            <>
              <Link href="/login">
                <Button
                  variant="outline"
                  className="hidden sm:inline-flex bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                >
                  Entrar
                </Button>
              </Link>
              <Link href="/login">
                <Button className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground">
                  Começar Agora
                </Button>
              </Link>
            </>
          )}

          {/* Se o usuário ESTÁ logado, mostra opções de usuário */}
          {user && (
            <>
              <span className="hidden sm:inline text-sm text-muted-foreground">Olá, {user.email}</span>
              <Button
                variant="outline"
                onClick={() => signOut()}
                className="hidden sm:inline-flex bg-transparent border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
              >
                Sair
              </Button>
            </>
          )}

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
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary/10 transition-colors"
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="font-sans">{item.label}</span>
                  </Link>
                ))}
                <div className="pt-4 space-y-2">
                  {/* Se o usuário NÃO está logado, mostra botões de login */}
                  {!user && (
                    <>
                      <Link href="/login" className="block">
                        <Button
                          variant="outline"
                          className="w-full bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                          onClick={() => setIsOpen(false)}
                        >
                          Entrar
                        </Button>
                      </Link>
                      <Link href="/login" className="block">
                        <Button
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                          onClick={() => setIsOpen(false)}
                        >
                          Começar Agora
                        </Button>
                      </Link>
                    </>
                  )}

                  {/* Se o usuário ESTÁ logado, mostra opções de usuário */}
                  {user && (
                    <>
                      <div className="text-sm text-muted-foreground mb-2">Olá, {user.email}</div>
                      <Button
                        variant="outline"
                        className="w-full bg-transparent border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
                        onClick={() => {
                          signOut()
                          setIsOpen(false)
                        }}
                      >
                        Sair
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
