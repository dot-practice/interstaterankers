import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function LandingPagesServicePage() {
	return (
		<div className="min-h-screen">
			<Navbar />
			<main className="container mx-auto px-4 py-16">
				<h1 className="text-4xl font-heading font-bold text-center mb-8 gradient-text">Google My Business Optimization</h1>
				<p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
					Optimize and manage your Google Business Profile to win local search and map pack visibility.
				</p>
			</main>
			<Footer />
		</div>
	);
}



