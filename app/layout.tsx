import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Huynh Hoai Nam | Creative Frontend Developer",
  description:
    "Portfolio của Huynh Hoai Nam - Frontend Developer chuyên xây dựng trải nghiệm web hiện đại, mượt mà và giàu tương tác.",
  keywords: [
    "Huynh Hoai Nam",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Portfolio",
  ],
  authors: [{ name: "Huynh Hoai Nam" }],
  creator: "Huynh Hoai Nam",
  openGraph: {
    title: "Huynh Hoai Nam | Creative Frontend Developer",
    description:
      "Frontend portfolio với các dự án web hiện đại, animation mượt và giao diện chuyên nghiệp.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className="scroll-pt-24">
      <body
        className={`${outfit.variable} ${jakarta.variable} bg-background font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
