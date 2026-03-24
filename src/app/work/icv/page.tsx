"use client";
import { IconLink } from "@/components/iconLink";
import { useRouter } from "next/navigation";

export default function ICVPage() {
    const router = useRouter();
    return (
        <div className="flex flex-col mt-[48px] mb-[250px] gap-y-[80px] md:gap-y-[120px]">

            <div className="space-y-[16px]">
            <button onClick={() => {
                router.push("/work?tab=selectedWorks");
            }}>
                Back
            </button>
            {/* image here */}
            <div className="w-full aspect-[16/9] rounded-[12px] bg-neutral-200 dark:bg-neutral-800" />
            </div>

            {/* title, description & stack */}
            <div className="flex flex-col gap-y-[48px]">
            <div className="flex flex-col space-y-[16px] text-left">
                <h1 className="font-[font-serif] text-[48px] leading-none">
                    Inner City Visions
                </h1>
                <h3 className="text-[20px]">reinvented manual workflows with a centralized client management system, <br className="hidden md:block" />complete with service outcome analytics</h3>
                <div className="flex flex-row space-x-[12px] items-center">
                    <IconLink
                        href="https://github.com/novaforgood/ICV"
                        iconSrc="/github.svg"
                        iconAlt="GitHub"
                        label="view repo"
                        hoverTrigger="self"
                    />
                </div>
            </div>


            <div className="flex flex-col gap-y-[48px]">
            <div className="flex flex-col gap-y-[20px] sm:gap-y-[36px]">
            <div className="border-t border-neutral-300 dark:border-neutral-300" />
                <div className="grid grid-cols-1 min-[560px]:grid-cols-2 lg:grid-cols-3 gap-x-[48px] gap-y-[20px] sm:gap-y-[48px] text-left">
                    <div>
                        <h1 className="text-[20px] text-[#354E6B] flex items-center justify-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#354E6B] shrink-0" />
                            Role
                        </h1>
                        <h3 className="text-[16px]">
                            Developer Lead, Full Stack Developer
                        </h3>
                    </div>
                    <div>
                        <h1 className="text-[20px] text-[#354E6B] flex items-center justify-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#354E6B] shrink-0" />
                            Timeline
                        </h1>
                        <h3 className="text-[16px]">
                            Fall 2024 - Winter 2026
                        </h3>
                    </div>
                    <div>
                        <h1 className="text-[20px] text-[#354E6B] flex items-center justify-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#354E6B] shrink-0" />
                            Team
                        </h1>
                        <h3 className="text-[16px]">
                            5 Developers, 3 Designers, 2 Leads
                        </h3>
                    </div>
                    <div>
                        <h1 className="text-[20px] text-[#354E6B] flex items-center justify-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#354E6B] shrink-0" />
                            Frontend
                        </h1>
                        <p className="text-[16px]">Next.js, React, TypeScript, <br />Tailwind CSS, Zustand</p>
                    </div>
                    <div>
                        <h1 className="text-[20px] text-[#354E6B] flex items-center justify-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#354E6B] shrink-0" />
                            Backend
                        </h1>
                        <p className="text-[16px]">Node.js, Firebase <br />Firestore (NoSQL), Resend API</p>
                    </div>
                    <div>
                        <h1 className="text-[20px] text-[#354E6B] flex items-center justify-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#354E6B] shrink-0" />
                            Tools & Deployment
                        </h1>
                        <p className="text-[16px]">Git, GitHub, <br />GitHub Actions, Vercel</p>
                    </div>
                </div>
                
            <div className="border-t border-neutral-300 dark:border-neutral-300" />
            </div>
            </div>
            </div>
        </div>
    )
}