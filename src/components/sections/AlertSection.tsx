import React from "react";
import Link from "next/link";

const AlertSection = () => {
  return (
    <div className="bg-primary text-white font-semibold flex justify-center rounded-[12px] p-4">
      <div className="flex gap-3 ">
        <p>We&apos;ve raised a $23.5m Series A led by Redpoint Ventures!</p>
        <Link href="/" className="underline underline-offset-4">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default AlertSection;
