import React from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Head from "next/head"

const steps = [
  {
    title: "Step 1: Capture a Video",
    desc: "Capture a video of yourself or a friend hitting different poses, moving freely, or dancing to music. This initial footage is essential for the outfit swap process.",
    img: "/outfit-swap/1.jpeg"
  },
  {
    title: "Step 2: Open Dream Machine",
    desc: "Open Dream Machine and create a new Board. This step sets up the environment for modifying your video.",
    img: "/outfit-swap/2.jpeg"
  },
  {
    title: "Step 3: Select Modify Mode",
    desc: "Select the Modify option in composer settings within Dream Machine to prepare for video editing.",
    img: "/outfit-swap/3.jpeg"
  },
  {
    title: "Step 4: Import Video",
    desc: "Import or drag and drop your captured video onto the blank Video Card in the composer. This integrates your footage into the editing process.",
    img: "/outfit-swap/4.jpeg"
  },
  {
    title: "Step 5: Open Trim View",
    desc: "Select the Video Card to open Trim View. Then, select the “Start Frame” button to download your Start Frame for further editing.",
    img: "/outfit-swap/5.jpeg"
  },
  {
    title: "Step 6: Import to Photoshop",
    desc: "Import your Start Frame into Photoshop. This step allows for detailed image editing to change outfits.",
    img: "/outfit-swap/6.jpeg"
  },
  {
    title: "Step 7: Edit with Gen Fill",
    desc: "Using Gen Fill in Photoshop, edit and replace elements of clothing in your scene into different stylish options. This step is key to achieving the outfit swap effect.",
    img: "/outfit-swap/7.jpeg"
  },
  {
    title: "Step 8: Repeat Gen Fill",
    desc: "Repeat the Gen Fill process to create multiple outfit variations. This allows for a variety of styles to choose from.",
    img: "/outfit-swap/8.jpeg"
  },
  {
    title: "Pro Tip: Create Multiple Variations",
    desc: "Create multiple variations to have more styles to transform into. This tip enhances the flexibility and creativity of your video editing.",
    img: "/outfit-swap/8-1.jpeg"
  },
  {
    title: "Step 9: Import New Start Frame",
    desc: "In Dream Machine, import your new Start Frame onto the Start Frame Card next to your original video. This step prepares for the final modification.",
    img: "/outfit-swap/9.jpeg"
  },
  {
    title: "Step 10: Adjust Strength Slider",
    desc: "Adjust the Strength slider to select an intensity level for the modification. This fine-tunes the outfit swap effect.",
    img: "/outfit-swap/10.jpeg"
  },
  {
    title: "Pro Tip: Test Strength Levels",
    desc: "Dial it low to preserve detail. Turn it up to dream bigger. Experiment with Strength intensity levels across the slider from Adhere, Flex, and Reimagine to see which works best for your video.",
    img: "/outfit-swap/10-1.jpeg"
  },
  {
    title: "Step 11: Select Strength",
    desc: "Select and lock in your preferred Strength level. Flex 2 was used for this video example to achieve the desired effect.",
    img: "/outfit-swap/11.jpeg"
  },
  {
    title: "Step 12: Create Modified Video",
    desc: "Tap the Create button in the composer to make your outfit style video come to life. This final step completes the outfit swap process.",
    img: "/outfit-swap/12.jpeg"
  },
  {
    title: "Step 13: Download Modified Video",
    desc: "Download your first modified video. This step allows you to save your work for further editing or sharing.",
    img: "/outfit-swap/13.jpeg"
  },
  {
    title: "Step 14: Repeat Process with Variations",
    desc: "Repeat the process with each variation to create multiple outfit swaps. This step ensures a diverse range of styles.",
    img: "/outfit-swap/14.jpeg"
  },
  {
    title: "Step 15: Import to Video Editor",
    desc: "Import modified videos into any video editor. This step prepares your videos for final assembly and editing.",
    img: "/outfit-swap/15.jpeg"
  },
  {
    title: "Step 16: Stack Modified Videos",
    desc: "Stack the modified videos in your timelines within the video editor. This step is crucial for creating a seamless outfit swap video.",
    img: "/outfit-swap/16.jpeg"
  },
  {
    title: "Step 17: Create Video Edit",
    desc: "Cut and create your outfit swapping video edit. This final step completes the video production process.",
    img: "/outfit-swap/17.jpeg"
  }
]

export default function OutfitSwapPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>How to Outfit Swap with Luma AI's Modify Video Feature</title>
        <meta name="description" content="Learn how to outfit swap using Luma AI's Modify Video feature. This step-by-step tutorial covers capturing video, using Dream Machine, Photoshop, and more to change outfits seamlessly." />
        <meta name="keywords" content="Luma AI, Modify Video, outfit swap, video editing tutorial, Dream Machine, Photoshop, video effects, SEO-friendly tutorial" />
      </Head>
      <Header />
      <main className="flex-1 bg-gradient-to-br from-cyan-50 to-blue-50">
        <article className="container mx-auto px-4 py-16 max-w-2xl" itemScope itemType="https://schema.org/Article">
          <h1 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-4 text-center" itemProp="headline">How to Outfit Swap with Luma AI's Modify Video Feature</h1>
          <h2 className="text-lg md:text-xl text-gray-700 mb-8 text-center font-medium" itemProp="description">Follow this detailed tutorial to learn how to outfit swap using Luma AI's Modify Video feature. Each step is illustrated with images to guide you through the process of changing outfits in your videos.</h2>
          <meta itemProp="keywords" content="Luma AI, Modify Video, outfit swap, video editing tutorial, Dream Machine, Photoshop, video effects, SEO-friendly tutorial" />
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <section key={idx} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center" itemProp="step" itemScope itemType="https://schema.org/HowToStep">
                <h3 className="text-xl font-bold mb-2 text-cyan-700 text-center" itemProp="name">{step.title}</h3>
                <p className="mb-4 text-center text-base text-gray-800" itemProp="text">{step.desc}</p>
                <div className="w-full flex justify-center">
                  <img src={step.img} alt={step.title} className="rounded-lg shadow max-w-full h-auto border border-gray-200" itemProp="image" />
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
} 