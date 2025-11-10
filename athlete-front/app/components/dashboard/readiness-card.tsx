import { dashboardData } from "~/data/dashboard";

export function ReadinessCard() {
  const { readiness } = dashboardData;
  return (
    <div className="flex flex-col gap-3 rounded-xl bg-card-light p-4 shadow-sm dark:bg-card-dark">
      <p className="text-base font-medium leading-normal text-text-light-primary dark:text-text-dark-primary">
        Readiness
      </p>
      <p className="text-2xl font-bold text-primary">{readiness.score}</p>
      <p className="text-xs font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary">
        {readiness.description}
      </p>
      <div className="rounded-full bg-background-light dark:bg-background-dark">
        <div
          className="h-2 rounded-full bg-primary"
          style={{ width: `${readiness.progress}%` }}
        />
      </div>
    </div>
  );
}
