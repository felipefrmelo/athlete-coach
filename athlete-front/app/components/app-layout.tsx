import { Outlet } from "react-router-dom";
import { BottomNavBar } from "./bottom-nav-bar";

export function AppLayout() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark">
      <div className="relative flex h-auto min-h-screen w-full flex-col">
        <Outlet />
        <BottomNavBar />
      </div>
    </div>
  );
}
