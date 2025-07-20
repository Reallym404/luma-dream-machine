import React from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function TutorialPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <Tabs defaultValue="ios" className="max-w-3xl mx-auto">
            <TabsList className="flex justify-center mb-10 bg-white/80 shadow rounded-lg p-1">
              <TabsTrigger value="ios">Dream Machine iOS</TabsTrigger>
              <TabsTrigger value="web">Dream Machine Web</TabsTrigger>
            </TabsList>
            <TabsContent value="ios">
              <article className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center" itemScope itemType="https://schema.org/Article">
                <Image
                  src="/ios-1.avif"
                  alt="Dream Machine iOS Tutorial Poster"
                  width={800}
                  height={400}
                  className="rounded-lg shadow mb-8"
                />
                <h1 className="text-3xl font-bold mb-4 text-cyan-700" itemProp="headline">Dream Machine iOS Tutorial: AI Video Generation Guide</h1>
                <p className="mb-6 text-gray-700 text-base max-w-2xl" itemProp="description">
                  Learn how to use the Dream Machine iOS app to generate stunning AI-powered videos and images. This step-by-step guide covers account setup, content creation, advanced features, and sharing options for creators and marketers.
                </p>
                <div className="text-left text-base space-y-6 w-full max-w-2xl">
                  <section>
                    <h2 className="text-xl font-semibold mb-2">1. Set up your account</h2>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><b>Download the App:</b> Find the Dream Machine app in the App Store and install it on your device. <a href="https://apps.apple.com/us/app/luma-dream-machine/id6478852867" target="_blank" className="text-cyan-600 underline">App Store Link</a></li>
                      <li><b>Sign In or Create an Account:</b> Open the app, and choose <b>Continue with Google</b> or <b>Continue with Apple</b> to create your account. Secure your account for future access to your AI video generations.</li>
                    </ul>
                  </section>
                  <section>
                    <h2 className="text-xl font-semibold mb-2">2. Navigate the app</h2>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><b>Ideas:</b> Your collection of generated content (images and videos) is always accessible from the Ideas section.</li>
                      <li><b>Boards:</b> Organize your projects and assets for efficient AI video creation.</li>
                      <li><b>Profile Settings:</b> Tap your profile picture to manage your account, subscription, or credits.</li>
                    </ul>
                  </section>
                  <section>
                    <h2 className="text-xl font-semibold mb-2">3. Generate your first image</h2>
                    <ul className="list-decimal ml-6 space-y-1">
                      <li><b>Create a New Board:</b> Tap the plus (+) button to start a new board for your project.</li>
                      <li><b>Enter Your Prompt:</b> Type a creative description, e.g., "A serene beach at sunset with pastel skies." Tap <b>Generate</b> to create a batch of 4 AI-generated images.</li>
                      <li><b>Review Your Results:</b> Swipe through the generated images and select your favorites. Use <b>More Like This</b> or <b>Brainstorm</b> to refine your visuals further.</li>
                    </ul>
                  </section>
                  <section>
                    <h2 className="text-xl font-semibold mb-2">4. Animate images</h2>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><b>Turn Images into Videos:</b> Select an image, tap <b>Make Video</b> to generate two 4-second video variations with AI-powered motion.</li>
                      <li><b>Extend Your Video:</b> Use the <b>Extend</b> feature to add length and transition your video toward an image keyframe (up to 9 seconds).</li>
                      <li><b>Camera Motion:</b> Tap the prompt box, then the star icon to adjust movements like pan, orbit, or zoom for cinematic effects in your AI videos.</li>
                    </ul>
                  </section>
                  <section>
                    <h2 className="text-xl font-semibold mb-2">5. Use advanced features</h2>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><b>Reference This:</b> Upload an image (face, object, or style) for character consistency or style alignment. Pair with a prompt for personalized AI results.</li>
                      <li><b>Modify:</b> Tap the modify icon to describe changes, e.g., "Brighten the colors and add more trees to the background." Enhance your AI generations with natural language edits.</li>
                      <li><b>Style Reference:</b> Use the star icon to apply styles like Anime, Cinematic, or Watercolor to your creations.</li>
                      <li><b>Character Reference:</b> Create consistent and personalized characters for your AI videos and images.</li>
                    </ul>
                  </section>
                  <section>
                    <h2 className="text-xl font-semibold mb-2">6. Save and share</h2>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><b>Download Content:</b> Tap the three dots on an image or video to download it to your device for offline use or sharing.</li>
                      <li><b>Share Links:</b> Use the upwards arrow icon to generate a shareable link for your board, image, or video. Collaborate and remix with others easily.</li>
                    </ul>
                  </section>
                  <section>
                    <h2 className="text-xl font-semibold mb-2">7. Manage account and credits</h2>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><b>Check Your Credits:</b> Go to your profile and tap <b>Credits</b> to see your balance and refresh date. Credits are required for AI video and image generation.</li>
                      <li><b>Upgrade Your Plan:</b> Tap the lightning icon under Subscription to select a plan (Free, Lite, Plus, Unlimited) for more features and higher limits.</li>
                    </ul>
                  </section>
                  <section>
                    <h2 className="text-xl font-semibold mb-2">8. Learn more</h2>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Access the <a href="https://lumalabs.ai/learning-hub" target="_blank" className="text-cyan-600 underline">Learning Academy</a> for detailed tutorials and video walkthroughs on AI video generation.</li>
                      <li>For support: Web: support+web@lumalabs.ai | iOS: support+ios@lumalabs.ai</li>
                    </ul>
                  </section>
                </div>
              </article>
            </TabsContent>
            <TabsContent value="web">
              <article className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center" itemScope itemType="https://schema.org/Article">
                <Image
                  src="/web-1.avif"
                  alt="Dream Machine Web Tutorial Poster"
                  width={800}
                  height={400}
                  className="rounded-lg shadow mb-8"
                />
                <h1 className="text-3xl font-bold mb-4 text-cyan-700" itemProp="headline">Dream Machine Web Tutorial: AI Video Generation Guide</h1>
                <p className="mb-6 text-gray-700 text-base max-w-2xl" itemProp="description">
                  Discover how to use Dream Machine on the web to create, animate, and share AI-generated videos and images. This comprehensive guide walks you through every step, from account setup to advanced features and sharing.
                </p>
                <div className="text-left text-base space-y-6 w-full max-w-2xl">
                  <section>
                    <h2 className="text-xl font-semibold mb-2">1. Set up your account</h2>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><b>Visit the Website:</b> Go to <a href="https://dream-machine.lumalabs.ai/" target="_blank" className="text-cyan-600 underline">dream-machine.lumalabs.ai</a> and start your AI video journey.</li>
                      <li><b>Sign In or Create an Account:</b> Use your Google account to sign up and log in. Secure your account for future access to your AI generations.</li>
                    </ul>
                  </section>
                  <section>
                    <h2 className="text-xl font-semibold mb-2">2. Navigate the web app</h2>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><b>Ideas:</b> Your collection of generated content (images and videos) is always accessible from the Ideas section.</li>
                      <li><b>Boards:</b> Organize your projects and assets for efficient AI video creation.</li>
                      <li><b>Profile Settings:</b> Click your profile picture to manage your account, subscription, or credits.</li>
                    </ul>
                  </section>
                  <section>
                    <h2 className="text-xl font-semibold mb-2">3. Generate your first image</h2>
                    <ul className="list-decimal ml-6 space-y-1">
                      <li><b>Create a New Board:</b> Click the plus (+) button to start a new board for your project.</li>
                      <li><b>Enter Your Prompt:</b> Type a creative description, e.g., "A serene beach at sunset with pastel skies." Click <b>Generate</b> to create a batch of 4 AI-generated images.</li>
                      <li><b>Review Your Results:</b> Browse the generated images and select your favorites. Use <b>More Like This</b> or <b>Brainstorm</b> to refine your visuals further.</li>
                    </ul>
                  </section>
                  <section>
                    <h2 className="text-xl font-semibold mb-2">4. Animate images</h2>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><b>Turn Images into Videos:</b> Select an image, click <b>Make Video</b> to generate two 4-second video variations with AI-powered motion.</li>
                      <li><b>Extend Your Video:</b> Use the <b>Extend</b> feature to add length and transition your video toward an image keyframe (up to 9 seconds).</li>
                      <li><b>Camera Motion:</b> Click the prompt box, then the star icon to adjust movements like pan, orbit, or zoom for cinematic effects in your AI videos.</li>
                    </ul>
                  </section>
                  <section>
                    <h2 className="text-xl font-semibold mb-2">5. Use advanced features</h2>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><b>Reference This:</b> Upload an image (face, object, or style) for character consistency or style alignment. Pair with a prompt for personalized AI results.</li>
                      <li><b>Modify:</b> Click the modify icon to describe changes, e.g., "Brighten the colors and add more trees to the background." Enhance your AI generations with natural language edits.</li>
                      <li><b>Style Reference:</b> Use the star icon to apply styles like Anime, Cinematic, or Watercolor to your creations.</li>
                      <li><b>Character Reference:</b> Create consistent and personalized characters for your AI videos and images.</li>
                    </ul>
                  </section>
                  <section>
                    <h2 className="text-xl font-semibold mb-2">6. Save and share</h2>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><b>Download Content:</b> Click the three dots on an image or video to download it to your device for offline use or sharing.</li>
                      <li><b>Share Links:</b> Use the upwards arrow icon to generate a shareable link for your board, image, or video. Collaborate and remix with others easily.</li>
                    </ul>
                  </section>
                  <section>
                    <h2 className="text-xl font-semibold mb-2">7. Manage account and credits</h2>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><b>Check Your Credits:</b> Go to your profile and click <b>Credits</b> to see your balance and refresh date. Credits are required for AI video and image generation.</li>
                      <li><b>Upgrade Your Plan:</b> Click the lightning icon under Subscription to select a plan (Free, Lite, Plus, Unlimited) for more features and higher limits.</li>
                    </ul>
                  </section>
                  <section>
                    <h2 className="text-xl font-semibold mb-2">8. Learn more</h2>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Access the <a href="https://lumalabs.ai/learning-hub" target="_blank" className="text-cyan-600 underline">Learning Academy</a> for detailed tutorials and video walkthroughs on AI video generation.</li>
                      <li>For support: Web: support+web@lumalabs.ai</li>
                    </ul>
                  </section>
                </div>
              </article>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
} 