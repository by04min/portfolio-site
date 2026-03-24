import { IconLink } from "@/components/iconLink";
import { CaseStudyLayout } from "@/components/work/caseStudyLayout";
import { WorkMetaGrid, WorkMetaItem } from "@/components/work/workMetaGrid";

export default function MeowmatePage() {
  return (
    <CaseStudyLayout
      backTab="projects"
      title="MeowMate"
      description="reimagined cat adoption with a Tinder-like interface and AI-enhanced profiles to help cats find their purr-fect home"
      actions={
        <IconLink
          href="https://github.com/by04min/MeowMateRepo"
          iconSrc="/github.svg"
          iconAlt="GitHub"
          label="view repo"
          hoverTrigger="self"
        />
      }
      meta={
        <WorkMetaGrid>
          <WorkMetaItem label="Role">
            Developer Lead, Frontend Developer
          </WorkMetaItem>
          <WorkMetaItem label="Timeline">
            Winter 2025 - Spring 2026
          </WorkMetaItem>
          <WorkMetaItem label="Team">
            4 Developers, 5 Designers, 2 Leads
          </WorkMetaItem>
          <WorkMetaItem label="Frontend">React Native, CSS, Expo </WorkMetaItem>
          <WorkMetaItem label="Backend">
            Node.js, Supabase, <br />
            Google Gemini (1.5 Flash)
          </WorkMetaItem>
          <WorkMetaItem label="Tools">Git, GitHub</WorkMetaItem>
        </WorkMetaGrid>
      }
    />
  );
}
