import { ClientWrapper } from "./client";

// Work around yet another Next.js bug.
const _dependencies = [ClientWrapper];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  void _dependencies;
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
