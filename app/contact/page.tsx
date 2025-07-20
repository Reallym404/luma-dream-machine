import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
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

      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get in touch with our team for questions about Luma Dream Machine and Lumalabs AI technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>We'll get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <Input placeholder="How can we help?" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea placeholder="Tell us more about your inquiry..." className="min-h-[120px]" />
                  </div>
                  <Button className="w-full bg-cyan-500 hover:bg-cyan-600">Send Message</Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle>Email Support</CardTitle>
                  <CardDescription>Get help with Lumalabs AI and Dream Machine</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-cyan-600 font-medium">support@lumadreammachine.com</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle>Phone Support</CardTitle>
                  <CardDescription>Speak directly with our support team</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-cyan-600 font-medium">+1 (555) 123-4567</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle>Business Hours</CardTitle>
                  <CardDescription>When our team is available</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                    <p>Saturday: 10:00 AM - 4:00 PM PST</p>
                    <p>Sunday: Closed</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle>Office Location</CardTitle>
                  <CardDescription>Visit us in person</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    123 AI Innovation Drive
                    <br />
                    San Francisco, CA 94105
                    <br />
                    United States
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
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

            

            
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 Luma Dream Machine. All rights reserved. Powered by Lumalabs AI.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
