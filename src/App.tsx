import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronRight, CheckCircle, ArrowRight, 
  Terminal, Server, Cloud, Cpu, Mail, Github, 
  Linkedin, Moon, Sun, ArrowUpRight 
} from 'lucide-react';

/**
 * PREMA VISION LLC - WEBSITE CONTENT CONFIGURATION
 * * Edit this section to update site text without touching the UI code.
 */
const CONTENT = {
  company: {
    name: "Prema Vision",
    logoUrl: "/logo.png", // Логотип - загрузите файл в public/logo.png
    legalName: "Prema Vision LLC",
    email: "support@premavision.net",
    founder: {
      name: "Denys Korolkov",
      avatarUrl: "https://share.cleanshot.com/7vhzJrxf+", // URL аватара
    },
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
      h1: "AI automation and cloud engineering that actually ships.",
      sub: (
        <>
          We design and implement <span className="font-bold text-slate-100 dark:text-white">AI-powered workflows</span>, <span className="font-bold text-slate-100 dark:text-white">modern backend systems</span>, and <span className="font-bold text-slate-100 dark:text-white">DevOps pipelines</span> that deliver real business outcomes—not just slide decks.
        </>
      ),
      primaryCta: "Book a call",
      secondaryCta: "View case studies",
      badges: ["Principal-level engineering", "Hands-on delivery", "Scalable systems"],
      bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
    },
    pillars: [
      {
        id: 1,
        title: "AI Automation & Agents",
        desc: "Turn manual workflows into autonomous agents. We build RAG pipelines and custom tools that integrate seamlessly with your existing stack.",
        items: ["Support & Ops Agents", "RAG Pipelines", "Custom Tooling"],
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 2,
        title: "Backend & APIs",
        desc: "Modernize legacy monoliths or build high-performance microservices from scratch. Clean, typed, and tested.",
        items: ["Node.js & Python", "High-performance APIs", "Event-driven Systems"],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" 
      },
      {
        id: 3,
        title: "DevOps & Reliability",
        desc: "Infrastructure that sleeps when you do. We implement robust CI/CD, observability, and scalable cloud architectures.",
        items: ["AWS & Kubernetes", "CI/CD Pipelines", "Observability Setup"],
        image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 4,
        title: "Integrations & DX",
        desc: "Connect your fragmented ecosystem. We automate documentation, build internal developer platforms, and glue services together.",
        items: ["Platform Integrations", "Docs-as-Code", "Developer Tools"],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
      }
    ],
    outcomes: [
      { title: "Faster time-to-market", desc: "Ship features confidently with automated pipelines.", color: "text-red-500" },
      { title: "Reduced operational toil", desc: "Let AI agents handle the repetitive Tier-1 tasks.", color: "text-yellow-500" },
      { title: "Traffic-ready infrastructure", desc: "Systems designed to handle spikes without waking you up.", color: "text-green-500" }
    ],
    casesTeaser: [
      {
        title: "Modernizing billing for a global SaaS",
        summary: "Migrated a legacy billing portal to modern React microfrontends, resulting in 100% SLA on invoice loading.",
        tags: ["FinTech", "React", "Migration"],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "AI Integrations for Event Intelligence",
        summary: "Built AI-powered content generation for docs and automated publishing pipelines, reducing technical writing load by 50%.",
        tags: ["AI/LLM", "Automation", "Python"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  services: {
    intro: "For CTOs, Heads of Engineering, and Founders who need infrastructure and AI that works in the real world.",
    list: [
      {
        title: "AI Automation & Agents",
        icon: <Cpu className="w-6 h-6" />,
        desc: "We move beyond the chat interface. We build autonomous agents that can read your internal documentation, triage tickets, and execute operations safely.",
        useCases: ["AI Support Agents (Tier-1 Triage)", "Backoffice Operation Workflows", "Internal Knowledge RAG"],
        deliverables: ["Agent Architecture", "Vector Database Setup", "Eval & Monitoring Pipelines"],
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Backend & API Engineering",
        icon: <Server className="w-6 h-6" />,
        desc: "Whether it's untangling a spaghetti monolith or building a new billing engine, we write clean, maintainable backend code designed for scale.",
        useCases: ["Monolith to Microservices", "Billing & Checkout APIs", "High-throughput Data Ingestion"],
        deliverables: ["Production-ready Services", "OpenAPI Documentation", "Performance Tuning Reports"],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "DevOps, Cloud & Reliability",
        icon: <Cloud className="w-6 h-6" />,
        desc: "Stop fearing deploy day. We build boring, reliable infrastructure on AWS and Kubernetes so you can focus on product features.",
        useCases: ["Kubernetes Migration", "GitOps Implementation", "Cost Optimization"],
        deliverables: ["Terraform/IaC Modules", "CI/CD Workflows", "Datadog/Prometheus Setup"],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Integrations & Documentation",
        icon: <Terminal className="w-6 h-6" />,
        desc: "Great engineering needs great documentation. We automate the boring parts of developer experience and connect your isolated SaaS tools.",
        useCases: ["API-to-Docs Pipelines", "Webhook Handling Systems", "Internal Dev Portals"],
        deliverables: ["Automated Docs Site", "Integration Hubs", "Developer CLIs"],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
      }
    ],
    faq: [
      { q: "Do you work as an individual contributor or a team?", a: "We operate as a boutique studio. Denys acts as the Principal Engineer/Architect, and for larger projects, we scale up with a trusted network of senior specialists." },
      { q: "What is your typical engagement size?", a: "We prefer scopes that deliver value in 4-12 weeks. We avoid year-long 'transformation' roadmaps that never ship." },
      { q: "Can you work with our existing stack?", a: "Yes. While we prefer modern stacks (Node, Python, AWS), we have deep experience navigating and modernizing legacy codebases." },
      { q: "Do you support fixed-price projects?", a: "Yes, for well-scoped implementation phases. Discovery and vague architectural work are typically billed on a retainer or time-and-materials basis." }
    ]
  },
  cases: [
    {
      title: "Stabilizing Billing & Checkout Flows",
      client: "Global SaaS Design Platform",
      problem: "The legacy billing portal was a single point of failure. Invoice loading took 10s+, causing support spikes, and adding new pricing plans required weeks of manual database work.",
      approach: [
        "Migrated the UI to modern React microfrontends embedded in the main app.",
        "Designed a dedicated API layer for account operations to decouple from the monolith.",
        "Implemented rigorous structured logging and observability."
      ],
      impact: [
        "Achieved 100% SLA on invoice delivery and rendering.",
        "Reduced time-to-launch for new pricing tiers from 2 weeks to 2 days.",
        "Significantly improved LCP scores and user trust."
      ],
      stack: ["React", "Node.js", "GraphQL", "Redis"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "AI-Assisted Documentation & Integrations",
      client: "B2B Incident Intelligence Platform",
      problem: "The company had dozens of integrations to maintain. Keeping technical documentation in sync with code changes was a manual, error-prone nightmare.",
      approach: [
        "Built a serverless integration pipeline to normalize data from 30+ external tools.",
        "Implemented an AI agent to read code diffs and generate draft documentation updates.",
        "Created a CI/CD pipeline to publish docs automatically upon merge."
      ],
      impact: [
        "Reduced manual documentation effort by approx. 50%.",
        "Accelerated the launch of new 3rd-party integrations.",
        "Ensured documentation is never more than one commit behind production."
      ],
      stack: ["Python", "OpenAI API", "AWS Lambda", "Static Site Gen"],
      image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "AI Workflow for Internal Operations",
      client: "Mid-size SaaS (HealthTech)",
      problem: "The Ops team was drowning in repetitive ticket triage and manual database lookups, leading to slow response times for critical issues.",
      approach: [
        "Implemented a secure RAG-based assistant connected to internal Confluence and Jira.",
        "Built 'Admin Action' tools accessible via Slack commands for safe, routine database updates.",
        "Set up an audit log for all AI-initiated actions."
      ],
      impact: [
        " deflected 30% of routine internal questions.",
        "Reduced mean-time-to-resolution (MTTR) for routine operational tasks.",
        "Allowed senior ops staff to focus on complex incidents."
      ],
      stack: ["LangChain", "Pinecone", "Slack Bolt SDK", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800"
    }
  ],
  about: {
    philosophy: [
      "Too many AI and DevOps projects die in slide decks or POC hell.",
      "At Prema Vision, our goal is to bridge the gap between solid, boring engineering practices and the new world of pragmatic AI.",
      "We prioritize long-term maintainability over hype. If a simple script works better than a complex agent, we build the script."
    ],
    founder: {
      name: "Denys Korolkov",
      role: "Principal Consultant & Founder",
      bio: [
        "Denys is a Principal Engineer with a strong background in backend systems, full-stack architecture, and DevOps. He doesn't just draw diagrams—he writes production code.",
        "He has helped companies modernize critical billing systems, build high-performance APIs, and implement practical AI automations that solve actual business problems.",
        "Comfortable in the boardroom and the terminal, Denys focuses on technical precision and transparent communication."
      ]
    },
    principles: [
      "Start small, ship early.",
      "Prefer boring, well-understood infrastructure.",
      "Clear communication, honest constraints.",
      "We document as we go, not at the end."
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
              <Button variant="secondary" onClick={() => navigate('cases')} className="bg-white/10 text-white border-white/20 hover:bg-white/20 dark:bg-white/10 dark:text-white dark:border-white/20 dark:hover:bg-white/20 backdrop-blur-sm">
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
            We don't do everything. We focus on high-impact backend, cloud, and AI engineering services.
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

      <Section className="bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
         {/* Abstract background with charts/graphs */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center pointer-events-none"></div>
        
        <div className="lg:flex lg:items-center lg:justify-between relative z-10">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-3xl font-extrabold mb-4">
               <GradientText>Outcomes, not buzzwords.</GradientText>
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-6">
              No endless discovery docs. We ship small, scoped phases with clear deliverables obsessed with performance and reliability.
            </p>
            <Button variant="outline" onClick={() => navigate('about')}>How we work</Button>
          </div>
          <div className="lg:w-5/12 space-y-6">
            {CONTENT.home.outcomes.map((outcome, idx) => (
              <div key={idx} className="flex p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg shadow-sm border border-slate-100 dark:border-slate-700/50">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-slate-100 dark:bg-slate-700">
                    {/* Dynamic color application */}
                    <CheckCircle className={`w-6 h-6 ${outcome.color}`} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white">{outcome.title}</h3>
                  <p className="mt-1 text-slate-500 dark:text-slate-400">{outcome.desc}</p>
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
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to ship?</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8 text-lg">
            Whether you need a quick architectural audit or a full implementation squad, let's discuss your next milestone.
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
              See services
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
          <GradientText>Services & Expertise</GradientText>
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
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-4xl">
                {service.desc}
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Common Use Cases</h3>
                  <ul className="space-y-3">
                    {service.useCases.map((uc, i) => (
                      <li key={i} className="flex items-start text-slate-700 dark:text-slate-200">
                        <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                        {uc}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Typical Deliverables</h3>
                  <ul className="space-y-3">
                    {service.deliverables.map((del, i) => (
                      <li key={i} className="flex items-start text-slate-700 dark:text-slate-200">
                        <ArrowUpRight className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                        {del}
                      </li>
                    ))}
                  </ul>
                </div>
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
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Need something specific?</h3>
      <Button onClick={() => navigate('contact')}>Let's discuss your project</Button>
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
          Real problems, pragmatic solutions, and measurable outcomes.
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
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">The Problem</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Our Approach</h3>
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
                    <Terminal className="w-5 h-5 mr-2 text-green-600 dark:text-green-400" /> Impact
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
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Want a similar outcome?</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
          We can't promise the exact same results for everyone, but we can promise the same rigorous, outcome-driven approach.
        </p>
        <Button onClick={() => navigate('contact')}>Start a conversation</Button>
      </div>
    </Section>
  </div>
);

const AboutPage = () => (
  <div className="pt-24 pb-16">
    <Section>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8">
          <GradientText>Why Prema Vision exists</GradientText>
        </h1>
        <div className="prose prose-lg dark:prose-invert text-slate-500 dark:text-slate-400 mb-12">
          {CONTENT.about.philosophy.map((p, i) => (
            <p key={i} className="mb-4">{p}</p>
          ))}
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700 pt-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">About the Founder</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{CONTENT.about.founder.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-4">{CONTENT.about.founder.role}</p>
              <div className="space-y-4 text-slate-600 dark:text-slate-300">
                 {CONTENT.about.founder.bio.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            {/* Founder Avatar - Using the new URL */}
            <div className="flex-shrink-0 w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-lg">
              <img src={CONTENT.company.founder.avatarUrl} alt={CONTENT.company.founder.name} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">How we like to work</h2>
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
 * Плюс добавляем все реальные поля из React-формы:
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = {
      name: (form.querySelector('#name') as HTMLInputElement).value,
      email: (form.querySelector('#email') as HTMLInputElement).value,
      company: (form.querySelector('#company') as HTMLInputElement).value || '',
      budgetRange: (form.querySelector('#budget') as HTMLSelectElement).value,
      projectBrief: (form.querySelector('#brief') as HTMLTextAreaElement).value,
      howFound: (form.querySelector('#source') as HTMLInputElement).value || ''
    };

    const result = await submitQuoteForm(formData);

    if (result.success) {
      setStatus('success');
      form.reset();
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
            Thanks for reaching out. We usually respond within 1–2 business days.
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
              <GradientText>Let's talk engineering.</GradientText>
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 mb-8">
              Have an idea for AI automation, scaling pain, or a modernization project? Fill out the form, and we'll see if we're a good match.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center text-slate-600 dark:text-slate-300">
                <Mail className="w-6 h-6 mr-4 text-slate-400" />
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
                We respect your time. Expect a clear Yes/No or booking link within 48 hours. Please provide as much context as possible in the project brief.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
              <input required type="text" id="name" className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border" />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Work Email</label>
              <input required type="email" id="email" className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border" />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Company</label>
              <input type="text" id="company" className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border" />
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Budget Range</label>
              <select id="budget" required className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border">
                <option value="">Select a range...</option>
                <option value="&lt; $5k (Audit/Small Fix)">&lt; $5k (Audit/Small Fix)</option>
                <option value="$5k – $15k">$5k – $15k</option>
                <option value="$15k – $50k">$15k – $50k</option>
                <option value="$50k+">$50k+</option>
              </select>
            </div>

            <div>
              <label htmlFor="brief" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Project Brief</label>
              <textarea required id="brief" name="brief" rows={4} className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border" placeholder="What are you trying to build or fix?"></textarea>
            </div>

            <div>
               <label htmlFor="source" className="block text-sm font-medium text-slate-700 dark:text-slate-300">How did you find us?</label>
               <input type="text" id="source" name="source" className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border" />
            </div>

            {status === 'error' && errorMessage && (
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                <p className="text-sm text-red-800 dark:text-red-200">{errorMessage}</p>
              </div>
            )}

            <Button className="w-full" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
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
                Book a call
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
               <Button className="w-full" onClick={() => { navigate('contact'); setMobileMenuOpen(false); }}>Book a call</Button>
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
            Boutique AI automation and cloud engineering studio. We build systems that ship, scale, and pay off.
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
               <Mail className="w-4 h-4 mr-2" /> 
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
        <p className="text-slate-400 text-sm mt-2 md:mt-0">
          Designed & Built with React & Tailwind.
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference on load
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  }, []);

  const navigate = (pageId: string) => {
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

