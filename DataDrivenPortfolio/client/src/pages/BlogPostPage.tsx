import BlogPost from "@/components/BlogPost";
import Navigation from "@/components/ui/navigation";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <BlogPost slug={params.slug} />
      </main>
    </div>
  );
}
