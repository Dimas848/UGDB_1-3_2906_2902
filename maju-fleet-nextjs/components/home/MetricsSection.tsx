"use client";

import { FadeUp } from "@/components/FadeUp";
import { MessageSquareQuote, Star } from "lucide-react";

const feedbacks = [
  {
    company: "Apex Heavy Industries",
    name: "Marcus Vance",
    role: "VP of Global Logistics (Shipper)",
    text: "Maju Fleet's deployment system integrated seamlessly with our dispatch center. The scheduling precision for our out-of-gauge shipments cut loading times by 30%. It's an absolute necessity for our global supply chain.",
  },
  {
    company: "Quantum Tech Solutions",
    name: "Sarah Jenkins",
    role: "Infrastructure Director (End-Customer)",
    text: "The real-time tracking on their VIP Dashboard is a game changer. We could monitor the delivery of our critical server racks across the Pacific without a single blind spot. Total peace of mind from port to data center.",
  },
  {
    company: "Hyperion Motors",
    name: "David Chen",
    role: "Head of Supply Chain (Corporate Client)",
    text: "Outstanding reliability for our high-value automotive components. We've routed over 200 priority freight shipments this quarter, and Maju Fleet's AI-driven ETA predictions kept our assembly lines running perfectly on schedule.",
  },
];

export default function FeedbackSection() {
  return (
    <section className="py-24 bg-bg-dark border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header Section */}
        <FadeUp className="text-center mb-16">
          <h2 className="font-grotesk font-bold text-4xl md:text-5xl text-white tracking-[-1px]">
            What They <span className="text-grad-purple">Say?</span> 
          </h2>
        </FadeUp>

        {/* Feedback Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {feedbacks.map((item, index) => (
            <FadeUp key={index} delay={index * 0.15} className="h-full">
              <div 
                className="relative p-8 rounded-lg bg-[#1a1b20] border border-white/5 hover:border-[#B026FF]/40 transition-all duration-300 h-full flex flex-col group"
              >
                {/* Accent line on top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B026FF] to-[#BDF4FF] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg" />

                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#B026FF] text-[#B026FF]" />
                    ))}
                  </div>
                  <MessageSquareQuote size={20} className="text-white/20 group-hover:text-[#BDF4FF] transition-colors" />
                </div>

                <p className="font-inter text-[15px] text-white/70 leading-relaxed mb-8 flex-1 italic">
                  "{item.text}"
                </p>

                <div className="border-t border-white/10 pt-5">
                  <p className="font-grotesk font-bold text-[16px] text-white tracking-tight">
                    {item.company}
                  </p>
                  <p className="font-inter text-[12px] text-[#BDF4FF] mt-1">
                    {item.name} <span className="text-white/30 mx-1">|</span> <span className="text-white/50">{item.role}</span>
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}