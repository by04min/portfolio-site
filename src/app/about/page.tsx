"use client";

import { useEffect, useState } from "react";
import AboutHero from "./sections/hero";
import IntroSection from "./sections/intro";
import ExperienceSection from "./sections/experience";
import MusicSection from "./sections/music";
import ShowsSection from "./sections/shows";
import { SECTIONS } from "./sections/constants";

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    const elements = SECTIONS.map(({ id }) =>
      document.getElementById(id),
    ).filter(Boolean) as HTMLElement[];
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="flex flex-col mt-[48px] mb-[250px]">
      <div className="space-y-[36px]">
        <div className="flex flex-col md:grid md:grid-cols-[160px_1fr] gap-y-6 md:gap-x-[120px] md:gap-y-0">
          <div className="flex flex-col gap-y-8 md:gap-y-[60px] w-full min-w-0">
            <AboutHero />
            <div className="flex flex-row md:flex-col items-center md:items-stretch gap-x-4 md:gap-x-0 md:space-y-[16px]">
              {SECTIONS.flatMap((section, index) => {
                const button = (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className="flex items-center gap-2 text-[16px] hover:text-gray-300 transition-colors text-left"
                  >
                    {activeSection === section.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#354E6B] shrink-0" />
                    )}
                    <span
                      className={
                        activeSection === section.id ? "text-[#354E6B]" : ""
                      }
                    >
                      {section.label}
                    </span>
                  </button>
                );
                if (index === 0) return [button];
                return [
                  <div
                    key={`sp-${section.id}`}
                    className="h-4 w-px bg-gray-300 shrink-0 md:hidden"
                  />,
                  button,
                ];
              })}
            </div>
          </div>

          <div className="w-full min-w-0 flex flex-col space-y-[120px]">
            <IntroSection />
            <ExperienceSection />
            <MusicSection />
            <ShowsSection />
          </div>
        </div>
      </div>
    </div>
  );
}
