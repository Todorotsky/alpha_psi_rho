"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function onNavChange() {
  setTimeout(() => {
    const triggers = document.querySelectorAll(
      '.submenu-trigger[data-state="open"]'
    );
    if (triggers.length === 0) return;

    const firstTrigger =
      triggers[0] instanceof HTMLElement ? triggers[0] : null;

    document.documentElement.style.setProperty(
      "--menu-left-position",
      `${firstTrigger.offsetLeft}px`
    );
  });
}

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full h-full px-2 shadow-sm">
      <Link href="/" className="flex items-center">
        <Image
          src="/Apsirhocrest.jpeg"
          width={60}
          height={60}
          alt="Apsirho Crest"
        />
        <div className="leading-none font-bold text-xl ml-2">
          <h1>
            Alpha Psi Rho
            <br />
            Delta Chapter
          </h1>
        </div>
      </Link>
      <div>
        <NavigationMenu onValueChange={onNavChange} className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-2xl submenu-trigger">
                About
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About Us
                </NavigationMenuLink>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Chapters
                </NavigationMenuLink>
                {
                  // <NavigationMenuLink asChild>Mission Statement</NavigationMenuLink>
                }
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-2xl submenu-trigger">
                Join
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  How to Join
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-2xl submenu-trigger">
                News
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Calendar
                </NavigationMenuLink>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Newsletter
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-2xl submenu-trigger">
                Brhothers
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Classes
                </NavigationMenuLink>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Fam Tree
                </NavigationMenuLink>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Highlights
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-2xl submenu-trigger">
                Media
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Videos
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-2xl submenu-trigger">
                Contact
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contacts
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="md:hidden">
        <AiOutlineMenu size={45} />
      </div>
    </div>
  );
};

export default Navbar;
