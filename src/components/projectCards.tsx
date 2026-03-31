import Link from "next/link";
import Image from "next/image";
import { IconLink } from "./icons/iconLink";

export function TagCarousel(props: { tags: string[] }) {
  return (
    <div className="flex flex-row space-x-[12px] items-center">
      {props.tags.map((tag, index) => (
        <h2
          key={`${tag}-${index}`}
          className="sm:text-[12px]md:text-[16px] bg-gray-100 rounded-[16px] px-[12px] py-[4px]"
        >
          {tag}
        </h2>
      ))}
    </div>
  );
}

type CardProps = {
  img: string;
  title: string;
  description: string | React.ReactNode;
  github: string;
  liveSite?: string;
  tags?: string[];
  caseHref?: string;
};

type ExplorationCardProps = Pick<CardProps, "img" | "title" | "description">;

// home page: vertical layout cards for selected works
export function PreviewCard(props: CardProps) {
  return (
    <div className="flex flex-col space-y-[20px] w-full lg:w-[550px]">
      {/* image here */}
      <Image
        src={props.img}
        alt="MeowMate"
        width={550}
        height={300}
        className="rounded-[12px] w-full h-auto aspect-[550/300] object-cover lg:w-[550px] lg:h-[300px]"
      />

      {/* project details */}
      <div className="flex flex-col space-y-[12px]">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-[22px] leading-none">{props.title}</h1>
          <div className="flex flex-row space-x-[12px] items-center">
            <IconLink
              href={props.github || undefined}
              iconSrc={props.github ? "/github.svg" : "/locked.svg"}
              iconAlt={props.github ? "GitHub" : "Locked"}
              label={props.github ? "view repo" : "protected"}
              hoverTrigger="self"
            />
            {props.liveSite && (
              <IconLink
                href={props.liveSite}
                iconSrc="/open-link.svg"
                iconAlt="GoToLink"
                label="live site"
                hoverTrigger="self"
              />
            )}
          </div>
        </div>

        <h2 className="text-[16px]">{props.description}</h2>
      </div>
      <TagCarousel tags={props.tags ?? []} />
    </div>
  );
}

// work: vertical layout cards for selected works
export function SelectedCard(props: CardProps) {
  return (
    <div
      className={`flex flex-col w-full space-y-[24px] ${props.caseHref ? "group/card" : ""}`}
    >
      {/* image here - wrapped in Link only when caseHref provided to avoid nested <a> */}
      {props.caseHref ? (
        <Link href={props.caseHref} className="block">
          <Image
            src={props.img}
            alt={props.title}
            width={900}
            height={500}
            className="rounded-[12px] w-full h-auto aspect-[9/5] object-cover max-w-[900px] transition-transform duration-300 ease-in-out origin-center group-hover/card:scale-[0.99]"
          />
        </Link>
      ) : (
        <Image
          src={props.img}
          alt={props.title}
          width={900}
          height={500}
          className="rounded-[12px] w-full h-auto aspect-[9/5] object-cover max-w-[900px]"
        />
      )}

      <div className="flex flex-col space-y-[12px] w-full max-w-[900px]">
        {/* title and links on same row - buttons expand on card hover when caseHref */}
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-[22px] leading-none">{props.title}</h1>
          <div className="flex flex-row space-x-[12px] items-center">
            <IconLink
              href={props.github || undefined}
              iconSrc={props.github ? "/github.svg" : "/locked.svg"}
              iconAlt={props.github ? "GitHub" : "Locked"}
              label={props.github ? "view repo" : "protected"}
              hoverTrigger={props.caseHref ? "parent" : "self"}
            />
            {props.liveSite && (
              <IconLink
                href={props.liveSite}
                iconSrc="/open-link.svg"
                iconAlt="GoToLink"
                label="live site"
                hoverTrigger={props.caseHref ? "parent" : "self"}
              />
            )}
          </div>
        </div>
        <h2 className="text-[16px]">{props.description}</h2>
      </div>
    </div>
  );
}

export function ExplorationCard(props: ExplorationCardProps) {
  return (
    <div className="flex flex-col w-full space-y-[24px]">
      {/* image here - smaller than SelectedCard */}
      <Image
        src={props.img}
        alt={props.title}
        width={550}
        height={300}
        className="rounded-[12px] w-full h-auto aspect-[550/300] object-cover max-w-[550px]"
      />

      <div className="flex flex-col space-y-[12px] w-full max-w-[550px]">
        <h1 className="text-[22px] leading-none">{props.title}</h1>
        <h2 className="text-[16px]">{props.description}</h2>
      </div>
    </div>
  );
}
