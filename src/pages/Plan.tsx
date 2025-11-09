const workouts = [
  {
    day: "MON",
    date: "27",
    name: "Tempo Run",
    type: "Threshold",
    status: "Completed",
    icon: "directions_run",
    details: [
      { label: "Duration", value: "60min" },
      { label: "Pace", value: "4:30/km" },
      { label: "HR Zone", value: "3" },
    ],
  },
  {
    day: "TUE",
    date: "28",
    name: "Interval Repeats",
    type: "VO2 Max",
    status: "Upcoming",
    icon: "directions_run",
    details: [
      { label: "Duration", value: "45min" },
      { label: "Pace", value: "5:00/km" },
      { label: "HR Zone", value: "4" },
    ],
  },
  {
    day: "WED",
    date: "29",
    name: "Endurance Zone 2",
    type: "Base Building",
    status: "Upcoming",
    icon: "directions_bike",
    details: [
      { label: "Duration", value: "90min" },
      { label: "Power Zone", value: "2" },
      { label: "Cadence", value: "90rpm" },
    ],
  },
  {
    day: "THU",
    date: "30",
    name: "Rest Day",
    type: "Recovery",
    status: "Rest",
    icon: "hotel",
  },
  {
    day: "FRI",
    date: "31",
    name: "Recovery Ride",
    type: "Active Recovery",
    status: "Upcoming",
    icon: "directions_bike",
    details: [
      { label: "Duration", value: "30min" },
      { label: "Power Zone", value: "1" },
      { label: "Cadence", value: "85rpm" },
    ],
  },
];

export function Plan() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <header className="sticky top-0 z-10 flex items-center justify-between bg-background-light/80 p-4 pb-3 backdrop-blur-sm dark:bg-background-dark/80">
        <div className="flex size-12 shrink-0 items-center justify-start">
          <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-neutral-800 dark:text-neutral-200">
            <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
          </button>
        </div>
        <h1 className="flex-1 text-center text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          AI Coach Plan
        </h1>
        <div className="flex w-12 items-center justify-end">
          <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-neutral-800 dark:text-neutral-200">
            <span className="material-symbols-outlined text-2xl">more_vert</span>
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
          {workouts.map((workout, index) => (
            <WorkoutCard key={index} {...workout} />
          ))}
        </div>
      </main>
    </div>
  );
}

function WorkoutCard(workout) {
  if (workout.status === "Rest") {
    return <RestDayCard {...workout} />;
  }

  return (
    <div className="flex items-center gap-4">
      <div className="flex w-16 flex-col items-center">
        <p className="text-xs font-semibold uppercase text-neutral-500 dark:text-neutral-400">
          {workout.day}
        </p>
        <p className={`text-2xl font-bold ${workout.date === "27" ? "text-primary" : "text-neutral-800 dark:text-neutral-200"}`}>
          {workout.date}
        </p>
      </div>
      <div
        className={`flex-1 rounded-xl border p-4 ${
          workout.status === "Completed"
            ? "border-neutral-200 bg-white dark:border-neutral-800 dark:bg-[#2c1e17]"
            : "border-primary/50 bg-primary/5 dark:border-primary/40 dark:bg-primary/10"
        }`}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="material-symbols-outlined">{workout.icon}</span>
            </div>
            <div>
              <p className="font-semibold text-neutral-800 dark:text-neutral-200">
                {workout.name}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {workout.type}
              </p>
            </div>
          </div>
          {workout.status !== "Upcoming" && (
            <div
              className={`flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium ${
                workout.status === "Completed"
                  ? "bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400"
                  : "bg-neutral-500/10 text-neutral-600 dark:bg-neutral-500/20 dark:text-neutral-400"
              }`}
            >
              {workout.status === "Completed" && (
                <span className="material-symbols-outlined !text-[14px]">
                  check_circle
                </span>
              )}
              {workout.status}
            </div>
          )}
        </div>
        <div className="mt-4 grid grid-cols-3 divide-x divide-neutral-200 border-t border-neutral-200 pt-3 dark:divide-neutral-700 dark:border-neutral-700">
          {workout.details.map((detail, index) => (
            <div className="px-2 text-center first:pl-0 last:pr-0" key={index}>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {detail.label}
              </p>
              <p className="font-medium text-neutral-800 dark:text-neutral-200">
                {detail.value}
              </p>
            </div>
          ))}
        </div>
        {workout.name === "Interval Repeats" && (
            <button className="mt-4 w-full rounded-lg bg-primary py-2.5 text-sm font-bold text-white">
              View Details
            </button>
        )}
      </div>
    </div>
  );
}

function RestDayCard({ day, date, name, type, icon }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex w-16 flex-col items-center">
        <p className="text-xs font-semibold uppercase text-neutral-500 dark:text-neutral-400">
          {day}
        </p>
        <p className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
          {date}
        </p>
      </div>
      <div className="flex h-[88px] flex-1 items-center rounded-xl border border-dashed border-neutral-300 bg-transparent p-4 dark:border-neutral-700">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full bg-neutral-400/10 text-neutral-500 dark:bg-neutral-600/20 dark:text-neutral-400">
            <span className="material-symbols-outlined">{icon}</span>
          </div>
          <div>
            <p className="font-semibold text-neutral-800 dark:text-neutral-200">
              {name}
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {type}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
