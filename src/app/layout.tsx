import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumera.ai | Enterprise AI Assistant Platform",
  description: "Intelligente Automatisierung für Ihr Unternehmen. Verbinden Sie Teams, Tools und Daten mit KI-gestützter Automatisierung – sicher, skalierbar, compliant.",
  keywords: "AI Assistant, Enterprise AI, Workflow Automation, Business Intelligence, KI Assistent, Unternehmens KI",
  openGraph: {
    title: "Lumera.ai | Enterprise AI Assistant Platform",
    description: "Intelligente Automatisierung für Ihr Unternehmen.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
