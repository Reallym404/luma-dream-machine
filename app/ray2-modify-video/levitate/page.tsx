import React from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Head from "next/head"

const steps = [
  {
    title: "Step 1: Capture a Video",
    desc: "Capture a video of a friend holding and lifting up their child to simulate being levitated up into the sky. This initial step is crucial for creating the illusion of levitation.",
    img: "/levitate/1-1.jpeg"
  },
  {
    title: "Step 2: Open Dream Machine",
    desc: "Open Dream Machine and create a new Board. This platform will help you modify your video to achieve the desired effect.",
    img: "/levitate/1-2.jpeg"
  },
  {
    title: "Step 3: Select Modify Option",
    desc: "Select the Modify option in composer settings within Dream Machine to begin the video editing process.",
    img: "/levitate/1-3.jpeg"
  },
  {
    title: "Step 4: Import Video",
    desc: "Import or drag and drop your captured video onto the blank Video Card in the composer. This step integrates your footage into the editing software.",
    img: "/levitate/1-4.jpeg"
  },
  {
    title: "Step 5: Trim and Select Start Frame",
    desc: "Select the Video Card to open Trim View. Then, select the “Start Frame” button to download your Start Frame for further editing.",
    img: "/levitate/1-5.jpeg"
  },
  {
    title: "Step 6: Import to Photoshop",
    desc: "Import your Start Frame into Photoshop. This step allows for detailed image editing to refine your levitation effect.",
    img: "/levitate/1-6.jpeg"
  },
  {
    title: "Step 7: Edit with Gen Fill",
    desc: "Using Gen Fill in Photoshop, edit your scene to remove the person holding the floating character, then isolate them. This enhances the levitation illusion.",
    img: "/levitate/1-7.jpeg"
  },
  {
    title: "Pro Tip: Preserve Original Character",
    desc: "Preserve the original character in the scene to maintain authenticity while editing. This tip ensures the levitation effect looks natural.",
    img: "/levitate/1-7-1.jpeg"
  },
  {
    title: "Step 8: Refine Scene Design",
    desc: "Refine the scene design by adding elements such as a darker background and a beam of light shining down on the floating character. This step enhances the visual impact.",
    img: "/levitate/1-8.jpeg"
  },
  {
    title: "Step 9: Import to After Effects",
    desc: "Import the original video into After Effects. This software is essential for advanced video editing and effects.",
    img: "/levitate/1-9.jpeg"
  },
  {
    title: "Step 10: Roto Brush Character",
    desc: "Use the Roto Brush tool in After Effects to isolate the character in the video. This step is crucial for precise editing.",
    img: "/levitate/1-10.jpeg"
  },
  {
    title: "Step 11: Edit with Content Aware",
    desc: "Using Content Aware in After Effects, replace the person holding the floating character with a new background. Save and export your edited video.",
    img: "/levitate/1-11.jpeg"
  },
  {
    title: "Step 12: Import Edited Video",
    desc: "In Dream Machine, import your new edited video. This step integrates your refined footage back into the platform.",
    img: "/levitate/1-12.jpeg"
  },
  {
    title: "Step 13: Import New Start Frame",
    desc: "Import your New Start Frame onto the Start Frame Card next to your edited video in Dream Machine.",
    img: "/levitate/1-13.jpeg"
  },
  {
    title: "Step 14: Adjust Strength",
    desc: "Adjust the Strength slider to select an intensity level for the modification. This step fine-tunes the levitation effect.",
    img: "/levitate/1-14.jpeg"
  },
  {
    title: "Pro Tip: Experiment with Strength Levels",
    desc: "Dial it low to preserve detail. Turn it up to dream bigger. Experiment with Strength intensity levels across the slider from Adhere, Flex, and Reimagine to see which works best for your video.",
    img: "/levitate/1-14-1.jpeg"
  },
  {
    title: "Step 15: Select Strength Level",
    desc: "Select and lock in your preferred Strength level. Flex 1 was used for this video example to achieve the desired effect.",
    img: "/levitate/1-15.jpeg"
  },
  {
    title: "Step 16: Create Modified Video",
    desc: "Tap the Create button in the composer to make your levitating modified video come to life. This final step completes the process.",
    img: "/levitate/1-16.jpeg"
  }
]

export default function LevitatePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>How to Create a Levitating Video with Luma AI's Modify Video Feature</title>
        <meta name="description" content="Learn step-by-step how to create a levitating video using Luma AI's Modify Video feature. This tutorial covers capturing video, using Dream Machine, Photoshop, After Effects, and more for stunning visual effects." />
        <meta name="keywords" content="Luma AI, Modify Video, levitating video, video editing tutorial, Dream Machine, Photoshop, After Effects, video effects, SEO-friendly tutorial" />
      </Head>
      <Header />
      <main className="flex-1 bg-gradient-to-br from-cyan-50 to-blue-50">
        <article className="container mx-auto px-4 py-16 max-w-2xl" itemScope itemType="https://schema.org/Article">
          <h1 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-4 text-center" itemProp="headline">How to Levitate with Modify Video</h1>
          <h2 className="text-lg md:text-xl text-gray-700 mb-8 text-center font-medium" itemProp="description">Create the illusion of floating up into the sky with #Ray2 Modify Video.</h2>
          <meta itemProp="keywords" content="Luma AI, Modify Video, levitating video, video editing tutorial, Dream Machine, Photoshop, After Effects, video effects, SEO-friendly tutorial" />
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