import React from "react";
import HeroHeaderSection from "./HeroHeaderSection";
import { Button } from "../ui/button";
import HeroYotubeModal from "../modals/HeroYotubeModal";

const HeroSection = () => {
  return (
    <section>
      <HeroHeaderSection />
      <div>
        <div className="font-serif text-4xl md:text-[92px] text-center text-primary md:leading-[5.5rem] my-8">
          Customer <br /> relationship magic.
        </div>
        <p className="mb-8 text-[22px] text-center text-[#31373D]">
          Powerful, flexible and data-driven, Attio makes it easy to build the
          exact CRM your business needs.
        </p>
        <div className="flex gap-[12px] justify-center">
          <Button className="rounded-[12px]">Start for free</Button>
          <Button variant={"outline"} className="rounded-[12px]">
            Talk to sales
          </Button>
        </div>

        <div className="flex w-full justify-center">
          <HeroYotubeModal />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
