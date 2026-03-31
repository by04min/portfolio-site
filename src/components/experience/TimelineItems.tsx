import type { ReactNode } from "react";

type TimelineItemProps = {
  children: ReactNode;
};

export function TopTimelineItem({ children }: TimelineItemProps) {
  return (
    <div className="flex flex-row items-center gap-x-[24px]">
      <div className="relative flex w-[10px] flex-shrink-0 self-stretch items-center justify-center after:absolute after:left-1/2 after:top-1/2 after:bottom-0 after:w-px after:-translate-x-1/2 after:bg-gray-200">
        <div className="relative z-10 h-[10px] w-[10px] rounded-full bg-gray-900 ring-4 ring-white" />
      </div>
      {children}
    </div>
  );
}

export function MidTimelineItem({ children }: TimelineItemProps) {
  return (
    <div className="flex flex-row items-center gap-x-[24px]">
      <div className="relative flex w-[10px] flex-shrink-0 self-stretch items-center justify-center before:absolute before:left-1/2 before:top-0 before:bottom-1/2 before:w-px before:-translate-x-1/2 before:bg-gray-200 after:absolute after:left-1/2 after:top-1/2 after:bottom-0 after:w-px after:-translate-x-1/2 after:bg-gray-200">
        <div className="relative z-10 h-[10px] w-[10px] rounded-full bg-gray-900 ring-4 ring-white" />
      </div>
      {children}
    </div>
  );
}

export function BottomTimelineItem({ children }: TimelineItemProps) {
  return (
    <div className="flex flex-row items-center gap-x-[24px]">
      <div className="relative flex w-[10px] flex-shrink-0 self-stretch items-center justify-center before:absolute before:left-1/2 before:top-0 before:bottom-1/2 before:w-px before:-translate-x-1/2 before:bg-gray-200">
        <div className="relative z-10 h-[10px] w-[10px] rounded-full bg-gray-900 ring-4 ring-white" />
      </div>
      {children}
    </div>
  );
}

