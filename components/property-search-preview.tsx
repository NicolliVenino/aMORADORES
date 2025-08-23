"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Home, ArrowRight } from "lucide-react"
import Link from "next/link"

export function PropertySearchPreview() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-amora-purple/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-heading font-black text-3xl md:text-4xl mb-4 text-amora-blue">
              Encontre Seu Imóvel dos Sonhos
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Busque por localização, características ou estilo de vida
            </p>
          </div>

          <Card className="mb-8 border-amora-purple/20">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amora-blue w-5 h-5" />
                    <Input
                      placeholder="Digite o bairro, cidade ou região..."
                      className="pl-10 h-12 text-lg border-amora-purple/30 focus:border-amora-blue"
                    />
                  </div>
                </div>
                <Link href="/buscar">
                  <Button size="lg" className="h-12 px-8 bg-amora-blue hover:bg-amora-blue/90">
                    <Search className="w-5 h-5 mr-2" />
                    Buscar Imóveis
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-amora-purple/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-amora-blue">
                  <Home className="w-5 h-5" />
                  <span>Apartamentos</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Encontre apartamentos modernos com a flexibilidade aMORA</p>
                <Link href="/buscar?tipo=apartamento">
                  <Button
                    variant="outline"
                    className="w-full border-amora-purple text-amora-purple hover:bg-amora-purple hover:text-white bg-transparent"
                  >
                    Ver Apartamentos
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-amora-purple/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-amora-blue">
                  <Home className="w-5 h-5" />
                  <span>Casas</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Casas com quintal, garagem e espaço para a família</p>
                <Link href="/buscar?tipo=casa">
                  <Button
                    variant="outline"
                    className="w-full border-amora-purple text-amora-purple hover:bg-amora-purple hover:text-white bg-transparent"
                  >
                    Ver Casas
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-amora-purple/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-amora-blue">
                  <Home className="w-5 h-5" />
                  <span>Lançamentos</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Imóveis novos com as melhores condições</p>
                <Link href="/buscar?tipo=lancamento">
                  <Button
                    variant="outline"
                    className="w-full border-amora-purple text-amora-purple hover:bg-amora-purple hover:text-white bg-transparent"
                  >
                    Ver Lançamentos
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
