'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface Demo {
  id: string
  title: string
  description: string
  bullets: string[]
  mediaUrl: string
  mediaType: 'image' | 'gif'
}

interface InteractiveDemoProps {
  demos: Demo[]
}

export function InteractiveDemo({ demos }: InteractiveDemoProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeDemo = demos[activeIndex]

  return (
    <div className="space-y-8">
      {/* Demo Content */}
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        {/* Description - LEFT SIDE */}
        <div className="flex w-full flex-col justify-center space-y-8 lg:w-[55%] order-2 lg:order-1">
          {/* Tab Navigation - Left aligned */}
          <div className="flex flex-wrap gap-2">
            {demos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  'rounded-full px-6 py-3 text-sm font-medium transition-all duration-200',
                  activeIndex === index
                    ? 'bg-slate-900 text-white shadow-lg'
                    : 'border border-slate-200 bg-white text-slate-700 hover:border-slate-900 hover:shadow-md'
                )}
              >
                {demo.title}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl font-semibold text-slate-900">{activeDemo.title}</h3>
            <p className="text-lg leading-relaxed text-slate-600">{activeDemo.description}</p>
          </div>
          
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <ul className="space-y-4">
              {activeDemo.bullets.map((bullet, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="mt-[6px] block h-[6px] w-[6px] flex-shrink-0 rounded-full bg-slate-900" />
                  <span className="text-sm leading-relaxed text-slate-700">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Progress dots */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
              {activeIndex + 1} of {demos.length}
            </span>
            <div className="flex flex-1 gap-2">
              {demos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    'h-1.5 rounded-full transition-all duration-300',
                    activeIndex === index ? 'flex-1 bg-slate-900' : 'w-8 bg-slate-300 hover:bg-slate-400'
                  )}
                  aria-label={`Go to demo ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* iPhone Mockup - RIGHT SIDE */}
        <div className="flex w-full justify-center lg:w-[45%] order-1 lg:order-2">
          {/* Modern iPhone Frame - No dynamic island since GIFs have it */}
          <div className="relative w-[360px] flex-shrink-0 rounded-[3.5rem] bg-black p-2 shadow-2xl ring-1 ring-slate-900/10">
            {/* Screen */}
            <div className="relative h-[720px] w-full overflow-hidden rounded-[3rem] bg-black">
              {/* Content with smooth fade transition */}
              <div className="h-full w-full">
                <img
                  src={activeDemo.mediaUrl}
                  alt={activeDemo.title}
                  className="h-full w-full object-cover transition-opacity duration-500 ease-in-out"
                  key={activeDemo.id}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
