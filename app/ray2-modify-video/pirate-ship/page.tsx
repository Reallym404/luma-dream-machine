import React from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Head from "next/head"

const steps = [
  {
    title: "Step 1: Capture a Video",
    desc: "Capture a video of a friend or two puppeteering a broom and basket as a ship or boat while poking under a blanket to simulate crashing waves. This initial footage is essential for creating the pirate ship effect.",
    imgs: ["/pirate-ship/1.jpeg"]
  },
  {
    title: "Step 2: Open Dream Machine",
    desc: "Open Dream Machine and create a new Board. This step sets up the environment for modifying your video.",
    imgs: ["/pirate-ship/2.jpeg"]
  },
  {
    title: "Step 3: Select Modify Mode",
    desc: "Select the Modify option in composer settings within Dream Machine to prepare for video editing.",
    imgs: ["/pirate-ship/3.jpeg"]
  },
  {
    title: "Step 4: Import Video",
    desc: "Import or drag and drop your captured video onto the blank Video Card in the composer. This integrates your footage into the editing process.",
    imgs: ["/pirate-ship/4.jpeg"]
  },
  {
    title: "Step 5: Grab Start Frame",
    desc: "Select the Video Card to open Trim View. Then, select the \"Start Frame\" button to download your Start Frame for further editing.",
    imgs: ["/pirate-ship/5.jpeg"]
  },
  {
    title: "Step 6: Import to Midjourney",
    desc: "Import your Start Frame into Midjourney Edit, or any image editor. Select the Retexture button to refine the details.",
    imgs: ["/pirate-ship/6.jpeg"]
  },
  {
    title: "Step 7: Retexture Start Frame",
    desc: "In Midjourney, create a prompt to retexture your Start Frame. Include your envisioned details for the subject, environment, style, mood, lighting, and more. Select the Submit Retexture button to generate your New Start Frame. Once completed, download the image.",
    imgs: ["/pirate-ship/7.jpeg"]
  },
  {
    title: "Step 8: Import New Start Frame",
    desc: "In Dream Machine, import your New Start Frame onto the Start Frame Card next to your original video. This step prepares for the final modification.",
    imgs: ["/pirate-ship/8.jpeg"]
  },
  {
    title: "Step 9: Adjust Strength Slider",
    desc: "Adjust the Strength slider to select an intensity level for the modification. This fine-tunes the pirate ship effect.",
    imgs: ["/pirate-ship/9.jpeg"]
  },
  {
    title: "Step 10: Select Strength",
    desc: "Select and lock in your preferred Strength level. Reimagine 2 was used for this video example to achieve the desired effect.",
    imgs: ["/pirate-ship/10.jpeg"]
  },
  {
    title: "Step 11: Create Modified Video",
    desc: "Tap the Create button in the composer to make your pirate ship modified video come to life. This final step completes the process.",
    imgs: ["/pirate-ship/11.jpeg"]
  }
]

const proTips = [
  {
    afterStep: 9,
    title: "Pro Tip: Test Strength Levels",
    desc: "Dial it low to preserve detail. Turn it up to dream bigger. Experiment with Strength intensity levels across the slider from Adhere, Flex, and Reimagine to see which works best for your video.",
    img: "/pirate-ship/9-pro.jpeg"
  }
]

export default function PirateShipPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>How to Create a Pirate Ship Video with Luma AI's Modify Video Feature</title>
        <meta name="description" content="Learn how to create a pirate ship video using Luma AI's Modify Video feature. This step-by-step tutorial covers capturing video, using Dream Machine, Midjourney, and more to transform household items into a thrilling pirate ship scene." />
        <meta name="keywords" content="Luma AI, Modify Video, pirate ship video, video editing tutorial, Dream Machine, Midjourney, video effects, SEO-friendly tutorial" />
      </Head>
      <Header />
      <main className="flex-1 bg-gradient-to-br from-cyan-50 to-blue-50">
        <article className="container mx-auto px-4 py-16 max-w-2xl" itemScope itemType="https://schema.org/Article">
          <h1 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-4 text-center" itemProp="headline">How to Create a Pirate Ship Video with Luma AI's Modify Video Feature</h1>
          <h2 className="text-lg md:text-xl text-gray-700 mb-8 text-center font-medium" itemProp="description">Follow this detailed tutorial to learn how to create a pirate ship video using Luma AI's Modify Video feature. Each step is illustrated with images to guide you through the process of transforming household items into a thrilling pirate ship scene.</h2>
          <meta itemProp="keywords" content="Luma AI, Modify Video, pirate ship video, video editing tutorial, Dream Machine, Midjourney, video effects, SEO-friendly tutorial" />
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <React.Fragment key={idx}>
                <section className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center" itemProp="step" itemScope itemType="https://schema.org/HowToStep">
                  <h3 className="text-xl font-bold mb-2 text-cyan-700 text-center" itemProp="name">{step.title}</h3>
                  <p className="mb-4 text-center text-base text-gray-800" itemProp="text">{step.desc}</p>
                  <div className="w-full flex flex-col items-center gap-4">
                    {step.imgs.map((img, i) => (
                      <img key={i} src={img} alt={step.title + ' ' + (i+1)} className="rounded-lg shadow max-w-full h-auto border border-gray-200" itemProp="image" />
                    ))}
                  </div>
                </section>
                {proTips.filter(tip => tip.afterStep === idx + 1).map((tip, i) => (
                  <section key={"pro-"+i} className="bg-cyan-50 border-l-4 border-cyan-400 rounded-xl shadow p-6 flex flex-col items-center" itemProp="step" itemScope itemType="https://schema.org/HowToStep">
                    <h4 className="text-lg font-bold mb-2 text-cyan-700 text-center" itemProp="name">{tip.title}</h4>
                    <p className="mb-4 text-center text-base text-gray-800" itemProp="text">{tip.desc}</p>
                    <div className="w-full flex justify-center">
                      <img src={tip.img} alt={tip.title} className="rounded-lg shadow max-w-full h-auto border border-gray-200" itemProp="image" />
                    </div>
                  </section>
                ))}
              </React.Fragment>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
} 