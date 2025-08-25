"use client"

import { useAuth } from "@/hooks/useAuth"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"

export default function Dashboard() {
  const { user, loading, signOut } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-muted-foreground">Carregando...</div>
      </div>
    )
  }

  if (!user) {
    return null // Será redirecionado
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-xl shadow-lg border border-border overflow-hidden">
            {/* Header with gradient background */}
            <div className="bg-gradient-to-r from-primary to-secondary p-8 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👋</span>
              </div>
              <h1 className="text-3xl font-heading font-black text-white mb-2">Bem-vindo ao Dashboard</h1>
              <p className="text-white/90">Olá, {user.email}! Gerencie suas atividades na plataforma aMORADORES.</p>
            </div>

            {/* Content area */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-muted/50 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary text-xl">🏠</span>
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-1">Imóveis Salvos</h3>
                  <p className="text-muted-foreground text-sm">0 imóveis</p>
                </div>

                <div className="bg-muted/50 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-secondary text-xl">📊</span>
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-1">Simulações</h3>
                  <p className="text-muted-foreground text-sm">0 simulações</p>
                </div>

                <div className="bg-muted/50 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-accent text-xl">⭐</span>
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-1">Favoritos</h3>
                  <p className="text-muted-foreground text-sm">0 favoritos</p>
                </div>
              </div>

              <div className="flex justify-center">
                <Button
                  onClick={signOut}
                  variant="outline"
                  className="bg-transparent border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
                >
                  Sair da Conta
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
