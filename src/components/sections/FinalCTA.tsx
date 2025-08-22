import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle, Star } from "lucide-react";

const FinalCTA = () => {
  const benefits = [
    "Free consultation & business audit",
    "Custom growth strategy in 24 hours", 
    "No long-term contracts required",
    "Results guaranteed or money back"
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 text-sm font-medium text-white animate-fade-in">
            <Star className="w-4 h-4 text-accent-amber" />
            <span>Trusted by 100+ growing businesses</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 animate-slide-up">
            Ready to Grow?
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '200ms' }}>
            Stop losing leads to missed calls and poor search rankings.
            <br />
            <span className="accent-gradient-text font-semibold">Start capturing every opportunity today.</span>
          </p>

          {/* Benefits List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '400ms' }}>
            {benefits.map((benefit, index) => (
              <div key={benefit} className="flex items-center space-x-3 text-white/90">
                <CheckCircle className="w-5 h-5 text-accent-cyan flex-shrink-0" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8 animate-slide-up" style={{ animationDelay: '600ms' }}>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 hover-lift glow-button text-lg px-8 py-6 h-auto font-bold"
            >
              Get Your Free Proposal
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-6 h-auto font-semibold"
            >
              <Phone className="mr-2 h-5 w-5" />
              Talk to an Expert Now
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-white/70 text-sm animate-slide-up" style={{ animationDelay: '800ms' }}>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>24/7 support</span>
            </div>
          </div>

          {/* Urgency Message */}
          <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl animate-slide-up" style={{ animationDelay: '1000ms' }}>
            <p className="text-white/80 text-sm mb-2">
              <strong className="text-white">Limited Time:</strong> First 50 new clients get 50% off setup fees
            </p>
            <p className="text-accent-amber font-semibold text-sm">
              Join today and start seeing results within 30 days
            </p>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent-cyan/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent-amber/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse delay-500" />
      </div>
    </section>
  );
};

export default FinalCTA;