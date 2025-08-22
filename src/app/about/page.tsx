import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import dynamic from "next/dynamic";
const StatsResults = dynamic(() => import("@/components/sections/StatsResults"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), { ssr: false });
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Script from "next/script";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const metadata: Metadata = {
	title: "About Us | InterStateRankers",
	description:
		"InterStateRankers is your trusted digital growth collective specializing in custom web development, SEO services, and social media marketing—proudly serving businesses across the United States. We craft high-quality digital solutions that elevate online visibility and drive measurable results.",
	keywords: [
		"About InterStateRankers",
		"web development",
		"SEO services",
		"social media marketing",
		"digital solutions",
		"custom websites",
		"online visibility",
		"digital growth",
	],
	openGraph: {
		title: "About InterStateRankers | US Digital Growth Collective",
		description:
			"Custom web development, SEO services, and social media marketing for businesses across the United States.",
		url: "/about",
		type: "website",
		locale: "en_US",
		siteName: "InterStateRankers",
		images: [
			{
				url: "/placeholder.svg",
				width: 1200,
				height: 630,
				alt: "InterStateRankers"
			}
		]
	},
	twitter: {
		card: "summary_large_image",
		title: "About InterStateRankers | US Digital Growth Collective",
		description:
			"Custom web development, SEO services, and social media marketing for businesses across the United States.",
		images: ["/placeholder.svg"]
	},
	alternates: {
		canonical: "/about"
	},
	robots: {
		index: true,
		follow: true
	}
};

export default function AboutPage() {
	return (
		<div className="min-h-screen">
			<Navbar />
			<main className="container mx-auto px-4 py-16">
				{/* Breadcrumbs */}
				<div className="mb-8">
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink asChild>
									<Link href="/">Home</Link>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>About</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>

				<h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 gradient-text">Your Trusted Digital Growth Collective</h1>
				<p className="text-lg md:text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-12">
					At <span className="font-semibold">InterStateRankers</span>, we specialize in empowering businesses to thrive online through custom web solutions, strategic SEO, and dynamic social media engagement. Founded by a dedicated team of experienced professionals, our mission is to deliver dependable, results-driven services with integrity and a human touch—serving clients nationwide across the United States.
				</p>

				{/* At-a-glance badges */}
				<div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-14">
					<span className="inline-flex items-center rounded-full border px-4 py-2 text-sm bg-background/60">Nationwide US coverage</span>
					<span className="inline-flex items-center rounded-full border px-4 py-2 text-sm bg-background/60">EST–PST availability</span>
					<span className="inline-flex items-center rounded-full border px-4 py-2 text-sm bg-background/60">Privacy-first, ADA-aware</span>
					<span className="inline-flex items-center rounded-full border px-4 py-2 text-sm bg-background/60">Results-focused SEO</span>
				</div>

				<section className="max-w-4xl mx-auto space-y-4 mb-14">
					<h2 className="text-2xl md:text-3xl font-heading font-semibold">Who We Are</h2>
					<p className="text-muted-foreground">
						We’re a collective of digital experts—web developers, SEO strategists, content creators, and marketing artisans—who came together with one shared goal: to offer streamlined, high-quality digital services without the fluff. Drawing on our time in various agencies and internal corporate teams, we bring a rich blend of experience, fresh ideas, and a client-first mindset to every project.
					</p>
				</section>

				<section className="grid md:grid-cols-3 gap-6 mb-14 max-w-6xl mx-auto">
					<div className="rounded-lg border p-6 bg-background/50">
						<h3 className="text-xl font-semibold mb-2">Custom Web Development</h3>
						<p className="text-muted-foreground">
							Crafting responsive, user-friendly websites that reflect your brand’s identity and convert visitors into loyal customers.
						</p>
					</div>
					<div className="rounded-lg border p-6 bg-background/50">
						<h3 className="text-xl font-semibold mb-2">SEO Services</h3>
						<p className="text-muted-foreground">
							Elevating your online visibility with in-depth keyword research, technical SEO, content optimization, and local SEO strategies.
						</p>
					</div>
					<div className="rounded-lg border p-6 bg-background/50">
						<h3 className="text-xl font-semibold mb-2">Social Media Marketing</h3>
						<p className="text-muted-foreground">
							Creating authentic content and targeted campaigns that resonate with your audience and drive engagement across platforms.
						</p>
					</div>
				</section>

				{/* Services quick links */}
				<div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 mb-16">
					<Link href="/services/web-development" className="text-center rounded-md border px-4 py-3 hover:bg-primary/10">Web Development</Link>
					<Link href="/services/seo" className="text-center rounded-md border px-4 py-3 hover:bg-primary/10">SEO Services</Link>
					<Link href="/services/social-media-marketing" className="text-center rounded-md border px-4 py-3 hover:bg-primary/10">Social Media</Link>
				</div>

				<section className="max-w-4xl mx-auto mb-14">
					<h2 className="text-2xl md:text-3xl font-heading font-semibold mb-4">Why Choose Us</h2>
					<ul className="space-y-3 list-disc pl-6">
						<li>
							<span className="font-semibold">Collaborative Expertise</span> – Our team’s collective experience ensures flexible, well-rounded solutions tailored to your business.
						</li>
						<li>
							<span className="font-semibold">Quality Over Hype</span> – We’re focused on delivering real, measurable outcomes that align with your goals, not empty promises.
						</li>
						<li>
							<span className="font-semibold">Transparent Communication</span> – Expect clear timelines, open collaboration, and consistent updates every step of the way.
						</li>
						<li>
							<span className="font-semibold">Custom-Tailored Solutions</span> – We treat every project as unique—your brand’s needs guide our strategy, not a one-size-fits-all approach.
						</li>
						<li>
							<span className="font-semibold">US Time Zone Coverage</span> – We collaborate on your schedule with availability across Eastern to Pacific time zones.
						</li>
						<li>
							<span className="font-semibold">Privacy-First & Accessibility-Minded</span> – We build with best practices that respect user privacy and inclusive, accessible design.
						</li>
					</ul>
				</section>

				<section className="max-w-4xl mx-auto mb-14 space-y-4">
					<h2 className="text-2xl md:text-3xl font-heading font-semibold">Our Mission & Vision</h2>
					<p className="text-muted-foreground">
						<strong>Mission:</strong> To empower businesses to achieve sustainable digital growth through innovation, craftsmanship, and integrity.
					</p>
					<p className="text-muted-foreground">
						<strong>Vision:</strong> To be the go-to digital partners for businesses that value quality-driven results over flashy marketing—building trust one project at a time.
					</p>
				</section>

				<section className="max-w-4xl mx-auto mb-14">
					<h2 className="text-2xl md:text-3xl font-heading font-semibold mb-4">Our Values</h2>
					<ul className="space-y-3 list-disc pl-6">
						<li>
							<span className="font-semibold">Authenticity</span> – Honest communication and dependable execution.
						</li>
						<li>
							<span className="font-semibold">Excellence</span> – We hold ourselves to the highest standard across all our work.
						</li>
						<li>
							<span className="font-semibold">Innovation</span> – Staying agile and informed in the ever-evolving digital landscape.
						</li>
						<li>
							<span className="font-semibold">Empathy</span> – We listen, understand your challenges, and build solutions that resonate with your audience.
						</li>
					</ul>
				</section>

				<section className="max-w-4xl mx-auto mb-14 space-y-4">
					<h2 className="text-2xl md:text-3xl font-heading font-semibold">Who We Serve</h2>
					<p className="text-muted-foreground">
						Our clients span startups, small and medium enterprises, and growing brands—from local businesses to service-focused firms—who seek a digital presence that’s both meaningful and effective across the United States.
					</p>
				</section>

				{/* Social proof and results */}
				<StatsResults />
				<Testimonials compact />

				{/* Team */}
				<section className="max-w-5xl mx-auto mt-12 md:mt-16 mb-16">
					<h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6 text-center">Meet the Team</h2>
					<p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">Experienced US-based professionals committed to clarity, craftsmanship, and results.</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
						<div className="text-center rounded-lg border p-6 bg-background/50">
							<Avatar className="w-16 h-16 mx-auto mb-3">
								<AvatarImage src="" alt="Alex Carter" />
								<AvatarFallback>AC</AvatarFallback>
							</Avatar>
							<div className="font-semibold">Alex Carter</div>
							<div className="text-sm text-muted-foreground mb-2">Head of SEO</div>
							<a className="text-sm text-primary hover:underline" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
						</div>
						<div className="text-center rounded-lg border p-6 bg-background/50">
							<Avatar className="w-16 h-16 mx-auto mb-3">
								<AvatarImage src="" alt="Jordan Lee" />
								<AvatarFallback>JL</AvatarFallback>
							</Avatar>
							<div className="font-semibold">Jordan Lee</div>
							<div className="text-sm text-muted-foreground mb-2">Lead Developer</div>
							<a className="text-sm text-primary hover:underline" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
						</div>
						<div className="text-center rounded-lg border p-6 bg-background/50">
							<Avatar className="w-16 h-16 mx-auto mb-3">
								<AvatarImage src="" alt="Taylor Morgan" />
								<AvatarFallback>TM</AvatarFallback>
							</Avatar>
							<div className="font-semibold">Taylor Morgan</div>
							<div className="text-sm text-muted-foreground mb-2">Content Strategist</div>
							<a className="text-sm text-primary hover:underline" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
						</div>
						<div className="text-center rounded-lg border p-6 bg-background/50">
							<Avatar className="w-16 h-16 mx-auto mb-3">
								<AvatarImage src="" alt="Riley James" />
								<AvatarFallback>RJ</AvatarFallback>
							</Avatar>
							<div className="font-semibold">Riley James</div>
							<div className="text-sm text-muted-foreground mb-2">Marketing Lead</div>
							<a className="text-sm text-primary hover:underline" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
						</div>
					</div>
				</section>

				{/* FAQ */}
				<section className="max-w-4xl mx-auto mb-16">
					<h2 className="text-2xl md:text-3xl font-heading font-semibold mb-4">Frequently Asked Questions</h2>
					<Accordion type="single" collapsible className="w-full">
						<AccordionItem value="q1">
							<AccordionTrigger>Do you work with businesses across the United States?</AccordionTrigger>
							<AccordionContent>
								Yes. We partner with companies nationwide and collaborate across US time zones (EST–PST).
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="q2">
							<AccordionTrigger>Can you improve our local search visibility?</AccordionTrigger>
							<AccordionContent>
								Absolutely. We implement technical SEO, content optimization, and local SEO strategies tailored to your service areas.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="q3">
							<AccordionTrigger>Do you sign NDAs and provide clear scopes?</AccordionTrigger>
							<AccordionContent>
								Yes. We’re happy to sign NDAs and provide transparent scopes, timelines, and progress updates.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</section>

				<section className="max-w-4xl mx-auto text-center">
					<h2 className="text-2xl md:text-3xl font-heading font-semibold mb-4">Let&apos;s Work Together</h2>
					<p className="text-muted-foreground mb-6">
						If you&apos;re ready to elevate your brand’s digital presence with a team that values clarity, craftsmanship, and genuine collaboration, let’s connect. Reach out today to explore how we can bring your vision to life.
					</p>
					<Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-white font-medium hover:opacity-90">
						Contact Us
					</Link>
				</section>
			</main>
			{/* Organization JSON-LD (US-focused) */}
			<Script id="about-organization-ld" type="application/ld+json" strategy="afterInteractive"
				dangerouslySetInnerHTML={{ __html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Organization",
					name: "InterStateRankers",
					description: "Digital growth collective for custom web development, SEO services, and social media marketing. Serving businesses across the United States.",
					areaServed: { "@type": "Country", name: "United States" },
					foundingLocation: { "@type": "Country", name: "United States" },
					knowsAbout: [
						"web development",
						"SEO services",
						"social media marketing",
						"digital solutions",
						"custom websites",
						"online visibility",
						"digital growth"
					],
					contactPoint: {
						"@type": "ContactPoint",
						contactType: "customer support",
						areaServed: "US",
						availableLanguage: "English"
					}
				}) }} />
			{/* FAQPage JSON-LD */}
			<Script id="about-faq-ld" type="application/ld+json" strategy="afterInteractive"
				dangerouslySetInnerHTML={{ __html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "FAQPage",
					mainEntity: [
						{
							"@type": "Question",
							name: "Do you work with businesses across the United States?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "Yes. We partner with companies nationwide and collaborate across US time zones (EST–PST)."
							}
						},
						{
							"@type": "Question",
							name: "Can you improve our local search visibility?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "Absolutely. We implement technical SEO, content optimization, and local SEO strategies tailored to your service areas."
							}
						},
						{
							"@type": "Question",
							name: "Do you sign NDAs and provide clear scopes?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "Yes. We’re happy to sign NDAs and provide transparent scopes, timelines, and progress updates."
							}
						}
					]
				}) }} />
			{/* BreadcrumbList JSON-LD */}
			<Script id="about-breadcrumb-ld" type="application/ld+json" strategy="afterInteractive"
				dangerouslySetInnerHTML={{ __html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							name: "Home",
							item: "/"
						},
						{
							"@type": "ListItem",
							position: 2,
							name: "About",
							item: "/about"
						}
					]
				}) }} />
			<Footer />
		</div>
	);
}



