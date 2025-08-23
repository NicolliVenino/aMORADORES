"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, Users, Building2, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function QuickActions() {
  const actions = [
    {
      icon: Calculator,
      title: "Simulador Financeiro",
      description: "Descubra quanto você precisa para realizar o sonho da casa própria",
      href: "/simulador",
      color: "amora-blue",
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Compartilhe e decida em família sobre o imóvel ideal",
      href: "/colaboracao",
      color: "amora-purple",
    },
    {
      icon: Building2,
      title: "Para Corretores",
      description: "Gerencie seus clientes e apresente o modelo aMORA",
      href: "/corretor",
      color: "amora-blue",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-amora-yellow/20 text-amora-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Ferramentas Inteligentes</span>
            </div>
            <h2 className="font-heading font-black text-3xl md:text-4xl mb-4">Tudo que Você Precisa em Um Só Lugar</h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Ferramentas desenvolvidas para simplificar sua jornada de compra da casa própria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {actions.map((action, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 border-amora-purple/20 hover:border-amora-blue/40"
              >
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-${action.color}/10`}>
                      <action.icon className={`w-6 h-6 text-${action.color}`} />
                    </div>
                    <span className="text-amora-blue">{action.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{action.description}</p>
                  <Link href={action.href}>
                    <Button className="w-full bg-amora-blue hover:bg-amora-blue/90">
                      Acessar
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
