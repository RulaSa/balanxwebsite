import { PreOrder } from "@/components/pre-order"
import Navigation from "@/components/navigation"

export default function PreOrderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100/50">
      <Navigation />
      <main className="pt-24">
        <PreOrder />
      </main>
    </div>
  )
} 