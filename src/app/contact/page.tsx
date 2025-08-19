import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, Mail } from "lucide-react";

export default function ContactPage() {
	return (
		<div className="min-h-screen">
			<Navbar />
			<main className="container mx-auto px-4 py-16">
				<div className="mx-auto max-w-3xl text-center mb-12">
					<h1 className="text-4xl md:text-5xl font-heading font-bold gradient-text">Contact Us</h1>
					<p className="mt-4 text-lg md:text-xl text-muted-foreground">
						Ready to grow your business? Send us a message and we’ll get back to you.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8">
					{/* Contact details */}
					<div className="rounded-2xl border border-primary/40 ring-1 ring-primary/20 bg-card/60 p-8 md:p-10 glow-card">
						<h2 className="text-2xl font-heading font-bold mb-4">Get in touch</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="flex items-center gap-4">
								<div className="w-10 h-10 rounded-xl hero-gradient flex items-center justify-center shrink-0">
									<Phone className="w-5 h-5 text-white" />
								</div>
								<div>
									<p className="text-sm text-muted-foreground">Phone</p>
									<a href="tel:+11234567890" className="text-lg font-medium hover:underline">+1 (123) 456-7890</a>
								</div>
							</div>
							<div className="flex items-center gap-4">
								<div className="w-10 h-10 rounded-xl hero-gradient flex items-center justify-center shrink-0">
									<Mail className="w-5 h-5 text-white" />
								</div>
								<div>
									<p className="text-sm text-muted-foreground">Email</p>
									<a href="mailto:hello@interstaterankers.com" className="text-lg font-medium hover:underline">hello@interstaterankers.com</a>
								</div>
							</div>
						</div>
					</div>

					<ContactForm />
				</div>
			</main>
			<Footer />
		</div>
	);
}



