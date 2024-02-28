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
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import { ChevronDown } from "./Icons.jsx";

const Navigationbar = () => {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
  };
  return (
    <Navbar
      className="w-[72%] ml-[14%] mr-[14%] flex justify-start"
      isBlurred="false"
      maxWidth={"full"}
    >
      <NavbarBrand>
        <div className="flex justify-between p-4 pr-16 w-[72%]">
          <Link href="/" className="flex items-center">
            <div>
              <Image
                src="/Apsirhocrest.jpeg"
                width={30}
                height={30}
                alt="Apsirho Crest"
              />
            </div>
            <div className="leading-none font-bold text-xl">
              <h1>
                Alpha Psi Rho
                <br />
                Delta Chapter
              </h1>
            </div>
          </Link>
        </div>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="text-2xl p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                About
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="About Us"
            className="w-[100%]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="About Us"
              description="Pillars and Mission Statement"
              startContent={icons.scale}
              href="/about"
            >
              About Us
            </DropdownItem>
            <DropdownItem
              key="Chapters"
              description="Universities"
              startContent={icons.scale}
              href="/chapters"
            >
              Chapters
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="text-2xl p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Join Us
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Join Us"
            className="w-[100%]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="APsiRho101"
              startContent={icons.scale}
              href="/about"
            >
              APsiRho101
            </DropdownItem>
            <DropdownItem
              key="How to Join"
              startContent={icons.scale}
              href="/join"
            >
              How to Join
            </DropdownItem>
            <DropdownItem
              key="Interest Form"
              startContent={icons.scale}
              href="https://docs.google.com/forms/d/e/1FAIpQLSeE7k9E0oweC9APcmSWvnFHIo9nQ2WiD0H3aYQRySa7lg3ATw/viewform"
            >
              Interest Form
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="text-2xl p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Brhothers{" "}
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Join Us"
            className="w-[100%]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="Brhothers"
              description="Classes and Brhothers"
              startContent={icons.scale}
              href="/brhothers"
            >
              Brhothers
            </DropdownItem>
            <DropdownItem
              key="Fam Tree"
              description="Big Brho Fam Tree"
              startContent={icons.scale}
              href="/brhothers"
            >
              Fam Tree
            </DropdownItem>
            <DropdownItem
              key="Highlights"
              description="Promotion Hub of Brhos"
              startContent={icons.scale}
              href="/brhothers"
            >
              Highlights
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="text-2xl p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Media
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Media"
            className="w-[100%]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="Gallery"
              description="Instagram Photos"
              startContent={icons.scale}
              href="/media"
            >
              Gallery
            </DropdownItem>
            <DropdownItem
              key="Videos"
              description="Promos and Rush"
              startContent={icons.scale}
              href="/brhothers"
            >
              Videos
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Link className="text-2xl" href="/contact" aria-current="page">
          Contact
        </Link>
        <Button
          as={Link}
          color="primary"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeE7k9E0oweC9APcmSWvnFHIo9nQ2WiD0H3aYQRySa7lg3ATw/viewform"
          variant="flat"
          style={{ backgroundColor: "#09243F", color: "white" }}
        >
          Interest Form
        </Button>
      </NavbarContent>
    </Navbar>
  );
};

export default Navigationbar;
