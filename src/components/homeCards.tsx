import Link from "next/link";
import Image from "next/image";

export function TagCarousel(props: { tags: string[] }) {
  return (
    <div className="flex flex-row space-x-[12px] items-center">
      {props.tags.map((tag) => (
        <h2 className="sm:text-[12px]md:text-[16px] bg-[#DCE6F3] rounded-[16px] px-[12px] py-[4px]">{tag}</h2>
      ))}
    </div>
  );
}

type CardProps = {
  img: string;
  title: string;
  description: string;
  github: string;
  liveSite?: string;
  tags?: string[];
};

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
        className="rounded-[5px] w-full h-auto aspect-[550/300] object-cover lg:w-[550px] lg:h-[300px]"
      />

      {/* project details */}
      <div className="flex flex-col space-y-[12px]">
        <div className="flex flex-row items-center justify-between">
        <h1 className="text-[22px] leading-none">
          {props.title}
        </h1>
        <div className="flex flex-row space-x-[12px] items-center">
          {props.github != "" ? (
            <Link href={props.github} target="_blank" rel="noopener noreferrer">
              <Image src="/github.svg" alt="GitHub" width={24} height={24} />
            </Link>
          ) : (
            <Image src="/locked.svg" alt="Locked" width={24} height={24} />
          )}
          {props.liveSite && (
            <Link
              href={props.liveSite}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/open-link.svg"
                alt="GoToLink"
                width={24}
                height={24}
              />
            </Link>
          )}
        </div>
        </div>

        <h2 className="text-[16px]">{props.description}</h2>
      </div>
      <TagCarousel tags={props.tags ?? []} />
    </div>
  );
}

// work: horizontal layout cards for selected works
export function SelectedCard(props: CardProps) {

  return (
    <div className="flex flex-row justify-between w-full">
      {/* image here */}
      <Image
        src={props.img}
        alt="MeowMate"
        width={550}
        height={300}
        className="rounded-[5px] w-[550px] h-[300px] object-cover"
      />

      <div className="flex flex-col justify-between space-y-[16px] w-[550px] h-[300]">
        {/* project details */}
        <div className="flex flex-col space-y-[12px]">
          <h1 className="text-[24px] font-[font-serif] leading-none">
            {props.title}
          </h1>
          <h2 className="text-[16px]">{props.description}</h2>
        </div>

        {/* tag carousel */}
        <div className="flex flex-row items-center justify-between">

          <div className="flex flex-row space-x-[12px] items-center">
            {props.github != "" ? (
              <Link
                href={props.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/github.svg" alt="GitHub" width={24} height={24} />
              </Link>
            ) : (
              <Image src="/locked.svg" alt="Locked" width={24} height={24} />
            )}
            {props.liveSite && (
              <Link
                href={props.liveSite}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/open-link.svg"
                  alt="GoToLink"
                  width={24}
                  height={24}
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}