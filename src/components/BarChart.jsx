import { Card, CardContent } from "@/components/ui/card";

const data = {
  monthly: [1200, 1700, 1100, 1900, 1600, 2100],
  quarterly: [3100, 4200, 3900],
  yearly: [13000, 15500, 14200],
};

const labels = {
  monthly: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  quarterly: ["Q1", "Q2", "Q3"],
  yearly: ["2020", "2021", "2022"],
};

export function BarChart({ period }) {
  return (
    <Card>
      <CardContent>
        <div className="flex justify-between">
          {labels[period].map((label, index) => (
            <div key={label} className="flex flex-col items-center">
              <div className="w-8 h-32 bg-blue-500 rounded" style={{ height: `${(data[period][index] / 2000) * 100}%` }}></div>
              <div className="mt-2 text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
