import React from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"

const ray2Menus = [
  {
    title: "How to Levitate with Modify Video",
    subtitle: "Create the illusion of floating up into the sky with #Ray2 Modify Video.",
    link: "/ray2-modify-video/levitate"
  },
  {
    title: "How to Outfit Swap with Modify Video",
    subtitle: "Switch up your fashion look to different styles with #Ray2 Modify Video.",
    link: "/ray2-modify-video/outfit-swap"
  },
  {
    title: "How to Slackline with Modify Video",
    subtitle: "Turn park benches into a thrilling slackline walk with #Ray2 Modify Video.",
    link: "/ray2-modify-video/slackline"
  },
  {
    title: "How to Hoverboard with Modify Video",
    subtitle: "Turn into a futuristic gliding hoverboard rider with #Ray2 Modify Video.",
    link: "/ray2-modify-video/hoverboard"
  },
  {
    title: "How to Skydive with Modify Video",
    subtitle: "Free fall from your lawn as a virtual skydiver with #Ray2 Modify Video.",
    link: "/ray2-modify-video/skydive"
  },
  {
    title: "How to Mermaid with Modify Video",
    subtitle: "Reimagine anyone into a mermaid on the shore with #Ray2 Modify Video.",
    link: "/ray2-modify-video/mermaid"
  },
  {
    title: "How to Motorcycle with Modify Video",
    subtitle: "Turn a stationary bike into a high-speed chase with #Ray2 Modify Video.",
    link: "/ray2-modify-video/motorcycle"
  },
  {
    title: "How to Pirate Ship with Modify Video",
    subtitle: "Reimagine everyday household items into a ship at sea with #Ray2 Modify Video.",
    link: "/ray2-modify-video/pirate-ship"
  },
  {
    title: "How to Superhero with Modify Video",
    subtitle: "Transform into an epic superhero or supervillain with #Ray2 Modify Video.",
    link: "/ray2-modify-video/superhero"
  }
]

export default function Ray2ModifyVideoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-cyan-700 mb-10">Ray2 Modify Video</h1>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ray2Menus.map((item, idx) => (
              <Link href={item.link} key={item.title} className="block h-full">
                <Card className="bg-white/90 shadow-lg rounded-xl flex flex-col h-full transition-transform hover:scale-105 cursor-pointer">
                  <CardHeader className="flex-1 flex flex-col items-center justify-center p-8">
                    <CardTitle className="text-xl text-cyan-700 text-center mb-4">{item.title}</CardTitle>
                    <CardDescription className="text-base text-gray-700 text-center">{item.subtitle}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 