import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "Huynh Hoai Nam | Creative Frontend Developer",
  description: "Portfolio của Huynh Hoai Nam - Chuyên gia tạo ra trải nghiệm web mượt mà.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-pt-24">
      <body className={`${outfit.variable} ${jakarta.variable} font-sans selection:bg-cyan-500/30 selection:text-cyan-200`}>
        {children}
      </body>
    </html>
  );
}