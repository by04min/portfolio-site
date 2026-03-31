import { IconLink } from "@/components/icons/iconLink";
import { CaseStudyLayout } from "@/components/work/caseStudyLayout";
import { WorkMetaGrid, WorkMetaItem } from "@/components/work/workMetaGrid";

export default function BruinLifePage() {
  return (
    <CaseStudyLayout
      backTab="selectedWorks"
      title="UCLA Student Media"
      description="reinvented BruinLife Photo Studio's internal & external portals for a seamless, all-in-house experience"
      actions={
        <IconLink
          iconSrc="/locked.svg"
          iconAlt="Locked"
          label="protected"
          hoverTrigger="self"
        />
      }
      meta={
        <WorkMetaGrid>
          <WorkMetaItem label="Role">Full Stack Developer</WorkMetaItem>
          <WorkMetaItem label="Timeline">
            Spring 2025 - Winter 2026
          </WorkMetaItem>
          <WorkMetaItem label="Team">
            6 Developers, 5 Designers, 2 Leads
          </WorkMetaItem>
          <WorkMetaItem label="Frontend">
            Next.js, React, <br />
            TypeScript, Tailwind CSS
          </WorkMetaItem>
          <WorkMetaItem label="Backend">Python, Flask, Alembic</WorkMetaItem>
          <WorkMetaItem label="Tools & Deployment">
            Git, GitHub, DigitalOcean
          </WorkMetaItem>
        </WorkMetaGrid>
      }
    />
  );
}
