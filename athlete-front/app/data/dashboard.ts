export const dashboardData = {
  nextSession: {
    title: "Tempo Run",
    duration: "45 min",
    time: "Tomorrow @ 7 AM",
  },
  readiness: {
    score: "+5",
    description: "Form is high. Ready to perform.",
    progress: 75,
  },
  lastActivity: {
    title: "10k Run",
    status: "On Target",
  },
  milestone: {
    title: "Milestone Achieved!",
    description: "New 5k PR: 21:30",
  },
  weeklyLoad: [
    { day: "Mon", running: 60, cycling: 25 },
    { day: "Tue", running: 40, cycling: 0 },
    { day: "Wed", running: 0, cycling: 70 },
    { day: "Thu", running: 80, cycling: 10 },
    { day: "Fri", running: 30, cycling: 50 },
    { day: "Sat", running: 90, cycling: 0 },
    { day: "Sun", running: 20, cycling: 0 },
  ],
  intensityDistribution: {
    total: "12h",
    zones: [
      { zone: "Z4-Z5", percentage: 15, color: "#4a044e" },
      { zone: "Z3", percentage: 25, color: "#86198f" },
      { zone: "Z2", percentage: 40, color: "#c026d3" },
      { zone: "Z1", percentage: 20, color: "#e879f9" },
    ],
  },
};
