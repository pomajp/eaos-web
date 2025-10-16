/**
 * Media components for EAOS microsite
 * Includes iPhone mockups, video embeds, testimonials, and logo displays
 */

import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Play, Quote, Star, CheckCircle } from 'lucide-react';

// ============= Logo Components =============

export function LogoGrid({ 
  logos,
  title,
  className 
}: { 
  logos: { src: string; alt: string; href?: string }[];
  title?: string;
  className?: string;
}) {
  return (
    <div className={cn("text-center", className)}>
      {title && (
        <p className="text-sm text-slate-500 mb-6">{title}</p>
      )}
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {logos.map((logo, index) => (
          <div key={index} className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
            {logo.href ? (
              <a href={logo.href} target="_blank" rel="noopener noreferrer">
                <Image 
                  src={logo.src} 
                  alt={logo.alt} 
                  width={120} 
                  height={40}
                  className="h-8 md:h-10 w-auto object-contain"
                />
              </a>
            ) : (
              <Image 
                src={logo.src} 
                alt={logo.alt} 
                width={120} 
                height={40}
                className="h-8 md:h-10 w-auto object-contain"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ============= Testimonial Components =============

export function TestimonialCard({ 
  quote,
  author,
  role,
  company,
  image,
  className,
  variant = 'default'
}: { 
  quote: string;
  author: string;
  role: string;
  company?: string;
  image?: string;
  className?: string;
  variant?: 'default' | 'featured' | 'compact';
}) {
  const variants = {
    default: "p-8 rounded-[2rem] border border-slate-200 bg-white shadow-pitch-md",
    featured: "p-10 md:p-12 rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white shadow-pitch-lg",
    compact: "p-6 rounded-3xl border border-slate-200 bg-white shadow-pitch-sm"
  };

  return (
    <div className={cn(variants[variant], className)}>
      <Quote className="h-8 w-8 text-slate-300 mb-4" />
      <blockquote className="text-lg text-slate-700 leading-relaxed mb-6 italic">
        "{quote}"
      </blockquote>
      <div className="flex items-center gap-4">
        {image && (
          <Image 
            src={image} 
            alt={author}
            width={48}
            height={48}
            className="rounded-full"
          />
        )}
        <div>
          <div className="font-semibold text-slate-900">{author}</div>
          <div className="text-sm text-slate-600">
            {role}{company && `, ${company}`}
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialMetric({ 
  metric,
  label,
  description,
  className 
}: { 
  metric: string;
  label: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("text-center", className)}>
      <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">{metric}</div>
      <div className="text-sm uppercase tracking-wide text-slate-500 mb-1">{label}</div>
      {description && (
        <p className="text-sm text-slate-600 mt-2">{description}</p>
      )}
    </div>
  );
}

// ============= iPhone Mockup Components =============

export function IPhoneMockup({ 
  children,
  className,
  showNotch = true,
  variant = 'default'
}: { 
  children: React.ReactNode;
  className?: string;
  showNotch?: boolean;
  variant?: 'default' | 'floating' | 'tilted';
}) {
  const variants = {
    default: "",
    floating: "transform hover:-translate-y-2 transition-transform duration-300",
    tilted: "transform rotate-3 hover:rotate-0 transition-transform duration-300"
  };

  return (
    <div className={cn(
      "relative mx-auto",
      variants[variant],
      className
    )}>
      {/* iPhone Frame */}
      <div className="relative w-[320px] h-[640px] md:w-[375px] md:h-[750px] bg-slate-900 rounded-[3rem] shadow-2xl p-3">
        {/* Screen */}
        <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
          {/* Notch */}
          {showNotch && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-slate-900 rounded-b-2xl z-10" />
          )}
          {/* Content */}
          <div className="w-full h-full overflow-auto scrollbar-hide">
            {children}
          </div>
        </div>
        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-slate-600 rounded-full" />
      </div>
    </div>
  );
}

export function IPhoneScreen({ 
  imageUrl,
  gifUrl,
  alt,
  className 
}: { 
  imageUrl?: string;
  gifUrl?: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={cn("w-full h-full", className)}>
      {gifUrl ? (
        <img 
          src={gifUrl} 
          alt={alt}
          className="w-full h-full object-cover"
        />
      ) : imageUrl ? (
        <Image 
          src={imageUrl} 
          alt={alt}
          width={375}
          height={750}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-slate-50">
          <span className="text-slate-400">No content</span>
        </div>
      )}
    </div>
  );
}

// ============= Video Components =============

export function LoomEmbed({ 
  videoId,
  title,
  className 
}: { 
  videoId: string;
  title?: string;
  className?: string;
}) {
  return (
    <div className={cn("rounded-2xl overflow-hidden shadow-pitch-md", className)}>
      {title && (
        <div className="bg-slate-900 text-white px-6 py-4">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      )}
      <div className="relative aspect-video bg-slate-100">
        <iframe
          src={`https://www.loom.com/embed/${videoId}`}
          frameBorder="0"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  );
}

export function VideoThumbnail({ 
  thumbnailUrl,
  videoUrl,
  title,
  duration,
  onClick,
  className 
}: { 
  thumbnailUrl: string;
  videoUrl?: string;
  title: string;
  duration?: string;
  onClick?: () => void;
  className?: string;
}) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (videoUrl) {
      window.open(videoUrl, '_blank');
    }
  };

  return (
    <div 
      className={cn(
        "relative rounded-2xl overflow-hidden cursor-pointer group",
        "shadow-pitch-sm hover:shadow-pitch-md transition-shadow",
        className
      )}
      onClick={handleClick}
    >
      <div className="relative aspect-video">
        <Image 
          src={thumbnailUrl} 
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Play className="h-8 w-8 text-slate-900 ml-1" />
          </div>
        </div>
        {duration && (
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-2 py-1 rounded">
            {duration}
          </div>
        )}
      </div>
      <div className="p-4 bg-white">
        <h3 className="font-semibold text-slate-900">{title}</h3>
      </div>
    </div>
  );
}

// ============= Screenshot Gallery =============

export function ScreenshotGallery({ 
  images,
  className 
}: { 
  images: { src: string; alt: string; caption?: string }[];
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {images.map((image, index) => (
        <div key={index} className="group">
          <div className="relative rounded-xl overflow-hidden shadow-pitch-sm group-hover:shadow-pitch-md transition-shadow">
            <Image 
              src={image.src} 
              alt={image.alt}
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>
          {image.caption && (
            <p className="mt-2 text-sm text-slate-600 text-center">{image.caption}</p>
          )}
        </div>
      ))}
    </div>
  );
}

// ============= Comparison Component =============

export function BeforeAfter({ 
  before,
  after,
  className 
}: { 
  before: { title: string; items: string[] };
  after: { title: string; items: string[] };
  className?: string;
}) {
  return (
    <div className={cn("grid md:grid-cols-2 gap-8", className)}>
      <div className="relative">
        <div className="absolute -top-3 -left-3 text-6xl font-bold text-slate-100">Before</div>
        <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-pitch-sm">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">{before.title}</h3>
          <ul className="space-y-3">
            {before.items.map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-red-500 mt-1">✗</span>
                <span className="text-slate-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute -top-3 -left-3 text-6xl font-bold text-slate-100">After</div>
        <div className="relative rounded-2xl border-2 border-green-500 bg-gradient-to-br from-green-50 to-white p-6 shadow-pitch-md">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">{after.title}</h3>
          <ul className="space-y-3">
            {after.items.map((item, index) => (
              <li key={index} className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// ============= Rating Display =============

export function RatingDisplay({ 
  score,
  maxScore = 10,
  label,
  description,
  className 
}: { 
  score: number;
  maxScore?: number;
  label: string;
  description?: string;
  className?: string;
}) {
  const percentage = (score / maxScore) * 100;
  
  return (
    <div className={cn("", className)}>
      <div className="flex justify-between items-baseline mb-2">
        <span className="text-sm font-medium text-slate-700">{label}</span>
        <span className="text-2xl font-bold text-slate-900">{score}/{maxScore}</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
        <div 
          className="bg-gradient-to-r from-slate-600 to-slate-900 h-2 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {description && (
        <p className="text-xs text-slate-500">{description}</p>
      )}
    </div>
  );
}
