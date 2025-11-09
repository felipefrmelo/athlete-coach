import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Z1', value: 20 },
  { name: 'Z2', value: 40 },
  { name: 'Z3', value: 25 },
  { name: 'Z4-Z5', value: 15 },
];

const COLORS = ['#e879f9', '#c026d3', '#86198f', '#4a044e'];

export function IntensityDistributionChart() {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-card p-4 shadow-sm dark:bg-card-dark">
      <h3 className="text-base font-bold text-text-light-primary dark:text-text-dark-primary">Intensity (Last 4 Weeks)</h3>
      <div className="flex items-center justify-center gap-6">
        <div className="relative size-36">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={60}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-black text-text-light-primary dark:text-text-dark-primary">12h</span>
            <span className="text-xs text-text-light-secondary dark:text-text-dark-secondary">Total</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          {data.map((entry, index) => (
            <div className="flex items-center gap-2" key={`legend-${index}`}>
              <div className="size-3 shrink-0 rounded-sm" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
              <span className="text-text-light-secondary dark:text-text-dark-secondary">{entry.name}: {entry.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
