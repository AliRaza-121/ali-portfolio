import { Space_Grotesk, Sora, JetBrains_Mono } from "next/font/google";
import CustomCursor from "@/components/ui/CustomCursor";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
  weight: ["300", "400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
  weight: ["400", "500"],
});

export const metadata = {
  title: "Ali Raza | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js and MongoDB.",
  openGraph: {
    title: "Ali Raza | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, Node.js and MongoDB.",
    url: "https://your-portfolio-url.com",
    siteName: "Ali Raza Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Update with your actual OG image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Raza | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, Node.js and MongoDB.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${sora.variable} ${jetbrainsMono.variable} antialiased overflow-x-hidden bg-[#0a0a0a] text-white`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}