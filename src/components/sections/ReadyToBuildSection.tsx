import React from "react";
import { Button } from "../ui/button";

const ReadyToBuildSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between gap-16 items-center !bg-[#266DF0]  px-4 md:px-[94px]">
      <div>
        <p className="font-serif text-[40px] leading-tight md:leading-normal text-[#A0BFF8]">
          Ready to build your team&apos;s{" "}
          <span className="text-white">dream CRM?</span>
        </p>
        <div className="flex gap-[12px] justify-start mt-[32px]">
          <Button
            variant={"ghost"}
            className="border-none rounded-[12px] bg-[#538BF3]/40 hover:bg-[#538BF3]/40 text-white"
          >
            Start for free
          </Button>
          <Button
            variant={"ghost"}
            className="rounded-[12px] border-[1px] border-[#EDEEF0]  hover:bg-white text-white"
          >
            Talk to sales
          </Button>
        </div>
      </div>
      <div>
        <img src="/images/ready_to_build.png" alt="security" />
      </div>
    </section>
  );
};

export default ReadyToBuildSection;
