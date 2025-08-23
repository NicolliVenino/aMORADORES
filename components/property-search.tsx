"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, GitCompare, Share2, MapPin, Bed, Bath, Square, Star, Link, Plus, Bell, Users } from "lucide-react"

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
  isSelected: boolean
}

const mockProperties: Property[] = [
  {
    id: 1,
    title: "Apartamento Moderno Vila Madalena",
    price: 450000,
    address: "Rua Harmonia, 123 - Vila Madalena, SP",
    bedrooms: 2,
    bathrooms: 1,
    area: 65,
    type: "apartamento",
    features: ["Sacada", "Lazer completo", "Pet friendly"],
    image: "/modern-apartment-vila-madalena.png",
    rating: 4.8,
    isSelected: false,
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
    features: ["Quintal", "Garagem 2 vagas", "Área gourmet"],
    image: "/house-jardim-paulista.png",
    rating: 4.9,
    isSelected: true,
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
    features: ["Terraço", "Churrasqueira", "Vista panorâmica"],
    image: "/luxurious-pinheiros-penthouse.png",
    rating: 4.7,
    isSelected: false,
  },
]

export function PropertySearch() {
  const [properties, setProperties] = useState<Property[]>(mockProperties)
  const [searchTerm, setSearchTerm] = useState("")
  const [propertyUrl, setPropertyUrl] = useState("")
  const [showAddProperty, setShowAddProperty] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [collaborationCode, setCollaborationCode] = useState("")
  const [filters, setFilters] = useState({
    type: "",
    bedrooms: "",
    maxPrice: "",
    minArea: "",
  })

  const toggleSelection = (id: number) => {
    setProperties((prev) => {
      const selectedCount = prev.filter((p) => p.isSelected).length
      return prev.map((prop) => {
        if (prop.id === id) {
          if (!prop.isSelected && selectedCount >= 3) {
            return prop
          }
          return { ...prop, isSelected: !prop.isSelected }
        }
        return prop
      })
    })
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const addPropertyFromUrl = () => {
    if (propertyUrl.trim()) {
      const newProperty: Property = {
        id: Date.now(),
        title: "Imóvel Adicionado via Link",
        price: 0,
        address: "Endereço a ser verificado",
        bedrooms: 0,
        bathrooms: 0,
        area: 0,
        type: "apartamento",
        features: ["Verificação pendente"],
        image: "/placeholder.svg",
        rating: 0,
        isSelected: false,
      }
      setProperties((prev) => [...prev, newProperty])
      setPropertyUrl("")
      setShowAddProperty(false)
    }
  }

  const generateCollaborationLink = () => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase()
    setCollaborationCode(code)
    navigator.clipboard.writeText(`https://amora.com.br/colaboracao/${code}`)
  }

  return (
    <section id="search" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-black text-3xl md:text-4xl mb-4">Encontre Seu Imóvel Ideal</h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Busque, organize e compare imóveis de forma inteligente. Salve seus favoritos e colabore com sua família
              na decisão.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Bell className="w-4 h-4 text-amora-blue" />
                <h3 className="font-semibold">Alertas Inteligentes</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Receba notificações quando aparecer algo similar ao que você busca
              </p>
              <Button
                variant={notifications ? "default" : "outline"}
                size="sm"
                onClick={() => setNotifications(!notifications)}
                className="w-full"
              >
                {notifications ? "Ativo" : "Ativar"} Alertas
              </Button>
            </Card>

            <Card className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="w-4 h-4 text-amora-purple" />
                <h3 className="font-semibold">Colaboração</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Compartilhe sua busca com família e corretores</p>
              <Button variant="outline" size="sm" onClick={generateCollaborationLink} className="w-full bg-transparent">
                Gerar Link
              </Button>
              {collaborationCode && <p className="text-xs text-amora-blue mt-2">Código: {collaborationCode}</p>}
            </Card>

            <Card className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Link className="w-4 h-4 text-amora-yellow" />
                <h3 className="font-semibold">Adicionar Imóvel</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Cole o link de qualquer site de imóveis</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowAddProperty(!showAddProperty)}
                className="w-full"
              >
                <Plus className="w-3 h-3 mr-1" />
                Adicionar
              </Button>
            </Card>
          </div>

          {showAddProperty && (
            <Card className="mb-8 border-amora-blue">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Adicionar Imóvel via Link</h3>
                <div className="flex gap-2 mb-4">
                  <Input
                    placeholder="Cole aqui o link do imóvel (ZAP, VivaReal, OLX, etc.)"
                    value={propertyUrl}
                    onChange={(e) => setPropertyUrl(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={addPropertyFromUrl}>Adicionar</Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Nosso sistema irá extrair automaticamente as informações do imóvel
                </p>
              </CardContent>
            </Card>
          )}

          {/* Search and Filters */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Digite o endereço, bairro ou características como 'cozinha gourmet', 'quintal com piscina'..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button className="lg:w-auto bg-amora-blue hover:bg-amora-blue/90">
                  <Search className="w-4 h-4 mr-2" />
                  Buscar
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Select
                  value={filters.type}
                  onValueChange={(value) => setFilters((prev) => ({ ...prev, type: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Tipo de Imóvel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartamento">Apartamento</SelectItem>
                    <SelectItem value="casa">Casa</SelectItem>
                    <SelectItem value="cobertura">Cobertura</SelectItem>
                    <SelectItem value="sobrado">Sobrado</SelectItem>
                  </SelectContent>
                </Select>

                <Select
                  value={filters.bedrooms}
                  onValueChange={(value) => setFilters((prev) => ({ ...prev, bedrooms: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Quartos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1+ quarto</SelectItem>
                    <SelectItem value="2">2+ quartos</SelectItem>
                    <SelectItem value="3">3+ quartos</SelectItem>
                    <SelectItem value="4">4+ quartos</SelectItem>
                  </SelectContent>
                </Select>

                <Input
                  placeholder="Preço máximo"
                  value={filters.maxPrice}
                  onChange={(e) => setFilters((prev) => ({ ...prev, maxPrice: e.target.value }))}
                />

                <Input
                  placeholder="Área mínima (m²)"
                  value={filters.minArea}
                  onChange={(e) => setFilters((prev) => ({ ...prev, minArea: e.target.value }))}
                />
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-amora-purple text-amora-purple hover:bg-amora-purple/10 bg-transparent"
                >
                  🏠 Casa para Família
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-amora-blue text-amora-blue hover:bg-amora-blue/10 bg-transparent"
                >
                  📈 Investimento
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-amora-yellow text-amora-blue hover:bg-amora-yellow/20 bg-transparent"
                >
                  🌟 Jovem Profissional
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-amora-purple text-amora-purple hover:bg-amora-purple/10 bg-transparent"
                >
                  ✨ Luxo
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-amora-blue text-amora-blue hover:bg-amora-blue/10 bg-transparent"
                >
                  🏊 Com Piscina
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-amora-yellow text-amora-blue hover:bg-amora-yellow/20 bg-transparent"
                >
                  🚇 Perto do Metrô
                </Button>
              </div>
            </CardContent>
          </Card>

          {properties.filter((p) => p.isSelected).length > 0 && (
            <div className="mb-6 p-4 bg-amora-blue/10 rounded-lg border border-amora-blue/20">
              <div className="flex items-center justify-between">
                <span className="text-amora-blue font-medium">
                  {properties.filter((p) => p.isSelected).length} imóveis selecionados para comparação
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-amora-blue text-amora-blue hover:bg-amora-blue hover:text-white bg-transparent"
                >
                  <GitCompare className="w-4 h-4 mr-2" />
                  Comparar
                </Button>
              </div>
            </div>
          )}

          {/* Property Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <img
                    src={property.image || "/placeholder.svg?height=200&width=400&query=modern apartment interior"}
                    alt={property.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`absolute top-2 right-2 bg-background/80 backdrop-blur ${
                      property.isSelected ? "text-amora-blue bg-amora-blue/10" : "text-muted-foreground"
                    }`}
                    onClick={() => toggleSelection(property.id)}
                  >
                    <GitCompare className={`w-4 h-4 ${property.isSelected ? "text-amora-blue" : ""}`} />
                  </Button>
                  <div className="absolute top-2 left-2 flex items-center space-x-1 bg-background/80 backdrop-blur px-2 py-1 rounded">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-medium">{property.rating}</span>
                  </div>
                </div>

                <CardContent className="p-4">
                  <div className="mb-2">
                    <h3 className="font-heading font-bold text-lg mb-1">{property.title}</h3>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="w-3 h-3 mr-1" />
                      {property.address}
                    </div>
                  </div>

                  <div className="text-2xl font-heading font-black text-primary mb-3">
                    {formatPrice(property.price)}
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      {property.bedrooms}
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      {property.bathrooms}
                    </div>
                    <div className="flex items-center">
                      <Square className="w-4 h-4 mr-1" />
                      {property.area}m²
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {property.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-amora-blue hover:bg-amora-blue/90">Ver Detalhes</Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-amora-purple text-amora-purple hover:bg-amora-purple/10 bg-transparent"
                    >
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 bg-gradient-to-r from-amora-blue/5 to-amora-purple/5 border-amora-blue/20">
            <CardContent className="p-8 text-center">
              <h3 className="font-heading font-bold text-2xl mb-4 text-amora-blue">Não encontrou o que procura?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Deixe seus dados e te avisaremos quando aparecer algo similar. Sem compromisso, sem spam - apenas
                oportunidades relevantes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input placeholder="Seu WhatsApp (opcional)" className="flex-1" />
                <Button className="bg-amora-blue hover:bg-amora-blue/90">Quero ser Avisado</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                💬 Receba alertas direto no WhatsApp quando encontrarmos algo perfeito para você
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
