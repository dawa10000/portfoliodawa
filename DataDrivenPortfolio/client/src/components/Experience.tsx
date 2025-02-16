import { Card, CardContent } from "@/components/ui/card";

const experience = [
  {
    title: "Senior Data Analyst",
    company: "TechCorp Solutions",
    period: "2023 - Present",
    description: [
      "Led data analysis projects resulting in 25% improvement in decision-making efficiency",
      "Developed automated reporting solutions using Python and Power BI",
      "Mentored junior analysts and implemented best practices",
    ],
  },
  {
    title: "Data Analyst",
    company: "DataDrive Analytics",
    period: "2022 - 2023",
    description: [
      "Performed complex SQL queries for business intelligence reporting",
      "Created interactive Tableau dashboards for executive stakeholders",
      "Conducted A/B tests leading to 15% increase in user engagement",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-bold tracking-tight mb-8">Work Experience</h2>
      <div className="space-y-6">
        {experience.map((job) => (
          <Card key={job.title} className="transition-all hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-primary">{job.company}</p>
                </div>
                <span className="text-sm text-muted-foreground">{job.period}</span>
              </div>
              <ul className="list-disc list-inside space-y-2">
                {job.description.map((item, index) => (
                  <li key={index} className="text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
