import { notFound } from "next/navigation";

// Pricing is currently disabled. Keeping original implementation commented out for future use.
// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";

export default function PricingPage() {
	// return (
	// 	<div className="min-h-screen">
	// 		<Navbar />
	// 		<main className="container mx-auto px-4 py-16">
	// 			<h1 className="text-4xl font-heading font-bold text-center mb-8 gradient-text">Pricing Plans</h1>
	// 			<p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
	// 				Transparent pricing for answering, calling, SEO & GMB solutions.
	// 			</p>
	// 		</main>
	// 		<Footer />
	// 	</div>
	// );

	// Temporary: disable route by returning 404
	notFound();
	return null;
}

