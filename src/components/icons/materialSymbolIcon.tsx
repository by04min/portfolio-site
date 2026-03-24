export type MaterialSymbolIconProps = {
  d: string;
  size?: number;
  fill?: string;
  className?: string;
  viewBox?: string;
  "aria-hidden"?: boolean;
};

export function MaterialSymbolIcon({
  d,
  size = 24,
  fill = "#000000",
  className,
  viewBox = "0 -960 960 960",
  "aria-hidden": ariaHidden,
}: MaterialSymbolIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox={viewBox}
      width={size}
      fill={fill}
      className={className}
      aria-hidden={ariaHidden}
    >
      <path d={d} />
    </svg>
  );
}
