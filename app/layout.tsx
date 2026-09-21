import type { Metadata } from "next";
import "./globals.css";
import { CustomCursor } from "@/components/custom-cursor";
import { SmoothScroll } from "@/components/smooth-scroll";

export const metadata: Metadata = {
  title: "Rishi Maddela — Designer & Builder",
  description:
    "Rishi Maddela is a product designer and full-stack builder working across digital products, brand systems, and the web."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
