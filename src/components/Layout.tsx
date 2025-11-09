import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col">
      <main className="flex-1">
        <Outlet />
      </main>
      <nav className="sticky bottom-0 z-10 mt-6 flex justify-around border-t border-black/10 bg-background/80 py-2 backdrop-blur-sm dark:border-white/10 dark:bg-background-dark/80">
        <Link to="/" className="flex flex-col items-center gap-1 p-2 text-primary">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-xs font-bold">Dashboard</span>
        </Link>
        <Link to="/plan" className="flex flex-col items-center gap-1 p-2 text-text-light-secondary dark:text-text-dark-secondary">
          <span className="material-symbols-outlined">event_note</span>
          <span className="text-xs font-medium">Plan</span>
        </Link>
        <Link to="/activities" className="flex flex-col items-center gap-1 p-2 text-text-light-secondary dark:text-text-dark-secondary">
          <span className="material-symbols-outlined">directions_run</span>
          <span className="text-xs font-medium">Activities</span>
        </Link>
        <Link to="/chat" className="flex flex-col items-center gap-1 p-2 text-text-light-secondary dark:text-text-dark-secondary">
          <span className="material-symbols-outlined">chat</span>
          <span className="text-xs font-medium">AI Coach</span>
        </Link>
      </nav>
    </div>
  );
}
