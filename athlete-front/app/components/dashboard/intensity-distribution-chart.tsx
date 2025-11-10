import { dashboardData } from "~/data/dashboard";

export function IntensityDistributionChart() {
  const { intensityDistribution } = dashboardData;
  const radius = 15.9154943092;
  const circumference = 2 * Math.PI * radius;
  let offset = 25;

  return (
    <div className="flex flex-col gap-4 rounded-xl bg-card-light p-4 shadow-sm dark:bg-card-dark">
      <h3 className="text-base font-bold text-text-light-primary dark:text-text-dark-primary">
        Intensity (Last 4 Weeks)
      </h3>
      <div className="flex items-center justify-center gap-6">
        <div className="relative size-36">
          <svg className="size-full" viewBox="0 0 36 36">
            {intensityDistribution.zones.map((zone, index) => {
              const strokeDasharray = `${zone.percentage} ${
                100 - zone.percentage
              }`;
              const strokeDashoffset = offset;
              offset -= zone.percentage;
              return (
                <circle
                  key={index}
                  cx="18"
                  cy="18"
                  r={radius}
                  fill="none"
                  stroke={zone.color}
                  strokeWidth="4"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                />
              );
            })}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-black text-text-light-primary dark:text-text-dark-primary">
              {intensityDistribution.total}
            </span>
            <span className="text-xs text-text-light-secondary dark:text-text-dark-secondary">
              Total
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          {intensityDistribution.zones.map((zone) => (
            <div key={zone.zone} className="flex items-center gap-2">
              <div
                className="size-3 shrink-0 rounded-sm"
                style={{ backgroundColor: zone.color }}
              />
              <span className="text-text-light-secondary dark:text-text-dark-secondary">
                {zone.zone}: {zone.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
