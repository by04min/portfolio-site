import { SelectedCard } from "@/components/projectCards";

export function SelectedWorksTab() {
  return (
    <div className="flex flex-col space-y-[36px]">
      <div className="flex flex-col space-y-[8px]">
        <h1 className="text-[24px] font-[font-serif]">Selected Works</h1>
        <h3 className="text-[16px]">
          a record of my career & drive to make impact
        </h3>
      </div>
      <SelectedCard
        img="/icv/cover.png"
        title="Inner City Visions"
        description={
          <>
            transformed a non profit's manual workflows with a full-stack client management system,
            <br className="hidden lg:block" />
             complete with service outcome analytics
          </>
        }
        github="https://github.com/novaforgood/ICV"
      />
      <SelectedCard
        img="/clubhouse/cover.png"
        title="Clubhouse"
        description="a UCLA-exclusive club discovery & rating platform featuring 1,200+ student orgs - built for students, by students!"
        github="https://github.com/kittenluv1/clubhouse"
        liveSite="https://www.clubhouseucla.com/"
      />
      <SelectedCard
        img="/blife/cover.png"
        title="UCLA Student Media"
        description="reinvented BruinLife Photo Studio's internal & external portals for a seamless, all-in-house experience"
        github=""
      />
    </div>
  );
}
