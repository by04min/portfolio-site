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
};

export default function ProjectCard(props: CardProps) {
  const tags = props.tags || ["coming soon"];

  return (
    <div className="flex flex-col space-y-[20px] w-[550px]">
      {/* image here */}
      <div className="bg-[#ECF1F7] w-[550px] h-[300px] rounded-[5px]" />

      {/* tag carousel */}
      <div className="flex flex-row space-x-[12px]">
        {tags.map((tag, index) => (
          <ProjectTag key={index} name={tag} />
        ))}
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
