import { PreviewCard } from "@/components/projectCards";
import { ScrollCarousel } from "@/components/scrollCarousel";

export default function Home() {
  return (
    <div className="flex flex-col mt-[48px] mb-[250px] gap-y-[80px] md:gap-y-[120px]">
      {/* intro segment — stacked on sm, side-by-side on md+ */}
      <div className="flex flex-col md:flex-row md:justify-between w-full space-y-[24px] md:space-y-0">
        {/* left column: name, IPA */}
        <div className="flex flex-col space-y-[8px]">
          <h1 className="font-[font-serif] text-[48px] leading-none">
            jimin kim
          </h1>
          <h3 className="text-[20px]">ˈd͡ʒɪmɪn ˈkɪm</h3>
        </div>
        {/* right column: description, current */}
        <div className="flex flex-col space-y-[8px] md:items-end md:justify-end">
          <h2 className="text-[20px] md:text-[24px] leading-none">
            a software engineer bringing creativity & empathy to life :)
          </h2>
          <h3 className="text-[16px] md:text-[20px]">
            currently @ <strong>Nova, Tech for Good</strong> as lead developer
          </h3>
        </div>
      </div>

    <div className="space-y-[60px]"> 
      {/* selected works */}
      <div className="flex flex-col space-y-[36px]">
        <h1 className="text-[24px] font-[font-serif]">Selected Works</h1>

        {/* project carousel — vertical stack on mobile, horizontal scroll on md+ */}
        <ScrollCarousel>
          <div className="w-full lg:w-[550px] lg:flex-shrink-0 snap-center">
            <PreviewCard
              img="/icv/cover.png"
              title="Inner City Visions"
              description="transforming a non profit's manual workflows with a full-stack client management & data analysis platform"
              github="https://github.com/novaforgood/ICV"
              tags={["0-to-1", "web", "non-profit"]}
            />
          </div>
          <div className="w-full lg:w-[550px] lg:flex-shrink-0 snap-center">
            <PreviewCard
              img="/clubhouse/cover.png"
              title="Clubhouse"
              description="enhancing social connection at UCLA through a club discovery & rating platform for 1,200+ student orgs - built for students, by students!"
              github="https://github.com/kittenluv1/clubhouse"
              liveSite="https://www.clubhouseucla.com/"
              tags={["web", "100+ users"]}
            />
          </div>
          <div className="w-full lg:w-[550px] lg:flex-shrink-0 snap-center">
            <PreviewCard
              img="/blife/cover.png"
              title="UCLA Student Media"
              description="redesigning BruinLife Photo Studio's internal & external platforms for a seamless, all-in-house experience"
              github=""
              tags={["B2C", "web", "student org"]}
            />
          </div>
        </ScrollCarousel>
      </div>

      {/* experience */}
      {/* <div className="flex flex-col space-y-[48px]">
        <h1 className="text-[24px] font-[font-serif]">Experience</h1>
      </div> */}
    </div>
    </div>
  );
}
