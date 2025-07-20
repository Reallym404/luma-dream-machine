import React from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function GeneratorPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-6">Generator</h1>
          <p className="text-lg text-gray-600"> Generator </p>
        </div>
      </main>
      <Footer />
    </div>
  )
} 