import { Card, CardContent } from "@/components/ui/card";
import { SiPython, SiPostgresql, SiTableau } from "react-icons/si";
import { BarChart3, Table, FileSpreadsheet, Brain, LineChart } from "lucide-react";

const skills = [
  {
    name: "Python",
    description: "Data analysis, pandas, numpy, scikit-learn",
    icon: SiPython,
  },
  {
    name: "SQL",
    description: "Complex queries, database design, optimization",
    icon: SiPostgresql,
  },
  {
    name: "Power BI",
    description: "Dashboard creation, DAX, data modeling",
    icon: LineChart,
  },
  {
    name: "Tableau",
    description: "Visual analytics, interactive dashboards",
    icon: SiTableau,
  },
  {
    name: "Excel",
    description: "Advanced formulas, pivot tables, VBA",
    icon: FileSpreadsheet,
  },
  {
    name: "Data Analysis",
    description: "Statistical analysis, forecasting, A/B testing",
    icon: BarChart3,
  },
  {
    name: "Data Modeling",
    description: "Schema design, dimensional modeling",
    icon: Table,
  },
  {
    name: "Machine Learning",
    description: "Regression, classification, clustering",
    icon: Brain,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold tracking-tight mb-8">Skills & Expertise</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <Card key={skill.name} className="transition-all hover:shadow-lg">
            <CardContent className="p-6">
              <skill.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">{skill.name}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}