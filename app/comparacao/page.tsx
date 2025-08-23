"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Bed, Bath, Square, Star, X, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface Property {
  id: number
  title: string
  price: number
  address: string
  bedrooms: number
  bathrooms: number
  area: number
  type: string
  features: string[]
  image: string
  rating: number
  yearBuilt: number
  parking: number
  floor: string
  elevator: boolean
  furnished: boolean
  petFriendly: boolean
}

// Mock data com propriedades selecionadas para comparação
const selectedProperties: Property[] = [
  {
    id: 1,
    title: "Apartamento Moderno Vila Madalena",
    price: 450000,
    address: "Rua Harmonia, 123 - Vila Madalena, SP",
    bedrooms: 2,
    bathrooms: 1,
    area: 65,
    type: "apartamento",
    features: ["Sacada", "Lazer completo", "Pet friendly", "Academia", "Piscina"],
    image: "/modern-apartment-vila-madalena.png",
    rating: 4.8,
    yearBuilt: 2018,
    parking: 1,
    floor: "8º andar",
    elevator: true,
    furnished: false,
    petFriendly: true,
  },
  {
    id: 2,
    title: "Casa Térrea Jardim Paulista",
    price: 780000,
    address: "Alameda Santos, 456 - Jardim Paulista, SP",
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    type: "casa",
    features: ["Quintal", "Garagem 2 vagas", "Área gourmet", "Churrasqueira", "Jardim"],
    image: "/house-jardim-paulista.png",
    rating: 4.9,
    yearBuilt: 2015,
    parking: 2,
    floor: "Térreo",
    elevator: false,
    furnished: true,
    petFriendly: true,
  },
  {
    id: 3,
    title: "Cobertura Pinheiros",
    price: 920000,
    address: "Rua dos Pinheiros, 789 - Pinheiros, SP",
    bedrooms: 3,
    bathrooms: 3,
    area: 140,
    type: "cobertura",
    features: ["Terraço", "Churrasqueira", "Vista panorâmica", "Jacuzzi", "Sala de estar"],
    image: "/luxurious-pinheiros-penthouse.png",
    rating: 4.7,
    yearBuilt: 2020,
    parking: 2,
    floor: "Cobertura",
    elevator: true,
    furnished: false,
    petFriendly: false,
  },
]

export default function ComparacaoPage() {
  const [properties, setProperties] = useState<Property[]>(selectedProperties)

  const removeProperty = (id: number) => {
    setProperties((prev) => prev.filter((prop) => prop.id !== id))
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const calculateAmoraEntry = (price: number) => {
    return price * 0.05 // 5% de entrada
  }

  const calculateMonthlyPayment = (price: number) => {
    // Simulação: aluguel + poupança para completar 20% em 3 anos
    const remainingEntry = price * 0.15 // 15% restantes
    const monthlySavings = remainingEntry / 36 // 3 anos
    const estimatedRent = price * 0.006 // ~0.6% do valor como aluguel
    return estimatedRent + monthlySavings
  }

  if (properties.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <Link href="/buscar">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar à Busca
                </Button>
              </Link>
            </div>

            <div className="text-center py-20">
              <div className="w-24 h-24 bg-amora-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-12 h-12 text-amora-purple" />
              </div>
              <h1 className="font-heading font-black text-3xl mb-4">Nenhum Imóvel Selecionado</h1>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Selecione até 3 imóveis na busca para compará-los lado a lado e tomar a melhor decisão.
              </p>
              <Link href="/buscar">
                <Button className="bg-amora-blue hover:bg-amora-blue/90">Buscar Imóveis</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <Link href="/buscar">
                <Button variant="ghost" size="sm" className="mb-4">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar à Busca
                </Button>
              </Link>
              <h1 className="font-heading font-black text-3xl md:text-4xl">Comparar Imóveis</h1>
              <p className="text-muted-foreground mt-2">
                Compare até 3 imóveis lado a lado • {properties.length} de 3 selecionados
              </p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <Card key={property.id} className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 z-10 bg-background/80 backdrop-blur"
                  onClick={() => removeProperty(property.id)}
                >
                  <X className="w-4 h-4" />
                </Button>

                <div className="relative">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2 flex items-center space-x-1 bg-background/80 backdrop-blur px-2 py-1 rounded">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-medium">{property.rating}</span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-lg mb-2">{property.title}</h3>
                  <div className="flex items-center text-muted-foreground text-sm mb-4">
                    <MapPin className="w-3 h-3 mr-1" />
                    {property.address}
                  </div>

                  <div className="space-y-4">
                    {/* Preço */}
                    <div className="bg-amora-blue/5 p-4 rounded-lg">
                      <div className="text-2xl font-heading font-black text-amora-blue mb-2">
                        {formatPrice(property.price)}
                      </div>
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Entrada aMORA (5%):</span>
                          <span className="font-medium text-amora-purple">
                            {formatPrice(calculateAmoraEntry(property.price))}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Mensal estimado:</span>
                          <span className="font-medium">{formatPrice(calculateMonthlyPayment(property.price))}</span>
                        </div>
                      </div>
                    </div>

                    {/* Características Básicas */}
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <Bed className="w-4 h-4 mx-auto mb-1 text-amora-blue" />
                        <div className="font-medium">{property.bedrooms}</div>
                        <div className="text-xs text-muted-foreground">Quartos</div>
                      </div>
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <Bath className="w-4 h-4 mx-auto mb-1 text-amora-blue" />
                        <div className="font-medium">{property.bathrooms}</div>
                        <div className="text-xs text-muted-foreground">Banheiros</div>
                      </div>
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <Square className="w-4 h-4 mx-auto mb-1 text-amora-blue" />
                        <div className="font-medium">{property.area}m²</div>
                        <div className="text-xs text-muted-foreground">Área</div>
                      </div>
                    </div>

                    {/* Detalhes Adicionais */}
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Ano de construção:</span>
                        <span className="font-medium">{property.yearBuilt}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Vagas de garagem:</span>
                        <span className="font-medium">{property.parking}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Andar:</span>
                        <span className="font-medium">{property.floor}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Elevador:</span>
                        <Badge variant={property.elevator ? "default" : "secondary"} className="text-xs">
                          {property.elevator ? "Sim" : "Não"}
                        </Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Mobiliado:</span>
                        <Badge variant={property.furnished ? "default" : "secondary"} className="text-xs">
                          {property.furnished ? "Sim" : "Não"}
                        </Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Pet friendly:</span>
                        <Badge variant={property.petFriendly ? "default" : "secondary"} className="text-xs">
                          {property.petFriendly ? "Sim" : "Não"}
                        </Badge>
                      </div>
                    </div>

                    {/* Características */}
                    <div>
                      <h4 className="font-medium mb-2">Características:</h4>
                      <div className="flex flex-wrap gap-1">
                        {property.features.map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Ações */}
                    <div className="space-y-2 pt-4">
                      <Button className="w-full bg-amora-blue hover:bg-amora-blue/90">Ver Detalhes Completos</Button>
                      <Button variant="outline" className="w-full bg-transparent">
                        Agendar Visita
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          {properties.length > 0 && (
            <Card className="mt-8 bg-gradient-to-r from-amora-blue/5 to-amora-purple/5">
              <CardContent className="p-8 text-center">
                <h3 className="font-heading font-bold text-xl mb-4">Pronto para dar o próximo passo?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Com a aMORA, você pode começar com apenas 5% de entrada e morar no imóvel enquanto economiza para a
                  compra final.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-amora-blue hover:bg-amora-blue/90">Simular Financiamento aMORA</Button>
                  <Button variant="outline">Falar com Consultor</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
