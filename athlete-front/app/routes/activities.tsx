import { ActivityListItem } from "~/components/activity-list-item";
import { activityLog } from "~/data/activity-log";

export default function ActivityLog() {
  return (
    <>
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200/10 bg-background-light/80 p-4 pb-3 backdrop-blur-sm dark:bg-background-dark/80">
        <div className="flex size-10 shrink-0 items-center justify-start">
          <span className="material-symbols-outlined text-gray-700 dark:text-gray-300">
            arrow_back
          </span>
        </div>
        <h1 className="flex-1 text-center text-lg font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
          Activity Log
        </h1>
        <div className="flex w-10 shrink-0 items-center justify-end">
          <button className="flex cursor-pointer items-center justify-center rounded-full p-2 text-gray-700 transition-colors hover:bg-gray-500/10 dark:text-gray-300">
            <span className="material-symbols-outlined">tune</span>
          </button>
        </div>
      </header>
      <main className="flex-1 px-4 py-4">
        <div className="flex flex-col gap-3">
          {activityLog.map((activity) => (
            <ActivityListItem key={activity.id} activity={activity} />
          ))}
        </div>
      </main>
    </>
  );
}
