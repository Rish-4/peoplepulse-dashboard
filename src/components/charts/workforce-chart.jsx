import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { name: "Engineering", value: 45, color: "hsl(217, 91%, 60%)" },
  { name: "Sales", value: 25, color: "hsl(142, 71%, 45%)" },
  { name: "Marketing", value: 15, color: "hsl(38, 92%, 50%)" },
  { name: "HR", value: 8, color: "hsl(262, 83%, 58%)" },
  { name: "Operations", value: 7, color: "hsl(0, 84%, 60%)" },
];

export function WorkforceChart() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Workforce by Department</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}