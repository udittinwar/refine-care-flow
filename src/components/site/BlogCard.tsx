import { Link } from "@tanstack/react-router";
import type { Post } from "@/data/posts";

export function BlogCard({ post, large = false }: { post: Post; large?: boolean }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className={`group card-hover block overflow-hidden rounded-2xl border border-border bg-card ${large ? "md:grid md:grid-cols-2" : ""}`}
    >
      <div className={`overflow-hidden bg-muted ${large ? "aspect-[16/10] md:aspect-auto md:h-full" : "aspect-[16/10]"}`}>
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          width={1280}
          height={800}
          className="img-zoom h-full w-full object-cover"
        />
      </div>
      <div className={`p-5 ${large ? "md:p-7" : ""}`}>
        <div className="flex items-center gap-2 text-xs">
          <span className="rounded-full bg-accent px-2.5 py-0.5 font-medium text-accent-foreground">
            {post.category}
          </span>
          <span className="text-muted-foreground">{post.readTime}</span>
        </div>
        <h3 className={`mt-3 font-serif tracking-tight ${large ? "text-2xl md:text-3xl" : "text-xl"}`}>
          {post.title}
        </h3>
        <p className={`mt-2 text-sm leading-relaxed text-muted-foreground ${large ? "line-clamp-3" : "line-clamp-2"}`}>
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
          <span>
            <span className="font-medium text-foreground">{post.author}</span> · {post.authorRole}
          </span>
          <span>{post.date}</span>
        </div>
      </div>
    </Link>
  );
}
