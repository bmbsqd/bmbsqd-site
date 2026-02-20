import React, { useMemo } from 'react'

export interface ParallaxStarsBgProps {
  className?: string
  speed?: number
  children?: React.ReactNode
}

function generateBoxShadows(n: number, color: string) {
  const parts: string[] = []
  for (let i = 0; i < n; i++) {
    parts.push(`${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px ${color}`)
  }
  return parts.join(', ')
}

export function ParallaxStarsBg({
  className = '',
  speed = 1,
  children,
}: ParallaxStarsBgProps) {
  const shadowsSmall = useMemo(() => generateBoxShadows(1200, '#D6D3D1'), [])
  const shadowsMedium = useMemo(() => generateBoxShadows(400, '#A8A29E'), [])
  const shadowsLarge = useMemo(() => generateBoxShadows(150, '#78716C'), [])

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <style>{`
        @keyframes animStar {
          from { transform: translateY(0px); }
          to { transform: translateY(-2000px); }
        }
      `}</style>

      {/* Layer 1 — small, faint */}
      <div
        className="absolute left-0 top-0 w-[1px] h-[1px] bg-transparent"
        style={{
          boxShadow: shadowsSmall,
          animation: `animStar ${50 / speed}s linear infinite`,
        }}
      >
        <div
          className="absolute top-[2000px] w-[1px] h-[1px] bg-transparent"
          style={{ boxShadow: shadowsSmall }}
        />
      </div>

      {/* Layer 2 — medium */}
      <div
        className="absolute left-0 top-0 w-[2px] h-[2px] bg-transparent"
        style={{
          boxShadow: shadowsMedium,
          animation: `animStar ${100 / speed}s linear infinite`,
        }}
      >
        <div
          className="absolute top-[2000px] w-[2px] h-[2px] bg-transparent"
          style={{ boxShadow: shadowsMedium }}
        />
      </div>

      {/* Layer 3 — large, darker */}
      <div
        className="absolute left-0 top-0 w-[3px] h-[3px] bg-transparent rounded-full"
        style={{
          boxShadow: shadowsLarge,
          animation: `animStar ${150 / speed}s linear infinite`,
        }}
      >
        <div
          className="absolute top-[2000px] w-[3px] h-[3px] bg-transparent rounded-full"
          style={{ boxShadow: shadowsLarge }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
