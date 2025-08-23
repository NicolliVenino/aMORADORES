import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"

const steps = [
  {
    number: 1,
    title: "Dê o primeiro passo",
    description:
      "Cadastro rápido e sem compromisso para iniciar o processo. Apenas alguns dados básicos para entendermos seu perfil.",
    icon: "🚀",
    color: "bg-primary",
    action: "Começar Agora",
  },
  {
    number: 2,
    title: "Espera aí, a gente te chama",
    description:
      "Nossa equipe entra em contato via WhatsApp para entender sua realidade financeira e desenhar o melhor caminho personalizado.",
    icon: "📞",
    color: "bg-muted-foreground",
  },
  {
    number: 3,
    title: "O seu lar dos sonhos te espera",
    description:
      "Você seleciona o imóvel dos seus sonhos, independentemente de onde ele esteja anunciado. Nossa tecnologia encontra a melhor opção.",
    icon: "🏠",
    color: "bg-muted-foreground",
  },
  {
    number: 4,
    title: "Deixe com a gente",
    description:
      "A aMORA adquire o imóvel para você, cuida de toda a papelada, documentação, cartório e custos adicionais. Zero stress!",
    icon: "📋",
    color: "bg-muted-foreground",
  },
  {
    number: 5,
    title: "Entre, a casa é sua (quase!)",
    description:
      "Você se muda para o imóvel e, durante o contrato, faz pagamentos mensais. Parte do valor vai formando sua entrada de 20%!",
    icon: "🔑",
    color: "bg-accent",
  },
  {
    number: 6,
    title: "Quer tornar oficial?",
    description:
      "Em até 3 anos, você decide: usa o valor economizado para comprar o imóvel definitivamente OU pega seu dinheiro de volta.",
    icon: "💫",
    color: "bg-secondary",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-black text-3xl md:text-4xl mb-4">Como Funciona o Modelo aMORA</h2>
            <p className="font-body text-lg text-muted-foreground">
              6 passos simples para sua casa própria, do primeiro contato até as chaves na mão
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card key={step.number} className={`overflow-hidden ${step.number === 1 ? "ring-2 ring-primary" : ""}`}>
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className={`${step.color} text-white p-6 md:w-20 flex items-center justify-center`}>
                      <div className="text-center">
                        <div className="text-2xl mb-2">{step.icon}</div>
                        <div className="font-bold text-lg">{step.number}</div>
                      </div>
                    </div>
                    <div className="flex-1 p-6">
                      <h3 className="font-heading font-bold text-xl mb-3">{step.title}</h3>
                      <p className="font-body text-muted-foreground mb-4">{step.description}</p>
                      {step.action && (
                        <Button className="mt-2">
                          {step.action}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="font-heading font-bold text-2xl text-center mb-8">Por Que a aMORA é Diferente?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-heading font-bold text-lg mb-4 text-muted-foreground">🏦 Bancos Tradicionais</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Precisa de 20% de entrada</li>
                    <li>• Análise de crédito rigorosa</li>
                    <li>• Processo burocrático longo</li>
                    <li>• Compromisso de 30 anos</li>
                    <li>• Sem flexibilidade</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg mb-4 text-primary">🚀 Modelo aMORA</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Apenas 5% de entrada</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Processo simplificado</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Aprovação em dias</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Teste por até 3 anos</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Flexibilidade total</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
