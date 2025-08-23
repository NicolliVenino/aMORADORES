import { Navigation } from "@/components/navigation"
import { FinancialSimulator } from "@/components/financial-simulator"

export default function SimuladorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Simulador Financeiro</h1>
          <p className="text-muted-foreground">Descubra quanto você precisa para realizar o sonho da casa própria</p>
        </div>
        <FinancialSimulator />
      </main>
    </div>
  )
}
