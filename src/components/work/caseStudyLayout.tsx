"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

import { MaterialSymbolIcon } from "@/components/icons/materialSymbolIcon";

const defaultHero = (
  <div className="w-full aspect-[16/9] rounded-[12px] bg-neutral-200 dark:bg-neutral-800" />
);

export type CaseStudyLayoutProps = {
  backTab: "selectedWorks" | "projects";
  title: ReactNode;
  description: ReactNode;
  actions: ReactNode;
  meta: ReactNode;
  hero?: ReactNode;
};

export function CaseStudyLayout({
  backTab,
  title,
  description,
  actions,
  meta,
  hero,
}: CaseStudyLayoutProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col mt-[48px] mb-[250px] gap-y-[60px]">
      <div className="space-y-[24px]">
        <button
          type="button"
          aria-label="Back"
          onClick={() => {
            router.push(`/work?tab=${backTab}`);
          }}
        >
          <div className="flex flex-row items-center gap-x-[8px] hover:text-gray-300">
            <MaterialSymbolIcon
              d="M648-192v-372H306l129 129-51 51-216-216 216-216 51 51-129 129h414v444h-72Z"
              size={24}
              aria-hidden
            />
            Back
          </div>
        </button>
        {hero ?? defaultHero}
      </div>
      <div className="flex flex-col gap-y-[48px]">
        <div className="flex flex-col space-y-[16px] text-left">
          <h1 className="font-[font-serif] text-[48px] leading-none">
            {title}
          </h1>
          <h3 className="text-[20px]">{description}</h3>
          <div className="flex flex-row space-x-[12px] items-center">
            {actions}
          </div>
        </div>
        {meta}
      </div>
    </div>
  );
}
