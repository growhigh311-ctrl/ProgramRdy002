import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { Accordion } from "@/components/Accordion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Cricket Betting Odds Work: Formats & Value Explained",
  description:
    "Confused by cricket betting odds? Learn how decimal and fractional odds work, how to calculate implied probability, and how to spot real betting value.",
  alternates: { canonical: "https://reddyreal.live/how-cricket-betting-odds-work/" },
  openGraph: {
    title: "How Cricket Betting Odds Work: Formats & Value Explained",
    description:
      "Confused by cricket betting odds? Learn how decimal and fractional odds work, how to calculate implied probability, and how to spot real betting value.",
    url: "https://reddyreal.live/how-cricket-betting-odds-work/",
    siteName: "Reddy Anna Book",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Cricket Betting Odds Work: Formats & Value Explained",
    description:
      "Confused by cricket betting odds? Learn how decimal and fractional odds work, how to calculate implied probability, and how to spot real betting value.",
  },
};

export default function HowCricketBettingOddsWorkPage() {
  const faqItems = [
    {
      question: "Which odds format is best for beginners?",
      answer: "Decimal odds are generally considered the easiest to work with because they allow for quick calculations of your total payout.",
    },
    {
      question: "How do I calculate if a bet has value?",
      answer: "Multiply your estimated probability of an outcome by the decimal odds. If the result is greater than 1, the bet has positive expected value.",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-8 select-none">
      <div className="w-full flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar */}
        <div className="hidden lg:block lg:w-1/4">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 flex flex-col gap-8 text-left">
          {/* Main Title & Intro */}
          <section className="w-full bg-[#0c1322] border border-[#9C27B0]/10 rounded-md p-6 md:p-8 flex flex-col gap-4 shadow-lg shadow-black">
            <h1 className="text-[#FF4081] font-black text-2xl md:text-3xl tracking-wide leading-tight">
              Cricket Betting Odds Explained: Format & Value
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Is &quot;5/2&quot; better than &quot;3.50&quot;? Understanding the math behind the odds is the first step to identifying &quot;value&quot;—the golden rule of professional betting. If you don't understand the numbers, you're not betting; you're guessing.
            </p>
          </section>

          {/* Decimal vs. Fractional Odds */}
          <section className="w-full bg-[#0c1322] border border-[#9C27B0]/10 rounded-md p-6 md:p-8 flex flex-col gap-4 shadow-lg shadow-black">
            <h2 className="text-[#FF4081] font-extrabold text-lg md:text-xl tracking-wide border-b border-[#9C27B0]/10 pb-1.5">
              Decimal vs. Fractional Odds
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Different platforms display odds in different formats. Knowing how to convert them is a basic requirement:
            </p>
            <ul className="text-gray-300 text-sm md:text-base flex flex-col gap-2.5 pl-4 list-disc font-semibold">
              <li>
                <span className="text-white font-bold">Decimal Odds (e.g., 2.00):</span> These are the most common in modern online betting. To calculate your total return, multiply your stake by the decimal. (Stake x Odds = Total Payout).
              </li>
              <li>
                <span className="text-white font-bold">Fractional Odds (e.g., 5/2):</span> Common in traditional markets. This shows your potential profit relative to your stake. A 5/2 odd means for every 2 units you bet, you make 5 units of profit.
              </li>
              <li>
                <span className="text-white font-bold">Conversion:</span> To convert 5/2 to decimal, divide 5 by 2 (2.5) and add 1 (3.5).
              </li>
            </ul>
          </section>

          {/* Implied Probability */}
          <section className="w-full bg-[#0c1322] border border-[#9C27B0]/10 rounded-md p-6 md:p-8 flex flex-col gap-4 shadow-lg shadow-black">
            <h2 className="text-[#FF4081] font-extrabold text-lg md:text-xl tracking-wide border-b border-[#9C27B0]/10 pb-1.5">
              Implied Probability
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Every set of odds represents the bookmaker’s estimation of an event's probability.
            </p>
            <ul className="text-gray-300 text-sm md:text-base flex flex-col gap-2.5 pl-4 list-disc font-semibold">
              <li>
                <span className="text-white font-bold">The Math:</span> Divide 1 by the decimal odds to find the percentage. For example, odds of 2.00 imply a 50% chance {"(1 \\div 2.00 = 0.50)"}.
              </li>
              <li>
                <span className="text-white font-bold">The Margin:</span> If you add up the implied probabilities of all outcomes in a match (e.g., Team A winning + Team B winning), the total will always be greater than 100%. That &quot;extra&quot; percentage is the bookmaker's margin (the house edge).
              </li>
            </ul>
          </section>

          {/* Spotting "Value" */}
          <section className="w-full bg-[#0c1322] border border-[#9C27B0]/10 rounded-md p-6 md:p-8 flex flex-col gap-4 shadow-lg shadow-black">
            <h2 className="text-[#FF4081] font-extrabold text-lg md:text-xl tracking-wide border-b border-[#9C27B0]/10 pb-1.5">
              Spotting &quot;Value&quot;
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Value is the difference between the actual probability of an event and the probability implied by the odds. If you believe a team has a 60% chance to win, but the odds (1.50) imply only a 66% chance, there is no value. If the odds are 2.00 (implying 50%), you have found a positive value bet.
            </p>
          </section>

          {/* FAQs Section */}
          <section className="w-full bg-[#0c1322] border border-[#9C27B0]/10 rounded-md p-6 md:p-8 flex flex-col gap-6 shadow-lg shadow-black">
            <h3 className="text-[#FF4081] font-black text-xl md:text-2xl border-b border-[#9C27B0]/10 pb-2">FAQs</h3>
            <Accordion items={faqItems} />
          </section>
        </div>
      </div>
    </div>
  );
}
