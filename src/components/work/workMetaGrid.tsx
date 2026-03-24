import type { ReactNode } from "react";

const defaultGridClassName =
    "grid grid-cols-1 min-[560px]:grid-cols-2 lg:grid-cols-3 gap-x-[48px] gap-y-[20px] sm:gap-y-[48px] text-left";

type WorkMetaGridProps = {
    children: ReactNode;
    gridClassName?: string;
};

export function WorkMetaGrid({ children, gridClassName }: WorkMetaGridProps) {
    return (
        <div className="flex flex-col gap-y-[48px]">
            <div className="flex flex-col gap-y-[20px] sm:gap-y-[36px]">
                <div className="border-t border-neutral-300 dark:border-neutral-300" />
                <div className={gridClassName ?? defaultGridClassName}>{children}</div>
                <div className="border-t border-neutral-300 dark:border-neutral-300" />
            </div>
        </div>
    );
}

type WorkMetaItemProps = {
    label: ReactNode;
    children: ReactNode;
};

export function WorkMetaItem({ label, children }: WorkMetaItemProps) {
    return (
        <div>
            <h1 className="text-[20px] text-[#354E6B] flex items-center justify-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#354E6B] shrink-0" />
                {label}
            </h1>
            <div className="text-[16px]">{children}</div>
        </div>
    );
}
