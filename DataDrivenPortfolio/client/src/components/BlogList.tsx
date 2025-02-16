import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import type { BlogPost } from "@shared/schema";
import { formatDistance } from "date-fns";

export default function BlogList() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Card className="animate-pulse">
          <CardHeader>
            <div className="h-6 w-3/4 bg-muted rounded"></div>
          </CardHeader>
          <CardContent>
            <div className="h-4 w-full bg-muted rounded"></div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {posts?.map((post) => (
        <Card key={post.id} className="transition-all hover:shadow-lg">
          <CardHeader>
            <CardTitle>
              <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                {post.title}
              </Link>
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {formatDistance(new Date(post.publishedAt), new Date(), { addSuffix: true })}
            </p>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{post.excerpt}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
