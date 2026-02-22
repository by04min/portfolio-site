import { ExplorationCard } from "@/components/projectCards";
export function ExplorationTab() {
  return (
    <div className="flex flex-col space-y-[36px]">
      <div className="flex flex-col space-y-[8px]">
        <h1 className="text-[24px] font-[font-serif]">Playground</h1>
        <h3 className="text-[16px]">
          a space for my curiosities & passions
        </h3>
      </div>
      <div className="flex flex-col lg:flex-row gap-[36px]">
        <div className="lg:flex-1 lg:min-w-0">
          <ExplorationCard
            img="/training"
            title="LLM Fine Tuning"
            description="prompt engineering, OpenAI API, LangChain and RAGs, Open LLMs, and using PEFT with fine-tuning to build a custom sLLM"
          />
        </div>
        <div className="lg:flex-1 lg:min-w-0">
          <ExplorationCard
            img="/training"
            title="Python and Machine Learning"
            description="using scikit-learn, numpy, and pandas to compare random forest, logistic regression, decision trees, and SVMs on datasets"
          />
        </div>
      </div>
    </div>
  );
}
