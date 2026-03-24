import { IconLink } from "@/components/iconLink";
import { CaseStudyLayout } from "@/components/work/caseStudyLayout";
import { WorkMetaGrid, WorkMetaItem } from "@/components/work/workMetaGrid";

export default function ICVPage() {
  return (
    <CaseStudyLayout
      backTab="selectedWorks"
      title="Inner City Visions"
      description={
        <>
          reinvented manual workflows with a centralized client management
          system, <br className="hidden md:block" />
          complete with service outcome analytics
        </>
      }
      actions={
        <IconLink
          href="https://github.com/novaforgood/ICV"
          iconSrc="/github.svg"
          iconAlt="GitHub"
          label="view repo"
          hoverTrigger="self"
        />
      }
      meta={
        <WorkMetaGrid>
          <WorkMetaItem label="Role">
            Developer Lead, Full Stack Developer
          </WorkMetaItem>
          <WorkMetaItem label="Timeline">Fall 2024 - Winter 2026</WorkMetaItem>
          <WorkMetaItem label="Team">
            5 Developers, 3 Designers, 2 Leads
          </WorkMetaItem>
          <WorkMetaItem label="Frontend">
            Next.js, React, TypeScript, <br />
            Tailwind CSS, Zustand
          </WorkMetaItem>
          <WorkMetaItem label="Backend">
            Node.js, Firebase <br />
            Firestore (NoSQL), Resend API
          </WorkMetaItem>
          <WorkMetaItem label="Tools & Deployment">
            Git, GitHub, <br />
            GitHub Actions, Vercel
          </WorkMetaItem>
        </WorkMetaGrid>
      }
    />
  );
}
