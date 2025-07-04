"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  LayoutGrid,
  User2,
  Presentation,
  Briefcase,
  Braces,
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
  Sun,
  Moon,
  Video,
} from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import Image from "next/image";

const AppNavbar = () => {
  const theme = useTheme();
  return (
    <>
      <div className="md:hidden  w-full fixed bottom-0 z-10 ">
        <nav className="bg-slate-100 dark:bg-slate-700 py-5 flex justify-between px-4 items-center ">
          <div className="flex items-center space-x-2">
            <Popover>
              <PopoverTrigger>
                <Avatar className="  ">
                  <AvatarImage
                    height={50}
                    width={50}
                    src="https://github.com/DhrishP.png  "
                    alt="@shadcn"
                  />
                  <AvatarFallback>PFP</AvatarFallback>
                </Avatar>
                <PopoverContent className="w-[35vw]">
                  <ul>
                    <Link
                      href="https://github.com/DhrishP"
                      className="flex items-center hover:bg-primary-foreground space-x-2 border-muted border rounded px-1 mb-2 cursor-pointer py-2   "
                    >
                      <GithubIcon className="h-4 w-4" />
                      <h3>Github</h3>
                    </Link>
                    <Link
                      href="https://twitter.com/whycurious101"
                      className="flex items-center hover:bg-primary-foreground space-x-2 border-muted border rounded px-1 mb-2 cursor-pointer py-2   "
                    >
                      <TwitterIcon className="h-4 w-4" />
                      <h3>Twitter</h3>
                    </Link>
                    <Link
                      href=""
                      className="flex items-center hover:bg-primary-foreground space-x-2 border-muted border rounded px-1 mb-2 cursor-pointer py-2   "
                    >
                      <LinkedinIcon className="h-4 w-4" />
                      <h3>Linkedin</h3>
                    </Link>
                    <Link
                      href="/videos"
                      className="flex items-center hover:bg-primary-foreground space-x-2 border-muted border rounded px-1 mb-2 cursor-pointer py-2   "
                    >
                      <Video className="h-4 w-4" />
                      <h3>Videos</h3>
                    </Link>
                  </ul>
                </PopoverContent>
              </PopoverTrigger>
            </Popover>
            <div className="flex items-center animate-pulse">
              <div>
              <Image
                src="/images/arrow.png"
                className="  -rotate-90 -scale-y-100"
                alt="PFP"
                width={25}
                height={5}
                />
              <Image
                src="/images/arrow.png"
                className="  rotate-90"
                alt="PFP"
                width={25}
                height={5}
                />
                </div>
                <h2 className="text-xs">Links</h2>
            </div>
          </div>
          <div>
            <Popover>
              <PopoverTrigger>
                <LayoutGrid className="h-5 w-5 cursor-pointer" />
              </PopoverTrigger>
              <PopoverContent className="w-[90vw] mb-3 bg-slate-100 dark:bg-slate-700   ">
                {" "}
                <ul className="grid grid-cols-2 gap-2 ">
                  <a
                    href="#contact"
                    className="p-5 rounded-md bg-secondary border flex space-x-2 items-center   "
                  >
                    <User2 className="h-5 w-5" />
                    <h3>Contact</h3>
                  </a>
                  <a
                    href="#about"
                    className="p-5 rounded-md bg-secondary border flex space-x-2 items-center   "
                  >
                    <Briefcase className="h-5 w-5" />
                    <h3>Services</h3>
                  </a>
                  <a
                    href="#skills"
                    className="p-5 rounded-md bg-secondary border flex space-x-2 items-center   "
                  >
                    <Braces className="h-5 w-5" />
                    <h3>Skills</h3>
                  </a>
                  <a
                    href="#projects"
                    className="p-5 rounded-md bg-secondary border flex space-x-2 items-center   "
                  >
                    <Presentation className="h-5 w-5" />
                    <h3>Projects</h3>
                  </a>
                  <Link
                    href="/videos"
                    className="p-5 rounded-md bg-secondary border flex space-x-2 items-center   "
                  >
                    <Video className="h-5 w-5" />
                    <h3>Videos</h3>
                  </Link>
                  <li className="col-span-1">
                    {theme.theme === "dark" ? (
                      <>
                        <Button
                          onClick={() => theme.setTheme("light")}
                          className="p-5 rounded-md bg-secondary border flex space-x-2 items-center w-full  "
                        >
                          <Sun  className="h-5 w-5 text-primary hover:text-secondary " />
                          <h3 className="text-primary hover:text-secondary">
                            Light
                          </h3>
                        </Button>
                      </>
                    ) : (
                      <>
                        {" "}
                        <Button
                          onClick={() => theme.setTheme("dark")}
                          className="p-5 rounded-md  bg-secondary border flex space-x-2 items-center w-full  "
                        >
                          <Moon className="h-5 w-5 text-primary hover:text-white " />
                          <h3 className="text-primary hover:text-white ">
                            Dark theme
                          </h3>
                        </Button>
                      </>
                    )}
                  </li>
                </ul>
              </PopoverContent>
            </Popover>
          </div>
        </nav>
      </div>
    </>
  );
};

export default AppNavbar;