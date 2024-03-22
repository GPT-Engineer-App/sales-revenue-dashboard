import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function Metric({ label, value, change }) {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle>{label}</CardTitle>
        <p className={`text-sm ${change.startsWith("+") ? "text-green-500" : "text-red-500"}`}>{change}</p>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold">{value}</p>
      </CardContent>
    </Card>
  );
}
