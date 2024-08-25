"use client"
import React, { useState } from 'react'

const SmallInfo = () => {
  const [activeTab, setActiveTab] = useState("Our Idea");

  return (
    <div className="pt-8 bg-black text-white">
        <div className="flex font-title justify-center space-x-4 mb-4">
          {["Our Idea", "Our Mission", "Our Market"].map((tab) => (
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
                privacy policies, making them accessible and understandable for
                everyone, ensuring users can navigate legal documents with
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
                barriers, offering clear and concise interpretations accessible
                to all.
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
                specifically focusing on the consumer legal services segment. It
                also appeals to the privacy and compliance sector, offering
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
  )
}

export default SmallInfo