"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Star } from "lucide-react";
import { useMemo, useState } from "react";

const PricingPreview = () => {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const answeringPackages = [
    {
      name: "Starter",
      price: 299,
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 100 calls/month",
        "Basic call screening",
        "Message taking",
        "Email notifications"
      ],
      popular: false
    },
    {
      name: "Growth", 
      price: 599,
      period: "/month",
      description: "Ideal for growing businesses", 
      features: [
        "Up to 500 calls/month",
        "Lead qualification",
        "Appointment booking",
        "CRM integration",
        "Call analytics dashboard"
      ],
      popular: true
    },
    {
      name: "Scale",
      price: 999,
      period: "/month", 
      description: "For high-volume businesses",
      features: [
        "Unlimited calls",
        "Dedicated account manager",
        "Custom scripts",
        "Advanced reporting",
        "Priority support"
      ],
      popular: false
    }
  ];

  const seoPackages = [
    {
      name: "Local SEO",
      price: 1299,
      period: "/month",
      description: "Dominate your local market",
      features: [
        "Google Business Profile optimization",
        "Local keyword targeting",
        "Citation management", 
        "Review management"
      ],
      popular: false
    },
    {
      name: "Growth SEO + GMB",
      price: 2499, 
      period: "/month",
      description: "Complete digital presence",
      features: [
        "Everything in Local SEO",
        "Google Business Profile optimization",
        "Technical SEO audit",
        "Content strategy",
        "Conversion optimization"
      ],
      popular: true
    }
  ];

  const discountLabel = useMemo(() => billing === "yearly" ? "Save 20%" : undefined, [billing]);

  const computePrice = (baseMonthly: number) => {
    if (billing === "monthly") return baseMonthly;
    // Yearly: show effective monthly with 20% off
    return Math.round(baseMonthly * 0.8);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 gradient-text">
            Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect package to accelerate your business growth. No hidden fees, no surprises.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex items-center rounded-full border border-border bg-card p-1 glow-card" role="tablist" aria-label="Billing cycle">
            <button
              role="tab"
              aria-selected={billing === "monthly"}
              className={`px-4 py-2 text-sm rounded-full transition-colors ${billing === "monthly" ? "bg-primary text-white" : "text-foreground hover:text-primary"}`}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </button>
            <button
              role="tab"
              aria-selected={billing === "yearly"}
              className={`px-4 py-2 text-sm rounded-full transition-colors ${billing === "yearly" ? "bg-primary text-white" : "text-foreground hover:text-primary"}`}
              onClick={() => setBilling("yearly")}
            >
              Yearly
            </button>
          </div>
          {discountLabel && (
            <span className="ml-3 text-xs font-medium text-accent-amber">{discountLabel}</span>
          )}
        </div>

        {/* Answering Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-bold text-center mb-8">
            Answering & Calling Services
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {answeringPackages.map((pkg, index) => (
              <div 
                key={pkg.name}
                className={`relative group animate-slide-up ${pkg.popular ? 'transform scale-105' : ''}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-accent-amber text-background font-semibold px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className={`relative h-full p-6 rounded-xl border transition-all duration-300 md:card-tilt ${
                  pkg.popular 
                    ? 'bg-card border-primary shadow-lg glow-card' 
                    : 'bg-card/50 border-border hover:border-primary/30'
                }`}>
                  {/* Header */}
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-heading font-bold mb-2">{pkg.name}</h4>
                    <div className="flex items-baseline justify-center space-x-1">
                      <span className="text-3xl font-bold gradient-text">${computePrice(pkg.price)}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    {billing === "yearly" && (
                      <p className="text-xs text-accent-amber mt-1">Billed yearly • Save 20%</p>
                    )}
                    <p className="text-sm text-muted-foreground mt-2">{pkg.description}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-accent-cyan mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button 
                    className={`w-full ${pkg.popular ? 'hero-gradient hover-lift text-white' : ''}`}
                    variant={pkg.popular ? 'default' : 'outline'}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  {/* Hover spotlight */}
                  <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'radial-gradient(600px circle at 50% 30%, hsl(var(--primary)/0.08), transparent 40%)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SEO & GMB */}
        <div>
          <h3 className="text-2xl font-heading font-bold text-center mb-8">
            SEO & GMB Packages
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {seoPackages.map((pkg, index) => (
              <div 
                key={pkg.name}
                className={`relative group animate-slide-up ${pkg.popular ? 'transform scale-105' : ''}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-accent-amber text-background font-semibold px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Best Value
                    </Badge>
                  </div>
                )}

                <div className={`relative h-full p-6 rounded-xl border transition-all duration-300 md:card-tilt ${
                  pkg.popular 
                    ? 'bg-card border-primary shadow-lg glow-card' 
                    : 'bg-card/50 border-border hover:border-primary/30'
                }`}>
                  {/* Header */}
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-heading font-bold mb-2">{pkg.name}</h4>
                    <div className="flex items-baseline justify-center space-x-1">
                      <span className="text-3xl font-bold gradient-text">${computePrice(pkg.price)}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    {billing === "yearly" && (
                      <p className="text-xs text-accent-amber mt-1">Billed yearly • Save 20%</p>
                    )}
                    <p className="text-sm text-muted-foreground mt-2">{pkg.description}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-accent-cyan mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button 
                    className={`w-full ${pkg.popular ? 'hero-gradient hover-lift text-white' : ''}`}
                    variant={pkg.popular ? 'default' : 'outline'}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  {/* Hover spotlight */}
                  <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'radial-gradient(600px circle at 50% 30%, hsl(var(--primary)/0.08), transparent 40%)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We've got you covered.
          </p>
          <Button variant="outline" size="lg" className="animate-underline">
            Talk to Our Experts About Custom Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;