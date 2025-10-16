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
            a full-stack developer bringing creativity and empathy to life :)
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
            tags={["TypeScript", "Google Cloud Firestore", "0-to-1"]}
            description="transforming a non profit's manual workflows with a full-stack client management & data analysis platform"
            github="https://github.com/novaforgood/ICV"
          />
          <ProjectCard
            title="Clubhouse"
            tags={["JavaScript", "Node.js", "Supabase"]}
            description="enhancing social connection at UCLA through a club discovery & rating platform for 1,200+ student orgs - built for students, by students!"
            github="https://github.com/kittenluv1/clubhouse"
            liveSite="https://www.clubhouseucla.com/"
          />
        </div>

        <div className="flex flex-row justify-between">
          <ProjectCard
            title="UCLA Student Media"
            tags={["React", "Python Flask", "B2C"]}
            description="redesigning BruinLife Photo Studio's internal and external platforms for a seamless, all-in-house experience"
            github=""
          />
          <ProjectCard
            title="MeowMate"
            tags={["React Native", "Mongo DB", "Google Gemini"]}
            description="reimagining cat adoption with a Tinder-like interface and AI-enhanced profiles to help cats find their purr-fect home"
            github="https://github.com/by04min/MeowMateRepo"
          />
        </div>
      </div>
    </div>
  );
}
