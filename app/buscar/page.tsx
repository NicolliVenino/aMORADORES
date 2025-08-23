import { Navigation } from "@/components/navigation"
import { PropertySearch } from "@/components/property-search"

export default function BuscarPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Buscar Imóveis</h1>
          <p className="text-muted-foreground">Encontre o imóvel dos seus sonhos com apenas 5% de entrada</p>
        </div>
        <PropertySearch />
      </main>
    </div>
  )
}
