import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Zap, Video, Sparkles, Users, Shield, ArrowRight, Play, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-50 to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-cyan-100 text-cyan-800 hover:bg-cyan-200">
                Powered by Lumalabs AI Technology
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Transform Your Ideas into
                <span className="text-cyan-500 block">Stunning AI Videos</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience the power of Luma Dream Machine - the revolutionary AI video generation tool that brings your
                imagination to life with unprecedented quality and speed.
              </p>
              
              <div className="mt-12 flex justify-center">
                <video
                  src="/10368000.mp4"
                  autoPlay
                  loop
                  muted
                  controls
                  width={800}
                  height={450}
                  className="rounded-lg shadow-2xl mx-auto"
                  poster="/GsyY3nmW0AAcUQv.jpeg"
                >
                  您的浏览器不支持 video 标签。
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Luma Dream Machine?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the cutting-edge features that make Lumalabs AI the leader in video generation technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-cyan-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle>Lightning Fast Generation</CardTitle>
                  <CardDescription>
                    Generate high-quality AI videos in seconds with Lumalabs AI advanced processing
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-cyan-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Video className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle>4K Video Quality</CardTitle>
                  <CardDescription>
                    Create stunning 4K resolution videos with professional-grade quality and detail
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-cyan-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle>AI-Powered Magic</CardTitle>
                  <CardDescription>
                    Harness the power of Lumalabs AI to transform text prompts into cinematic videos
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-cyan-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle>Collaborative Workspace</CardTitle>
                  <CardDescription>
                    Work together with your team to create and share AI-generated video content
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-cyan-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle>Enterprise Security</CardTitle>
                  <CardDescription>
                    Your data is protected with enterprise-grade security and privacy controls
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-cyan-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle>Premium Templates</CardTitle>
                  <CardDescription>Access hundreds of professionally designed templates and styles</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">Get Started with Luma Dream Machine</h2>
              <p className="text-xl mb-8 opacity-90">
                Download the most advanced AI video generation tool and start creating amazing content today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="https://dream-machine.lumalabs.ai/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="secondary" className="bg-white text-cyan-600 hover:bg-gray-100 w-full sm:w-auto">
                    <Download className="mr-2 h-5 w-5" />
                    Use for Web
                  </Button>
                </Link>
                <Link href="https://apps.apple.com/us/app/luma-dream-machine/id6478852867" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-cyan-600 bg-transparent w-full sm:w-auto"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Use for IOS
                  </Button>
                </Link>
              </div>
              <p className="text-sm mt-4 opacity-75">Free trial available • No credit card required • Instant access</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">About Luma Dream Machine</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Luma Dream Machine represents the pinnacle of AI video generation technology. Built on the foundation
                  of Lumalabs AI research, our platform empowers creators, marketers, and businesses to produce
                  professional-quality videos with unprecedented ease.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our mission is to democratize video creation by making advanced AI technology accessible to everyone,
                  from individual creators to enterprise teams.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-600 mb-2">1M+</h3>
                    <p className="text-gray-600">Videos Generated</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-600 mb-2">50K+</h3>
                    <p className="text-gray-600">Active Users</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-600 mb-2">99.9%</h3>
                    <p className="text-gray-600">Uptime</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-600 mb-2">24/7</h3>
                    <p className="text-gray-600">Support</p>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/GvxLbctXEAEMthz.jpeg"
                  alt="Lumalabs AI Technology Visualization"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Create Amazing Videos?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of creators who are already using Luma Dream Machine to bring their ideas to life
            </p>
            <Link href="https://lumalabs.ai/dream-machine" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                Start Creating Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
