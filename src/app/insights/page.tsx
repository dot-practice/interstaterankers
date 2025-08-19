import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function InsightsPage() {
	return (
		<div className="min-h-screen">
			<Navbar />
			<main className="container mx-auto px-4 py-16">
				<h1 className="text-4xl font-heading font-bold text-center mb-8 gradient-text">Insights & Resources</h1>
				<p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
					Stay ahead with our latest insights on business growth, SEO strategies, and industry best practices.
				</p>
			</main>
			<Footer />
		</div>
	);
}



