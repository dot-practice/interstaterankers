"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Headphones, Phone, LayoutGrid, Search, Share2, Globe, Code, Smartphone, Palette, DollarSign } from "lucide-react";

type ServiceSection = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>
  bullets: string[];
};

const SERVICES: ServiceSection[] = [
  {
    id: "seo",
    title: "Search Engine Optimization",
    description: "Technical, on-page, and local SEO to rank and win the demand you deserve.",
    icon: Search,
    bullets: [
      "Technical audits",
      "Content & on-page",
      "Local SEO",
      "Reporting & insights"
    ]
  },
  {
    id: "gmb",
    title: "Google My Business Optimization",
    description: "Optimize and manage your Google Business Profile to dominate local search and maps.",
    icon: LayoutGrid,
    bullets: [
      "Profile setup & optimization",
      "Category & services tuning",
      "Posts & updates",
      "Review strategy & replies"
    ]
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Fast, modern websites engineered for SEO and conversion from day one.",
    icon: Code,
    bullets: [
      "Next.js/React builds",
      "Performance optimization",
      "Accessibility & SEO",
      "Analytics instrumentation"
    ]
  },
  {
    id: "answering",
    title: "Answering Services",
    description: "24/7 professional coverage so you never miss a lead. AI-assisted routing and real-time reporting.",
    icon: Headphones,
    bullets: [
      "Live call answering and intake",
      "Lead qualification and tagging",
      "Appointment scheduling",
      "Call analytics dashboard"
    ]
  },
  {
    id: "calling",
    title: "Outbound Calling",
    description: "Proactive outreach to nurture and convert. Scripts, compliance, and performance tracking built-in.",
    icon: Phone,
    bullets: [
      "Warm lead follow-ups",
      "Reactivation campaigns",
      "Appointment setting",
      "QA and compliance"
    ]
  },
  {
    id: "content-marketing",
    title: "Content Marketing",
    description: "Plan, produce, and distribute content that attracts, educates, and converts.",
    icon: Share2,
    bullets: [
      "Editorial strategy",
      "Blogs & guides",
      "Case studies",
      "Content distribution"
    ]
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    description: "Grow brand reach and engagement across social platforms with data-driven campaigns.",
    icon: Globe,
    bullets: [
      "Channel strategy",
      "Content calendars",
      "Community management",
      "Paid social boosts"
    ]
  },
  {
    id: "ppc-management",
    title: "PPC Management",
    description: "High-intent paid traffic and conversion optimization for reliable ROI.",
    icon: DollarSign,
    bullets: [
      "Account audits",
      "Keyword & audience strategy",
      "Ad creation & testing",
      "Landing & conversion tracking"
    ]
  },
  {
    id: "graphic-designing",
    title: "Graphic Designing",
    description: "Brand-first visuals that elevate trust and drive clarity.",
    icon: Palette,
    bullets: [
      "Brand identity",
      "Marketing collateral",
      "Social graphics",
      "Presentation design"
    ]
  },
  {
    id: "app-development",
    title: "App Development",
    description: "Cross-platform apps that scale with your business and users.",
    icon: Smartphone,
    bullets: [
      "iOS & Android",
      "API integrations",
      "Scalable architecture",
      "App analytics"
    ]
  }
];

const ServicesScrollShowcase = () => {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [activeId, setActiveId] = useState<string>(SERVICES[0].id);
  const [progressById, setProgressById] = useState<Record<string, number>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const viewportH = window.innerHeight;
        const updates: Record<string, number> = {};
        let currentActive = activeId;
        for (const entry of entries) {
          const id = entry.target.getAttribute("id");
          if (!id) continue;
          const rect = entry.target.getBoundingClientRect();
          const visiblePx = Math.min(rect.bottom, viewportH) - Math.max(rect.top, 0);
          const clamped = Math.max(0, Math.min(1, visiblePx / Math.min(viewportH, rect.height || viewportH)));
          updates[id] = clamped;
        }
        if (Object.keys(updates).length) {
          setProgressById((prev) => ({ ...prev, ...updates }));
          // Active is the most visible section
          const best = Object.entries({ ...progressById, ...updates }).sort((a, b) => b[1] - a[1])[0];
          if (best && best[0] !== currentActive) {
            currentActive = best[0];
            setActiveId(best[0]);
          }
        }
      },
      { root: null, threshold: Array.from({ length: 11 }, (_, i) => i / 10) }
    );

    SERVICES.forEach((s) => {
      const node = sectionRefs.current[s.id];
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const node = sectionRefs.current[id];
    if (!node) return;
    const yOffset = 96; // offset for sticky navbar (~24)
    const y = node.getBoundingClientRect().top + window.scrollY - yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Sticky summary and nav (hidden on small, shown on lg) */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="p-6 rounded-2xl bg-card border border-border glow-card">
                <h3 className="text-2xl font-heading font-bold mb-2">Services We Provide</h3>
                <p className="text-sm text-muted-foreground">Explore our core capabilities. The list highlights the section currently in view.</p>
              </div>

              <nav className="p-2 rounded-2xl bg-card border border-border glow-card divide-y divide-border">
                {SERVICES.map((s) => {
                  const isActive = activeId === s.id;
                  const progress = Math.round((progressById[s.id] || 0) * 100);
                  return (
                    <button
                      key={s.id}
                      onClick={() => handleClick(s.id)}
                      aria-current={isActive ? "true" : undefined}
                      className={
                        `w-full text-left py-4 px-4 flex items-center justify-between gap-4 transition-colors ` +
                        (isActive ? " text-primary" : " text-foreground hover:text-primary")
                      }
                    >
                      <span className="flex items-center gap-3">
                        <s.icon className="w-4 h-4 opacity-80" />
                        <span className="font-medium">{s.title}</span>
                      </span>
                      <span className="text-xs text-muted-foreground">{progress}%</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Mobile top nav */}
          <div className="lg:hidden -mx-4">
            <div className="px-4 pb-4 sticky top-16 z-10 bg-background/80 backdrop-blur-sm border-b border-border">
              <div className="flex gap-2 overflow-x-auto no-scrollbar">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleClick(s.id)}
                    className={`shrink-0 px-4 py-2 rounded-full border text-sm transition-colors ` +
                      (activeId === s.id ? " border-primary text-primary bg-primary/10" : " border-border text-foreground")}
                  >
                    {s.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Scrollable sections */}
          <div className="lg:col-span-8 space-y-16">
            {SERVICES.map((s) => (
              <section
                key={s.id}
                id={s.id}
                ref={(el) => { sectionRefs.current[s.id] = el; }}
                className="scroll-mt-24 p-6 rounded-2xl bg-card border border-border glow-card group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center">
                    <s.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-semibold">{s.title}</h4>
                    <p className="text-muted-foreground mt-1">{s.description}</p>
                  </div>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {s.bullets.map((b, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                      <span className="text-sm">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesScrollShowcase;


