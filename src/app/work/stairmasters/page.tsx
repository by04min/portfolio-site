import { IconLink } from "@/components/iconLink";
import { CaseStudyLayout } from "@/components/work/caseStudyLayout";
import { WorkMetaGrid, WorkMetaItem } from "@/components/work/workMetaGrid";

const stairmastersGridClassName =
  "grid grid-cols-1 min-[560px]:grid-cols-2 lg:grid-cols-4 gap-x-[48px] gap-y-[20px] sm:gap-y-[48px] text-left";

export default function StairmastersPage() {
  return (
    <CaseStudyLayout
      backTab="projects"
      title="Stairmasters"
      description="take stair-free accessible routes anywhere on the UCLA campus"
      actions={
        <IconLink
          href="https://github.com/AnthonyChui/NovaStairMasters"
          iconSrc="/github.svg"
          iconAlt="GitHub"
          label="view repo"
          hoverTrigger="self"
        />
      }
      meta={
        <WorkMetaGrid gridClassName={stairmastersGridClassName}>
          <WorkMetaItem label="Role">Frontend Developer</WorkMetaItem>
          <WorkMetaItem label="Timeline">Fall 2024</WorkMetaItem>
          <WorkMetaItem label="Team">3 Developers, 1 Designer</WorkMetaItem>
          <WorkMetaItem label="Tech Stack & Tools">
            Swift, SwiftUI, <br />
            Apple MapKit, Git, GitHub
          </WorkMetaItem>
        </WorkMetaGrid>
      }
    />
  );
}
