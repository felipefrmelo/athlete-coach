import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', running: 60, cycling: 25 },
  { name: 'Tue', running: 40, cycling: 0 },
  { name: 'Wed', running: 0, cycling: 70 },
  { name: 'Thu', running: 80, cycling: 10 },
  { name: 'Fri', running: 30, cycling: 50 },
  { name: 'Sat', running: 90, cycling: 0 },
  { name: 'Sun', running: 20, cycling: 0 },
];

export function WeeklyLoadChart() {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-card p-4 shadow-sm dark:bg-card-dark">
      <h3 className="text-base font-bold text-text-light-primary dark:text-text-dark-primary">Weekly Load (km)</h3>
      <div className="flex h-40 items-end justify-between gap-2 text-center">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
            <YAxis hide />
            <Bar dataKey="running" stackId="a" fill="hsl(var(--primary))" />
            <Bar dataKey="cycling" stackId="a" fill="#B53700" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center justify-center gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="size-3 rounded-sm bg-primary"></div>
          <span className="text-text-light-secondary dark:text-text-dark-secondary">Running</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="size-3 rounded-sm bg-[#B53700]"></div>
          <span className="text-text-light-secondary dark:text-text-dark-secondary">Cycling</span>
        </div>
      </div>
    </div>
  );
}
