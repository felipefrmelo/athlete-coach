import { dashboardData } from "~/data/dashboard";

export function MilestoneCard() {
  const { milestone } = dashboardData;
  return (
    <div className="col-span-2 flex flex-col gap-2 rounded-xl bg-card-light p-4 shadow-sm dark:bg-card-dark">
      <p className="text-base font-medium leading-normal text-text-light-primary dark:text-text-dark-primary">
        {milestone.title}
      </p>
      <p className="text-sm font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary">
        {milestone.description}
      </p>
    </div>
  );
}
