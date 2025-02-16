import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const certifications = [
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    date: "2023",
    credential: "Credential ID: ABC123",
  },
  {
    name: "Microsoft Power BI Data Analyst Associate",
    issuer: "Microsoft",
    date: "2023",
    credential: "Credential ID: PBI456",
  },
  {
    name: "Python for Data Science",
    issuer: "IBM",
    date: "2022",
    credential: "Credential ID: IBM789",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16">
      <h2 className="text-3xl font-bold tracking-tight mb-8">Certifications</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <Card key={cert.name} className="transition-all hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Award className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-semibold">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>
              <div className="space-y-2">
                <Badge variant="outline">{cert.date}</Badge>
                <p className="text-xs text-muted-foreground">{cert.credential}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
