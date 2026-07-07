import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { ConicButton } from "@/components/ConicButton";
import { CONFIG } from "@/utils/config";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Reddy Anna Book - 24/7 WhatsApp Support",
  description: "Contact Reddy Anna Book 24/7 via WhatsApp for instant ID creation, deposits, withdrawals and support.",
  alternates: { canonical: "https://reddyreal.live/contact-us" },
  openGraph: {
    title: "Contact Reddy Anna Book - 24/7 WhatsApp Support",
    description: "Contact Reddy Anna Book 24/7 via WhatsApp for instant ID creation, deposits, withdrawals and support.",
    url: "https://reddyreal.live/contact-us",
    siteName: "Reddy Anna Book",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Contact Reddy Anna Book - 24/7 WhatsApp Support", description: "Contact Reddy Anna Book 24/7 via WhatsApp for instant ID creation, deposits, withdrawals and support." },
};

export default function ContactUsPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-8 select-none">
      <div className="w-full flex flex-col lg:flex-row gap-8">
        
        {/* Left Sidebar */}
        <div className="hidden lg:block lg:w-1/4">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 flex flex-col gap-8 text-left">
          
          {/* Main Title Banner */}
          <section className="w-full bg-[#0c1322] border border-[#9C27B0]/10 rounded-md p-6 md:p-8 flex flex-col gap-4 shadow-lg shadow-black">
            <h1 className="text-[#FF4081] font-black text-2xl md:text-3xl tracking-wide leading-tight">
              Contact Reddy Anna Book — 24/7 Human Support
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              When you have questions about your online cricket betting ID, wallet deposits, payout statuses, or live match session updates, you get a real human response instantly. We do not use annoying automated chatbots or endless ticketing queues. Connect to our official agents directly.
            </p>
          </section>

          {/* Contact Details Grid */}
          <section className="w-full bg-[#0c1322] border border-[#9C27B0]/10 rounded-md p-6 md:p-8 flex flex-col gap-6">
            <h2 className="text-[#FF4081] font-black text-xl md:text-2xl tracking-wide border-b border-[#9C27B0]/10 pb-2">
              ☎️ Official Contact Channels
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-semibold">
              Warning: Only trust IDs and links obtained from our official domain <strong>reddyreal.live</strong>. Avoid copycat domains. Contact us via:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#05080f] p-5 rounded-sm border border-[#9C27B0]/5 shadow-md flex flex-col justify-between">
                <div>
                  <h4 className="text-white font-extrabold text-base mb-2">WhatsApp Live Agent</h4>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4">
                    For instant ID creation, fast wallet deposits, bank withdrawals, and general account setups. Active 24/7 with average response times under 2 minutes.
                  </p>
                </div>
                <div className="text-left">
                  <ConicButton text="Contact WhatsApp Agent" href={CONFIG.whatsappUrl} />
                </div>
              </div>

              <div className="bg-[#05080f] p-5 rounded-sm border border-[#9C27B0]/5 shadow-md flex flex-col justify-between">
                <div>
                  <h4 className="text-white font-extrabold text-base mb-2">WhatsApp Corporate Hub</h4>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4">
                    For branch franchise queries, corporate partnerships, high-stakes VIP loyalty setups, and platform feedback.
                  </p>
                </div>
                <div className="text-left">
                  <ConicButton text="Contact Corporate Support" href={CONFIG.whatsappSupportUrl} />
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
