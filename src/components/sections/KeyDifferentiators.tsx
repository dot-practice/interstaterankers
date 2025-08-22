"use client";
import { Headphones, TrendingUp, Clock, Zap } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

type Pillar = {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  features: string[]
};

const InteractivePillarCard: React.FC<{
  pillar: Pillar
  index: number
}> = ({ pillar, index }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);
  const [spotlightStyle, setSpotlightStyle] = useState<React.CSSProperties>({});
  const [isTouch, setIsTouch] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const coarse = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
      setIsTouch(coarse);
    }
  }, []);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (isTouch || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setSpotlightStyle({
        background: `radial-gradient(500px circle at ${px * 100}% ${py * 100}%, hsl(var(--primary)/0.12), transparent 40%)`
      });
      if (iconRef.current) {
        const translateX = (px - 0.5) * 10; // subtle parallax
        const translateY = (py - 0.5) * 10;
        iconRef.current.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
      }
    });
  };

  const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = () => {
    if (isTouch) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setSpotlightStyle({});
    if (iconRef.current) {
      iconRef.current.style.transform = "translate3d(0,0,0)";
    }
  };

  // Simulate hover feedback on touch: brief active state
  const [isActive, setIsActive] = useState(false);
  const handleTouchStart: React.TouchEventHandler<HTMLDivElement> = () => {
    setIsActive(true);
  };
  const handleTouchEnd: React.TouchEventHandler<HTMLDivElement> = () => {
    // Keep feedback very brief
    setTimeout(() => setIsActive(false), 150);
  };

  return (
    <div 
      className="relative group animate-slide-up"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Card */}
      <div
        ref={cardRef}
        role="button"
        tabIndex={0}
        aria-label={pillar.title}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className={
          `relative p-8 rounded-2xl bg-card border transition-all duration-500 glow-card ` +
          `hover:border-primary/30 md:card-tilt hover-lift ` +
          (isActive ? " border-primary/40 ring-1 ring-primary/20" : " border-border")
        }
        style={{ touchAction: "manipulation" }}
      >
        {/* Icon */}
        <div ref={iconRef} className="flex items-center justify-center w-16 h-16 rounded-xl hero-gradient mb-6 group-hover:animate-glow-pulse will-change-transform">
          <pillar.icon className="w-8 h-8 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-2xl font-heading font-bold mb-4">{pillar.title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">{pillar.description}</p>

        {/* Features */}
        <ul className="space-y-3">
          {pillar.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-accent-cyan rounded-full" />
              <span className="text-sm font-medium">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Hover Accent */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-3 h-3 bg-accent-amber rounded-full animate-pulse" />
        </div>

        {/* Spotlight overlay (desktop only) */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" style={spotlightStyle} />
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent-cyan/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </div>
  );
};

const KeyDifferentiators = () => {
  const pillars: Pillar[] = [
    {
      icon: Headphones,
      title: "B2B B2C Lead Generation",
      description: "Comprehensive lead generation solutions for both B2B and B2C markets. AI-powered qualification and multi-channel outreach.",
      features: ["Live call answering", "Lead qualification", "Appointment booking", "Call analytics dashboard"]
    },
    {
      icon: TrendingUp,
      title: "Google Business Profile Optimization",
      description: "Local visibility and search optimization that drives measurable business growth.",
      features: ["Profile optimization", "Local SEO", "Review strategy", "Performance reporting"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 gradient-text">
            Two Pillars of Growth
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete business growth solutions combining human expertise with AI-driven technology.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <InteractivePillarCard key={pillar.title} pillar={pillar} index={index} />
          ))}
        </div>

        {/* Connection Line */}
        <div className="relative mt-16 flex items-center justify-center">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -top-8">
            <div className="flex items-center space-x-4">
              <Clock className="w-5 h-5 text-accent-cyan" />
              <div className="w-32 h-px bg-gradient-to-r from-accent-cyan to-accent-amber" />
              <Zap className="w-5 h-5 text-accent-amber" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyDifferentiators;