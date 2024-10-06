import React from "react";

const CustomHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex">
      <div className="w-32 md:w-16">
        <img src="/images/fancy_square.svg" alt="desktop icon" />
      </div>
      <div className="flex flex-col">
        <p className="font-serif text-3xl md:text-[51px] text-primary">
          {title}
        </p>
        <p className="text-[#31373D] text-[22px] mt-4">{description}</p>
      </div>
    </div>
  );
};

export default CustomHeader;
