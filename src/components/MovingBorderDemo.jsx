"use client";
import React from "react";
import { Button } from "./ui/moving-border";

export default function MovingBorderDemo() {
  return (
    (<div>
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">
        Get Satrted <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22" className="pl-2"/></svg>
      </Button>
    </div>)
  );
}
