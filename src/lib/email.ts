export type ContactEmailPayload = {
	fullName: string;
	email: string;
	phone?: string;
	company?: string;
	message: string;
};

export function isEmailConfigured(): boolean {
	return Boolean(
		process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
		process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
		process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
	);
}

export async function sendContactEmail(payload: Partial<ContactEmailPayload>): Promise<void> {
	// If not configured, simulate a successful request so the UI flow works in demo mode.
	if (!isEmailConfigured()) {
		await new Promise((resolve) => setTimeout(resolve, 500));
		return;
	}

	const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
	const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
	const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

	const emailjs = (await import("@emailjs/browser")).default;

	await emailjs.send(
		serviceId,
		templateId,
		{
			from_name: payload.fullName ?? "",
			from_email: payload.email ?? "",
			phone: payload.phone ?? "",
			company: payload.company ?? "",
			message: payload.message ?? "",
		},
		{ publicKey }
	);
}


