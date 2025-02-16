import { useQuery } from "@tanstack/react-query";
import type { BlogPost } from "@shared/schema";
import { formatDistance } from "date-fns";

export default function BlogPost({ slug }: { slug: string }) {
  const { data: post, isLoading } = useQuery<BlogPost>({
    queryKey: [`/api/blog/${slug}`],
  });

  if (isLoading) {
    return (
      <div className="space-y-4 animate-pulse">
        <div className="h-8 w-3/4 bg-muted rounded"></div>
        <div className="h-4 w-1/4 bg-muted rounded"></div>
        <div className="space-y-2">
          <div className="h-4 w-full bg-muted rounded"></div>
          <div className="h-4 w-full bg-muted rounded"></div>
          <div className="h-4 w-3/4 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="prose prose-slate mx-auto">
      <h1>{post.title}</h1>
      <p className="text-sm text-muted-foreground">
        Published {formatDistance(new Date(post.publishedAt), new Date(), { addSuffix: true })}
      </p>
      {post.coverImage && (
        <img src={post.coverImage} alt={post.title} className="rounded-lg shadow-md" />
      )}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
