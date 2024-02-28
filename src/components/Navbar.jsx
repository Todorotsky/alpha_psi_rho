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
    <div className="flex justify-between p-4 pr-16 w-[72%] mx-auto">
      <Link href="/" className="flex items-center">
        <Image
          src="/Apsirhocrest.jpeg"
          width={75}
          height={75}
          alt="Apsirho Crest"
        />
        <div className="leading-none font-bold text-xl">
          <h1>
            Alpha Psi Rho
            <br />
            Delta Chapter
          </h1>
        </div>
      </Link>
      <NavigationMenu onValueChange={onNavChange}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-2xl submenu-trigger">
              About
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Link
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-2xl submenu-trigger">
              Join Us
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Link
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-2xl submenu-trigger">
              News
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Link
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-2xl submenu-trigger">
              Brhothers
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Link
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-2xl submenu-trigger">
              Media
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Link
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-2xl submenu-trigger">
              Contact
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Link
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
