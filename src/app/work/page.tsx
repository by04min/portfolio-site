import { SelectedCard, ExploreCard } from "@/components/projectCards";

export default function WorkPage() {
  return (
    <div className="flex flex-col mt-[48px] mb-[250px] space-y-[96px]">
      {/* intro segment */}
      <div className="flex flex-col w-full space-y-[8px]">
        <h1 className="font-[font-serif] text-[52px] leading-none">work</h1>

        <h3 className="text-[20px]">ˈwɝk</h3>
      </div>

      {/* selected works */}
      <div className="flex flex-col space-y-[48px]">
        <div className="flex flex-col space-y-[8px]">
          <h2 className="text-[24px]">selected works</h2>
          <h3 className="text-[16px]">
            a record of my career & drive to create impact
          </h3>
        </div>

        {/* project carousel */}
        <div className="flex flex-col space-y-[72px]">
          <SelectedCard
            img="/icv/cover.png"
            title="Inner City Visions (Contract)"
            tags={["TypeScript", "Google Cloud Firestore", "0-to-1"]}
            description="transforming a non profit's manual workflows with a full-stack client management & data analysis platform"
            github="https://github.com/novaforgood/ICV"
          />
          <SelectedCard
            img="/clubhouse/cover.png"
            title="Clubhouse"
            tags={["JavaScript", "Node.js", "Supabase"]}
            description="enhancing social connection at UCLA through a club discovery & rating platform for 1,200+ student orgs - built for students, by students!"
            github="https://github.com/kittenluv1/clubhouse"
            liveSite="https://www.clubhouseucla.com/"
          />
          <SelectedCard
            img="/blife/cover.png"
            title="UCLA Student Media"
            tags={["React", "Python Flask", "B2C"]}
            description="redesigning BruinLife Photo Studio's internal & external platforms for a seamless, all-in-house experience"
            github=""
          />
          <SelectedCard
            img="/meowmate/cover.png"
            title="MeowMate"
            tags={["React Native", "Mongo DB", "Google Gemini"]}
            description="reimagining cat adoption with a Tinder-like interface and AI-enhanced profiles to help cats find their purr-fect home"
            github="https://github.com/by04min/MeowMateRepo"
          />
        </div>
      </div>

      {/* exploration */}
      <div className="flex flex-col space-y-[48px]">
        <div className="flex flex-col space-y-[8px]">
          <h2 className="text-[24px]">exploration</h2>
          <h3 className="text-[16px]">
            a collection of projects & studies where curiosities unfold
          </h3>
        </div>

        {/* <div className="flex flex-row justify-between">
          <ExploreCard
            img="/stairmasters/cover.png"
            title="Stairmasters"
            tag="mobile dev"
            github="https://github.com/AnthonyChui/NovaStairMasters"
          />
          <ExploreCard
            img="/training/sLLM.jpg"
            title="LLM Fine Tuning"
            tag="professional training"
          />
        </div> */}


        {/* hello */}
      </div>
    </div>
  );
}
