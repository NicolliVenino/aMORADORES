"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, Share2, MessageCircle, Heart, Plus, Link, Bell } from "lucide-react"

interface Collaborator {
  id: number
  name: string
  role: string
  avatar: string
  status: "online" | "offline"
  lastActivity: string
}

const mockCollaborators: Collaborator[] = [
  {
    id: 1,
    name: "Maria José",
    role: "Esposa",
    avatar: "/diverse-woman-avatar.png",
    status: "online",
    lastActivity: "Curtiu 3 imóveis",
  },
  {
    id: 2,
    name: "João Silva",
    role: "Corretor",
    avatar: "/man-realtor-avatar.png",
    status: "online",
    lastActivity: "Adicionou 2 sugestões",
  },
]

export function CollaborationFeatures() {
  const [collaborators, setCollaborators] = useState<Collaborator[]>(mockCollaborators)
  const [shareLink, setShareLink] = useState("https://amora.app/busca/abc123")

  const copyShareLink = () => {
    navigator.clipboard.writeText(shareLink)
    // Show notification (would implement toast here)
  }

  return (
    <section id="collaborate" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-black text-3xl md:text-4xl mb-4">Colabore na Busca da Casa Ideal</h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Compartilhe sua busca com família, amigos e corretores. Tomem decisões juntos de forma organizada e
              transparente.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Collaboration Panel */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>Colaboradores Ativos</span>
                  <Badge variant="secondary">{collaborators.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {collaborators.map((collaborator) => (
                  <div key={collaborator.id} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src={collaborator.avatar || "/placeholder.svg"} alt={collaborator.name} />
                        <AvatarFallback>
                          {collaborator.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div
                        className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background ${
                          collaborator.status === "online" ? "bg-green-500" : "bg-gray-400"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{collaborator.name}</div>
                      <div className="text-sm text-muted-foreground">{collaborator.role}</div>
                      <div className="text-xs text-primary">{collaborator.lastActivity}</div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                  </div>
                ))}

                <Button variant="outline" className="w-full bg-transparent">
                  <Plus className="w-4 h-4 mr-2" />
                  Convidar Colaborador
                </Button>
              </CardContent>
            </Card>

            {/* Sharing Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Share2 className="w-5 h-5 text-primary" />
                  <span>Compartilhar Busca</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Link de Compartilhamento</label>
                  <div className="flex space-x-2">
                    <Input value={shareLink} readOnly className="flex-1" />
                    <Button onClick={copyShareLink}>
                      <Link className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Qualquer pessoa com este link pode ver e comentar nos imóveis
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Compartilhar via:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="justify-start bg-transparent">
                      <MessageCircle className="w-4 h-4 mr-2 text-green-600" />
                      WhatsApp
                    </Button>
                    <Button variant="outline" className="justify-start bg-transparent">
                      <Share2 className="w-4 h-4 mr-2 text-blue-600" />
                      Email
                    </Button>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 flex items-center">
                    <Bell className="w-4 h-4 mr-2 text-primary" />
                    Notificações Ativas
                  </h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Novos imóveis que combinam com seu perfil</li>
                    <li>• Comentários de colaboradores</li>
                    <li>• Mudanças de preço nos imóveis selecionados</li>
                    <li>• Lembretes de visitas agendadas</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity Feed */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Atividade Recente</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium">Maria José</span> selecionou o imóvel
                      <span className="font-medium"> "Apartamento Vila Madalena"</span> para comparação
                    </p>
                    <p className="text-xs text-muted-foreground">há 2 minutos</p>
                  </div>
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium">João Silva (Corretor)</span> adicionou uma sugestão:
                      <span className="font-medium"> "Casa Jardim Paulista"</span>
                    </p>
                    <p className="text-xs text-muted-foreground">há 15 minutos</p>
                  </div>
                  <Plus className="w-4 h-4 text-primary" />
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-lg bg-primary/5">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Bell className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium">Novo imóvel encontrado!</span> Apartamento em Pinheiros que combina
                      com seus critérios de busca.
                    </p>
                    <p className="text-xs text-muted-foreground">há 1 hora</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
