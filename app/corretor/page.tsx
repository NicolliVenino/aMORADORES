import { Navigation } from "@/components/navigation"
import { AgentDashboard } from "@/components/agent-dashboard"

export default function CorretorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Dashboard do Corretor</h1>
          <p className="text-muted-foreground">Gerencie seus clientes e apresente o modelo aMORA</p>
        </div>
        <AgentDashboard />
      </main>
    </div>
  )
}
