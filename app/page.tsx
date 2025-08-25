import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-heading font-black text-white mb-6 leading-tight">
                Compre seu imóvel com uma entrada a partir de <span className="text-secondary">5%</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Descomplicamos a compra do imóvel. Comece com uma entrada a partir de apenas 5% e pague até 20% do
                financiamento em apenas 3 anos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4"
                >
                  Começar Agora
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold px-8 py-4"
                >
                  Saiba Mais
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/happy-couple-in-modern-home-interior.png"
                  alt="Casal feliz em casa moderna"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-foreground">Casa dos sonhos encontrada!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-black text-primary mb-4">Como funciona a aMORA</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simplificamos o processo de compra do seu imóvel em três passos simples
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border text-center group hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Escolha onde quer morar</h3>
              <p className="text-muted-foreground leading-relaxed">
                Você pode escolher entre apartamento, casa e até ou casa de campo. Pode ser com o valor a partir de R$
                300 mil.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border text-center group hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Mude e economize</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dê o start com uma entrada a partir de apenas 5% e não transformamos sua escolha em realidade. Deixe a
                burocracia com a gente.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border text-center group hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                <span className="text-3xl">🔗</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Opção flexível de compra</h3>
              <p className="text-muted-foreground leading-relaxed">
                Financiamento? O espaço escolhido é pago em até 3 anos. Pode morar! Você pode pagar 100% à vista
                economizou.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-black text-white mb-6">Por que esperar?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Viva hoje na casa dos seus sonhos. Mude se hoje mesmo para o imóvel e não com o risco do aluguel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4">
                Começar Agora
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold px-8 py-4"
            >
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
