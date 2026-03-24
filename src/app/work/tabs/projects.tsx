import { SelectedCard } from "@/components/projectCards";

export function ProjectsTab() {
  return (
    <div className="flex flex-col space-y-[36px]">
      <div className="flex flex-col space-y-[8px]">
        <h1 className="text-[24px] font-[font-serif]">Projects</h1>
        <h3 className="text-[16px]">
          exploring the world's stories through code
        </h3>
      </div>
      <SelectedCard
        img="/meowmate/cover.png"
        title="MeowMate"
        caseHref="/work/meowmate"
        description="reimagined cat adoption with a Tinder-like interface and AI-enhanced profiles to help cats find their purr-fect home"
        github="https://github.com/by04min/MeowMateRepo"
      />
      <SelectedCard
        img="/stairmasters/cover.png"
        title="Stairmasters"
        caseHref="/work/stairmasters"
        description="take stair-free accessible routes anywhere on the UCLA campus"
        github="https://github.com/AnthonyChui/NovaStairMasters"
      />
    </div>
  );
}
