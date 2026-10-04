import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronRight, CheckCircle, ArrowRight, 
  Terminal, Server, Cloud, Cpu, Mail, Github, 
  Linkedin, Moon, Sun 
} from 'lucide-react';

/**
 * PREMA VISION LLC - WEBSITE CONTENT CONFIGURATION
 * * Edit this section to update site text without touching the UI code.
 */

// SEO metadata for each page
const PAGE_SEO = {
  home: {
    title: "Prema Vision - LangChain and LangGraph Observability Consulting",
    description: "LLM observability consulting for LangChain and LangGraph teams. We implement LangSmith workflows with tracing, evaluators, annotation workflows, dashboards, and alerts.",
    keywords: "LangChain observability, LangGraph observability, LangSmith setup, LLM quality, AI evaluation"
  },
  services: {
    title: "Services for LangChain and LangGraph Teams | Prema Vision",
    description: "Service packages for AI observability: Domain Expert Quality System, LangSmith Quick Start, targeted engineering consulting, and fractional CTO support.",
    keywords: "LangSmith services, AI observability consulting, LLM quality system, fractional CTO"
  },
  cases: {
    title: "Case Studies - Real Projects & Results | Prema Vision",
    description: "Case studies on production AI quality improvements with observability, evaluator workflows, and practical engineering interventions.",
    keywords: "AI observability case studies, LangSmith outcomes, LLM quality improvements, evaluator workflow results"
  },
  about: {
    title: "Why Prema Vision Focuses on AI Observability",
    description: "Prema Vision implements LangSmith workflows so domain experts can improve AI quality directly with clear production visibility.",
    keywords: "AI observability, LangSmith workflows, domain expert feedback, production LLM quality"
  },
  contact: {
    title: "Scope Your AI Observability Gap | Prema Vision",
    description: "Share your stack, production stage, and quality bottleneck. Get a fit/no-fit response within 24 hours.",
    keywords: "AI observability consultation, LangChain support, LangGraph support, LangSmith diagnostic"
  }
};

// Helper function to update page meta tags for SEO
function updatePageMeta(pageId: keyof typeof PAGE_SEO) {
  const seo = PAGE_SEO[pageId];
  
  // Update title
  document.title = seo.title;
  
  // Update or create meta tags
  const updateMetaTag = (property: string, content: string, isProperty = false) => {
    const attribute = isProperty ? 'property' : 'name';
    let element = document.querySelector(`meta[${attribute}="${property}"]`) as HTMLMetaElement;
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, property);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };
  
  // Update standard meta tags
  updateMetaTag('description', seo.description);
  updateMetaTag('keywords', seo.keywords);
  updateMetaTag('title', seo.title);
  
  // Build clean URL (with History API, no hash)
  const pageUrl = pageId === 'home' 
    ? 'https://premavision.net/' 
    : `https://premavision.net/${pageId}`;
  
  // Update Open Graph tags
  updateMetaTag('og:title', seo.title, true);
  updateMetaTag('og:description', seo.description, true);
  updateMetaTag('og:url', pageUrl, true);
  
  // Update Twitter tags
  updateMetaTag('twitter:title', seo.title, true);
  updateMetaTag('twitter:description', seo.description, true);
  updateMetaTag('twitter:url', pageUrl, true);
  
  // Update canonical URL
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', pageUrl);
}

const CONTENT = {
  company: {
    name: "Prema Vision",
    logoUrl: "/logo.png", // Логотип - загрузите файл в public/logo.png
    legalName: "Prema Vision LLC",
    email: "support@premavision.net",
    location: "USA",
    year: new Date().getFullYear(),
  },
  nav: [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Case Studies", id: "cases" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ],
  home: {
    hero: {
      h1: "LangChain and LangGraph observability that improves AI quality.",
      sub: (
        <>
          Set up LangSmith so product, support, and sales teams improve AI quality directly, without waiting for engineering sprints.
        </>
      ),
      primaryCta: "Book observability diagnostic",
      secondaryCta: "See service packages",
      badges: ["Tracing in production", "Evaluator coverage", "Annotation workflows"],
      bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
    },
    pillars: [
      {
        id: 1,
        title: "Domain Expert Quality System (from $5,000)",
        desc: "A full LangSmith quality loop where domain experts can inspect failures, annotate, and drive fixes.",
        items: ["LangSmith project setup", "Domain evaluators and annotation flow", "Prompt Hub onboarding and quality dashboard", "Slack quality alerts"],
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 2,
        title: "LangSmith Quick Start (from $1,500)",
        desc: "Fast instrumentation for teams that need visibility now and a practical baseline to improve quality.",
        items: ["Tracing and run visibility", "Cost monitoring", "Baseline evaluators", "Production-ready in 1 week"],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" 
      },
      {
        id: 3,
        title: "Engineering Consulting (targeted)",
        desc: "Short interventions to remove one critical bottleneck without launching a broad transformation program.",
        items: ["Legacy bottleneck diagnosis", "Critical path fix", "Monitoring and dashboards", "Short scoped interventions"],
        image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 4,
        title: "Fractional CTO (limited slots)",
        desc: "Hands-on technical leadership for teams that need architecture ownership and delivery guidance.",
        items: ["Architecture and roadmap ownership", "Team and delivery guidance", "Prototype to production support", "1-2 companies at a time"],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
      }
    ],
    outcomes: [
      { title: "Faster quality iteration without developer tickets", desc: "Tracing, annotation workflows, and evaluator results let non-engineering teams improve quality directly.", color: "text-red-500" },
      { title: "Clear visibility into failures, cost, and regressions", desc: "Production runs, cost trends, and regression checks are visible in one operating dashboard.", color: "text-yellow-500" },
      { title: "Domain experts in the loop through UI workflows", desc: "Prompt Hub and evaluator workflows turn expert feedback into repeatable quality signals.", color: "text-green-500" }
    ],
    casesTeaser: [
      {
        title: "LangSmith rollout for support quality",
        summary: "Implemented tracing, failure tagging, and evaluator baselines so support leads could iterate prompts without waiting for sprint tickets.",
        tags: ["LangSmith", "Evaluators", "Support Ops"],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Regression visibility before release",
        summary: "Added annotation workflow, prompt versioning, and Slack alerts that caught quality regressions before production rollout.",
        tags: ["Annotation", "Prompt Hub", "Alerts"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  services: {
    intro: "For founders and CTOs who need production visibility and faster AI quality improvements without sprint bottlenecks.",
    list: [
      {
        title: "Domain Expert Quality System (from $5,000)",
        icon: <Cpu className="w-6 h-6" />,
        bestFor: "Teams in production with unstable output quality and delayed feedback loops.",
        included: ["LangSmith project setup", "Domain evaluators and annotation flow", "Prompt Hub onboarding and quality dashboard", "Slack quality alerts"],
        businessOutcome: "Quality improvements ship faster because domain teams can act on visible failures without waiting for sprint capacity.",
        scopeCaveat: "Not a fit for teams that need a full internal platform rebuild.",
        cta: "Book observability diagnostic",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "LangSmith Quick Start (from $1,500)",
        icon: <Server className="w-6 h-6" />,
        bestFor: "Teams that need immediate run visibility before the next AI release.",
        included: ["Tracing and run visibility", "Cost monitoring", "Baseline evaluators", "Production-ready in 1 week"],
        businessOutcome: "A measurable baseline for quality and cost, with enough instrumentation to prioritize the next fixes.",
        scopeCaveat: "Not a fit for teams expecting custom platform development in this package.",
        cta: "Start Quick Start",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Engineering Consulting (targeted)",
        icon: <Cloud className="w-6 h-6" />,
        bestFor: "Teams with a single high-impact bottleneck on the critical path.",
        included: ["Legacy bottleneck diagnosis", "Critical path fix", "Monitoring and dashboards", "Short scoped interventions"],
        businessOutcome: "One blocking issue is removed quickly with minimal disruption to roadmap delivery.",
        scopeCaveat: "Not a fit for open-ended modernization programs.",
        cta: "Scope targeted fix",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Fractional CTO (limited slots)",
        icon: <Terminal className="w-6 h-6" />,
        bestFor: "Founders and engineering teams that need senior technical ownership beyond advisory calls.",
        included: ["Architecture and roadmap ownership", "Team and delivery guidance", "Prototype to production support", "1-2 companies at a time"],
        businessOutcome: "Execution quality improves through clear ownership, tighter technical decisions, and better delivery cadence.",
        scopeCaveat: "Not a fit for teams seeking part-time status reporting without technical ownership.",
        cta: "Check availability",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
      }
    ],
    faq: [
      { q: "Can this work without a large engineering sprint?", a: "Yes. We design tracing, evaluator, and annotation workflows so product, support, and domain teams can improve quality directly between releases." },
      { q: "How long does the first useful phase take?", a: "LangSmith Quick Start is typically delivered in 1 week. Larger quality-system scopes are phased in short milestones with visible checkpoints." },
      { q: "Can you work with our current orchestration stack?", a: "Yes. We support LangChain, LangGraph, and custom orchestration as long as runtime traces and feedback signals can be instrumented." },
      { q: "How are engagements priced?", a: "Packages start at $1,500 for Quick Start and $5,000 for Domain Expert Quality System. Targeted consulting and fractional CTO scopes are defined after diagnostic." }
    ]
  },
  cases: [
    {
      title: "Support AI quality loop in production",
      client: "B2B SaaS Support Team",
      problem: "Answer quality was unstable across high-volume support flows, but fixes depended on engineering sprint bandwidth and ad-hoc debugging.",
      approach: [
        "Implemented end-to-end LangSmith tracing with run-level metadata for intent, segment, and escalation flags.",
        "Added baseline evaluators for answer quality, policy adherence, and handoff correctness.",
        "Set up annotation workflow so support leads could label failures and route fixes without developer tickets."
      ],
      impact: [
        "Reduced quality-issue triage time from days to hours.",
        "Created a shared quality dashboard used by product, support, and engineering.",
        "Enabled weekly quality iteration with clear regression visibility."
      ],
      stack: ["LangChain", "LangSmith", "Prompt Hub", "Slack"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Cost and failure visibility for agent workflows",
      client: "Vertical AI Product Team",
      problem: "The team shipped multiple agent paths but lacked visibility into expensive runs, failure clusters, and prompt-level regressions.",
      approach: [
        "Instrumented tracing across orchestration nodes to expose bottlenecks and token-heavy branches.",
        "Built cost monitoring views segmented by route, model, and user intent.",
        "Added evaluator checks to gate prompt changes before broad rollout."
      ],
      impact: [
        "Made per-route cost drivers visible in one dashboard.",
        "Detected regressions before customer exposure.",
        "Improved confidence in release decisions with measurable quality signals."
      ],
      stack: ["LangGraph", "LangSmith", "OpenAI", "Datadog"],
      image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Domain-expert feedback operationalized",
      client: "HealthTech AI Operations",
      problem: "Clinical-domain feedback existed in notes and calls, but was not operationalized into repeatable evaluator logic or release criteria.",
      approach: [
        "Designed annotation taxonomy aligned to domain failure modes and business risk levels.",
        "Mapped annotation outputs to evaluator rules and dashboard slices.",
        "Added Slack alerts for high-risk quality drift and threshold breaches."
      ],
      impact: [
        "Turned domain feedback into an operational quality workflow.",
        "Improved handoff clarity between product, domain experts, and engineering.",
        "Established a repeatable release checklist tied to quality signals."
      ],
      stack: ["LangChain", "LangSmith", "Slack", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800"
    }
  ],
  about: {
    philosophy: [
      "Most AI teams know quality is unstable, but fixes still depend on engineering sprints.",
      "Prema Vision implements LangSmith workflows so domain experts can improve output quality directly.",
      "The goal is practical: faster iteration, fewer regressions, and visible quality signals in production."
    ],
    founder: {
      name: "Denys Korolkov",
      role: "Founder, Principal Engineer, Fractional CTO",
      avatarUrl: "/Денис5.png",
      bio: [
        "Co-founder and CTO at Structed.ai, where LangGraph agents run in production with domain-expert feedback loops.",
        "Denys is a principal engineer who combines architecture ownership with hands-on implementation.",
        "He focuses on practical observability systems that turn production signals into faster quality decisions."
      ]
    },
    cofounder: {
      name: "Victoria Von",
      role: "Co-founder and Creative Director",
      avatarUrl: "/1D654585-BF79-4660-A027-41A67A50F359.jpg",
      bio: [
        "Product concept, user experience, category positioning and go-to-market.",
        "Turned the execution model into the consumer product, the brand and the market story."
      ]
    },
    principles: [
      "Find the weak point first",
      "Ship targeted fixes, not transformation theater",
      "Instrument everything that matters",
      "Keep ownership clear across product, domain, and engineering"
    ]
  }
};

/* --- SHARED COMPONENTS --- */

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ children, onClick, variant = 'primary', className = '', disabled = false, type = 'button' }: ButtonProps) => {
  const base = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const styles = {
    primary: "border-transparent text-white bg-slate-900 hover:bg-slate-800 hover:shadow-lg focus:ring-slate-900 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100",
    secondary: "border-slate-300 text-slate-700 bg-white hover:bg-slate-50 hover:shadow-md focus:ring-slate-500 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 dark:hover:bg-slate-700",
    outline: "border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800"
  };
  
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
};

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className = "", id = "" }: SectionProps) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
);

interface BadgeProps {
  children: React.ReactNode;
}

const Badge = ({ children }: BadgeProps) => (
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100/80 backdrop-blur-sm text-blue-800 dark:bg-blue-900/80 dark:text-blue-200 mr-2 mb-2 border border-blue-200 dark:border-blue-800">
    {children}
  </span>
);

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const GradientText = ({ children, className = "" }: GradientTextProps) => (
  <span className={`bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-800 dark:from-blue-400 dark:via-cyan-300 dark:to-blue-200 font-black ${className}`}>
    {children}
  </span>
);

interface LogoProps {
  className?: string;
  showText?: boolean;
  textClassName?: string;
}

const Logo = ({ className = "", showText = true, textClassName = "" }: LogoProps) => {
  const [imgError, setImgError] = React.useState(false);

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {!imgError ? (
        <img 
          src={CONTENT.company.logoUrl} 
          alt={CONTENT.company.name} 
          className="h-8 w-auto object-contain" 
          onError={() => {
            console.error('Failed to load logo image:', CONTENT.company.logoUrl);
            setImgError(true);
          }}
          crossOrigin="anonymous"
        />
      ) : (
        <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-sm">PV</span>
        </div>
      )}
      {showText && (
        <GradientText className={`text-xl font-bold ${textClassName}`}>
          {CONTENT.company.name}
        </GradientText>
      )}
    </div>
  );
};

/* --- PAGES --- */

interface PageProps {
  navigate: (pageId: string) => void;
}

const HomePage = ({ navigate }: PageProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="relative overflow-hidden bg-slate-900 pt-16 pb-24 lg:pt-32 lg:pb-40 min-h-[85vh] flex items-center">
        {/* Dynamic Parallax Background */}
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: `url(${CONTENT.home.hero.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.5}px)`, // Parallax effect
          }}
        >
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-slate-900/80 dark:bg-black/80 backdrop-blur-[2px]"></div>
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:w-2/3">
            <div className="flex flex-wrap gap-2 mb-6">
              {CONTENT.home.hero.badges.map((b, i) => (
                <span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-white backdrop-blur-md border border-white/20">
                  <CheckCircle className="w-3 h-3 mr-2 text-green-400" /> {b}
                </span>
              ))}
            </div>
            {/* Added Gradient Text Class to the H1 */}
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl mb-6 drop-shadow-sm pb-1">
              <GradientText>{CONTENT.home.hero.h1}</GradientText>
            </h1>
            <p className="mt-4 text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
              {CONTENT.home.hero.sub}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => navigate('contact')} className="shadow-xl shadow-blue-900/20">
                {CONTENT.home.hero.primaryCta}
              </Button>
              <Button variant="secondary" onClick={() => navigate('services')} className="bg-white/10 text-white border-white/20 hover:bg-white/20 dark:bg-white/10 dark:text-white dark:border-white/20 dark:hover:bg-white/20 backdrop-blur-sm">
                {CONTENT.home.hero.secondaryCta}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Section id="what-we-do">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            <GradientText>Focused Expertise</GradientText>
          </h2>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Four offers with clear scope, delivery mechanism, and measurable quality outcomes.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {CONTENT.home.pillars.map((pillar) => (
            <div key={pillar.id} className="group relative bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 dark:border-slate-700 h-full flex flex-col">
              {/* Card Image Header */}
              <div className="h-32 w-full overflow-hidden relative">
                <img src={pillar.image} alt={pillar.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent dark:from-slate-800/90 dark:to-transparent"></div>
              </div>
              
              <div className="p-6 pt-0 flex-1 flex flex-col relative z-10">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{pillar.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{pillar.desc}</p>
                <ul className="space-y-2 mt-auto">
                  {pillar.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-700 dark:text-slate-300">
                      <ChevronRight className="w-4 h-4 mr-1 text-blue-500 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
         {/* Subtle pattern background */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center pointer-events-none"></div>
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-cyan-50/20 dark:from-blue-950/20 dark:via-transparent dark:to-cyan-950/10 pointer-events-none"></div>
        
        <div className="lg:flex lg:items-center lg:justify-between relative z-10">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
               <GradientText>Fix the quality bottleneck, not just the prompt.</GradientText>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Every promise is tied to mechanism: tracing, evaluators, annotation workflows, dashboards, and alerts.
            </p>
            <Button variant="outline" onClick={() => navigate('about')} className="border-slate-300 hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:hover:border-slate-600 dark:hover:bg-slate-800 dark:text-slate-200">How we work</Button>
          </div>
          <div className="lg:w-5/12 space-y-4">
            {CONTENT.home.outcomes.map((outcome, idx) => (
              <div key={idx} className="group flex p-5 bg-white dark:bg-slate-800/95 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl border border-slate-200 dark:border-slate-700/80 transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-800">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700/80 dark:to-slate-800/80 shadow-sm group-hover:shadow-md transition-shadow border border-slate-200/50 dark:border-slate-600/50">
                    {/* Dynamic color application */}
                    <CheckCircle className={`w-6 h-6 ${outcome.color} drop-shadow-sm`} />
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1.5">{outcome.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{outcome.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-extrabold">
            <GradientText>Selected Work</GradientText>
          </h2>
          <button onClick={() => navigate('cases')} className="hidden sm:flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium">
            All Case Studies <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {CONTENT.home.casesTeaser.map((item, idx) => (
            <div key={idx} onClick={() => navigate('cases')} className="cursor-pointer group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all h-80">
              {/* Background Image for Case Teaser */}
              <div className="absolute inset-0">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-slate-900/70 group-hover:bg-slate-900/60 transition-colors"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex gap-2 mb-4">
                  {item.tags.map(tag => (
                    <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-md border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 line-clamp-2">{item.summary}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 sm:hidden">
          <Button variant="secondary" className="w-full" onClick={() => navigate('cases')}>View All Case Studies</Button>
        </div>
      </Section>

      <Section className="bg-slate-900 dark:bg-slate-800 text-center rounded-3xl mx-4 sm:mx-6 lg:mx-8 mb-12 relative overflow-hidden shadow-2xl shadow-blue-900/20 dark:shadow-none border border-slate-800 dark:border-slate-700">
        {/* Abstract background for CTA - now visible in dark mode too */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 py-12 px-4">
          <h2 className="text-3xl font-extrabold text-white mb-4">Need observability before your next AI release?</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8 text-lg">
            Start with a 1-week LangSmith Quick Start, or scope a full Domain Expert Quality System.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="secondary"
              onClick={() => navigate('contact')} 
              className="bg-white !text-slate-900 hover:bg-slate-100 dark:bg-white dark:!text-slate-900"
            >
              Book a call
            </Button>
            <Button variant="outline" onClick={() => navigate('services')} className="border-slate-600 text-slate-200 hover:bg-slate-800 dark:border-slate-700 dark:text-slate-300">
              See pricing
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

const ServicesPage = ({ navigate }: PageProps) => (
  <div className="pt-24 pb-16">
    <Section>
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold mb-6">
          <GradientText>Services for LangChain and LangGraph teams</GradientText>
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400">{CONTENT.services.intro}</p>
      </div>

      <div className="space-y-16">
        {CONTENT.services.list.map((service, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col lg:flex-row">
            {/* Service Image Section */}
            <div className="lg:w-1/3 relative min-h-[240px] lg:min-h-full">
              <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-slate-900/20 dark:bg-black/40"></div>
              {/* Icon overlay on image */}
              <div className="absolute top-6 left-6 p-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur rounded-lg text-slate-900 dark:text-white shadow-lg">
                {service.icon}
              </div>
            </div>

            <div className="p-8 lg:p-12 lg:w-2/3">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h2>
                <div>
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Best for</h3>
                  <p className="text-slate-700 dark:text-slate-200">{service.bestFor}</p>
                </div>
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">What is included</h3>
                  <ul className="space-y-3">
                    {service.included.map((item, i) => (
                      <li key={i} className="flex items-start text-slate-700 dark:text-slate-200">
                        <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Business outcome</h3>
                  <p className="text-slate-700 dark:text-slate-200">{service.businessOutcome}</p>
                </div>
                <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Scope caveat</h3>
                  <p className="text-slate-700 dark:text-slate-200">{service.scopeCaveat}</p>
                </div>
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">CTA</h3>
                  <Button onClick={() => navigate('contact')}>{service.cta}</Button>
                </div>
            </div>
          </div>
        ))}
      </div>
    </Section>

    <Section className="bg-slate-50 dark:bg-slate-900/50">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">Frequently Asked Questions</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {CONTENT.services.faq.map((item, i) => (
          <div key={i}>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.q}</h3>
            <p className="text-slate-500 dark:text-slate-400">{item.a}</p>
          </div>
        ))}
      </div>
    </Section>

    <div className="text-center py-12">
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Need a scoped observability plan?</h3>
      <Button onClick={() => navigate('contact')}>Book observability diagnostic</Button>
    </div>
  </div>
);

const CasesPage = ({ navigate }: PageProps) => (
  <div className="pt-24 pb-16">
    <Section>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-extrabold mb-4">
          <GradientText>Case Studies</GradientText>
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400">
          Production observability work with clear mechanisms and measurable quality outcomes.
        </p>
      </div>

      <div className="space-y-12">
        {CONTENT.cases.map((project, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col lg:flex-row">
             {/* Case Image Side */}
             <div className="lg:w-2/5 relative min-h-[250px] lg:min-h-full">
               <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
               <div className="absolute inset-0 bg-slate-900/40"></div>
               <div className="absolute bottom-6 left-6 right-6">
                 <div className="flex flex-wrap gap-2 mb-2">
                   {project.stack.map(tech => <Badge key={tech}>{tech}</Badge>)}
                 </div>
               </div>
             </div>

            <div className="p-8 lg:p-12 lg:w-3/5">
              <div className="mb-6">
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-1">{project.title}</h2>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">{project.client}</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Quality bottleneck</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Observability implementation</h3>
                  <ul className="space-y-2">
                    {project.approach.map((step, i) => (
                      <li key={i} className="flex items-start text-slate-600 dark:text-slate-300 text-sm">
                        <ChevronRight className="w-4 h-4 mr-2 text-blue-500 mt-1 flex-shrink-0" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border border-green-100 dark:border-green-900/30">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center">
                    <Terminal className="w-5 h-5 mr-2 text-green-600 dark:text-green-400" /> Business outcome
                  </h3>
                  <ul className="space-y-3">
                    {project.impact.map((res, i) => (
                      <li key={i} className="flex items-start text-slate-700 dark:text-slate-200 text-sm font-medium">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        {res}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-blue-50 dark:bg-slate-800 border border-blue-100 dark:border-slate-700 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Need this visibility before your next release?</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
          Start with a scoped diagnostic and get a clear fit/no-fit plus the fastest observability path for your team.
        </p>
        <Button onClick={() => navigate('contact')}>Book observability diagnostic</Button>
      </div>
    </Section>
  </div>
);

const AboutPage = () => (
  <div className="pt-24 pb-16">
    <Section>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8">
          <GradientText>Why Prema Vision focuses on AI observability</GradientText>
        </h1>
        <div className="prose prose-lg dark:prose-invert text-slate-500 dark:text-slate-400 mb-12">
          {CONTENT.about.philosophy.map((p, i) => (
            <p key={i} className="mb-4">{p}</p>
          ))}
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700 pt-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">About the Founders</h2>
          {[CONTENT.about.founder, CONTENT.about.cofounder].map((founder) => (
            <div key={founder.name} className="flex flex-col md:flex-row gap-8 items-start mb-10 last:mb-0">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{founder.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4">{founder.role}</p>
                <div className="space-y-4 text-slate-600 dark:text-slate-300">
                  {founder.bio.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </div>
              <div className="flex-shrink-0 w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-lg">
                <img src={founder.avatarUrl} alt={founder.name} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">How we work</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {CONTENT.about.principles.map((principle, i) => (
              <div key={i} className="flex items-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                <span className="text-slate-700 dark:text-slate-200 font-medium">{principle}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  </div>
);

// Google Apps Script endpoint for form submission
const FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbx7lwPV-HbYr85IoeI27e7DL0HOaOeGsRjr6Mp6CabxlUxGcOFO3QoeaaQFx5X7knoo/exec';

/**
 * Используем ровно тот же формат запроса, который у тебя уже работает:
 *   method: 'POST'
 *   headers: { 'Content-Type': 'text/plain' }
 *   body: JSON.stringify({...})
 *
 * Поля в payload остаются без изменений:
 * name, email, company, budgetRange, projectBrief, howFound.
 */
async function submitQuoteForm(formData: {
  name: string;
  email: string;
  company: string;
  budgetRange: string;
  projectBrief: string;
  howFound: string;
}): Promise<{ success: boolean; message?: string; error?: string }> {
  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        company: formData.company || '',
        budgetRange: formData.budgetRange,
        projectBrief: formData.projectBrief,
        howFound: formData.howFound || ''
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    if (result && result.success) {
      console.log('✅ Форма успешно отправлена!');
      return { success: true, message: result.message || 'Form submitted successfully' };
    }

    console.error('❌ Ошибка валидации:', result?.error);
    return { success: false, error: result?.error || 'Validation error' };
  } catch (error: any) {
    console.error('❌ Ошибка отправки:', error);
    return { 
      success: false, 
      error: `Network error: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again later or contact us directly at ${CONTENT.company.email}.` 
    };
  }
}

const ContactPage = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  
  // Form field states for prefilling from URL params
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    company: '',
    useCaseType: '',
    stack: '',
    currentStage: '',
    monthlyVolume: '',
    budget: '',
    brief: '',
    source: ''
  });

  // Parse URL query parameters and prefill form on mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const params: any = {};
    
    // Map query params to form fields
    if (urlParams.has('name')) params.name = urlParams.get('name') || '';
    if (urlParams.has('email')) params.email = urlParams.get('email') || '';
    if (urlParams.has('company')) params.company = urlParams.get('company') || '';
    if (urlParams.has('useCaseType')) params.useCaseType = urlParams.get('useCaseType') || '';
    if (urlParams.has('stack')) params.stack = urlParams.get('stack') || '';
    if (urlParams.has('currentStage')) params.currentStage = urlParams.get('currentStage') || '';
    if (urlParams.has('monthlyVolume')) params.monthlyVolume = urlParams.get('monthlyVolume') || '';
    if (urlParams.has('budget')) params.budget = urlParams.get('budget') || '';
    if (urlParams.has('brief') || urlParams.has('message')) {
      params.brief = urlParams.get('brief') || urlParams.get('message') || '';
    }
    if (urlParams.has('source') || urlParams.has('utm_source')) {
      params.source = urlParams.get('source') || urlParams.get('utm_source') || '';
    }
    
    // Only update if there are params
    if (Object.keys(params).length > 0) {
      setFormValues(prev => ({ ...prev, ...params }));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const qualificationFields = [
      formValues.useCaseType ? `Use Case Type: ${formValues.useCaseType}` : '',
      formValues.stack ? `Stack: ${formValues.stack}` : '',
      formValues.currentStage ? `Current Stage: ${formValues.currentStage}` : '',
      formValues.monthlyVolume ? `Monthly AI Request Volume: ${formValues.monthlyVolume}` : ''
    ].filter(Boolean);

    const qualificationSummary = qualificationFields.length > 0
      ? [...qualificationFields, '', 'Quality Bottleneck Details:', formValues.brief].join('\n')
      : formValues.brief;

    const formData = {
      name: formValues.name,
      email: formValues.email,
      company: formValues.company,
      budgetRange: formValues.budget,
      projectBrief: qualificationSummary,
      howFound: formValues.source
    };

    const result = await submitQuoteForm(formData);

    if (result.success) {
      setStatus('success');
      // Reset form values
      setFormValues({
        name: '',
        email: '',
        company: '',
        useCaseType: '',
        stack: '',
        currentStage: '',
        monthlyVolume: '',
        budget: '',
        brief: '',
        source: ''
      });
    } else {
      setStatus('error');
      setErrorMessage(result.error || 'Failed to submit form. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="pt-32 pb-24 min-h-[60vh] flex items-center justify-center">
        <div className="text-center px-4">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900 mb-6">
            <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-300" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">Message received.</h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-8">
            Thanks for sharing your context. You get a fit/no-fit response within 24 hours.
          </p>
          <Button onClick={() => setStatus('idle')}>Send another message</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <h1 className="text-4xl font-extrabold mb-6">
              <GradientText>Let's scope your AI observability gap.</GradientText>
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 mb-8">
              Tell us your stack, production stage, and quality bottleneck. We will reply with a clear fit/no-fit and next step.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center text-slate-600 dark:text-slate-300">
                <Mail className="w-6 h-6 mr-4 text-slate-400 flex-shrink-0" />
                <a href={`mailto:${CONTENT.company.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {CONTENT.company.email}
                </a>
              </div>
              <div className="flex items-center text-slate-600 dark:text-slate-300">
                <div className="w-6 mr-4 text-center text-slate-400 text-lg">📍</div>
                Remote-first (Based in {CONTENT.company.location})
              </div>
            </div>

            <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-2">Response Time</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                You get a fit/no-fit response within 24 hours.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Name <span className="text-red-500">*</span></label>
              <input 
                required 
                type="text" 
                id="name" 
                value={formValues.name}
                onChange={(e) => setFormValues(prev => ({ ...prev, name: e.target.value }))}
                className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border" 
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Work Email <span className="text-red-500">*</span></label>
              <input 
                required 
                type="email" 
                id="email" 
                value={formValues.email}
                onChange={(e) => setFormValues(prev => ({ ...prev, email: e.target.value }))}
                className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border" 
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Company</label>
              <input 
                type="text" 
                id="company" 
                value={formValues.company}
                onChange={(e) => setFormValues(prev => ({ ...prev, company: e.target.value }))}
                className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border" 
              />
            </div>

            <div>
              <label htmlFor="useCaseType" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Use Case Type</label>
              <select 
                id="useCaseType" 
                value={formValues.useCaseType}
                onChange={(e) => setFormValues(prev => ({ ...prev, useCaseType: e.target.value }))}
                className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border"
              >
                <option value="">Select use case...</option>
                <option value="LLM quality instability">LLM quality instability</option>
                <option value="No visibility in production">No visibility in production</option>
                <option value="High cost per useful answer">High cost per useful answer</option>
                <option value="Domain feedback not operationalized">Domain feedback not operationalized</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="stack" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Stack</label>
              <select 
                id="stack" 
                value={formValues.stack}
                onChange={(e) => setFormValues(prev => ({ ...prev, stack: e.target.value }))}
                className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border"
              >
                <option value="">Select stack...</option>
                <option value="LangChain">LangChain</option>
                <option value="LangGraph">LangGraph</option>
                <option value="Custom orchestration">Custom orchestration</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="currentStage" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Current Stage</label>
              <select 
                id="currentStage" 
                value={formValues.currentStage}
                onChange={(e) => setFormValues(prev => ({ ...prev, currentStage: e.target.value }))}
                className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border"
              >
                <option value="">Select stage...</option>
                <option value="Pre-production">Pre-production</option>
                <option value="Early production">Early production</option>
                <option value="Production at scale">Production at scale</option>
                <option value="Migration in progress">Migration in progress</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="monthlyVolume" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Monthly AI Request Volume</label>
              <select 
                id="monthlyVolume" 
                value={formValues.monthlyVolume}
                onChange={(e) => setFormValues(prev => ({ ...prev, monthlyVolume: e.target.value }))}
                className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border"
              >
                <option value="">Select volume...</option>
                <option value="<10k">&lt;10k</option>
                <option value="10k-100k">10k-100k</option>
                <option value="100k-1M">100k-1M</option>
                <option value="1M+">1M+</option>
                <option value="Unknown">Unknown</option>
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Budget Band</label>
              <select 
                id="budget" 
                value={formValues.budget}
                onChange={(e) => setFormValues(prev => ({ ...prev, budget: e.target.value }))}
                className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border"
              >
                <option value="">Select a range...</option>
                <option value="<$1,500">&lt;$1,500</option>
                <option value="$1,500-$5,000">$1,500-$5,000</option>
                <option value="$5,000-$10,000">$5,000-$10,000</option>
                <option value="$10,000+">$10,000+</option>
                <option value="Need guidance">Need guidance</option>
              </select>
            </div>

            <div>
              <label htmlFor="brief" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Quality Bottleneck Details <span className="text-red-500">*</span></label>
              <textarea 
                required 
                id="brief" 
                name="brief" 
                rows={4} 
                value={formValues.brief}
                onChange={(e) => setFormValues(prev => ({ ...prev, brief: e.target.value }))}
                className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border" 
                placeholder="Where does quality break today and how does it impact product or operations?"
              ></textarea>
            </div>

            <div>
               <label htmlFor="source" className="block text-sm font-medium text-slate-700 dark:text-slate-300">How did you find us?</label>
               <input 
                 type="text" 
                 id="source" 
                 name="source" 
                 value={formValues.source}
                 onChange={(e) => setFormValues(prev => ({ ...prev, source: e.target.value }))}
                 className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border" 
               />
            </div>

            {status === 'error' && errorMessage && (
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                <p className="text-sm text-red-800 dark:text-red-200">{errorMessage}</p>
              </div>
            )}

            <Button type="submit" className="w-full" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending...' : 'Submit qualification form'}
            </Button>
          </form>
        </div>
      </Section>
    </div>
  );
};

const NotFoundPage = ({ navigate }: PageProps) => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
    <h1 className="text-9xl font-black text-slate-200 dark:text-slate-800">404</h1>
    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-4">Page not found</h2>
    <p className="text-slate-500 dark:text-slate-400 mt-2 mb-8">Even our robust infrastructure can't find this route.</p>
    <Button onClick={() => navigate('home')}>Return Home</Button>
  </div>
);

/* --- LAYOUT & APP --- */

interface HeaderProps {
  navigate: (pageId: string) => void;
  currentPage: string;
  isDark: boolean;
  toggleTheme: () => void;
}

const Header = ({ navigate, currentPage, isDark, toggleTheme }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white/80 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate('home')}>
            <Logo />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex gap-6">
              {CONTENT.nav.map(item => (
                <button
                  key={item.id}
                  onClick={() => navigate(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    currentPage === item.id 
                      ? "text-blue-600 dark:text-blue-400" 
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <button onClick={toggleTheme} className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <Button onClick={() => navigate('contact')} className="hidden lg:inline-flex">
                Book observability diagnostic
              </Button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
             <button onClick={toggleTheme} className="p-2 mr-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {CONTENT.nav.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  navigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                   currentPage === item.id 
                      ? "bg-slate-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400" 
                      : "text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 px-3">
              <Button className="w-full" onClick={() => { navigate('contact'); setMobileMenuOpen(false); }}>Book observability diagnostic</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

interface FooterProps {
  navigate: (pageId: string) => void;
}

const Footer = ({ navigate }: FooterProps) => (
  <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <Logo className="mb-4" />
          <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-6">
            LLM observability consulting for LangChain and LangGraph teams. We implement LangSmith workflows that let domain experts improve AI quality.
          </p>
          <div className="flex space-x-4">
             <a href="https://github.com/premavision" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300" aria-label="GitHub">
               <Github className="w-5 h-5"/>
             </a>
             <a href="https://www.linkedin.com/company/premavision" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300" aria-label="LinkedIn">
               <Linkedin className="w-5 h-5"/>
             </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-wider uppercase mb-4">Company</h3>
          <ul className="space-y-3">
            {CONTENT.nav.map(item => (
              <li key={item.id}>
                <button onClick={() => navigate(item.id)} className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-wider uppercase mb-4">Contact</h3>
          <ul className="space-y-3">
            <li className="flex items-center text-slate-500 dark:text-slate-400">
               <Mail className="w-4 h-4 mr-2 flex-shrink-0" /> 
               <a href={`mailto:${CONTENT.company.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                 {CONTENT.company.email}
               </a>
            </li>
            <li className="text-slate-500 dark:text-slate-400">
               {CONTENT.company.location}
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-400 text-sm">
          &copy; {CONTENT.company.year} {CONTENT.company.legalName}. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDark, setIsDark] = useState(true);

  // Initialize page from URL path on mount
  useEffect(() => {
    const getPageFromPath = () => {
      const path = window.location.pathname.slice(1) || 'home'; // Remove leading '/'
      const validPages = ['home', 'services', 'cases', 'about', 'contact'];
      return validPages.includes(path) ? path : 'home';
    };

    setCurrentPage(getPageFromPath());

    // Listen for popstate (browser back/forward buttons)
    const handlePopState = () => {
      setCurrentPage(getPageFromPath());
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update meta tags when page changes
  useEffect(() => {
    updatePageMeta(currentPage as keyof typeof PAGE_SEO);
  }, [currentPage]);

  const navigate = (pageId: string) => {
    // Use History API for clean URLs
    const path = pageId === 'home' ? '/' : `/${pageId}`;
    window.history.pushState({}, '', path);
    setCurrentPage(pageId);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage navigate={navigate} />;
      case 'services': return <ServicesPage navigate={navigate} />;
      case 'cases': return <CasesPage navigate={navigate} />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      default: return <NotFoundPage navigate={navigate} />;
    }
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-blue-200 dark:selection:bg-blue-900">
        <Header navigate={navigate} currentPage={currentPage} isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
        <main className="min-h-screen">
          {renderPage()}
        </main>
        <Footer navigate={navigate} />
      </div>
    </div>
  );
}

