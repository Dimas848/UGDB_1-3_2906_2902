"use client";

import { motion } from "framer-motion";
import { FadeUp } from "@/components/FadeUp";

const cards = [
  {
    text: `Established in 2026 to redefine modern maritime logistics, Maju Fleet is a leading cargo shipping and global freight management company. We specialize in the physical movement of heavy goods across international waters, ensuring robust and reliable supply chain operations. Our core expertise lies in comprehensive vessel operations, bulk cargo handling, and seamless port-to-port maritime freight forwarding, providing the physical backbone for international trade.`,
  },
  {
    text: `Operating a highly versatile and modern shipping fleet, Maju Fleet bridges the physical demands of heavy industry with operational excellence. Rather than just monitoring from afar, we are actively engaged in the heavy lifting of global trade. From securing massive cargo loads to navigating complex maritime routes, our uncompromising commitment is centered on delivering your assets safely, efficiently, and consistently across the world's oceans.`,
  },
];

export default function AboutVisionMission() {
  return (
    <section className="py-24 px-6 bg-bg-mid">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {cards.map((c, i) => (
          <FadeUp key={i} delay={i * 0.15} className="h-full">
            <motion.div
              whileHover={{ y: -4 }}
              className="p-12 rounded-lg bg-bg-card transition-transform duration-300 h-full"
              style={{
                border: "1px solid rgba(176,38,255,0.2)",
                boxShadow: "0 0 30px rgba(176,38,255,0.05)",
              }}
            >
              <p className="font-inter font-light text-[17px] leading-[28px] text-text-muted text-justify">
                {c.text}
              </p>
            </motion.div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}