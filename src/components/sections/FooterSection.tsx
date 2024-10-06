"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowDown, ArrowUp, ChevronDown, ChevronUp } from "lucide-react";

const FooterSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const data = {
    product: [
      "Changelog",
      "Customer stories",
      "Security",
      "Chrome extension",
      "iOS App",
      "Android App",
      "Zapier",
      "Integromat",
    ],
    company: ["About", "Careers", "Blog", "Startip program"],
    attioFor: ["Startups", "Dear flow"],
    support: ["Help Center", "Talk to support", "API docs", "System status"],
  };
  return (
    <section className="bg-[#232529] px-4 md:px-[94px] py-[90px]">
      <div className="flex items-center justify-between">
        <div>
          <img src="/images/footer_logo.svg" alt="footer logo" />
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <img src="/images/x.svg" alt="" />
          <img src="/images/dribbble.svg" alt="" />
          <img src="/images/linkedin.svg" alt="" />
        </div>
      </div>
      <div className="mt-8 pb-[50px] flex justify-between w-full gap-8 flex-col md:flex-row flex-wrap">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white bg-[#222529] p-3 rounded-[12px] w-full flex justify-between items-center"
          >
            <span className="text-[#9098A0]">Product</span>
            <span>{isOpen ? <ChevronUp /> : <ChevronDown />}</span>{" "}
          </button>
          {/* Dropdown Menu */}
          {isOpen && (
            <div className="bg-[#222529] p-6 rounded-[12px] mt-2">
              <div className="flex flex-col gap-3">
                {data.product.map((item, index) => (
                  <p
                    key={index}
                    className="text-[#555E67] hover:text-white hover:cursor-pointer"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="hidden md:block">
          <p className="text-[#9098A0] mb-[12px]">Product</p>
          <div className="flex flex-col gap-3">
            {data.product.map((item, index) => (
              <p key={index} className="text-[#555E67] hover:cursor-pointer">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[#9098A0] mb-[12px]">Company</p>
          <div className="flex flex-col gap-3">
            {data.company.map((item, index) => (
              <p key={index} className="text-[#555E67] hover:cursor-pointer">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[#9098A0] mb-[12px]">Attio for</p>
          <div className="flex flex-col gap-3">
            {data.attioFor.map((item, index) => (
              <p key={index} className="text-[#555E67] hover:cursor-pointer">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[#9098A0] mb-[12px]">Support</p>
          <div className="flex flex-col gap-3">
            {data.support.map((item, index) => (
              <p key={index} className="text-[#555E67] hover:cursor-pointer">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="min-w-[300px]">
          <p className="font-medium text-[#9098A0] mb-[12px]">
            Ready to build?
          </p>
          <div className="flex flex-col gap-3">
            <Button
              size={"lg"}
              className="rounded-[12px] border border-none bg-[#31373D] text-white hover:border hover:bg-[#31373D]"
            >
              Start for free
            </Button>
            <Button
              size={"lg"}
              className="rounded-[12px] border border-[#31373D] text-white hover:text-white"
              variant={"outline"}
            >
              Talk to sales
            </Button>
          </div>
        </div>
      </div>
      <div className="border-t border-[#4B4F58] md:flex items-center justify-between text-[#9098A0] pt-4 text-sm hidden">
        <p>© {new Date().getFullYear()} Attio Ltd. All rights reserved.</p>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Link href="/">Terms & Conditions</Link>
            <div className="w-[4px] h-[4px] bg-[#9098A0] rounded-full" />
            <Link href="/">Privacy Policy</Link>
          </div>
          <div className="flex items-center gap-2">
            <img src="/images/x.svg" alt="" />
            <img src="/images/dribbble.svg" alt="" />
            <img src="/images/linkedin.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
