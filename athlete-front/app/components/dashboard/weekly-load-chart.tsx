import { dashboardData } from "~/data/dashboard";

export function WeeklyLoadChart() {
  const { weeklyLoad } = dashboardData;
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-card-light p-4 shadow-sm dark:bg-card-dark">
      <h3 className="text-base font-bold text-text-light-primary dark:text-text-dark-primary">
        Weekly Load (km)
      </h3>
      <div className="flex h-40 items-end justify-between gap-2 text-center">
        {weeklyLoad.map((day) => (
          <div key={day.day} className="flex w-full flex-col items-center gap-2">
            <div className="flex h-full w-full flex-col justify-end overflow-hidden rounded">
              <div
                className="bg-primary"
                style={{ height: `${day.running}%` }}
              />
              <div
                className="bg-[#B53700]"
                style={{ height: `${day.cycling}%` }}
              />
            </div>
            <p className="text-xs text-text-light-secondary dark:text-text-dark-secondary">
              {day.day}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="size-3 rounded-sm bg-primary" />
          <span className="text-text-light-secondary dark:text-text-dark-secondary">
            Running
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="size-3 rounded-sm bg-[#B53700]" />
          <span className="text-text-light-secondary dark:text-text-dark-secondary">
            Cycling
          </span>
        </div>
      </div>
    </div>
  );
}
