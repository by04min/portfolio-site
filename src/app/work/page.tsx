import { SelectedCard, PreviewCard } from "@/components/homeCards";

export default function WorkPage() {
  return (
    <div className="flex flex-col mt-[48px] mb-[250px] space-y-[120px]">
      {/* intro segment */}
      <div className="flex flex-col w-full space-y-[8px]">
      <div className="flex flex-row justify-between items-end">
        <h1 className="font-[font-serif] text-[52px] leading-none">work</h1>
      
          </div>

        <h3 className="text-[20px]">ˈwɝk</h3>
      </div>

      <div className="space-y-[60px]"> 

      {/* selected works */}
      <div className="flex flex-col space-y-[36px]">
        <div className="flex flex-col space-y-[8px]">
        <h1 className="text-[24px] font-[font-serif]">Experience</h1>
          <h3 className="text-[16px]">
            a record of my career & drive to make impact
          </h3>
        </div>

        {/* project carousel */}
        <div className="flex flex-col space-y-[72px]">
          <SelectedCard
            img="/icv/cover.png"
            title="Inner City Visions (Contract)"
            description="transforming a non profit's manual workflows with a full-stack client management & data analysis platform"
            github="https://github.com/novaforgood/ICV"
          />
          <SelectedCard
            img="/clubhouse/cover.png"
            title="Clubhouse"
            description="enhancing social connection at UCLA through a club discovery & rating platform for 1,200+ student orgs - built for students, by students!"
            github="https://github.com/kittenluv1/clubhouse"
            liveSite="https://www.clubhouseucla.com/"
          />
          <SelectedCard
            img="/blife/cover.png"
            title="UCLA Student Media"
            description="redesigning BruinLife Photo Studio's internal & external platforms for a seamless, all-in-house experience"
            github=""
          />
        </div>
      </div>

      {/* exploration */}
      <div className="flex flex-col space-y-[36px]">
        <div className="flex flex-col space-y-[8px]">
        <h1 className="text-[24px] font-[font-serif]">Exploration</h1>
          <h3 className="text-[16px]">
            a collection of curiosity & passion
          </h3>
        </div>

        <div className="flex flex-row justify-between">
        <PreviewCard
            img="/meowmate/cover.png"
            title="MeowMate"
            description="reimagining cat adoption with a Tinder-like interface and AI-enhanced profiles to help cats find their purr-fect home"
            github="https://github.com/by04min/MeowMateRepo"
            
          />
          <PreviewCard
            img="/stairmasters/cover.png"
            title="Stairmasters"
            description="providing stair-free accessible routes across the UCLA campus"
            github="https://github.com/AnthonyChui/NovaStairMasters"
          />
        </div>

      </div>
      </div>
    </div>
  );
}
