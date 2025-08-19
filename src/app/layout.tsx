import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";
import Providers from "./providers";

export const metadata: Metadata = {
	title: "InterStateRankers",
	description: "AI-driven answering services and SEO solutions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<Providers>
					{children}
				</Providers>
			</body>
		</html>
	);
}


