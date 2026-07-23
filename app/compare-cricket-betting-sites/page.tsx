import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { Accordion } from "@/components/Accordion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comparing Cricket Betting Sites: The Essential Checklist (2026)",
  description:
    "Looking for the best cricket betting site? Compare platforms by minimum deposit, odds quality, and payout speed in our 2026 guide.",
  alternates: { canonical: "https://reddyreal.live/compare-cricket-betting-sites/" },
  openGraph: {
    title: "Comparing Cricket Betting Sites: The Essential Checklist (2026)",
    description:
      "Looking for the best cricket betting site? Compare platforms by minimum deposit, odds quality, and payout speed in our 2026 guide.",
    url: "https://reddyreal.live/compare-cricket-betting-sites/",
    siteName: "Reddy Anna Book",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comparing Cricket Betting Sites: The Essential Checklist (2026)",
    description:
      "Looking for the best cricket betting site? Compare platforms by minimum deposit, odds quality, and payout speed in our 2026 guide.",
  },
};

export default function CompareCricketBettingSitesPage() {
  const faqItems = [
    {
      question: "What is the best minimum deposit for a beginner?",
      answer: "For most beginners, a site allowing deposits of ₹100–₹500 is ideal to practice without significant risk.",
    },
    {
      question: "Why does payout speed matter?",
      answer: "Fast payout speeds ensure you have control over your funds and demonstrate that a platform is financially stable and trustworthy.",
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
              Comparing Cricket Betting Sites: The Essential Checklist
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              With dozens of betting platforms available in 2026, choosing the right one isn't just about the welcome
              bonus—it's about the speed of your withdrawals, the fairness of the odds, and the ease of getting started.
            </p>
          </section>

          {/* Core Content Checklist */}
          <section className="w-full bg-[#0c1322] border border-[#9C27B0]/10 rounded-md p-6 md:p-8 flex flex-col gap-6 shadow-lg shadow-black">
            {/* Minimum Deposits */}
            <div className="flex flex-col gap-2">
              <h2 className="text-[#FF4081] font-extrabold text-lg md:text-xl tracking-wide border-b border-[#9C27B0]/10 pb-1.5">
                Minimum Deposits
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Starting small is crucial for beginners. Most modern platforms now support UPI and local payment
                gateways, allowing deposits as low as ₹100. Always check if the platform charges transaction fees for
                these small deposits.
              </p>
            </div>

            {/* Odds Quality */}
            <div className="flex flex-col gap-2">
              <h2 className="text-[#FF4081] font-extrabold text-lg md:text-xl tracking-wide border-b border-[#9C27B0]/10 pb-1.5">
                Odds Quality
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                A 98% payout rate vs. a 94% rate makes a massive difference over time. The "margin" is what the
                bookmaker keeps; a lower margin for them means higher, better odds for you. Always compare the market
                margin before committing your capital.
              </p>
            </div>

            {/* Payout Speed */}
            <div className="flex flex-col gap-2">
              <h2 className="text-[#FF4081] font-extrabold text-lg md:text-xl tracking-wide border-b border-[#9C27B0]/10 pb-1.5">
                Payout Speed
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                In 2026, waiting days for a payout is unnecessary. Platforms that offer e-wallets and crypto
                (LTC/ETH/USDT) are currently the gold standard for near-instant withdrawals. Check the "Banking" or
                "Withdrawal" section of a site before you sign up to see if they offer 24/7 automated processing.
              </p>
            </div>
          </section>

          {/* How to Compare Section */}
          <section className="w-full bg-[#0c1322] border border-[#9C27B0]/10 rounded-md p-6 md:p-8 flex flex-col gap-4 shadow-lg shadow-black">
            <h3 className="text-[#FF4081] font-black text-xl md:text-2xl">How to Compare</h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-semibold">
              When evaluating a site, build a simple comparison table tracking these three pillars:
            </p>
            <ul className="text-gray-300 text-sm md:text-base flex flex-col gap-2.5 font-semibold pl-4 list-disc">
              <li>Entry Barrier: Is the minimum deposit within your budget?</li>
              <li>Long-term Value: Does the site consistently offer competitive odds for the leagues you follow?</li>
              <li>Liquidity: How fast can you actually access your winnings?</li>
            </ul>
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
