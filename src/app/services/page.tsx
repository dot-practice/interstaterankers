import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import dynamic from "next/dynamic";

const ServicesScrollShowcase = dynamic(() => import("@/components/sections/ServicesScrollShowcase"), { ssr: false });

export default function ServicesPage() {
	return (
		<div className="min-h-screen">
			<Navbar />
			<main className="container mx-auto px-4 py-16">
				<h1 className="text-4xl font-heading font-bold text-center mb-8 gradient-text">Our Services</h1>
				<p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
					Full-funnel growth services: answering, calling, content marketing, social media, web & app development, graphic designing, SEO, PPC, and Google My Business optimization.
				</p>
				<div className="mt-16">
					<ServicesScrollShowcase />
				</div>
			</main>
			<Footer />
		</div>
	);
}



