import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ORCA - AI-Powered Development Orchestrator",
  description: "ORCA manages the full software development lifecycle with AI-powered agents.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
