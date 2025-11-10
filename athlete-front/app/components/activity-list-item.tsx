import { activityLog } from "~/data/activity-log";

function getAdherenceClass(adherence: number) {
  if (adherence >= 95) return "bg-emerald-500/10 text-emerald-500";
  if (adherence >= 80) return "bg-amber-500/10 text-amber-500";
  return "bg-red-500/10 text-red-500";
}

export function ActivityListItem({
  activity,
}: {
  activity: (typeof activityLog)[0];
}) {
  return (
    <div className="flex cursor-pointer flex-col gap-3 rounded-xl bg-white p-4 shadow-sm transition-transform duration-200 ease-in-out hover:scale-[1.02] dark:bg-[#2c1e19]">
      <div className="flex items-center justify-between">
        <p className="text-base font-semibold text-gray-900 dark:text-white">
          {activity.name}
        </p>
        <p className="text-xs font-normal text-gray-500 dark:text-gray-400">
          {activity.date}
        </p>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-1 items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
          <span className="material-symbols-outlined text-lg text-primary">
            {activity.type}
          </span>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-base text-gray-400">
              straight
            </span>
            <span>{activity.distance}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-base text-gray-400">
              landscape
            </span>
            <span>{activity.elevation}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-base text-gray-400">
              timer
            </span>
            <span>{activity.duration}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div
            className={`rounded-full px-2.5 py-0.5 ${getAdherenceClass(
              activity.adherence
            )}`}
          >
            <p className="text-xs font-medium">{activity.adherence}% Adherence</p>
          </div>
          <span className="material-symbols-outlined text-xl text-gray-400 dark:text-gray-500">
            chevron_right
          </span>
        </div>
      </div>
    </div>
  );
}
