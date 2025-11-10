import { WorkoutCard } from "~/components/workout-card";
import { weeklyPlan } from "~/data/ai-coach-plan";

export default function AiCoachPlan() {
  return (
    <>
      <header className="sticky top-0 z-10 flex items-center justify-between bg-background-light/80 p-4 pb-3 backdrop-blur-sm dark:bg-background-dark/80">
        <div className="flex size-12 shrink-0 items-center justify-start">
          <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-neutral-800 dark:text-neutral-200">
            <span className="material-symbols-outlined text-2xl">
              arrow_back_ios_new
            </span>
          </button>
        </div>
        <h1 className="flex-1 text-center text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          AI Coach Plan
        </h1>
        <div className="flex w-12 items-center justify-end">
          <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-neutral-800 dark:text-neutral-200">
            <span className="material-symbols-outlined text-2xl">
              more_vert
            </span>
          </button>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 pt-2">
        <div className="flex items-baseline justify-between py-2">
          <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
            This Week
          </h2>
          <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
            May 27 - Jun 2
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {weeklyPlan.map((item, index) => (
            <WorkoutCard key={index} item={item} />
          ))}
        </div>
      </main>
    </>
  );
}
