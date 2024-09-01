'use client'
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import {  SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { navLinks } from "../constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const MobileNav = () => {
    const pathname = usePathname();
  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 mid:py-2">
        <Image
          src="/assets/images/logoWithName.png"
          alt="logo"
          height={210}
          width={140}
          
        />
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
            <UserButton afterSignOutUrl="/"/>
            <Sheet>
               
  <SheetTrigger >
    <Image 
    src= "/assets/images/menu.png" alt='logo'width={28}height={28}/>
  </SheetTrigger>
  <SheetContent className="sheet-content sm:w-64">
   <>
   <Image
          src="/assets/images/logoWithName.png"
          alt="logo"
          height={210}
          width={140}/>
             {navLinks.map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                  className={`${isActive && 'gradient-text'} p-13 flex whitespace-nowrap text-dark-700`}
                    key={link.route}
                   
                    >
                    <Link className="sidebar-link cursor-pointer" href={link.route}>
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
   </>
  </SheetContent>
</Sheet>
        </SignedIn>
        <SignedOut>
            <Button asChild className="button bg-gray-700 bg-cover">
              <Link href="/sign-in">Log in</Link>
            </Button>
          </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
