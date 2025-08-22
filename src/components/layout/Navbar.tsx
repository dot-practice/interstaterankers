"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Headphones, Globe, Search, TrendingUp, ChevronDown, Code, Palette, Smartphone, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const pathname = usePathname();
  const menuContainerRef = useRef<HTMLDivElement | null>(null);
  const enterTimeoutRef = useRef<number | null>(null);
  const leaveTimeoutRef = useRef<number | null>(null);

  const openWithDelay = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    enterTimeoutRef.current = window.setTimeout(() => setShowServicesMenu(true), 80);
  };

  const closeWithDelay = () => {
    if (enterTimeoutRef.current) {
      clearTimeout(enterTimeoutRef.current);
      enterTimeoutRef.current = null;
    }
    leaveTimeoutRef.current = window.setTimeout(() => setShowServicesMenu(false), 120);
  };

  useEffect(() => {
    return () => {
      if (enterTimeoutRef.current) clearTimeout(enterTimeoutRef.current);
      if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!menuContainerRef.current) return;
      if (!menuContainerRef.current.contains(e.target as Node)) {
        setShowServicesMenu(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const navigation = [
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Projects", href: "/projects" },
    // { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Insights", href: "/insights" },
  ];

  const services = [
    { name: "Search Engine Optimization", href: "/services/seo", icon: TrendingUp, description: "Search optimization & ranking" },
    { name: "Google My Business Optimization", href: "/services/gmb", icon: Globe, description: "Own your local map pack" },
    { name: "Web Development", href: "/services/web-development", icon: Code, description: "Fast, modern, conversion-focused sites" },
    { name: "Answering Services", href: "/services/answering", icon: Headphones, description: "24/7 professional call answering" },
    { name: "Calling Services", href: "/services/calling", icon: Phone, description: "Outbound calling & follow-ups" },
    { name: "Content Marketing", href: "/services/content-marketing", icon: Share2, description: "Content that attracts and converts" },
    { name: "Social Media Marketing", href: "/services/social-media-marketing", icon: Globe, description: "Grow reach across social platforms" },
    { name: "PPC Management", href: "/services/ppc-management", icon: Globe, description: "Paid traffic that delivers ROI" },
    { name: "Graphic Designing", href: "/services/graphic-designing", icon: Palette, description: "Brand-first creative that stands out" },
    { name: "App Development", href: "/services/app-development", icon: Smartphone, description: "iOS & Android apps that scale" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg hero-gradient">
              <Search className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-heading font-bold gradient-text">
              InterStateRankers
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    ref={menuContainerRef}
                    onMouseEnter={openWithDelay}
                    onMouseLeave={closeWithDelay}
                  >
                    <button
                      className={cn(
                        "flex items-center space-x-1 text-sm font-medium transition-transform duration-200 hover:scale-105 hover-accent-cyan-dark",
                        pathname && pathname.startsWith("/services") 
                          ? "active-accent-cyan" 
                          : "text-foreground/80"
                      )}
                      aria-haspopup="menu"
                      aria-expanded={showServicesMenu}
                      onClick={() => setShowServicesMenu((v) => !v)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    
                    {showServicesMenu && (
                      <div
                        role="menu"
                        className="absolute top-full left-0 mt-2 w-80 rounded-lg border bg-popover p-2 shadow-lg animate-fade-in"
                      >
                        <div className="grid grid-cols-1 gap-2">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              role="menuitem"
                              className="flex items-start space-x-3 rounded-md p-3 transition-colors hover:bg-primary/5 hover:border hover:border-primary/20"
                            >
                              <service.icon className="h-5 w-5 text-accent-cyan mt-0.5" />
                              <div>
                                <div className="font-medium text-sm">{service.name}</div>
                                <div className="text-xs text-muted-foreground">{service.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-2 pt-2 border-t border-border px-2">
                          <Link href="/services" className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground">
                            View all services
                            <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-transform duration-200 hover:scale-105 hover-accent-cyan-dark",
                      pathname === item.href 
                        ? "active-accent-cyan" 
                        : "text-foreground/80"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="outline" size="sm" className="animate-underline">
              Talk to an Expert
            </Button>
            <Button size="sm" className="hero-gradient hover-lift text-white">
              Get a Proposal
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block py-2 text-lg font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && (
                      <div className="ml-4 mt-2 space-y-2">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                            onClick={() => setIsOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 space-y-2">
                  <Button variant="outline" className="w-full">
                    Talk to an Expert
                  </Button>
                  <Button className="w-full hero-gradient text-white">
                    Get a Proposal
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;