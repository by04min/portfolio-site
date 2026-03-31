import ExpField from "@/components/experience/expField";
import {
  BottomTimelineItem,
  MidTimelineItem,
  TopTimelineItem,
} from "@/components/experience/TimelineItems";
import { SECTION_SCROLL_CLASS } from "./constants";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className={`${SECTION_SCROLL_CLASS} flex flex-col space-y-[48px]`}
    >
      <h2 className="text-[24px] font-[font-serif]">Experience</h2>

      <div className="flex flex-col space-y-[36px]">
        <TopTimelineItem>
          <ExpField
            image="/experience/uclaLogo.png"
            img_width={80}
            img_height={80}
            company="Department of Linguistics"
            role="Undergraduate Research Assistant (Student Programmer)"
            timeline="03/2026 - Present"
          />
        </TopTimelineItem>

        <MidTimelineItem>
          <ExpField
            image="/experience/crjwLogo.png"
            img_width={80}
            img_height={80}
            company="Center for Restorative Justice Works"
            role="Developer Lead & Full Stack Developer (Contract)"
            timeline="02/2026 - Present"
          />
        </MidTimelineItem>

        <MidTimelineItem>
          <ExpField
            image="/experience/icvLogo.png"
            img_width={80}
            img_height={80}
            company="Inner City Visions"
            role="Developer Lead & Full Stack Developer (Contract)"
            timeline="09/2024 - 03/2026"
          />
        </MidTimelineItem>

        <BottomTimelineItem>
          <ExpField
            image="/experience/blifeLogo.png"
            img_width={80}
            img_height={80}
            company="UCLA Student Media - BruinLife"
            role="DevOps Intern"
            timeline="03/2025 - 01/2026"
          />
        </BottomTimelineItem>
      </div>
    </section>
  );
}
