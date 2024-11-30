"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoWithName from "@/public/assets/images/logoWithName.png";
import { navLinks } from "../constants/index";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Button } from "../ui/button";

export const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col">
        <Link href="/" className="sidebar-logo">
          <Image src={logoWithName} alt="AI Logo" width={200} height={28} />
        </Link>
        <SignedIn />
        <SignedIn />
        <nav className="sidebar-nav">
          <SignedIn>
            
            <ul>
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group ${
                      isActive ? "bg-black text-white" : "text-black"
                    }`}>
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                        alt="logo"
                      />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group ${
                      isActive ? "bg-black text-white" : "text-black"
                    }`}>
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                        alt="logo"
                      />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                );
              })}
              <ul className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl="/" showName />
              </ul>
            </ul>
          </SignedIn>
          <SignedOut>
            <Button asChild className="button bg-black bg-cover">
              <Link href="/sign-in">Log in</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};
