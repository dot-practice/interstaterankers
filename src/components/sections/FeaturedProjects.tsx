import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Phone, TrendingUp } from "lucide-react";

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Local Law Firm",
      industry: "Legal Services",
      services: ["Answering", "SEO"],
      results: "300% increase in qualified leads",
      description: "24/7 call coverage and local SEO optimization resulted in substantial lead growth.",
      stats: { calls: "+100-200", leads: "50-75%", ranking: "#1 Local" }
    },
    {
      title: "Home Services Company", 
      industry: "Construction",
      services: ["Calling", "Google My Business"],
      results: "250% conversion rate improvement",
      description: "Outbound follow-ups and Google My Business optimization transformed their sales process.",
      stats: { conversion: "70-80%", revenue: "+$2M", appointments: "+400%" }
    },
    {
      title: "Medical Practice",
      industry: "Healthcare", 
      services: ["Answering", "SEO"],
      results: "Zero missed appointments in 12 months",
      description: "Professional call handling and search optimization filled their appointment book.",
      stats: { satisfaction: "99.8%", appointments: "100%", ranking: "Top 3" }
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 gradient-text">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real businesses achieving extraordinary growth with our proven strategies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Card */}
              <div className="relative h-full p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-500 card-tilt glow-card">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-heading font-bold">{project.title}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {project.industry}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.services.map((service) => (
                      <Badge 
                        key={service} 
                        variant="outline" 
                        className="text-xs border-accent-cyan/30 text-accent-cyan"
                      >
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="mb-4">
                  <div className="inline-flex items-center space-x-2 bg-accent-amber/10 border border-accent-amber/20 rounded-lg px-3 py-2 mb-3">
                    <TrendingUp className="w-4 h-4 text-accent-amber" />
                    <span className="text-sm font-semibold text-accent-amber">{project.results}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-sm font-bold gradient-text">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Hover Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="hero-gradient hover-lift text-white font-semibold">
            <Phone className="mr-2 h-5 w-5" />
            See How We Can Help Your Business
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Free consultation • No commitment required
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;