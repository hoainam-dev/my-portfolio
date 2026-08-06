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
  title: "Huynh Hoai Nam | Fullstack Developer",
  description:
    "Portfolio của Huynh Hoai Nam — Fullstack Developer: React/Next.js, Java Spring Boot, Golang, MySQL và AWS.",
  keywords: [
    "Huynh Hoai Nam",
    "Fullstack Developer",
    "Spring Boot",
    "Golang",
    "Next.js",
    "React",
    "AWS",
    "MySQL",
    "Portfolio",
  ],
  authors: [{ name: "Huynh Hoai Nam" }],
  creator: "Huynh Hoai Nam",
  openGraph: {
    title: "Huynh Hoai Nam | Fullstack Developer",
    description:
      "Fullstack portfolio — frontend hiện đại và backend vững với Spring Boot, Go, MySQL, AWS.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className="scroll-pt-24">
      <body
        className={`${outfit.variable} ${jakarta.variable} antialiased selection:bg-blue-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
