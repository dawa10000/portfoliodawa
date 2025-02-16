import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BlogList from "@/components/BlogList";
import Navigation from "@/components/ui/navigation";

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Blog</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Welcome to my blog where I share insights about data analysis, visualization, and technology.
            </p>
          </CardContent>
        </Card>
        <BlogList />
      </main>
    </div>
  );
}
