"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { X } from "lucide-react";

const NavBar = () => {
  const links = [
    {
      route: "/",
      name: "Customer",
      badgeCount: 0,
    },
    {
      route: "/",
      name: "Changelog",
      badgeCount: 0,
    },
    {
      route: "/",
      name: "Help",
      badgeCount: 0,
    },
    {
      route: "/",
      name: "Careers",
      badgeCount: 4,
    },
    {
      route: "/",
      name: "Pricing",
      badgeCount: 0,
    },
  ];
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="md:sticky md:top-0 md:shadow-none z-20 mt-[5rem] md:mt-0">
      {/* DESKTOP */}
      <div className="hidden lg:block animate-in fade-in zoom-in bg-white p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-12">
            <div>
              <Image src="images/logo.svg" alt="logo" width={100} height={40} />
            </div>
            <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
              {links.map((link, index) => (
                <Link key={index} href={link.route} className="flex gap-2">
                  <span className="hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray">
                    {link.name}
                  </span>
                  {link.badgeCount > 0 && (
                    <div className="h-8 w-8 rounded-full bg-primary text-white flex justify-center items-center font-semibold">
                      {link.badgeCount}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-[20px] select-none">
            <Button variant={"outline"}>Sign in</Button>
            <Button>Start for free</Button>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div
        className={`block lg:hidden shadow-sm fixed top-0 w-full z-[999] bg-white py-4 animate-in fade-in zoom-in  ${
          menu && " bg-primary py-2"
        } `}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <Image src="/images/logo.svg" alt="logo" width={90} height={36} />
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}
              />
            ) : (
              <Image
                src="/images/menu.svg"
                alt="logo"
                width={32}
                height={32}
                className="cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              {links.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <p
                    className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
                  >
                    {item.name}
                  </p>
                  {item.badgeCount ? (
                    <div className="h-8 w-8 rounded-full bg-primary flex justify-center items-center  font-semibold text-white">
                      {item.badgeCount}
                    </div>
                  ) : (
                    <div />
                  )}
                </div>
              ))}

              <div className="flex flex-col gap-[20px] select-none">
                <Button variant={"outline"}>Sign in</Button>
                <Button>Start for free</Button>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
