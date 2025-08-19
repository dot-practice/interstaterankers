import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AppDevelopmentServicePage() {
	return (
		<div className="min-h-screen">
			<Navbar />
			<main className="container mx-auto px-4 py-16">
				<h1 className="text-4xl font-heading font-bold text-center mb-8 gradient-text">App Development</h1>
				<p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
					Cross-platform apps that scale with your business and users.
				</p>
			</main>
			<Footer />
		</div>
	);
}


