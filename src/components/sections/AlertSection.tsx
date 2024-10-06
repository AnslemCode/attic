"use client";
import { useState } from "react";
import Link from "next/link";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const AlertSection = () => {
  const [showAlert, setShowAlert] = useState(true);
  return (
    showAlert && (
      <div
        className={cn(
          "bg-primary mx-4 flex justify-between items-center p-[12px] rounded-[12px]",
          showAlert ? "mt-4" : ""
        )}
      >
        <div />
        <div className="inline-flex gap-3 text-white font-semibold text-[12px] md:text-[16px]">
          <div className="text-center">
            We&apos;ve raised a $23.5m Series A led by Redpoint Ventures!
            <Link href="/" className="underline underline-offset-4 pl-3">
              Read more
            </Link>
          </div>
        </div>
        <div>
          <PlusIcon
            className="rotate-45 hover:cursor-pointer"
            color="#fff"
            onClick={() => setShowAlert(false)}
          />
        </div>
      </div>
    )
  );
};

export default AlertSection;
