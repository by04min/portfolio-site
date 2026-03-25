import { SECTION_SCROLL_CLASS } from "./constants";

export default function ShowsSection() {
  return (
    <section
      id="shows"
      className={`${SECTION_SCROLL_CLASS} flex flex-col space-y-[48px]`}
    >
      <h2 className="text-[24px] font-[font-serif]">
        Favorite shows &amp; movies
      </h2>
    </section>
  );
}
