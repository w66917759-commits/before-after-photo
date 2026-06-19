import type { ReactNode } from "react";
import "../globals.css";
import { AppShell } from "@/components/AppShell";
import { getSiteMetadata, viewport } from "@/lib/i18n/metadata";

export const metadata = getSiteMetadata("en");
export { viewport };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <AppShell locale="en">{children}</AppShell>;
}
