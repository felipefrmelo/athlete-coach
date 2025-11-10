import { weeklyPlan } from "~/data/ai-coach-plan";
import { Button } from "./ui/button";

function getStatusBadge(status: string) {
  switch (status) {
    case "Completed":
      return "flex items-center gap-2 rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-600 dark:bg-green-500/20 dark:text-green-400";
    default:
      return "flex items-center gap-2 rounded-full bg-neutral-500/10 px-2.5 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-500/20 dark:text-neutral-400";
  }
}

export function WorkoutCard({
  item,
}: {
  item: (typeof weeklyPlan)[0];
}) {
  if (item.status === "Rest") {
    return (
      <div className="flex items-center gap-4">
        <div className="flex w-16 flex-col items-center">
          <p className="text-xs font-semibold uppercase text-neutral-500 dark:text-neutral-400">
            {item.day}
          </p>
          <p className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
            {item.date}
          </p>
        </div>
        <div className="flex h-[88px] flex-1 items-center rounded-xl border border-dashed border-neutral-300 bg-transparent p-4 dark:border-neutral-700">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-neutral-400/10 text-neutral-500 dark:bg-neutral-600/20 dark:text-neutral-400">
              <span className="material-symbols-outlined">{item.icon}</span>
            </div>
            <div>
              <p className="font-semibold text-neutral-800 dark:text-neutral-200">
                {item.workout}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {item.type}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <div className="flex w-16 flex-col items-center">
        <p className="text-xs font-semibold uppercase text-neutral-500 dark:text-neutral-400">
          {item.day}
        </p>
        <p
          className={`text-2xl font-bold ${
            item.status === "Completed"
              ? "text-primary"
              : "text-neutral-800 dark:text-neutral-200"
          }`}
        >
          {item.date}
        </p>
      </div>
      <div
        className={`flex-1 rounded-xl p-4 ${
          item.isToday
            ? "border border-primary/50 bg-primary/5 dark:border-primary/40 dark:bg-primary/10"
            : "border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-[#2c1e17]"
        }`}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="material-symbols-outlined">{item.icon}</span>
            </div>
            <div>
              <p className="font-semibold text-neutral-800 dark:text-neutral-200">
                {item.workout}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {item.type}
              </p>
            </div>
          </div>
          <div className={getStatusBadge(item.status)}>
            {item.status === "Completed" && (
              <span className="material-symbols-outlined !text-[14px]">
                check_circle
              </span>
            )}
            {item.status}
          </div>
        </div>
        {item.details && (
          <div
            className={`mt-4 grid grid-cols-3 pt-3 ${
              item.isToday
                ? "divide-x divide-neutral-200/50 dark:divide-neutral-700/50"
                : "border-t border-neutral-200 divide-x divide-neutral-200 dark:border-neutral-700 dark:divide-neutral-700"
            }`}
          >
            {item.details.map((detail) => (
              <div
                key={detail.label}
                className="px-2 text-center first:pl-0 last:pr-0"
              >
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {detail.label}
                </p>
                <p className="font-medium text-neutral-800 dark:text-neutral-200">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>
        )}
        {item.isToday && (
          <Button className="mt-4 w-full">View Details</Button>
        )}
      </div>
    </div>
  );
}
