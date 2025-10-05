import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({ subsets: ["hebrew"], weight: ["400","500","700"] });

export const metadata: Metadata = {
  title: "Sycamore — אדריכלות רישוי חכמה",
  description: "אוספים, מגישים, עוקבים — ואתם מתמקדים בתכנון.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body className={heebo.className}>{children}</body>
    </html>
  );
}
