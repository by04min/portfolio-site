import { IconLink } from "@/components/iconLink";

export default function ClubhousePage() {
    return (
        <div className="flex flex-col mt-[48px] mb-[250px] gap-y-[80px] md:gap-y-[120px]">
            <div className="w-full aspect-[16/9] rounded-[12px] bg-neutral-200 dark:bg-neutral-800" />
            
            {/* title, description & stack */}
            <div className="flex flex-col gap-y-[48px]">
            <div className="flex flex-col space-y-[16px] text-left">
                <h1 className="font-[font-serif] text-[48px] leading-none">
                    Clubhouse
                </h1>
                <h3 className="text-[20px]">a UCLA-exclusive club discovery & rating app<br className="hidden md:block" /> featuring 1,200+ student orgs. built for students, by students!</h3>
                <div className="flex flex-row space-x-[12px] items-center">
                    <IconLink
                        href="https://github.com/kittenluv1/clubhouse"
                        iconSrc="/github.svg"
                        iconAlt="GitHub"
                        label="view repo"
                        hoverTrigger="self"
                    />
                    <IconLink
                        href="https://www.clubhouseucla.com/"
                        iconSrc="/open-link.svg"
                        iconAlt="GoToLink"
                        label="live site"
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
                            Full Stack Developer
                        </h3>
                    </div>
                    <div>
                        <h1 className="text-[20px] text-[#354E6B] flex items-center justify-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#354E6B] shrink-0" />
                            Timeline
                        </h1>
                        <h3 className="text-[16px]">
                            Spring - Fall 2025
                        </h3>
                    </div>
                    <div>
                        <h1 className="text-[20px] text-[#354E6B] flex items-center justify-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#354E6B] shrink-0" />
                            Team
                        </h1>
                        <h3 className="text-[16px]">
                            4 Developers, 3 Designers, <br />4 Leads, 3 Marketers
                        </h3>
                    </div>
                    <div>
                        <h1 className="text-[20px] text-[#354E6B] flex items-center justify-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#354E6B] shrink-0" />
                            Frontend
                        </h1>
                        <p className="text-[16px]">Next.js, React, JavaScript, <br />Tailwind CSS, Framer Motion</p>
                    </div>
                    <div>
                        <h1 className="text-[20px] text-[#354E6B] flex items-center justify-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#354E6B] shrink-0" />
                            Backend
                        </h1>
                        <p className="text-[16px]">Node.js, Supabase (PostgreSQL)<br />UCLA SOLE API, Resend API</p>
                    </div>
                    <div>
                        <h1 className="text-[20px] text-[#354E6B] flex items-center justify-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#354E6B] shrink-0" />
                            Tools & Deployment
                        </h1>
                        <p className="text-[16px]">Git, GitHub, Vercel</p>
                    </div>
                </div>
                
            <div className="border-t border-neutral-300 dark:border-neutral-300" />
            </div>
            </div>
            </div>
        </div>
    )
}