"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Our Idea");

  const tabs = ["Our Idea", "Our Mission", "Our Market"];

  return (
    <main>
      <div className="relative font-title">
        <Button className="absolute z-[999] right-5 top-2 hover:text-white bg-white text-black font-bold text-lg">
          Sign In
        </Button>

        <div className="relative bg-black">
          <div className="absolute w-full h-screen bg-black opacity-[0.3]"></div>
          <Image
            className="h-screen w-screen"
            src="/landing.jpg"
            alt="Background"
            objectFit="cover"
            width={1920}
            height={1080}
            sizes="100vw 100vh"
            quality={100}
          />
          <div className="absolute bottom-0 text-center font-title  h-[48%] w-full">
            <div className="inset-0 flex flex-col items-center justify-center z-10 p-8 text-white ">
              <h1 className="text-7xl  z-[9] font-bold mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-tl from-sky-300 via-cyan-400 to-teal-700">
                  LegalX
                </span>{" "}
                <span className="">Simplifying Law for All</span>{" "}
              </h1>
              <p className="text-4xl text-black font-semibold  z-[9] ">
                Demystifying Legal Jargon for All
              </p>
              <Button className="z-[99] my-5 text-xl font-bold hover:bg-yellow-400 hover:text-black p-5">
                Explore More
              </Button>
              <div className="absolute inset-0 bottom-0 h-full w-full bg-gradient-to-t from-white to-transparent blur-lg pointer-events-none"></div>
            </div>
          </div>
        </div>

        <div className="pt-8 bg-black text-white">
          <div className="flex font-title justify-center space-x-4 mb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 ${
                  activeTab === tab
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="border-t border-gray-300 p-5 px-[20%]">
            {activeTab === "Our Idea" && (
              <div>
                <h2 className="text-center text-lg font-semibold mb-4 font-title">
                  What we do ?
                </h2>
                <p className="text-center text-2xl font-title">
                  LegalX is a product that simplifies complex legal jargon and
                  privacy policies, making them accessible and understandable
                  for everyone, ensuring users can navigate legal documents with
                  confidence.
                </p>
              </div>
            )}
            {activeTab === "Our Mission" && (
              <div>
                <h2 className="text-center text-lg font-semibold mb-4">
                  Why we exist
                </h2>
                <p className="mb-4 text-center text-2xl font-title">
                  Many individuals and small businesses struggle with
                  understanding legal terms, leading to potential
                  misunderstandings and mistakes. LegalX breaks down these
                  barriers, offering clear and concise interpretations
                  accessible to all.
                </p>
              </div>
            )}
            {activeTab === "Our Market" && (
              <div className="">
                <h2 className="text-center text-lg font-semibold mb-4 font-title">
                  Who we help
                </h2>
                <p className="text-center text-2xl font-title">
                  LegalX targets the legal technology (LegalTech) market,
                  specifically focusing on the consumer legal services segment.
                  It also appeals to the privacy and compliance sector, offering
                  value to individuals, small businesses, and organizations that
                  require clear, accessible legal information. Additionally, it
                  intersects with the digital privacy and educational technology
                  markets, catering to those who need simplified explanations of
                  complex legal jargons in documents.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
