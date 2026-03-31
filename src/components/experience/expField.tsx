import Image from "next/image";

type ExpFieldProps = {
  image: string;
  img_width: number;
  img_height: number;
  company: string;
  role: string;
  timeline: string;
  description?: string;
};

export default function ExpField(props: ExpFieldProps) {
  const framePaddingPx = 6;
  const frameWidthPx = props.img_width + framePaddingPx * 2;
  const frameHeightPx = props.img_height + framePaddingPx * 2;

  return (
    <div className="flex flex-row gap-x-[12px] items-center justify-start ">
      <div
        className="flex flex-shrink-0 items-center justify-center self-center"
        style={{
          width: frameWidthPx,
          height: frameHeightPx,
          padding: framePaddingPx,
        }}
      >
        <Image
          src={props.image}
          alt={props.company}
          width={props.img_width}
          height={props.img_height}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col space-y-[4px]">
      <p className="text-[16px] text-gray-400">{props.timeline}</p>
        <h3 className="text-[22px]">{props.company}</h3>
        <h3 className="text-[16px] text-gray-600">{props.role}</h3>
       
      </div>
    </div>
  );
}
