import ProjectCard from "@/components/projectCard";

export default function Home() {
  return (
    <div className="flex flex-col mt-[48px] mb-[250px] space-y-[96px]">
      {/* intro segment */}
      <div className="flex flex-col w-full space-y-[8px]">
        {/* row 1: name, description */}
        <div className="flex flex-row justify-between items-end">
          <h1 className="font-[font-serif] text-[52px] leading-none">
            jimin kim
          </h1>
          <h2 className="text-[28px] leading-none">
            a full stack developer who builds with creativity & heart :)
          </h2>
        </div>
        {/* row 2: ipa, current */}
        <div className="flex flex-row justify-between items-center">
          <h3 className="text-[20px]">ˈd͡ʒɪmɪn ˈkɪm</h3>
          <h3 className="text-[20px]">
            currently @ <strong>Nova, Tech for Good</strong> as lead developer,
            <strong> UCLA Student Media</strong> as DevOps Intern
          </h3>
        </div>
      </div>

      {/* selected works */}
      <div className="flex flex-col space-y-[48px]">
        <h2 className="text-[24px]">selected works</h2>

        {/* project carousel */}
        <div className="flex flex-row justify-between">
          <ProjectCard
            title="Inner City Visions (Contract)"
            tags={["TypeScript", "Firebase", "0-to-1"]}
            description="transforming manual workflows for a non profit organization with a full stack client management & data analysis platform "
          />
          <ProjectCard
            title="UCLA Student Media"
            tags={["React", "Python Flask", "B2C"]}
            description="redesigning and streamlining BruinLife photo studio's internal & external portals for a better user experience"
          />
        </div>
        <ProjectCard
          title="Clubhouse"
          tags={["JavaScript", "Node.js", "Supabase", "0-to-1"]}
          description="reimagining social connection @ UCLA with an anonymous club rating platform for 1200+ student organizations"
        />
      </div>
    </div>
  );
}
