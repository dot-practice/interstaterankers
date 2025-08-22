import Link from "next/link";
import { Search, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg hero-gradient">
                <Search className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-heading font-bold gradient-text">
                InterStateRankers
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Powering business growth with AI-driven answering services and SEO solutions.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <a href="tel:2253261269" className="hover:text-foreground transition-colors">225-326-1269</a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <a href="mailto:info@interstaterankers.com" className="hover:text-foreground transition-colors">info@interstaterankers.com</a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services/seo" className="hover:text-foreground transition-colors">Search Engine Optimization</Link></li>
              <li><Link href="/services/gmb" className="hover:text-foreground transition-colors">Google My Business Optimization</Link></li>
              <li><Link href="/services/web-development" className="hover:text-foreground transition-colors">Web Development</Link></li>
              <li><Link href="/services/answering" className="hover:text-foreground transition-colors">24/7 Answering</Link></li>
              <li><Link href="/services/calling" className="hover:text-foreground transition-colors">Outbound Calling</Link></li>
              <li><Link href="/services/content-marketing" className="hover:text-foreground transition-colors">Content Marketing</Link></li>
              <li><Link href="/services/social-media-marketing" className="hover:text-foreground transition-colors">Social Media Marketing</Link></li>
              <li><Link href="/services/ppc-management" className="hover:text-foreground transition-colors">PPC Management</Link></li>
              <li><Link href="/services/graphic-designing" className="hover:text-foreground transition-colors">Graphic Designing</Link></li>
              <li><Link href="/services/app-development" className="hover:text-foreground transition-colors">App Development</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-foreground transition-colors">Projects</Link></li>
              {/* <li><Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li> */}
              <li><Link href="/insights" className="hover:text-foreground transition-colors">Insights</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold">Get Started</h3>
            <p className="text-sm text-muted-foreground">
              Ready to grow your business? Contact us today.
            </p>
            <div className="space-y-2">
              <Link 
                href="/contact" 
                className="block w-full text-center py-2 px-4 bg-primary text-primary-foreground rounded-lg hover-lift text-sm font-medium"
              >
                Get a Proposal
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2024 InterStateRankers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;