import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WeeklyLoadChart } from "@/components/charts/WeeklyLoadChart";
import { IntensityDistributionChart } from "@/components/charts/IntensityDistributionChart";

export function Dashboard() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex items-center justify-between bg-background/80 p-4 pb-2 backdrop-blur-sm dark:bg-background-dark/80">
        <div className="flex size-12 shrink-0 items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <h1 className="flex-1 text-lg font-bold leading-tight tracking-[-0.015em] text-text-light-primary dark:text-text-dark-primary">
          Dashboard
        </h1>
        <div className="flex size-12 shrink-0 items-center justify-end">
          {/* Placeholder for settings icon */}
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-6 p-4">
        {/* Summary Cards Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Next Session Card */}
          <div className="col-span-2 flex flex-col gap-4 rounded-xl bg-card p-4 shadow-sm dark:bg-card-dark">
            <div>
              <p className="text-sm font-medium leading-normal text-text-light-secondary dark:text-text-dark-secondary">
                Next Session
              </p>
              <p className="text-lg font-bold text-text-light-primary dark:text-text-dark-primary">
                Tempo Run
              </p>
              <p className="text-sm font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary">
                45 min | Tomorrow @ 7 AM
              </p>
            </div>
            <Button>View Session</Button>
          </div>
          {/* Readiness Card */}
          <Card>
            <CardHeader>
              <CardTitle>Readiness</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">+5</p>
              <p className="text-xs font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary">
                Form is high. Ready to perform.
              </p>
              <div className="rounded-full bg-background-light dark:bg-background-dark">
                <div
                  className="h-2 rounded-full bg-primary"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </CardContent>
          </Card>
          {/* Last Activity Card */}
          <Card>
            <CardHeader>
              <CardTitle>Last Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-bold text-text-light-primary dark:text-text-dark-primary">
                10k Run
              </p>
              <div className="flex items-center">
                <span className="rounded-full bg-mint-green/20 px-2 py-0.5 text-xs font-semibold text-mint-green">
                  On Target
                </span>
              </div>
            </CardContent>
          </Card>
          {/* Milestones Card */}
          <div className="col-span-2 flex flex-col gap-2 rounded-xl bg-card p-4 shadow-sm dark:bg-card-dark">
            <p className="text-base font-medium leading-normal text-text-light-primary dark:text-text-dark-primary">
              Milestone Achieved!
            </p>
            <p className="text-sm font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary">
              New 5k PR: 21:30
            </p>
          </div>
        </div>
        {/* Data Visualization Widgets */}
        <div className="flex flex-col gap-6">
          <WeeklyLoadChart />
          <IntensityDistributionChart />
        </div>
      </main>
    </div>
  );
}
