import { Button } from "../ui/button";
import { dashboardData } from "~/data/dashboard";

export function NextSessionCard() {
  const { nextSession } = dashboardData;
  return (
    <div className="col-span-2 flex flex-col gap-4 rounded-xl bg-card-light p-4 shadow-sm dark:bg-card-dark">
      <div>
        <p className="text-sm font-medium leading-normal text-text-light-secondary dark:text-text-dark-secondary">
          Next Session
        </p>
        <p className="text-lg font-bold text-text-light-primary dark:text-text-dark-primary">
          {nextSession.title}
        </p>
        <p className="text-sm font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary">
          {nextSession.duration} | {nextSession.time}
        </p>
      </div>
      <Button>View Session</Button>
    </div>
  );
}
