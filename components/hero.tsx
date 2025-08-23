"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amora-purple/10 via-background to-amora-yellow/10 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-amora-blue/10 text-amora-blue px-4 py-2 rounded-full text-sm font-medium mb-6 animate-slide-in-up">
            <Sparkles className="w-4 h-4" />
            <span>Revolução no Financiamento Imobiliário</span>
          </div>

          <h1 className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 animate-slide-in-up">
            Sua Casa com Apenas <span className="text-amora-blue">5% de Entrada</span>
          </h1>

          <p className="font-body text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-in-up">
            Teste antes de comprar por até 3 anos. Se não gostar, pegue seu dinheiro de volta. Zero burocracia, máxima
            flexibilidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-in-up">
            <Link href="/buscar">
              <Button size="lg" className="text-lg px-8 py-6 bg-amora-blue hover:bg-amora-blue/90">
                Buscar Imóveis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/simulador">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 bg-transparent border-amora-purple text-amora-purple hover:bg-amora-purple hover:text-white"
              >
                Simular Financiamento
              </Button>
            </Link>
          </div>

          <Card className="bg-card/50 backdrop-blur border-amora-purple/20 p-8 animate-slide-in-up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-amora-blue flex-shrink-0" />
                <div className="text-left">
                  <div className="font-heading font-bold text-lg">5% de Entrada</div>
                  <div className="text-muted-foreground">Ao invés de 20%</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-amora-blue flex-shrink-0" />
                <div className="text-left">
                  <div className="font-heading font-bold text-lg">Teste por 3 Anos</div>
                  <div className="text-muted-foreground">Decida depois</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-amora-blue flex-shrink-0" />
                <div className="text-left">
                  <div className="font-heading font-bold text-lg">Zero Burocracia</div>
                  <div className="text-muted-foreground">Cuidamos de tudo</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
