"use client";

import React from "react";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
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
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      className="max-w-full sm:max-w-[72%] mx-auto flex justify-center"
      isBlurred="false"
      maxWidth={"full"}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarMenu className=" w-[60%]">
        <NavbarMenuItem className="pt-2">
          <Link className="text-3xl" href="/" aria-current="page">
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="pt-2">
          <Dropdown>
            <DropdownTrigger>
              <Button
                disableRipple
                className="text-3xl p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                About
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="About Us" className="w-[100%]">
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
            <NavbarMenuItem className="pt-3">
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="text-3xl p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  Join Us
                </Button>
              </DropdownTrigger>
            </NavbarMenuItem>
            <DropdownMenu aria-label="Join Us" className="w-[100%]">
              <DropdownItem
                key="APsiRho101"
                startContent={icons.scale}
                description="Powerpoint About APsiRho"
                href="/about"
              >
                APsiRho101
              </DropdownItem>
              <DropdownItem
                key="How to Join"
                description="How-To and Requirements"
                startContent={icons.scale}
                href="/join"
              >
                How to Join
              </DropdownItem>
              <DropdownItem
                key="Interest Form"
                description="Google Form"
                startContent={icons.scale}
                href="https://docs.google.com/forms/d/e/1FAIpQLSeE7k9E0oweC9APcmSWvnFHIo9nQ2WiD0H3aYQRySa7lg3ATw/viewform"
              >
                Interest Form
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarMenuItem>
        <NavbarMenuItem className="pt-2">
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="text-3xl p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  Brhothers
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu aria-label="Join Us" className="w-[100%]">
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
        </NavbarMenuItem>
        <Dropdown>
          <NavbarMenuItem className="pt-2">
            <DropdownTrigger>
              <Button
                disableRipple
                className="text-3xl p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Media
              </Button>
            </DropdownTrigger>
          </NavbarMenuItem>
          <DropdownMenu aria-label="Media" className="w-[100%]">
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
        <NavbarMenuItem className="pt-2">
          <Link className="text-3xl" href="/contact" aria-current="page">
            Contact
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="pt-5">
          <Button
            as={Link}
            className="text-2xl"
            color="primary"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeE7k9E0oweC9APcmSWvnFHIo9nQ2WiD0H3aYQRySa7lg3ATw/viewform"
            variant="flat"
            style={{ backgroundColor: "#09243F", color: "white" }}
          >
            Interest Form
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>

      <NavbarBrand className="flex justify-center">
        <div>
          <Link
            href="/"
            className="absolute top-0 left-1/2 transform -translate-x-1/2 sm:static sm:top-auto sm:left-auto sm:transform-none"
          >
            <div>
              <Image
                src="/Apsirhocrest.jpeg"
                width={40}
                height={40}
                alt="Apsirho Crest"
              />
            </div>
            <div className="leading-none font-bold text-2xl">
              <h1>
                Alpha Psi Rho
                <br />
                Delta Chapter
              </h1>
            </div>
          </Link>
        </div>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="text-3xl p-0 bg-transparent data-[hover=true]:bg-transparent"
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
                className="text-3xl p-0 bg-transparent data-[hover=true]:bg-transparent"
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
              description="Powerpoint About APsiRho"
              href="/about"
            >
              APsiRho101
            </DropdownItem>
            <DropdownItem
              key="How to Join"
              description="How-To and Requirements"
              startContent={icons.scale}
              href="/join"
            >
              How to Join
            </DropdownItem>
            <DropdownItem
              key="Interest Form"
              description="Google Form"
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
                className="text-3xl p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Brhothers
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
                className="text-3xl p-0 bg-transparent data-[hover=true]:bg-transparent"
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
        <Link className="text-3xl" href="/contact" aria-current="page">
          Contact
        </Link>
      </NavbarContent>
      <NavbarContent className="justify-end hidden sm:flex">
        <Button
          as={Link}
          className="text-2xl"
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
