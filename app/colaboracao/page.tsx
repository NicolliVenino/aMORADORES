import { Navigation } from "@/components/navigation"
import { CollaborationFeatures } from "@/components/collaboration-features"

export default function ColaboracaoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Colaboração</h1>
          <p className="text-muted-foreground">Compartilhe e decida em família sobre o imóvel ideal</p>
        </div>
        <CollaborationFeatures />
      </main>
    </div>
  )
}
