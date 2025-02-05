import { ReactNode } from "react";
import Navigation from "@/components/navigation";
import "./globals.css";
import Footer from "@/components/footer";

export const metadata = {
  title: "SkillMela",
  description: "Micro-learning platform",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-900">
        <Navigation />
        <main className="flex-1 container mx-auto sm:px-6 lg:px-8 ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
