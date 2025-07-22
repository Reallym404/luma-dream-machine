import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-cyan-400 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Luma Dream Machine
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-cyan-100 transition-colors">
              Home
            </Link>
            <Link href="/#features" className="hover:text-cyan-100 transition-colors">
              Features
            </Link>
            <Link href="/#download" className="hover:text-cyan-100 transition-colors">
              Download
            </Link>
            <Link href="/#about" className="hover:text-cyan-100 transition-colors">
              About
            </Link>
            <Link href="/lumaai-video-generator" className="hover:text-cyan-100 transition-colors">
              Ray2 Modify Video
            </Link>
            <Link href="/tutorial" className="hover:text-cyan-100 transition-colors">
              Tutorial
            </Link>
            <Link href="https://lumalabs.ai/dream-machine" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="sm">
                Get Started
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
} 