import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Metric } from "@/components/Metric";
import { BarChart } from "@/components/BarChart";
import { RevenueChart } from "@/components/RevenueChart";
import "./App.css";

function App() {
  const [activePeriod, setActivePeriod] = useState("monthly");

  const periods = [
    { label: "Monthly", value: "monthly" },
    { label: "Quarterly", value: "quarterly" },
    { label: "Yearly", value: "yearly" },
  ];

  const metrics = [
    { label: "Sales", value: "$12,024", change: "+14%" },
    { label: "Revenue", value: "$33,500", change: "+7%" },
    { label: "Customers", value: "1,072", change: "+21%" },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Business Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {metrics.map((metric) => (
          <Metric key={metric.label} label={metric.label} value={metric.value} change={metric.change} />
        ))}
      </div>

      <div className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Sales Overview</CardTitle>
            <CardDescription>
              <select value={activePeriod} onChange={(e) => setActivePeriod(e.target.value)} className="border rounded px-2 py-1">
                {periods.map((period) => (
                  <option key={period.value} value={period.value}>
                    {period.label}
                  </option>
                ))}
              </select>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart period={activePeriod} />
          </CardContent>
        </Card>
      </div>

      <div>
        <Card>
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <RevenueChart />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
