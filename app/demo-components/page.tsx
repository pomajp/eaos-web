'use client';

import { 
  PitchLayout, 
  PitchSection, 
  PitchHeading,
  Eyebrow,
  BodyText,
  PitchCard
} from '@/components/pitch-components';

import {
  LogoGrid,
  TestimonialCard,
  TestimonialMetric,
  IPhoneMockup,
  IPhoneScreen,
  LoomEmbed,
  VideoThumbnail,
  ScreenshotGallery,
  BeforeAfter,
  RatingDisplay
} from '@/components/media-components';

export default function DemoComponents() {
  // Placeholder data - replace with your actual content
  const logos = [
    { src: "/logos/reflect.png", alt: "Reflect Notes", href: "https://reflect.app" },
    { src: "/logos/granola.png", alt: "Granola AI", href: "https://granola.ai" },
    { src: "/logos/clay.png", alt: "Clay CRM", href: "https://clay.com" },
    { src: "/logos/chatgpt.png", alt: "ChatGPT", href: "https://chatgpt.com" },
  ];

  const screenshots = [
    { src: "/screenshots/dossier-1.png", alt: "Daily Dossier View", caption: "Your day at a glance" },
    { src: "/screenshots/meeting-prep.png", alt: "Meeting Prep", caption: "Never enter unprepared" },
    { src: "/screenshots/person-profile.png", alt: "Person Profile", caption: "Complete relationship history" },
  ];

  return (
    <PitchLayout>
      <PitchSection spacing="large">
        <div className="text-center mb-12">
          <Eyebrow>Component Library Demo</Eyebrow>
          <PitchHeading size="md">
            All Available Components for EAOS Microsite
          </PitchHeading>
        </div>

        {/* Logo Grid Example */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6">Logo Grid</h3>
          <LogoGrid 
            logos={logos}
            title="Powered by best-in-class tools"
          />
        </div>

        {/* Testimonial Examples */}
        <div className="mb-16 space-y-8">
          <h3 className="text-xl font-semibold mb-6">Testimonials</h3>
          
          <TestimonialCard
            quote="Since October, EAOS has transformed my work-life balance. The daily dossier means I never miss a beat, and my EA relationship has never been stronger."
            author="Tim McCarthy"
            role="CEO"
            company="McCarthy Advisory Partners"
            variant="featured"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <TestimonialCard
              quote="The voice memo feature is game-changing. 60 seconds after a meeting and everything is captured."
              author="Sarah Chen"
              role="Executive Assistant"
              variant="compact"
            />
            <TestimonialCard
              quote="We successfully onboarded our new VA in days, not weeks. The system is truly transferable."
              author="Michael Ross"
              role="COO"
              variant="compact"
            />
          </div>
        </div>

        {/* Metrics Display */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6">Success Metrics</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <TestimonialMetric
              metric="10+"
              label="Hours Saved Weekly"
              description="Average time recovered"
            />
            <TestimonialMetric
              metric="85%"
              label="Fewer Dropped Balls"
              description="Reduction in missed follow-ups"
            />
            <TestimonialMetric
              metric="3x"
              label="EA Productivity"
              description="Increase in strategic work"
            />
            <TestimonialMetric
              metric="100%"
              label="Meeting Prep"
              description="Always prepared"
            />
          </div>
        </div>

        {/* iPhone Mockup Examples */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6">iPhone Mockups</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <IPhoneMockup variant="default">
                <IPhoneScreen 
                  imageUrl="/screenshots/dossier-mobile.png"
                  alt="Daily Dossier on iPhone"
                />
              </IPhoneMockup>
              <p className="mt-4 text-sm text-slate-600">Daily Dossier</p>
            </div>
            
            <div className="text-center">
              <IPhoneMockup variant="floating">
                <IPhoneScreen 
                  gifUrl="/demos/voice-memo.gif"
                  alt="Voice Memo Demo"
                />
              </IPhoneMockup>
              <p className="mt-4 text-sm text-slate-600">Voice Memo Capture</p>
            </div>
            
            <div className="text-center">
              <IPhoneMockup variant="tilted">
                <IPhoneScreen 
                  imageUrl="/screenshots/person-profile-mobile.png"
                  alt="Person Profile"
                />
              </IPhoneMockup>
              <p className="mt-4 text-sm text-slate-600">Person Profiles</p>
            </div>
          </div>
        </div>

        {/* Video Components */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6">Video Embeds</h3>
          
          <div className="mb-8">
            <LoomEmbed 
              videoId="your-loom-video-id-here"
              title="EAOS Demo: Daily Dossier Walkthrough"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <VideoThumbnail
              thumbnailUrl="/video-thumbs/setup.jpg"
              videoUrl="https://www.loom.com/share/your-video-id"
              title="5-Minute Setup"
              duration="5:23"
            />
            <VideoThumbnail
              thumbnailUrl="/video-thumbs/voice-memo.jpg"
              title="Voice Memo Demo"
              duration="2:45"
              onClick={() => console.log('Open video modal')}
            />
            <VideoThumbnail
              thumbnailUrl="/video-thumbs/testimonial.jpg"
              title="Tim McCarthy Testimonial"
              duration="3:12"
            />
          </div>
        </div>

        {/* Screenshot Gallery */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6">Screenshot Gallery</h3>
          <ScreenshotGallery images={screenshots} />
        </div>

        {/* Before/After Comparison */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6">Before & After EAOS</h3>
          <BeforeAfter
            before={{
              title: "Traditional EA Workflow",
              items: [
                "Information scattered across 7+ tools",
                "Mental load tracking tasks in your head",
                "Lost context from previous meetings",
                "Calendar Tetris all day long",
                "Reactive, last-minute preparation"
              ]
            }}
            after={{
              title: "EAOS-Powered Partnership",
              items: [
                "One unified portal for everything",
                "AI-powered task extraction and routing",
                "Complete relationship history at fingertips",
                "Smart calendar with buffers and policies",
                "Proactive daily briefings and prep"
              ]
            }}
          />
        </div>

        {/* Performance Ratings */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6">Performance Improvements</h3>
          <PitchCard size="md">
            <div className="space-y-6">
              <RatingDisplay
                score={7}
                label="Calendar Management"
                description="Strong foundation, room for daily optimization"
              />
              <RatingDisplay
                score={9}
                label="Travel Coordination"
                description="Highly effective, seamless execution"
              />
              <RatingDisplay
                score={5}
                label="Meeting Preparedness"
                description="Major improvement area with EAOS"
              />
              <RatingDisplay
                score={3}
                label="Personal CRM"
                description="Transform from chaos to clarity"
              />
            </div>
          </PitchCard>
        </div>

        {/* Usage Instructions */}
        <PitchCard size="lg">
          <h3 className="text-xl font-semibold mb-4">How to Use These Components</h3>
          <BodyText className="mb-4">
            All components are ready to use. Simply replace the placeholder content with your actual:
          </BodyText>
          <ul className="space-y-2 text-slate-600">
            <li>• <strong>Logos:</strong> Add partner logos to /public/logos/</li>
            <li>• <strong>Screenshots:</strong> Add app screenshots to /public/screenshots/</li>
            <li>• <strong>Videos:</strong> Use Loom video IDs or video URLs</li>
            <li>• <strong>GIFs:</strong> Add animated demos to /public/demos/</li>
            <li>• <strong>Testimonials:</strong> Replace with actual customer quotes</li>
            <li>• <strong>Metrics:</strong> Update with your real performance data</li>
          </ul>
        </PitchCard>
      </PitchSection>
    </PitchLayout>
  );
}
