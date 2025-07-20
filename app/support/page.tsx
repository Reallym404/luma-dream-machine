import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Book, MessageCircle, Video, FileText, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function SupportPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-cyan-400 text-white">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              Luma Dream Machine
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/#features" className="hover:text-cyan-100 transition-colors">
                Features
              </Link>
              <Link href="/#download" className="hover:text-cyan-100 transition-colors">
                Download
              </Link>
              <Link href="/#about" className="hover:text-cyan-100 transition-colors">
                About
              </Link>
              <Link href="/contact" className="hover:text-cyan-100 transition-colors">
                Contact
              </Link>
              <Link href="/support" className="hover:text-cyan-100 transition-colors">
                Support
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-50 to-blue-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">How can we help you?</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Find answers, get support, and learn how to make the most of Luma Dream Machine and Lumalabs AI
            </p>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input placeholder="Search for help articles..." className="pl-10 py-3" />
            </div>
          </div>
        </section>

        {/* Quick Help Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-cyan-200 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle>Getting Started</CardTitle>
                  <CardDescription>
                    Learn the basics of using Luma Dream Machine for AI video generation
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-cyan-200 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Video className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle>Video Tutorials</CardTitle>
                  <CardDescription>Watch step-by-step guides on using Lumalabs AI features</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-cyan-200 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Book className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle>Documentation</CardTitle>
                  <CardDescription>Comprehensive guides and API documentation for developers</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-cyan-200 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <MessageCircle className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle>Live Chat</CardTitle>
                  <CardDescription>Get instant help from our support team during business hours</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-cyan-200 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle>Community Forum</CardTitle>
                  <CardDescription>Connect with other Luma Dream Machine users and share tips</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-cyan-200 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle>Submit Ticket</CardTitle>
                  <CardDescription>Report bugs or request technical support from our team</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">Common questions about Luma Dream Machine and Lumalabs AI</p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What is Luma Dream Machine?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Luma Dream Machine is an advanced AI video generation platform powered by Lumalabs AI technology. It
                    allows users to create high-quality videos from text prompts using cutting-edge artificial
                    intelligence.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How does Lumalabs AI work?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Lumalabs AI uses advanced machine learning models trained on vast datasets to understand and
                    generate video content. Simply provide a text description, and our AI will create a corresponding
                    video.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What video formats are supported?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Luma Dream Machine supports multiple video formats including MP4, MOV, and AVI. Videos can be
                    exported in various resolutions up to 4K quality.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Is there a free trial available?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes! We offer a free trial that includes 10 video generations so you can experience the power of
                    Lumalabs AI before subscribing to a paid plan.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How long does video generation take?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Generation time varies based on video length and complexity, but most videos are ready within 30
                    seconds to 2 minutes thanks to our optimized Lumalabs AI infrastructure.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Still need help?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our support team is here to help you get the most out of Luma Dream Machine
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600">
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Live Chat
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Support Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Luma Dream Machine</h3>
              <p className="text-gray-400 mb-4">
                The most advanced AI video generation platform powered by Lumalabs AI technology.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/#features" className="text-gray-400 hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/#download" className="text-gray-400 hover:text-white transition-colors">
                    Download
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/#about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-gray-400 hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 Luma Dream Machine. All rights reserved. Powered by Lumalabs AI.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
