'use client'

import { ArrowRight, Brain, Calendar, FileText, Mail, MessageSquare, Mic, Shield, Sparkles, Target, TrendingUp, Users } from 'lucide-react'
import { FAQAccordion } from '@/components/faq-section'
import { InteractiveDemo } from '@/components/interactive-demo'

const VALUE_TIMELINE = [
  { label: 'Live and benefiting', value: '2 weeks', detail: 'EA running the system, executive seeing value' },
  { label: 'Fully integrated', value: '4 weeks', detail: 'Daily dossiers, voice capture, relationship profiles' },
  { label: 'Operating at scale', value: '8 weeks', detail: 'Optimized workflows, proven ROI, strategic partnership' },
]

const TECH_STACK = [
  { name: 'Reflect Notes', role: 'Daily dossier, knowledge base, and robust history' },
  { name: 'Granola AI', role: 'World-class intelligent meeting notes and chat' },
  { name: 'AI Agent', role: 'Deeply integrated with calendar, email, and files' },
  { name: 'Clay CRM', role: 'Relationship intelligence' },
]

const EXECUTIVE_VALUE = [
  'Wake up knowing exactly what matters today',
  'Full context before every meeting',
  'Never miss a commitment or follow-up',
  'Spend 60 seconds after meetings, get everything tracked',
]

const EA_VALUE = [
  'Full context and information at your fingertips',
  'Equip your executive to be superhuman in every meeting',
  'Prepare briefs in minutes, not hours',
  'Build a system that survives vacations and transitions',
]


export default function Home() {
  const handleCTA = () => {
    window.location.href = 'mailto:hello@eaos.tech?subject=EAOS Consultation Request'
  }

  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-white text-slate-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-32 pt-24 sm:px-10">
        {/* Hero */}
        <header className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm text-xs uppercase tracking-[0.35em] text-slate-500">
            <span className="inline-flex h-2 w-2 rounded-full bg-slate-900" />
            Executive Administrator Operating System
          </div>
          <div className="max-w-3xl space-y-6">
            <h1 className="text-[clamp(2.75rem,6vw,4rem)] font-semibold leading-[1.1] tracking-tight text-slate-900">
              Everything you need on one page, every morning
            </h1>
            <p className="text-lg leading-relaxed text-slate-600">
              Your work comes from meetings, emails, and messages—but it's scattered across a dozen tools. 
              EAOS brings it together so you're always prepared, never caught off guard, and nothing falls through the cracks.
            </p>
          </div>
          <div className="inline-flex items-center gap-3 rounded-full border border-dashed border-slate-300 bg-white px-5 py-3 shadow-sm text-sm font-medium text-slate-700">
            <span className="inline-flex h-2 w-2 rounded-full bg-slate-900" />
            Part software · part service · purpose-built for EA–executive teams
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={handleCTA}
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl"
            >
              Book a consultation
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-900 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              Learn more
            </button>
          </div>
          <div className="grid gap-6 rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-[0_40px_140px_-70px_rgba(15,23,42,0.45)] sm:grid-cols-3">
            {VALUE_TIMELINE.map(({ label, value, detail }) => (
              <div key={label} className="text-center">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{label}</p>
                <p className="mt-2 text-3xl font-semibold text-slate-900">{value}</p>
                <p className="mt-2 text-xs text-slate-600">{detail}</p>
              </div>
            ))}
          </div>
        </header>

        {/* Executive + EA Value Prop (Side by Side with Black/White) */}
        <section className="grid gap-6 lg:grid-cols-2" id="how-it-works">
          {/* Executive Side (White) */}
          <div className="rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-[0_40px_140px_-70px_rgba(15,23,42,0.45)]">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-900 bg-white text-slate-900">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">For Executives</p>
                <h2 className="text-xl font-semibold text-slate-900">Stay in flow</h2>
              </div>
            </div>
            <ul className="space-y-3 text-sm text-slate-600">
              {EXECUTIVE_VALUE.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[6px] block h-[6px] w-[6px] flex-shrink-0 rounded-full bg-slate-900" />
                  <span>{item}</span>
          </li>
              ))}
            </ul>
          </div>

          {/* EA Side (Black) */}
          <div className="rounded-[2.5rem] border border-slate-900 bg-slate-900 p-10 text-white shadow-[0_40px_140px_-70px_rgba(15,23,42,0.6)]">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white bg-slate-900 text-white">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">For Executive Assistants</p>
                <h2 className="text-xl font-semibold text-white">Become indispensable</h2>
              </div>
            </div>
            <ul className="space-y-3 text-sm text-slate-300">
              {EA_VALUE.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[6px] block h-[6px] w-[6px] flex-shrink-0 rounded-full bg-white" />
                  <span>{item}</span>
          </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works - Three Pillars */}
        <section className="space-y-10">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.35em] text-slate-500">How it works</span>
            <h2 className="text-[clamp(2rem,5vw,2.75rem)] font-semibold leading-tight text-slate-900">
              Three artifacts that run your day
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
              Everything an executive needs to do comes from a meeting, an email, or a message. EAOS captures it all 
              and turns it into three living documents that keep you prepared and on track.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_30px_100px_-60px_rgba(15,23,42,0.4)] transition-all hover:-translate-y-1 hover:shadow-[0_30px_120px_-45px_rgba(15,23,42,0.45)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-900">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">Your calendar</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Where meetings happen and time gets allocated. EAOS ensures every meeting has prep, context, and follow-through.
              </p>
            </article>

            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_30px_100px_-60px_rgba(15,23,42,0.4)] transition-all hover:-translate-y-1 hover:shadow-[0_30px_120px_-45px_rgba(15,23,42,0.45)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-900">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">Your daily dossier</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                One page each morning with everything you need: agenda, context on every person, commitments, travel, materials.
              </p>
            </article>

            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_30px_100px_-60px_rgba(15,23,42,0.4)] transition-all hover:-translate-y-1 hover:shadow-[0_30px_120px_-45px_rgba(15,23,42,0.45)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-900">
                <Mic className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">Post-meeting downloads</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                60-second voice memos capture decisions and next steps while they are fresh. Transcribed and routed automatically.
              </p>
            </article>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="space-y-10">
          <div className="space-y-4 text-center">
            <span className="text-xs uppercase tracking-[0.35em] text-slate-500">See it in action</span>
            <h2 className="text-[clamp(2rem,5vw,2.75rem)] font-semibold leading-tight text-slate-900">
              EAOS on your iPhone
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600">
              Tap through the three core features that make EAOS indispensable for executive teams.
            </p>
          </div>

          <div className="rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-10 shadow-[0_40px_140px_-70px_rgba(15,23,42,0.45)]">
            <InteractiveDemo
              demos={[
                {
                  id: 'dossier',
                  title: 'Daily dossier',
                  description: 'Everything you need on one page every morning',
                  bullets: [
                    'Agenda with meeting times and attendees',
                    'Context cards for every person you are meeting',
                    'Commitments and follow-ups from recent conversations',
                    'Travel logistics and prep materials',
                  ],
                  mediaUrl: '/demos/dossier-navigation.GIF',
                  mediaType: 'gif',
                },
                {
                  id: 'profiles',
                  title: 'Person profiles',
                  description: 'Full relationship history in one tap',
                  bullets: [
                    'Chronological meeting history with every contact',
                    'Notes and commitments from past discussions',
                    'Personal context (birthdays, interests, shared connections)',
                    'Quick links to email threads and shared documents',
                  ],
                  mediaUrl: '/demos/person-profile-tap.GIF',
                  mediaType: 'gif',
                },
                {
                  id: 'chat',
                  title: 'Chat with your meetings',
                  description: 'Ask questions about past discussions and get instant answers',
                  bullets: [
                    'Query your entire meeting history in natural language',
                    'Surface commitments, decisions, and action items instantly',
                    'Find specific discussions without searching through notes',
                    'AI-powered answers with links to source materials',
                  ],
                  mediaUrl: '/demos/chat-with-meeting.GIF',
                  mediaType: 'gif',
                },
              ]}
            />
          </div>
        </section>

        {/* The Second Brain */}
        <section className="space-y-8">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.35em] text-slate-500">The foundation</span>
            <h2 className="text-[clamp(2rem,5vw,2.75rem)] font-semibold leading-tight text-slate-900">
              A second brain that makes everything AI-ready
            </h2>
          </div>

          <div className="rounded-[2.5rem] border border-slate-200 bg-white/95 p-10 shadow-[0_40px_140px_-70px_rgba(15,23,42,0.45)]">
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-[200px_1fr]">
                <div className="font-semibold text-slate-900">Every meeting</div>
                <div className="text-sm leading-relaxed text-slate-600">Transcribed, summarized, and linked to people & projects</div>
              </div>
              <div className="grid gap-4 sm:grid-cols-[200px_1fr]">
                <div className="font-semibold text-slate-900">Every email</div>
                <div className="text-sm leading-relaxed text-slate-600">AI-ready, surfaced in context, drafted responses when needed</div>
              </div>
              <div className="grid gap-4 sm:grid-cols-[200px_1fr]">
                <div className="font-semibold text-slate-900">Every Slack message</div>
                <div className="text-sm leading-relaxed text-slate-600">Important threads pulled into dossiers and action lists</div>
              </div>
            </div>
            <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Your tech stack</h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {TECH_STACK.map(({ name, role }) => (
                  <div key={name} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white">
                      <FileText className="h-5 w-5 text-slate-900" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{name}</p>
                      <p className="text-xs text-slate-600">{role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* For EAs Section */}
        <section className="rounded-[2.5rem] border border-slate-900 bg-slate-900 p-10 text-white shadow-[0_40px_140px_-70px_rgba(15,23,42,0.6)]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white bg-slate-900">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.35em] text-slate-400">For executive assistants</span>
                <h2 className="text-2xl font-semibold leading-tight text-white">From firefighter to force multiplier</h2>
              </div>
            </div>
            <p className="text-base leading-relaxed text-slate-300">
              Your executive trusts you to keep everything on track. EAOS gives you the infrastructure to do that 
              without the constant mental load—and to prove your strategic value every single day.
            </p>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-800/50 p-6">
                <h3 className="font-semibold text-white">What you get</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  {EA_VALUE.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[7px] block h-[5px] w-[5px] flex-shrink-0 rounded-full bg-slate-400" />
                      <span>{item}</span>
          </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-800/50 p-6">
                <h3 className="font-semibold text-white">How we support you</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  Week 1, we install everything and train you. Weeks 2-4, we coach you weekly as you build the dossiers. 
                  After that, choose your support level—we stay as involved as you need.
                </p>
                <p className="mt-4 text-xs text-slate-400">
                  We've successfully onboarded new EAs into existing EAOS setups—the system is transferable and makes you promotable.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Testimonials (Executive + EA side by side) */}
        <section className="grid gap-6 lg:grid-cols-2">
          {/* Executive Testimonial (White) */}
          <div className="rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-[0_40px_140px_-70px_rgba(15,23,42,0.45)]">
            <MessageSquare className="h-10 w-10 text-slate-700" />
            <blockquote className="mt-6 text-lg font-medium leading-relaxed text-slate-900">
              "The daily dossier means I never wake up wondering what's next. Everything I need is on one page."
            </blockquote>
            <div className="mt-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-slate-200" />
              <div>
                <p className="font-semibold text-slate-900">Tim McCarthy</p>
                <p className="text-sm text-slate-600">CEO, McCarthy Advisory Partners</p>
              </div>
            </div>
          </div>

          {/* EA Testimonial (Black) */}
          <div className="rounded-[2.5rem] border border-slate-900 bg-slate-900 p-10 text-white shadow-[0_40px_140px_-70px_rgba(15,23,42,0.6)]">
            <MessageSquare className="h-10 w-10 text-slate-400" />
            <blockquote className="mt-6 text-lg font-medium leading-relaxed text-white">
              "EAOS turned me from a reactive scheduler into a strategic partner. I prepare briefs in minutes and actually add value."
            </blockquote>
            <div className="mt-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-slate-800" />
              <div>
                <p className="font-semibold text-white">Whitney Poma</p>
                <p className="text-sm text-slate-400">Executive Assistant & EAOS Co-founder</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-8">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.35em] text-slate-500">Frequently asked questions</span>
            <h2 className="text-[clamp(2rem,5vw,2.75rem)] font-semibold leading-tight text-slate-900">
              Everything you need to know about EAOS
            </h2>
          </div>
          <div className="rounded-[2.5rem] border border-slate-200 bg-white/95 p-8 shadow-[0_40px_140px_-70px_rgba(15,23,42,0.45)]">
            <FAQAccordion />
          </div>
        </section>

        {/* Final CTA */}
        <section className="space-y-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm text-xs uppercase tracking-[0.35em] text-slate-500">
            <span className="inline-flex h-2 w-2 rounded-full bg-slate-900" />
            Work with us
          </div>
          <h2 className="text-[clamp(2.25rem,5vw,3rem)] font-semibold leading-tight text-slate-900">
            Ready to build your operating system?
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600">
            We work with select executive teams to implement EAOS with white-glove service. 
            Book a consultation to see if it's the right fit.
          </p>
          <button
            onClick={handleCTA}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-medium text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl"
          >
            Schedule your consultation
            <ArrowRight className="h-4 w-4" />
          </button>
        </section>
        </div>
      </main>
  )
}