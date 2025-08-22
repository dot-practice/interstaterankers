import { Shield, Zap, Target, TrendingUp } from "lucide-react";

const ValueProps = () => {
  const props = [
    {
      icon: Shield,
      title: "Always-On Coverage",
      description: "24/7 answering services ensure you capture every opportunity, even when you're sleeping.",
      color: "text-accent-cyan"
    },
    {
      icon: Zap,
      title: "Growth-Oriented Tech",
      description: "AI automation and real-time dashboards give you complete visibility and control.",
      color: "text-accent-amber"
    },
    {
      icon: Target,
      title: "Bold Design & SEO Focus",
      description: "Eye-catching designs paired with search optimization that actually converts.",
      color: "text-primary-glow"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Measurable growth in leads, conversions, and search rankings within 90 days.",
      color: "text-accent-cyan"
    }
  ];

  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 gradient-text">
            Why InterStateRankers?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just provide services—we deliver measurable business transformation.
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {props.map((prop, index) => (
            <div 
              key={prop.title}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card */}
              <div className="relative h-full p-6 rounded-xl bg-background/80 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300 hover-lift">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-background border border-border ${prop.color}`}>
                    <prop.icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-semibold mb-3">{prop.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{prop.description}</p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground bg-background/50 backdrop-blur-sm border border-border rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-accent-amber rounded-full animate-pulse" />
            <span>Join 100+ businesses already growing with InterStateRankers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;