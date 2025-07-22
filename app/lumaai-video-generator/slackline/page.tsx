import React from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Head from "next/head"

const steps = [
  {
    title: "Step 1: Capture a Video",
    desc: "Capture a video of yourself or a friend balancing on a bench or flat rail, pretending to cross a wide canyon and balancing side to side with their arms out. This initial footage is essential for creating the slackline effect.",
    imgs: ["/slackline/1.jpeg"]
  },
  {
    title: "Step 2: Open Dream Machine",
    desc: "Open Dream Machine and create a new Board. This step sets up the environment for modifying your video.",
    imgs: ["/slackline/2.jpeg"]
  },
  {
    title: "Step 3: Select Modify Mode",
    desc: "Select the Modify option in composer settings within Dream Machine to prepare for video editing.",
    imgs: ["/slackline/3.jpeg"]
  },
  {
    title: "Step 4: Import Video",
    desc: "Import or drag and drop your captured video onto the blank Video Card in the composer. This integrates your footage into the editing process.",
    imgs: ["/slackline/4.jpeg"]
  },
  {
    title: "Step 5: Open Trim View",
    desc: "Select the Video Card to open Trim View. Then, select the “Start Frame” button to download your Start Frame for further editing.",
    imgs: ["/slackline/5.jpeg"]
  },
  {
    title: "Step 6: Import to Photoshop",
    desc: "Import your Start Frame into Photoshop. This step allows for detailed image editing to refine the slackline effect.",
    imgs: ["/slackline/6.jpeg"]
  },
  {
    title: "Step 7: Edit with Gen Fill and Pen Tool",
    desc: "Using Gen Fill and the Pen Tool in Photoshop, edit your scene to shape a slackline and replace the background with an open space. Then add in a bit of detail for the surrounding environment. Once completed, export your Edited Start Frame.",
    imgs: ["/slackline/7.jpeg", "/slackline/7-1.jpeg"]
  },
  {
    title: "Step 8: Import to Midjourney",
    desc: "Import your Edited Start Frame into Midjourney Edit, or any image editor. Select the Retexture button to refine the details.",
    imgs: ["/slackline/8.jpeg"]
  },
  {
    title: "Step 9: Retexture Start Frame",
    desc: "In Midjourney, create a prompt to retexture your Start Frame. Include your envisioned details for the subject, environment, style, mood, lighting, and more. Select the Submit Retexture button to generate your New Start Frame. Once completed, download the image.",
    imgs: ["/slackline/9.jpeg"]
  },
  {
    title: "Step 10: Import New Start Frame",
    desc: "In Dream Machine, import your New Start Frame onto the Start Frame Card next to your original video. This step prepares for the final modification.",
    imgs: ["/slackline/10.jpeg"]
  },
  {
    title: "Step 11: Adjust Strength Slider",
    desc: "Adjust the Strength slider to select an intensity level for the modification. This fine-tunes the slackline effect.",
    imgs: ["/slackline/11.jpeg"]
  },
  {
    title: "Step 12: Select Strength",
    desc: "Select and lock in your preferred Strength level. Flex 3 was used for this video example to achieve the desired effect.",
    imgs: ["/slackline/12.jpeg"]
  },
  {
    title: "Step 13: Create Modified Video",
    desc: "Tap the Create button in the composer to make your slackline modified video come to life. This final step completes the process.",
    imgs: ["/slackline/13.jpeg"]
  }
]

const proTips = [
  {
    afterStep: 7,
    title: "Pro Tip: Structural Scene Shaping",
    desc: "Your edits do not need to be exact. The goal is to roughly shape the overall look and general structure you want to later be retextured with finer details. This tip enhances the flexibility and creativity of your video editing.",
    img: "/slackline/7-pro.jpeg"
  },
  {
    afterStep: 11,
    title: "Pro Tip: Test Strength Levels",
    desc: "Dial it low to preserve detail. Turn it up to dream bigger. Experiment with Strength intensity levels across the slider from Adhere, Flex, and Reimagine to see which works best for your video.",
    img: "/slackline/11-pro.jpeg"
  }
]

export default function SlacklinePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>How to Slackline with Luma AI's Modify Video Feature</title>
        <meta name="description" content="Learn how to create a slackline video using Luma AI's Modify Video feature. This step-by-step tutorial covers capturing video, using Dream Machine, Photoshop, Midjourney, and more to transform a park bench into a thrilling slackline walk." />
        <meta name="keywords" content="Luma AI, Modify Video, slackline video, video editing tutorial, Dream Machine, Photoshop, Midjourney, video effects, SEO-friendly tutorial" />
      </Head>
      <Header />
      <main className="flex-1 bg-gradient-to-br from-cyan-50 to-blue-50">
        <article className="container mx-auto px-4 py-16 max-w-2xl" itemScope itemType="https://schema.org/Article">
          <h1 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-4 text-center" itemProp="headline">How to Slackline with Luma AI's Modify Video Feature</h1>
          <h2 className="text-lg md:text-xl text-gray-700 mb-8 text-center font-medium" itemProp="description">Follow this detailed tutorial to learn how to create a slackline video using Luma AI's Modify Video feature. Each step is illustrated with images to guide you through the process of transforming a park bench into a thrilling slackline walk.</h2>
          <meta itemProp="keywords" content="Luma AI, Modify Video, slackline video, video editing tutorial, Dream Machine, Photoshop, Midjourney, video effects, SEO-friendly tutorial" />
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