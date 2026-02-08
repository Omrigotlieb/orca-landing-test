import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ORCA — AI-Powered Development Orchestrator",
  description: "ORCA manages your entire development lifecycle with specialized AI agents — from task planning to production deployment.",
  keywords: ["AI", "development", "orchestrator", "automation", "CI/CD", "code review", "testing"],
  openGraph: {
    title: "ORCA — AI-Powered Development Orchestrator",
    description: "Autonomous software development pipeline powered by specialized AI agents.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
