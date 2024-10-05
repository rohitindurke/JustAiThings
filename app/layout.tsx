import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { Sidebar } from "@/components/shared/Sidebar";
import "./globals.css";
import { Variable } from "lucide-react";
import MobileNav from "@/components/shared/MobileNav";
import { Toaster } from "@/components/ui/toaster";

const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex'
});





export const metadata: Metadata = {
  title: "JustAiThings",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: { colorPrimary: '#624cf5' }
    }}>
      <html lang="en"className="root">
      <Sidebar/>
      <MobileNav />
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          {children}
        </body>
        <Toaster/>
      </html>
    </ClerkProvider>

  );
}
