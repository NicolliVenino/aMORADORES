"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Building2,
  Users,
  TrendingUp,
  Plus,
  Eye,
  MessageCircle,
  Phone,
  Share2,
  Download,
  Copy,
  ExternalLink,
  Zap,
} from "lucide-react"

interface Lead {
  id: number
  name: string
  email: string
  phone: string
  budget: number
  status: "new" | "contacted" | "interested" | "visiting"
  lastContact: string
  interestedProperties: number
  source: string
}

const mockLeads: Lead[] = [
  {
    id: 1,
    name: "Carlos Silva",
    email: "carlos@email.com",
    phone: "(11) 99999-9999",
    budget: 500000,
    status: "interested",
    lastContact: "Hoje",
    interestedProperties: 3,
    source: "WhatsApp",
  },
  {
    id: 2,
    name: "Ana Santos",
    email: "ana@email.com",
    phone: "(11) 88888-8888",
    budget: 750000,
    status: "visiting",
    lastContact: "Ontem",
    interestedProperties: 2,
    source: "Link Compartilhado",
  },
]

export function AgentDashboard() {
  const [leads, setLeads] = useState<Lead[]>(mockLeads)
  const [personalizedLink, setPersonalizedLink] = useState("")
  const [newProperty, setNewProperty] = useState({
    title: "",
    price: "",
    description: "",
    features: "",
  })

  const generatePersonalizedLink = () => {
    const agentCode = Math.random().toString(36).substring(2, 8).toUpperCase()
    const link = `https://amora.com.br/corretor/${agentCode}`
    setPersonalizedLink(link)
    navigator.clipboard.writeText(link)
  }

  const getStatusColor = (status: Lead["status"]) => {
    switch (status) {
      case "new":
        return "bg-amora-yellow/20 text-amora-blue border-amora-yellow"
      case "contacted":
        return "bg-amora-purple/20 text-amora-blue border-amora-purple"
      case "interested":
        return "bg-green-100 text-green-800 border-green-200"
      case "visiting":
        return "bg-amora-blue/20 text-amora-blue border-amora-blue"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusLabel = (status: Lead["status"]) => {
    switch (status) {
      case "new":
        return "Novo"
      case "contacted":
        return "Contatado"
      case "interested":
        return "Interessado"
      case "visiting":
        return "Visitando"
      default:
        return status
    }
  }

  return (
    <section id="agent" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-black text-3xl md:text-4xl mb-4 text-amora-blue">Dashboard do Corretor</h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Gerencie seus leads, cadastre imóveis e apresente o modelo aMORA para seus clientes de forma profissional.
            </p>
          </div>

          <Card className="mb-8 bg-gradient-to-r from-amora-blue/5 to-amora-purple/5 border-amora-blue/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-heading font-bold text-xl text-amora-blue mb-2">
                    🚀 Seu Link Personalizado aMORA
                  </h3>
                  <p className="text-muted-foreground">
                    Compartilhe este link para captar leads automaticamente e apresentar o modelo aMORA
                  </p>
                </div>
                <Button onClick={generatePersonalizedLink} className="bg-amora-blue hover:bg-amora-blue/90">
                  <Zap className="w-4 h-4 mr-2" />
                  Gerar Link
                </Button>
              </div>

              {personalizedLink && (
                <div className="bg-background/50 p-4 rounded-lg border border-amora-blue/20">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-sm text-amora-blue font-mono">{personalizedLink}</code>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigator.clipboard.writeText(personalizedLink)}
                      className="border-amora-blue text-amora-blue hover:bg-amora-blue/10"
                    >
                      <Copy className="w-3 h-3 mr-1" />
                      Copiar
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-amora-purple text-amora-purple hover:bg-amora-purple/10 bg-transparent"
                    >
                      <Share2 className="w-3 h-3 mr-1" />
                      WhatsApp
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-amora-yellow text-amora-blue hover:bg-amora-yellow/20 bg-transparent"
                    >
                      <Share2 className="w-3 h-3 mr-1" />
                      Instagram
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-amora-blue text-amora-blue hover:bg-amora-blue/10 bg-transparent"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Site/Blog
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Tabs defaultValue="leads" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 bg-amora-blue/5">
              <TabsTrigger
                value="leads"
                className="flex items-center space-x-2 data-[state=active]:bg-amora-blue data-[state=active]:text-white"
              >
                <Users className="w-4 h-4" />
                <span>Leads</span>
              </TabsTrigger>
              <TabsTrigger
                value="properties"
                className="flex items-center space-x-2 data-[state=active]:bg-amora-purple data-[state=active]:text-white"
              >
                <Building2 className="w-4 h-4" />
                <span>Imóveis</span>
              </TabsTrigger>
              <TabsTrigger
                value="amora-tools"
                className="flex items-center space-x-2 data-[state=active]:bg-amora-yellow data-[state=active]:text-amora-blue"
              >
                <Zap className="w-4 h-4" />
                <span>Ferramentas aMORA</span>
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                className="flex items-center space-x-2 data-[state=active]:bg-amora-blue data-[state=active]:text-white"
              >
                <TrendingUp className="w-4 h-4" />
                <span>Analytics</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="leads" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card className="border-amora-blue/20">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-amora-blue">12</div>
                    <p className="text-sm text-muted-foreground">Leads Ativos</p>
                  </CardContent>
                </Card>
                <Card className="border-amora-purple/20">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-amora-purple">5</div>
                    <p className="text-sm text-muted-foreground">Interessados</p>
                  </CardContent>
                </Card>
                <Card className="border-amora-yellow/20">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-amora-blue">3</div>
                    <p className="text-sm text-muted-foreground">Visitas Agendadas</p>
                  </CardContent>
                </Card>
                <Card className="border-green-200">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-green-600">85%</div>
                    <p className="text-sm text-muted-foreground">Taxa Conversão</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-amora-blue">Leads Recentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {leads.map((lead) => (
                      <div
                        key={lead.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-amora-blue/5 transition-colors"
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="font-medium text-amora-blue">{lead.name}</h4>
                            <Badge className={getStatusColor(lead.status)}>{getStatusLabel(lead.status)}</Badge>
                            <Badge variant="outline" className="text-xs">
                              {lead.source}
                            </Badge>
                          </div>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <p>
                              📧 {lead.email} • 📱 {lead.phone}
                            </p>
                            <p>💰 Orçamento: R$ {lead.budget.toLocaleString()}</p>
                            <p>
                              ❤️ {lead.interestedProperties} imóveis de interesse • Último contato: {lead.lastContact}
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="border-amora-blue text-amora-blue hover:bg-amora-blue/10 bg-transparent"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="border-amora-purple text-amora-purple hover:bg-amora-purple/10 bg-transparent"
                          >
                            <MessageCircle className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="border-amora-yellow text-amora-blue hover:bg-amora-yellow/20 bg-transparent"
                          >
                            <Phone className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="properties" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-amora-blue">
                    <span>Cadastrar Novo Imóvel</span>
                    <Button className="bg-amora-blue hover:bg-amora-blue/90">
                      <Plus className="w-4 h-4 mr-2" />
                      Adicionar
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Título do Imóvel</label>
                      <Input
                        placeholder="Ex: Apartamento Moderno Vila Madalena"
                        value={newProperty.title}
                        onChange={(e) => setNewProperty((prev) => ({ ...prev, title: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Preço</label>
                      <Input
                        placeholder="Ex: 450000"
                        type="number"
                        value={newProperty.price}
                        onChange={(e) => setNewProperty((prev) => ({ ...prev, price: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Descrição</label>
                    <Textarea
                      placeholder="Descreva as características do imóvel..."
                      value={newProperty.description}
                      onChange={(e) => setNewProperty((prev) => ({ ...prev, description: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Características (separadas por vírgula)</label>
                    <Input
                      placeholder="Ex: Sacada, Lazer completo, Pet friendly"
                      value={newProperty.features}
                      onChange={(e) => setNewProperty((prev) => ({ ...prev, features: e.target.value }))}
                    />
                  </div>

                  <div className="bg-amora-blue/5 p-4 rounded-lg border border-amora-blue/20">
                    <h4 className="font-medium text-amora-blue mb-2">💡 Preview Modelo aMORA</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>
                        • Entrada de apenas 5%:{" "}
                        <span className="font-medium text-amora-blue">
                          R$ {newProperty.price ? (Number.parseInt(newProperty.price) * 0.05).toLocaleString() : "0"}
                        </span>
                      </p>
                      <p>
                        • Mensalidade estimada:{" "}
                        <span className="font-medium text-amora-blue">
                          R$ {newProperty.price ? (Number.parseInt(newProperty.price) * 0.008).toLocaleString() : "0"}
                        </span>
                      </p>
                      <p>
                        • Período de teste: <span className="font-medium text-amora-blue">Até 3 anos</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="amora-tools" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-amora-blue/20">
                  <CardHeader>
                    <CardTitle className="text-amora-blue">📋 Material de Apresentação</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Baixe materiais profissionais para apresentar o modelo aMORA aos seus clientes
                    </p>
                    <div className="space-y-2">
                      <Button
                        variant="outline"
                        className="w-full justify-start border-amora-blue text-amora-blue hover:bg-amora-blue/10 bg-transparent"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Apresentação PowerPoint
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start border-amora-purple text-amora-purple hover:bg-amora-purple/10 bg-transparent"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Folder Digital
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start border-amora-yellow text-amora-blue hover:bg-amora-yellow/20 bg-transparent"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Vídeo Explicativo
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-amora-purple/20">
                  <CardHeader>
                    <CardTitle className="text-amora-purple">🎯 Simulador para Clientes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Use nosso simulador para mostrar as vantagens do modelo aMORA
                    </p>
                    <div className="bg-amora-purple/5 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Exemplo: Imóvel de R$ 500.000</h4>
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between">
                          <span>Modelo Tradicional:</span>
                          <span className="font-medium">R$ 100.000 (20%)</span>
                        </div>
                        <div className="flex justify-between text-amora-purple">
                          <span>Modelo aMORA:</span>
                          <span className="font-bold">R$ 25.000 (5%)</span>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full bg-amora-purple hover:bg-amora-purple/90">Abrir Simulador</Button>
                  </CardContent>
                </Card>

                <Card className="border-amora-yellow/20">
                  <CardHeader>
                    <CardTitle className="text-amora-blue">📱 WhatsApp Business</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">Templates prontos para WhatsApp Business</p>
                    <div className="space-y-2">
                      <Button
                        variant="outline"
                        className="w-full justify-start border-amora-yellow text-amora-blue hover:bg-amora-yellow/20 bg-transparent"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Primeiro Contato
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start border-amora-yellow text-amora-blue hover:bg-amora-yellow/20 bg-transparent"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Apresentação aMORA
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start border-amora-yellow text-amora-blue hover:bg-amora-yellow/20 bg-transparent"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Follow-up
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-amora-blue/20">
                  <CardHeader>
                    <CardTitle className="text-amora-blue">🚀 Treinamento aMORA</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">Aprenda a vender mais com o modelo aMORA</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Módulo 1: Introdução</span>
                        <Badge className="bg-green-100 text-green-800">Completo</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Módulo 2: Objeções</span>
                        <Badge className="bg-amora-yellow/20 text-amora-blue">Em andamento</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Módulo 3: Fechamento</span>
                        <Badge variant="outline">Pendente</Badge>
                      </div>
                    </div>
                    <Button className="w-full bg-amora-blue hover:bg-amora-blue/90">Continuar Treinamento</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="border-amora-blue/20">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-amora-blue">156</div>
                    <p className="text-sm text-muted-foreground">Visualizações este mês</p>
                    <p className="text-xs text-green-600">+23% vs mês anterior</p>
                  </CardContent>
                </Card>
                <Card className="border-amora-purple/20">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-amora-purple">42</div>
                    <p className="text-sm text-muted-foreground">Leads gerados</p>
                    <p className="text-xs text-green-600">+15% vs mês anterior</p>
                  </CardContent>
                </Card>
                <Card className="border-amora-yellow/20">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-amora-blue">8</div>
                    <p className="text-sm text-muted-foreground">Vendas fechadas</p>
                    <p className="text-xs text-green-600">+33% vs mês anterior</p>
                  </CardContent>
                </Card>
                <Card className="border-green-200">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-green-600">R$ 3.2M</div>
                    <p className="text-sm text-muted-foreground">Volume de vendas</p>
                    <p className="text-xs text-green-600">+45% vs mês anterior</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-amora-blue">Performance dos Imóveis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-muted-foreground">
                    <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-50 text-amora-blue" />
                    <p>Gráficos de performance serão exibidos aqui</p>
                    <p className="text-sm">Visualizações, leads e conversões por imóvel</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
