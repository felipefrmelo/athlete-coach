const activities = [
  {
    name: "Morning Run",
    date: "Oct 26, 2023",
    icon: "directions_run",
    distance: "10.2 km",
    elevation: "150 m",
    duration: "55 min",
    adherence: 95,
  },
  {
    name: "Afternoon Cycle",
    date: "Oct 25, 2023",
    icon: "directions_bike",
    distance: "45.7 km",
    elevation: "320 m",
    duration: "120 min",
    adherence: 85,
  },
  {
    name: "Evening Swim",
    date: "Oct 24, 2023",
    icon: "pool",
    distance: "1.5 km",
    elevation: "0 m",
    duration: "30 min",
    adherence: 65,
  },
  {
    name: "Weekend Hike",
    date: "Oct 22, 2023",
    icon: "hiking",
    distance: "15.0 km",
    elevation: "800 m",
    duration: "180 min",
    adherence: 98,
  },
  {
    name: "Gym Session",
    date: "Oct 21, 2023",
    icon: "fitness_center",
    distance: "-",
    elevation: "-",
    duration: "75 min",
    adherence: 78,
  },
];

export function Activities() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col">
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
          {activities.map((activity, index) => (
            <ActivityItem key={index} {...activity} />
          ))}
        </div>
      </main>
    </div>
  );
}

function ActivityItem({
  name,
  date,
  icon,
  distance,
  elevation,
  duration,
  adherence,
}) {
  const adherenceColor =
    adherence >= 90
      ? "bg-emerald-500/10 text-emerald-500"
      : adherence >= 80
      ? "bg-amber-500/10 text-amber-500"
      : "bg-red-500/10 text-red-500";

  return (
    <div className="flex cursor-pointer flex-col gap-3 rounded-xl bg-white p-4 shadow-sm transition-transform duration-200 ease-in-out hover:scale-[1.02] dark:bg-[#2c1e19]">
      <div className="flex items-center justify-between">
        <p className="text-base font-semibold text-gray-900 dark:text-white">
          {name}
        </p>
        <p className="text-xs font-normal text-gray-500 dark:text-gray-400">
          {date}
        </p>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-1 items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
          <span className="material-symbols-outlined text-lg text-primary">
            {icon}
          </span>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-base text-gray-400">
              straight
            </span>
            <span>{distance}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-base text-gray-400">
              landscape
            </span>
            <span>{elevation}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-base text-gray-400">
              timer
            </span>
            <span>{duration}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className={`rounded-full px-2.5 py-0.5 ${adherenceColor}`}>
            <p className="text-xs font-medium">{adherence}% Adherence</p>
          </div>
          <span className="material-symbols-outlined text-xl text-gray-400 dark:text-gray-500">
            chevron_right
          </span>
        </div>
      </div>
    </div>
  );
}
