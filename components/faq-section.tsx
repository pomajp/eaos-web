/**
 * FAQ Section for EAOS
 * Addresses common questions and objections from sales calls
 */

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, Shield, Zap, Users, DollarSign, Clock, Wrench, Brain, Sparkles } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  icon?: React.ElementType;
  category?: string;
}

const faqs: FAQItem[] = [
  {
    question: "What exactly is EAOS? Is it software, consulting, or coaching?",
    answer: "EAOS is all three working together as one solution. It's a proven process (standardized CEO-EA workflows), an integrated tech stack (Reflect, Clay, Granola AI, ChatGPT configured to work together), and white-glove service (we implement, optimize, and maintain it for you). Think of it as your Chief of Staff in a system—not another tool to learn, but a complete operating system for your most important partnership.",
    icon: Brain,
    category: "What is EAOS"
  },
  {
    question: "How does EAOS integrate with our existing tools like Outlook, Teams, and Salesforce?",
    answer: "EAOS doesn't replace your tools—it makes them work together. We integrate through secure APIs and connections with Microsoft (Outlook/Teams), Google Workspace, Salesforce, and specialized tools like CellTrust. Your data stays in your systems; we just create the connective tissue that makes everything flow seamlessly. During setup, we map your existing workflows and configure EAOS to enhance, not disrupt, your current operations.",
    icon: Wrench,
    category: "Integration"
  },
  {
    question: "What about compliance and security? We have SEC monitoring requirements.",
    answer: "EAOS is built for regulated industries. We support SEC-compliant communications, work with split texting requirements (personal iPhone vs CellTrust), maintain complete audit trails, and handle sensitive deals ($50M+) with appropriate security protocols. We work within your compliance framework, not around it. During implementation, we review your compliance requirements and configure the system accordingly.",
    icon: Shield,
    category: "Compliance"
  },
  {
    question: "How much time commitment is required from the CEO?",
    answer: "The beauty of EAOS is its 'light touch for the executive, heavy lift by the system' approach. CEOs need just 60 seconds for a voice memo after meetings—that's it. The EA and our system handle everything else. Week 1-2 is EA setup only. Week 3-4 introduces the voice memo app to the CEO. By Week 4, they're seeing the daily dossier. Total CEO time investment: about 2 hours over the first month, then just those 60-second voice memos.",
    icon: Clock,
    category: "Time Investment"
  },
  {
    question: "Our CEO does everything via text message. Will this actually work?",
    answer: "Yes! This is exactly why we built text-to-system capture. When your CEO books something via text, EAOS parses it, proposes the calendar hold with a context card, and your EA approves it. The system captures SMS, WhatsApp, and iMessage, turning those quick texts into structured actions. As Whitney says, 'With a couple texts and a quick voice memo, it becomes really light touch for the executive.'",
    icon: Zap,
    category: "Adoption"
  },
  {
    question: "We already use some of these tools. Why do we need EAOS?",
    answer: "Having the tools is just the beginning—making them work together as a system is where the magic happens. EAOS takes your existing Reflect Notes, Clay CRM, or other tools and creates standardized workflows, automated handoffs, and clear ownership between CEO and EA. It's the difference between having ingredients and having a recipe. Plus, our implementation ensures you're using these tools optimally for the CEO-EA partnership specifically.",
    icon: Sparkles,
    category: "Value Proposition"
  },
  {
    question: "How is this different from just hiring a better EA or getting EA training?",
    answer: "A great EA without a great system is like a race car driver without a race car. EAOS provides the infrastructure that allows any competent EA to perform at an elite level. We've proven this—when Tim McCarthy's EA was promoted internally, we successfully onboarded the new VA into the same system in days, not months. The system makes the partnership scalable and transferable.",
    icon: Users,
    category: "Value Proposition"
  },
  {
    question: "What's the ROI? How do you justify the cost?",
    answer: "CEOs lose 2-5 hours weekly to the gap between intention and execution—that's $100,000-250,000 annually at typical CEO rates. EAOS recovers 10+ hours monthly, reduces dropped balls by 85%, and increases EA productivity 3x. At $1,000/hour CEO value, you see ROI in month one. Tim McCarthy reports transformed work-life balance since October. The math is simple: recover just 2 hours weekly and EAOS pays for itself.",
    icon: DollarSign,
    category: "ROI"
  },
  {
    question: "Do you train the EA, the CEO, or both?",
    answer: "We use a phased approach that minimizes disruption. Week 1-2: We work exclusively with the EA to set up tools and workflows. Week 3: We introduce the CEO to the voice memo app (5 minutes). Week 4: The CEO starts receiving their daily dossier. Month 2: Weekly check-ins with the EA, bi-weekly with the CEO. This approach means the system is already working before the CEO needs to learn anything.",
    icon: Users,
    category: "Implementation"
  },
  {
    question: "What happens after the initial setup? Is there ongoing support?",
    answer: "You have three options after the 60-day implementation: (1) Self-maintained—you run it yourself with our documentation and SOPs, no ongoing cost. (2) Light support—monthly check-ins and optimization help. (3) Full concierge—we continue managing and optimizing the system for you. Most clients start with concierge support and transition to self-maintained once the habits are established.",
    icon: Brain,
    category: "Support"
  }
];

export function FAQAccordion({ className }: { className?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("space-y-4", className)}>
      {faqs.map((faq, index) => {
        const Icon = faq.icon || Brain;
        const isOpen = openIndex === index;
        
        return (
          <div
            key={index}
            className={cn(
              "rounded-2xl border transition-all",
              isOpen 
                ? "border-slate-900 bg-white shadow-pitch-md" 
                : "border-slate-200 bg-white hover:shadow-pitch-sm"
            )}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full px-6 py-5 flex items-start gap-4 text-left"
            >
              <div className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full flex-shrink-0 transition-colors",
                isOpen ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600"
              )}>
                <Icon className="h-5 w-5" />
              </div>
              
              <div className="flex-1">
                <h3 className={cn(
                  "font-semibold transition-colors",
                  isOpen ? "text-slate-900" : "text-slate-700"
                )}>
                  {faq.question}
                </h3>
                {faq.category && (
                  <span className="inline-block mt-1 text-xs uppercase tracking-wide text-slate-500">
                    {faq.category}
                  </span>
                )}
              </div>
              
              <ChevronDown className={cn(
                "h-5 w-5 text-slate-400 transition-transform flex-shrink-0 mt-0.5",
                isOpen && "rotate-180"
              )} />
            </button>
            
            {isOpen && (
              <div className="px-6 pb-6">
                <div className="pl-14 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function FAQGrid({ className }: { className?: string }) {
  return (
    <div className={cn("grid md:grid-cols-2 gap-6", className)}>
      {faqs.slice(0, 6).map((faq, index) => {
        const Icon = faq.icon || Brain;
        
        return (
          <div
            key={index}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-pitch-sm hover:shadow-pitch-md transition-shadow"
          >
            <div className="flex gap-4 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 flex-shrink-0">
                <Icon className="h-5 w-5" />
              </div>
              {faq.category && (
                <span className="text-xs uppercase tracking-wide text-slate-500 mt-3">
                  {faq.category}
                </span>
              )}
            </div>
            
            <h3 className="font-semibold text-slate-900 mb-3">
              {faq.question}
            </h3>
            
            <p className="text-sm text-slate-600 leading-relaxed">
              {faq.answer.slice(0, 200)}...
            </p>
          </div>
        );
      })}
    </div>
  );
}
