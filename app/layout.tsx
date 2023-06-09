import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import ClientOnly from "./components/ClientOnly";
import Navbar from "./components/navbar/Navbar";
import SocialLinks from "./components/SocialLinks";
import ProjectModal from "./components/modals/ProjectModal";

const font = Poppins({ subsets: ["latin"], weight: "600" });

export const metadata: Metadata = {
  title: "Mitchel's Portfolio",
  description: "This is a personal website where you can see my projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ProjectModal />
          <Navbar />
          <SocialLinks />
        </ClientOnly>
        <div className="bg-gradient-to-b from-black via-black to-gray-800 border-0">
          {children}
        </div>
      </body>
    </html>
  );
}
