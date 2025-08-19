import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContentMarketingServicePage() {
	return (
		<div className="min-h-screen">
			<Navbar />
			<main className="container mx-auto px-4 py-16">
				<h1 className="text-4xl font-heading font-bold text-center mb-8 gradient-text">Content Marketing</h1>
				<p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
					Plan, produce, and distribute content that attracts, educates, and converts.
				</p>
			</main>
			<Footer />
		</div>
	);
}


