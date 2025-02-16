import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Sales Analytics Dashboard",
    description: "Interactive Power BI dashboard for sales performance analysis",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    technologies: ["Power BI", "DAX", "SQL"],
  },
  {
    title: "Customer Segmentation",
    description: "Machine learning project for customer classification",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    technologies: ["Python", "scikit-learn", "pandas"],
  },
  {
    title: "Inventory Optimization",
    description: "Predictive analytics for inventory management",
    image: "https://images.unsplash.com/photo-1510759395231-72b17d622279",
    technologies: ["Python", "Prophet", "Tableau"],
  },
  {
    title: "Financial Reporting System",
    description: "Automated reporting pipeline for financial metrics",
    image: "https://images.unsplash.com/photo-1660592868727-858d28c3ba52",
    technologies: ["SQL", "Excel", "Power Automate"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold tracking-tight mb-8">Featured Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden transition-all hover:shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 flex-wrap">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
