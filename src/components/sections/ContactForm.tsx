"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { isEmailConfigured, sendContactEmail } from "@/lib/email";

const contactSchema = z.object({
	fullName: z.string().min(2, "Please enter your full name."),
	email: z.string().email("Please enter a valid email address."),
	phone: z.string().optional(),
	company: z.string().optional(),
	message: z.string().min(10, "Please enter at least 10 characters."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const configured = isEmailConfigured();

	const form = useForm<ContactFormValues>({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			fullName: "",
			email: "",
			phone: "",
			company: "",
			message: "",
		},
	});

	async function onSubmit(values: ContactFormValues) {
		setIsSubmitting(true);
		try {
			await sendContactEmail(values);

			toast({
				title: "Message sent",
				description: "Thanks for reaching out. We'll get back to you within 1 business day.",
			});

			form.reset();
		} catch (error) {
			toast({
				title: "Something went wrong",
				description: "We couldn't send your message. Please try again shortly.",
			});
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<Card className="border-muted/40">
			<CardHeader>
				<CardTitle>Send us a message</CardTitle>
				<CardDescription>Fill in the form and our team will contact you shortly.</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<FormField
								control={form.control}
								name="fullName"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Full name</FormLabel>
										<FormControl>
											<Input placeholder="Jane Doe" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input type="email" placeholder="you@company.com" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="phone"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Phone (optional)</FormLabel>
										<FormControl>
											<Input type="tel" placeholder="(555) 000-0000" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="company"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Company (optional)</FormLabel>
										<FormControl>
											<Input placeholder="Acme Inc." {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<FormField
							control={form.control}
							name="message"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Your message</FormLabel>
									<FormControl>
										<Textarea rows={6} placeholder="Tell us a bit about your goals..." {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="flex items-center justify-between gap-4">
							<p className="text-sm text-muted-foreground">{configured ? "Securely sending via EmailJS." : "This is a demo form. We'll enable EmailJS after credentials are added."}</p>
							<Button type="submit" disabled={isSubmitting}>
								{isSubmitting ? "Sending..." : "Send message"}
							</Button>
						</div>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}


