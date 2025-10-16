/**
 * Reusable components from the Lumen Field Notes pitch microsite
 * These components capture the visual style and patterns used in the pitch
 */

import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

// ============= Typography Components =============

export function PitchHero({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  return (
    <h1 className={cn(
      "text-[clamp(2.75rem,6vw,4rem)] font-semibold leading-tight text-slate-900",
      className
    )}>
      {children}
    </h1>
  );
}

export function PitchHeading({ 
  children, 
  className,
  size = 'md' 
}: { 
  children: React.ReactNode; 
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}) {
  const sizes = {
    sm: "text-[clamp(2rem,4vw,2.75rem)]",
    md: "text-[clamp(2rem,5vw,2.75rem)]",
    lg: "text-[clamp(2rem,4vw,3rem)]"
  };

  return (
    <h2 className={cn(
      "font-semibold text-slate-900",
      sizes[size],
      className
    )}>
      {children}
    </h2>
  );
}

export function Eyebrow({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  return (
    <span className={cn(
      "text-xs uppercase tracking-[0.35em] text-slate-500",
      className
    )}>
      {children}
    </span>
  );
}

export function BodyText({ 
  children, 
  className,
  size = 'base'
}: { 
  children: React.ReactNode; 
  className?: string;
  size?: 'base' | 'lg';
}) {
  return (
    <p className={cn(
      size === 'lg' ? "text-lg leading-relaxed" : "text-base leading-relaxed",
      "text-slate-600",
      className
    )}>
      {children}
    </p>
  );
}

// ============= Badge Components =============

export function StatusBadge({ 
  children, 
  className,
  showDot = true
}: { 
  children: React.ReactNode; 
  className?: string;
  showDot?: boolean;
}) {
  return (
    <div className={cn(
      "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs uppercase tracking-[0.35em] text-slate-500",
      className
    )}>
      {showDot && <span className="inline-flex h-2 w-2 rounded-full bg-slate-900" />}
      {children}
    </div>
  );
}

export function DashedBadge({ 
  children, 
  className,
  showDot = true
}: { 
  children: React.ReactNode; 
  className?: string;
  showDot?: boolean;
}) {
  return (
    <div className={cn(
      "inline-flex items-center gap-3 rounded-full border border-dashed border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700",
      className
    )}>
      {showDot && <span className="inline-flex h-2 w-2 rounded-full bg-slate-900" />}
      {children}
    </div>
  );
}

// ============= Card Components =============

export function PitchCard({ 
  children, 
  className,
  size = 'lg'
}: { 
  children: React.ReactNode; 
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}) {
  const sizes = {
    sm: "rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_30px_100px_-60px_rgba(15,23,42,0.4)]",
    md: "rounded-[2rem] border border-slate-200 bg-white/95 p-10 shadow-[0_30px_120px_-50px_rgba(15,23,42,0.4)]",
    lg: "rounded-[2.5rem] border border-slate-200 bg-white/95 p-10 shadow-[0_40px_140px_-70px_rgba(15,23,42,0.45)]"
  };

  return (
    <div className={cn(sizes[size], className)}>
      {children}
    </div>
  );
}

export function StatCard({ 
  label, 
  value, 
  className 
}: { 
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={cn(
      "rounded-2xl border border-slate-200 bg-white p-5 text-center",
      className
    )}>
      <p className="text-2xl font-semibold text-slate-900">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.25em] text-slate-400">{label}</p>
    </div>
  );
}

// ============= List Components =============

export function BulletList({ 
  items, 
  className,
  bulletSize = 'md'
}: { 
  items: string[];
  className?: string;
  bulletSize?: 'sm' | 'md';
}) {
  const bulletClass = bulletSize === 'sm' 
    ? "mt-[7px] block h-[5px] w-[5px] rounded-full bg-slate-400"
    : "mt-[6px] block h-[6px] w-[6px] rounded-full bg-slate-900";

  return (
    <ul className={cn("space-y-3 text-sm text-slate-600", className)}>
      {items.map((item, idx) => (
        <li key={idx} className="flex gap-2">
          <span className={bulletClass} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// ============= Icon Components =============

export function IconCircle({ 
  Icon, 
  className 
}: { 
  Icon: LucideIcon;
  className?: string;
}) {
  return (
    <div className={cn(
      "flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-900",
      className
    )}>
      <Icon className="h-6 w-6" />
    </div>
  );
}

// ============= Section Components =============

export function NarrativeSlice({ 
  title, 
  body, 
  Icon 
}: { 
  title: string;
  body: string;
  Icon: LucideIcon;
}) {
  return (
    <article className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white/95 p-10 shadow-[0_30px_120px_-50px_rgba(15,23,42,0.4)] sm:grid-cols-[auto,1fr] sm:items-start">
      <IconCircle Icon={Icon} />
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
        <p className="text-base leading-relaxed text-slate-600">{body}</p>
      </div>
    </article>
  );
}

export function StoryBucket({ 
  eyebrow, 
  title, 
  copy, 
  proof 
}: { 
  eyebrow: string;
  title: string;
  copy: string;
  proof: string[];
}) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_30px_100px_-60px_rgba(15,23,42,0.4)]">
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
        {eyebrow}
      </span>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">{copy}</p>
      <BulletList items={proof} className="mt-6" bulletSize="sm" />
    </article>
  );
}

// ============= Parallax Section Component =============

export function ParallaxSection({
  eyebrow,
  title,
  intro,
  details,
  background,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  details: string[];
  background: string;
}) {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center py-24">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: background,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-white/85" />
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 sm:px-12">
        <Eyebrow>{eyebrow}</Eyebrow>
        <PitchHeading className="mt-4">{title}</PitchHeading>
        <BodyText className="mt-4 max-w-3xl" size="lg">{intro}</BodyText>
        <ul className="mt-8 grid gap-4 text-base text-slate-700">
          {details.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-[6px] block h-[6px] w-[6px] rounded-full bg-slate-900" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ============= Layout Components =============

export function PitchLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative isolate min-h-screen overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-32 pt-24 sm:px-10">
        {children}
      </div>
    </main>
  );
}

export function PitchHeader({ 
  badge,
  title,
  description,
  ctaBadge
}: {
  badge?: string;
  title: string;
  description: string;
  ctaBadge?: string;
}) {
  return (
    <header className="space-y-8">
      {badge && <StatusBadge>{badge}</StatusBadge>}
      <div className="max-w-3xl space-y-6">
        <PitchHero>{title}</PitchHero>
        <BodyText size="lg">{description}</BodyText>
      </div>
      {ctaBadge && <DashedBadge>{ctaBadge}</DashedBadge>}
    </header>
  );
}

// ============= CTA Components =============

export function CTAButton({ 
  children, 
  onClick,
  variant = 'primary',
  className 
}: { 
  children: React.ReactNode; 
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all",
        variant === 'primary' && "bg-slate-900 text-white hover:bg-slate-800 hover:shadow-lg",
        variant === 'secondary' && "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50",
        className
      )}
    >
      {children}
    </button>
  );
}

// ============= Feature Card Component =============

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <PitchCard
      size="sm"
      className={cn(
        "group transition-shadow duration-200 hover:shadow-[0_30px_120px_-45px_rgba(15,23,42,0.45)]",
        className
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-900">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      <BodyText className="mt-2 text-sm leading-relaxed text-slate-600">{description}</BodyText>
    </PitchCard>
  );
}
