import { Hero } from "@/components/hero"
import { QuickActions } from "@/components/quick-actions"
import { HowItWorks } from "@/components/how-it-works"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <QuickActions />
        <HowItWorks />
      </main>
    </div>
  )
}
