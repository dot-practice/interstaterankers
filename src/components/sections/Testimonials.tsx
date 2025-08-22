"use client";
import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Testimonials = ({ compact = false, className = "" }: { compact?: boolean; className?: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "We never miss leads anymore. The 24/7 answering service transformed our business overnight. Revenue increased 300% in just 6 months.",
      author: "Sarah Mitchell",
      title: "Owner",
      company: "Mitchell Law Firm", 
      industry: "Legal Services",
      rating: 5,
      results: "300% revenue increase"
    },
    {
      quote: "InterStateRankers didn't just build us a website - they built us a lead generation machine. Our appointment book is always full now.",
      author: "Mike Rodriguez",
      title: "Founder",
      company: "Rodriguez HVAC",
      industry: "Home Services", 
      rating: 5,
      results: "Zero missed appointments"
    },
    {
      quote: "The SEO results speak for themselves. We went from page 10 to #1 in local search within 90 days. The phone hasn't stopped ringing.",
      author: "Dr. Jennifer Park",
      title: "Practice Owner", 
      company: "Park Family Dental",
      industry: "Healthcare",
      rating: 5,
      results: "#1 local ranking"
    },
    {
      quote: "Professional, reliable, and results-driven. Their calling services helped us follow up on every lead - our conversion rate doubled.",
      author: "David Chen",
      title: "Sales Director",
      company: "Chen Construction", 
      industry: "Construction",
      rating: 5,
      results: "2x conversion rate"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className={cn("bg-card/30", compact ? "pt-16 pb-10" : "py-20", className)}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 gradient-text">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real businesses that transformed their growth with InterStateRankers.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-background/80 backdrop-blur-sm rounded-2xl border border-border p-8 md:p-12 glow-card">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6">
              <Quote className="w-8 h-8 text-accent-cyan/30" />
            </div>

            {/* Content */}
            <div className="relative animate-fade-in" key={currentIndex}>
              {/* Rating */}
              <div className="flex justify-center mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent-amber text-accent-amber" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl font-medium text-center leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Results Badge */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center space-x-2 bg-accent-amber/10 border border-accent-amber/20 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-accent-amber rounded-full" />
                  <span className="text-sm font-semibold text-accent-amber">
                    {testimonials[currentIndex].results}
                  </span>
                </div>
              </div>

              {/* Author */}
              <div className="text-center">
                <div className="font-heading font-semibold text-lg mb-1">
                  {testimonials[currentIndex].author}
                </div>
                <div className="text-muted-foreground text-sm mb-2">
                  {testimonials[currentIndex].title} • {testimonials[currentIndex].company}
                </div>
                <div className="text-xs text-muted-foreground">
                  {testimonials[currentIndex].industry}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={goToPrev}
                className="hover:bg-primary/10"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={goToNext}
                className="hover:bg-primary/10"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Background Elements */}
          <div className="absolute -top-8 -right-8 w-24 h-24 bg-accent-cyan/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent-amber/10 rounded-full blur-xl animate-pulse delay-1000" />
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Join hundreds of satisfied clients who've transformed their business with us.
          </p>
          <div className="inline-flex items-center space-x-2 text-sm bg-background/50 backdrop-blur-sm border border-border rounded-full px-6 py-3">
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
              ))}
            </div>
            <span>4.9/5 average rating • 500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;