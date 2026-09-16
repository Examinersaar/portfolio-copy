import { motion } from 'framer-motion'
import { techStack } from '../data/portfolio'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const badgeVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
}

// Remix Icon class mapping for each tech
const techIconClass = {
  Java: 'ri-java-fill',
  Python: 'ri-python-fill',
  MySQL: 'ri-database-2-fill',
  JavaScript: 'ri-javascript-fill',
  HTML5: 'ri-html5-fill',
  CSS3: 'ri-css3-fill',
  Git: 'ri-git-branch-fill',
}

export default function TechStack() {
  return (
    <div className="relative z-45">
      <div className="text-center mb-16!">
        <div className="font-[JetBrains_Mono] text-[12px] font-bold leading-none tracking-[0.1em] text-[#b3c5ff] mb-2! uppercase">
          Arsenal
        </div>
        <h2 className="font-[Sora] text-[32px] font-semibold leading-[1.3] text-[#e5e2e1]">
          Tech Stack
        </h2>
      </div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {techStack.map((tech) => (
          <motion.div
            key={tech.name}
            className="glass-panel rounded-[0.25rem] p-6! flex flex-col items-center justify-center gap-3 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(179,197,255,0.15)] transition-all duration-300"
            variants={badgeVariants}
          >
            {tech.name === 'Python' ? (
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-[#c2c6d8]"
                aria-hidden="true"
              >
                <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
              </svg>
            ) : (
              <i className={`${techIconClass[tech.name] || 'ri-code-line'} text-[32px] text-[#c2c6d8]`}></i>
            )}
            <span className="font-[JetBrains_Mono] text-[14px] leading-[1.5] text-[#e5e2e1]">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
