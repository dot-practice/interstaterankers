"use client";
import { useEffect, useState } from "react";

const StatsResults = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    {
      value: "95 - 98",
      suffix: "%",
      label: "Calls Answered",
      description: "Never miss another lead"
    },
    {
      value: "30 - 50",
      suffix: "%", 
      prefix: "+",
      label: "Lead Conversion",
      description: "From Google My Business"
    },
    {
      value: 90,
      suffix: " days",
      prefix: "<",
      label: "SEO Wins",
      description: "Time to first page rankings"
    },
    {
      value: 100,
      suffix: "+",
      label: "Growing Businesses",
      description: "Trust InterStateRankers"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const AnimatedCounter = ({ value, prefix = "", suffix = "", duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime = 0;
      const startValue = 0;
      const endValue = value;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / duration;

        if (progress < 1) {
          const current = startValue + (endValue - startValue) * easeOutCubic(progress);
          setCount(Math.floor(current));
          requestAnimationFrame(animate);
        } else {
          setCount(endValue);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, value, duration]);

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    return (
      <span className="stats-counter">
        {prefix}{count.toLocaleString()}{suffix}
      </span>
    );
  };

  return (
    <section id="stats-section" className="py-20 bg-card/30 border-y border-border">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 gradient-text">
            Results That Speak
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Numbers don't lie. See the measurable impact we've delivered for growing businesses.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="group text-center animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Number */}
              <div className="mb-4">
                <AnimatedCounter 
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={2000 + index * 200}
                />
              </div>

              {/* Label */}
              <h3 className="text-lg font-heading font-semibold mb-2">{stat.label}</h3>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground">{stat.description}</p>

              {/* Accent Line */}
              <div className="mt-4 mx-auto w-12 h-1 bg-gradient-to-r from-accent-cyan to-accent-amber rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-3 bg-background/80 backdrop-blur-sm border border-border rounded-full px-6 py-4">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-accent-amber rounded-full animate-pulse delay-300" />
              <div className="w-2 h-2 bg-primary-glow rounded-full animate-pulse delay-700" />
            </div>
            <span className="text-sm font-medium">
              Your business could be next • Join the growth revolution
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsResults;