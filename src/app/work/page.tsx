"use client";

import { SelectedWorksTab } from "./tabs/selectedWorks";
import { ProjectsTab } from "./tabs/projects";
import { ExplorationTab } from "./tabs/exploration";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function WorkPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedTab = searchParams.get("tab") || "selectedWorks";

  const handleTabClick = (tab: string) => {
    router.replace(`${pathname}?tab=${tab}`);
  };

  return (
    <div className="flex flex-col mt-[48px] mb-[250px] space-y-[120px]">
      {/* intro segment */}
      <div className="flex flex-col w-full space-y-[8px]">
      <div className="flex flex-row justify-between items-end">
        <h1 className="font-[font-serif] text-[52px] leading-none">work</h1>
      
          </div>

        <h3 className="text-[20px]">ˈwɝk</h3>
      </div>

      <div className="space-y-[36px]">
      <div className="flex flex-col md:grid md:grid-cols-[160px_1fr] gap-y-6 md:gap-x-[120px] md:gap-y-0">
        {/* nav: row with dividers on smaller than md, column on md+ */}
        <div className="flex flex-row md:flex-col items-center md:items-stretch gap-x-4 md:gap-x-0 md:space-y-[16px]">
          <button
            onClick={() => handleTabClick("selectedWorks")}
            className="flex items-center gap-2 text-[16px] hover:text-gray-300 transition-colors text-left"
          >
            {selectedTab === "selectedWorks" && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#354E6B] shrink-0" />
            )}
            <span className={selectedTab === "selectedWorks" ? "text-[#354E6B]" : ""}>
              Selected Works
            </span>
          </button>
          <div className="h-4 w-px bg-gray-300 shrink-0 md:hidden" />
          <button
            onClick={() => handleTabClick("projects")}
            className="flex items-center gap-2 text-[16px] hover:text-gray-300 transition-colors text-left"
          >
            {selectedTab === "projects" && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#354E6B] shrink-0" />
            )}
            <span className={selectedTab === "projects" ? "text-[#354E6B]" : ""}>
              Projects
            </span>
          </button>
          <div className="h-4 w-px bg-gray-300 shrink-0 md:hidden" />
          <button
            onClick={() => handleTabClick("exploration")}
            className="flex items-center gap-2 text-[16px] hover:text-gray-300 transition-colors text-left"
          >
            {selectedTab === "exploration" && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#354E6B] shrink-0" />
            )}
            <span className={selectedTab === "exploration" ? "text-[#354E6B]" : ""}>
              Exploration
            </span>
          </button>
        </div>

        <div className="w-full min-w-0">
        {selectedTab === "selectedWorks" && <SelectedWorksTab />}
        {selectedTab === "projects" && <ProjectsTab />}
        {selectedTab === "exploration" && <ExplorationTab />}
        </div>
      </div>
      </div>
    </div>
  );
}