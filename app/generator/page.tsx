import React from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function GeneratorPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gradient-to-br from-cyan-50 to-blue-50"></main>
      <Footer />
    </div>
  )
} 