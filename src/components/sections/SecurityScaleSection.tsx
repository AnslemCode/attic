import React from "react";
import { Button } from "../ui/button";

const SecurityScaleSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between gap-16 items-center">
      <div className="">
        <p className="font-serif text-[40px] leading-tight md:leading-normal text-primary">
          Scale with <span className="text-gray-500">security</span>
        </p>
        <p className="text-[20px] text-primary mt-1.5 mb-6">
          Attio is audited and certified by industry leading Third Party
          standards.
        </p>
        <div className="flex gap-[12px] justify-start">
          <Button size={"lg"} variant={"default"} className="rounded-[12px]">
            Start for free
          </Button>
          <Button size={"lg"} variant={"outline"} className="rounded-[12px]">
            Talk to sales
          </Button>
        </div>
      </div>
      <div>
        <img src="/images/security_scale.png" alt="security" />
      </div>
    </section>
  );
};

export default SecurityScaleSection;
