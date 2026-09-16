import { motion } from 'framer-motion'
import { ExternalLink, Award } from 'lucide-react'
import { credentials } from '../data/portfolio'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Projects() {
  return (
    <div>
      <div className="text-center mb-16!">
        <div className="font-[JetBrains_Mono] text-[12px] font-bold leading-none tracking-widest text-[#b3c5ff] mb-2! uppercase">
          Recognition
        </div>
        <h2 className="font-[Sora] text-[32px] font-semibold leading-[1.3] text-[#e5e2e1]">
          Certifications & Offers
        </h2>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {credentials.map((item) => (
          <motion.div
            key={item.id}
            className="glass-panel rounded-xl overflow-hidden group flex flex-col border border-white/10 hover:border-[#b3c5ff]/40 transition-all duration-300"
            variants={cardVariants}
            whileHover={{ y: -4 }}
          >
            {/* Document Preview */}
            <a
              href={item.documentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-64 overflow-hidden relative block bg-[#1a1a1a] group-hover:brightness-105 transition-all duration-500"
              title="Click to view full document"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#131313] via-transparent to-transparent opacity-80" />
              <div className="absolute top-4 right-4 glass-panel px-3! py-1.5! rounded-full flex items-center gap-1.5 text-[11px] font-[JetBrains_Mono] text-[#b3c5ff]">
                <ExternalLink size={12} />
                <span>Expand</span>
              </div>
            </a>

            {/* Body */}
            <div className="p-6! grow flex flex-col">
              <div className="flex items-center justify-between gap-2 mb-2! text-xs font-[JetBrains_Mono]">
                <span className="text-[#b3c5ff] font-bold flex items-center gap-1.5">
                  <Award size={14} />
                  {item.issuer}
                </span>
                <span className="text-[#c2c6d8]/60">{item.date}</span>
              </div>

              <h3 className="font-[Sora] text-xl text-[#e5e2e1] mb-2! font-semibold">
                {item.title}
              </h3>
              <p className="font-[Inter] text-[15px] leading-[1.6] text-[#c2c6d8] mb-4! grow">
                {item.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6!">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3! py-1! rounded-xs bg-[#353534] text-[#e5e2e1] font-[JetBrains_Mono] text-[13px] leading-normal"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto! pt-4! border-t border-white/10 flex items-center justify-between">
                <span className="font-[JetBrains_Mono] text-[11px] text-[#c2c6d8]/50">
                  {item.idNumber}
                </span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.documentUrl}
                  className="inline-flex items-center gap-2 px-4! py-2! bg-[#b3c5ff]/10 hover:bg-[#b3c5ff] text-[#b3c5ff] hover:text-[#002b75] rounded-lg font-[JetBrains_Mono] text-[12px] font-bold transition-all duration-300"
                >
                  View Document
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
