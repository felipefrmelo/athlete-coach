import { dashboardData } from "~/data/dashboard";

export function LastActivityCard() {
  const { lastActivity } = dashboardData;
  return (
    <div className="flex flex-col gap-3 rounded-xl bg-card-light p-4 shadow-sm dark:bg-card-dark">
      <p className="text-base font-medium leading-normal text-text-light-primary dark:text-text-dark-primary">
        Last Activity
      </p>
      <p className="text-lg font-bold text-text-light-primary dark:text-text-dark-primary">
        {lastActivity.title}
      </p>
      <div className="flex items-center">
        <span className="rounded-full bg-mint-green/20 px-2 py-0.5 text-xs font-semibold text-mint-green">
          {lastActivity.status}
        </span>
      </div>
    </div>
  );
}
