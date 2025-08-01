import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { month: "Jan", performance: 85, engagement: 78 },
  { month: "Feb", performance: 87, engagement: 82 },
  { month: "Mar", performance: 83, engagement: 79 },
  { month: "Apr", performance: 89, engagement: 85 },
  { month: "May", performance: 91, engagement: 88 },
  { month: "Jun", performance: 88, engagement: 84 },
];

export function PerformanceChart() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Performance & Engagement Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
            <XAxis 
              dataKey="month" 
              stroke="hsl(220, 9%, 46%)"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(220, 9%, 46%)"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: "hsl(0, 0%, 100%)",
                border: "1px solid hsl(220, 13%, 91%)",
                borderRadius: "8px",
              }}
            />
            <Line 
              type="monotone" 
              dataKey="performance" 
              stroke="hsl(217, 91%, 60%)" 
              strokeWidth={3}
              dot={{ fill: "hsl(217, 91%, 60%)", strokeWidth: 2, r: 4 }}
              name="Performance Score"
            />
            <Line 
              type="monotone" 
              dataKey="engagement" 
              stroke="hsl(142, 71%, 45%)" 
              strokeWidth={3}
              dot={{ fill: "hsl(142, 71%, 45%)", strokeWidth: 2, r: 4 }}
              name="Engagement Score"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}