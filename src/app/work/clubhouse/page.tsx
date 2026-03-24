import { IconLink } from "@/components/iconLink";
import { CaseStudyLayout } from "@/components/work/caseStudyLayout";
import { WorkMetaGrid, WorkMetaItem } from "@/components/work/workMetaGrid";

export default function ClubhousePage() {
  return (
    <CaseStudyLayout
      backTab="selectedWorks"
      title="Clubhouse"
      description={
        <>
          a UCLA-exclusive club discovery & rating app
          <br className="hidden md:block" /> featuring 1,200+ student orgs.
          built for students, by students!
        </>
      }
      actions={
        <>
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
        </>
      }
      meta={
        <WorkMetaGrid>
          <WorkMetaItem label="Role">Full Stack Developer</WorkMetaItem>
          <WorkMetaItem label="Timeline">Spring - Fall 2025</WorkMetaItem>
          <WorkMetaItem label="Team">
            4 Developers, 3 Designers, <br />4 Leads, 3 Marketers
          </WorkMetaItem>
          <WorkMetaItem label="Frontend">
            Next.js, React, JavaScript, <br />
            Tailwind CSS, Framer Motion
          </WorkMetaItem>
          <WorkMetaItem label="Backend">
            Node.js, Supabase (PostgreSQL)
            <br />
            UCLA SOLE API, Resend API
          </WorkMetaItem>
          <WorkMetaItem label="Tools & Deployment">
            Git, GitHub, Vercel
          </WorkMetaItem>
        </WorkMetaGrid>
      }
    />
  );
}
