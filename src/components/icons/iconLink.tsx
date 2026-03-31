import Link from "next/link";
import Image from "next/image";

type IconLinkProps = {
  href?: string;
  iconSrc: string;
  iconAlt: string;
  label: string;
  /** "self" = expand on link hover (e.g. PreviewCard). "parent" = expand on parent card hover (e.g. SelectedCard with caseHref) */
  hoverTrigger?: "self" | "parent";
};

const baseClasses =
  "flex items-center rounded-full bg-gray-100 px-2 py-2 pr-2 transition-all duration-500 ease-in-out";
const linkClasses = "hover:bg-gray-200 hover:pr-3";
const spanBase =
  "overflow-hidden max-w-0 transition-all duration-500 ease-in-out whitespace-nowrap ml-0 text-[14px] text-gray-700";

export function IconLink({
  href,
  iconSrc,
  iconAlt,
  label,
  hoverTrigger = "self",
}: IconLinkProps) {
  const wrapperClass =
    hoverTrigger === "parent"
      ? "group-hover/card:pr-3"
      : "group hover:pr-3";
  const spanHoverClass =
    hoverTrigger === "parent"
      ? "group-hover/card:max-w-[80px] group-hover/card:ml-2"
      : "group-hover:max-w-[80px] group-hover:ml-2";

  const content = (
    <>
      <Image src={iconSrc} alt={iconAlt} width={24} height={24} />
      <span
        className={`${spanBase} ${spanHoverClass}`}
      >
        {label}
      </span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${linkClasses} ${wrapperClass}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <div
      className={`${baseClasses} cursor-default ${wrapperClass}`}
    >
      {content}
    </div>
  );
}
