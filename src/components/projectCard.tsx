import Link from "next/link";
import Image from "next/image";

function ProjectTag({ name }: { name: string }) {
  return (
    <div className="bg-[#D9E2EC] rounded-[20px] px-[16px] py-[4px] text-[16px]">
      <h3>{name}</h3>
    </div>
  );
}

type CardProps = {
  tags: string[];
  title: string;
  description: string;
  github: string;
  liveSite?: string;
};

export default function ProjectCard(props: CardProps) {
  const tags = props.tags || ["coming soon"];

  return (
    <div className="flex flex-col space-y-[20px] w-[550px]">
      {/* image here */}
      <div className="bg-[#ECF1F7] w-[550px] h-[300px] rounded-[5px]" />

      {/* tag carousel */}
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row space-x-[12px]">
          {tags.map((tag, index) => (
            <ProjectTag key={index} name={tag} />
          ))}
        </div>

        <div className="flex flex-row space-x-[12px] items-center">
          {props.github != "" ? (
            <Link href={props.github} target="_blank" rel="noopener noreferrer">
              <Image
                src="/github-logo.png"
                alt="GitHub"
                width={24}
                height={24}
              />
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

      {/* project details */}
      <div className="flex flex-col space-y-[12px]">
        <h1 className="text-[24px] font-[font-serif] leading-none">
          {props.title}
        </h1>
        <h2 className="text-[16px]">{props.description}</h2>
      </div>
    </div>
  );
}
