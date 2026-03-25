import { SECTION_SCROLL_CLASS } from "./constants";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className={`${SECTION_SCROLL_CLASS} flex flex-col space-y-[48px]`}
    >
      <h2 className="text-[24px] font-[font-serif]">Experience</h2>
    </section>
  );
}
