import { NavLink } from "react-router-dom";

const navItems = [
  { path: "/", label: "Dashboard", icon: "dashboard" },
  { path: "/plan", label: "Plan", icon: "event_note" },
  { path: "/activities", label: "Activities", icon: "directions_run" },
  { path: "/profile", label: "Profile", icon: "person" },
];

export function BottomNavBar() {
  return (
    <nav className="sticky bottom-0 z-10 mt-6 flex justify-around border-t border-black/10 bg-background-light/80 py-2 backdrop-blur-sm dark:border-white/10 dark:bg-background-dark/80">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 p-2 ${
              isActive
                ? "text-primary"
                : "text-text-light-secondary dark:text-text-dark-secondary"
            }`
          }
        >
          <span className="material-symbols-outlined">{item.icon}</span>
          <span className="text-xs font-medium">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
