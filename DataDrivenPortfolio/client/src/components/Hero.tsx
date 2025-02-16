import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Hero() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Data Specialist
            <br />
            <span className="text-primary">Dawa Lama</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Transforming complex data into actionable insights. With 2 years of experience
            in data analysis and visualization, I help organizations make data-driven decisions.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <Card className="w-64 h-64 overflow-hidden">
            <img
              src="/attached_assets/456905480_2682584281903715_356976195801651097_n.jpg"
              alt="Dawa Lama"
              className="w-full h-full object-cover"
            />
          </Card>
        </div>
      </div>
    </section>
  );
}