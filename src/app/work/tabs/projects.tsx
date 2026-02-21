import { SelectedCard } from "@/components/projectCards";

export function ProjectsTab() {
  return (
    <div className="flex flex-col space-y-[36px]">
      <div className="flex flex-col space-y-[8px]">
        <h1 className="text-[24px] font-[font-serif]">Projects</h1>
        <h3 className="text-[16px]">
          writing the world's stories with code
        </h3>
      </div>
      <SelectedCard
        img="/meowmate/cover.png"
        title="MeowMate"
        description="reimagining cat adoption with a Tinder-like interface and AI-enhanced profiles to help cats find their purr-fect home"
        github="https://github.com/by04min/MeowMateRepo"
      />
      <SelectedCard
        img="/stairmasters/cover.png"
        title="Stairmasters"
        description="providing stair-free accessible routes across the UCLA campus"
        github="https://github.com/AnthonyChui/NovaStairMasters"
      />
    </div>
  );
}
