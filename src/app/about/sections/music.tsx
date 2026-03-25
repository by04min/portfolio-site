import { SECTION_SCROLL_CLASS } from "./constants";

export default function MusicSection() {
  return (
    <section
      id="music"
      className={`${SECTION_SCROLL_CLASS} flex flex-col space-y-[48px]`}
    >
      <h2 className="text-[24px] font-[font-serif]">Current favorite music</h2>
    </section>
  );
}
