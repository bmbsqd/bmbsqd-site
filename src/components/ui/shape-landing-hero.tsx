import { motion } from 'framer-motion'
import { AuroraBackground } from '@/components/ui/aurora-background'
import { RainbowButton } from '@/components/ui/rainbow-button'

function HeroGeometric({
  title1 = 'Advanced Technology',
  title2 = 'Leadership',
  subtitle = '',
}: {
  title1?: string
  title2?: string
  subtitle?: string
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <AuroraBackground className="min-h-[90vh] w-full !bg-[#030303] dark:!bg-[#030303]" showRadialGradient>
      <div className="relative z-10 w-full px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div custom={0} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-white">
              {title1}
              <br />
              {title2}
            </h1>
          </motion.div>

          {subtitle && (
            <motion.p
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="text-base sm:text-lg md:text-xl text-white/80 mt-8 max-w-2xl mx-auto leading-relaxed font-light"
            >
              {subtitle}
            </motion.p>
          )}

          <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible" className="mt-10">
            <div className="flex flex-row gap-3 justify-center">
              <a href="#contact">
                <RainbowButton>Start Your Project</RainbowButton>
              </a>
              <a
                href="#expertise"
                className="inline-flex items-center justify-center rounded-xl px-8 h-11 text-sm font-medium border border-white/20 text-white/80 hover:bg-white/[0.06] hover:text-white transition-all"
              >
                Our Expertise
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fade to black at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030303] to-transparent z-10" />
    </AuroraBackground>
  )
}

export { HeroGeometric }
