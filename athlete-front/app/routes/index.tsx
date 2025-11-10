import { Link } from "react-router-dom";
import { IntensityDistributionChart } from "~/components/dashboard/intensity-distribution-chart";
import { LastActivityCard } from "~/components/dashboard/last-activity-card";
import { MilestoneCard } from "~/components/dashboard/milestone-card";
import { NextSessionCard } from "~/components/dashboard/next-session-card";
import { ReadinessCard } from "~/components/dashboard/readiness-card";
import { WeeklyLoadChart } from "~/components/dashboard/weekly-load-chart";

export default function Dashboard() {
  return (
    <>
      <header className="sticky top-0 z-10 flex items-center justify-between bg-background-light/80 p-4 pb-2 backdrop-blur-sm dark:bg-background-dark/80">
        <div className="flex size-12 shrink-0 items-center">
          <div
            className="aspect-square size-10 rounded-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCjT3VgJ0u90AH2H51KwU5QEQGZrQvl71NSMNvs44jaQNVX9uzD5CqxpqWoEcCqkYAPMljaW6W3Fpr4BRFd4dNSL7CRd4GK09N56nVcro_Cjb5nXevBatevhZ6HdrTIPB5DYVQXi56ajb-dIrXIZVKIFouwFN4mbW3XvcnFrXJiZfpQ1MgaV0I0JLQmUjH6QWYSIGnz4Mh9higkqR6f_XyC_Mot5krq5017HtLebIEDkCq-v0hDtY9pKFuaWeF2bFSmWnR9Zg1BdRc")',
            }}
          />
        </div>
        <h1 className="flex-1 text-lg font-bold leading-tight tracking-[-0.015em] text-text-light-primary dark:text-text-dark-primary">
          Dashboard
        </h1>
        <div className="flex size-12 shrink-0 items-center justify-end">
          <Link
            to="/coach"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-neutral-800 dark:text-neutral-200"
          >
            <span className="material-symbols-outlined text-2xl">chat</span>
          </Link>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-6 p-4">
        <div className="grid grid-cols-2 gap-4">
          <NextSessionCard />
          <ReadinessCard />
          <LastActivityCard />
          <MilestoneCard />
        </div>
        <div className="flex flex-col gap-6">
          <WeeklyLoadChart />
          <IntensityDistributionChart />
        </div>
      </main>
    </>
  );
}
