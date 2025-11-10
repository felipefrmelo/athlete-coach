import {
  type RouteConfig,
  route,
  layout,
  index,
} from "@react-router/dev/routes";

export default [
  layout("components/app-layout.tsx", [
    index("routes/index.tsx"),
    route("plan", "routes/plan.tsx"),
    route("activities", "routes/activities.tsx"),
    route("profile", "routes/profile.tsx"),
  ]),
  route("coach", "routes/coach.tsx"),
] satisfies RouteConfig;
