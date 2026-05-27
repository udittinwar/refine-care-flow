import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Share2, Bookmark } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { BlogCard } from "@/components/site/BlogCard";
import { CTASection } from "@/components/site/CTASection";
import { posts, getPost } from "@/data/posts";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} — Caremint` },
          { name: "description", content: loaderData.post.excerpt },
        ]
      : [],
  }),
  component: BlogPost,
});

function BlogPost() {
  useReveal();
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <article className="mx-auto max-w-3xl pt-10 pb-14 md:pt-14 md:pb-20 container-pad">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to articles
          </Link>

          <div className="mt-6 reveal">
            <span className="inline-block rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
              {post.category}
            </span>
            <h1 className="mt-3 text-4xl leading-tight tracking-tight md:text-5xl">{post.title}</h1>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-y border-border py-4 text-sm">
              <div className="text-muted-foreground">
                <span className="font-medium text-foreground">{post.author}</span> · {post.authorRole}
                <span className="mx-2">·</span>
                {post.date} · {post.readTime}
              </div>
              <div className="flex items-center gap-2">
                <button className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs hover:bg-accent">
                  <Share2 className="h-3.5 w-3.5" /> Share
                </button>
                <button className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs hover:bg-accent">
                  <Bookmark className="h-3.5 w-3.5" /> Save
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 reveal overflow-hidden rounded-2xl border border-border">
            <img
              src={post.image}
              alt={post.title}
              loading="lazy"
              width={1280}
              height={800}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>

          <div className="prose-content mt-10 space-y-5 text-[1.0625rem] leading-[1.75] text-foreground/90">
            {post.body.map((p: string, i: number) => (
              <p key={i} className="reveal">{p}</p>
            ))}
          </div>
        </article>

        <section className="border-t border-border bg-card/40 py-14 md:py-20">
          <div className="mx-auto max-w-6xl container-pad">
            <h2 className="text-2xl md:text-3xl">Keep reading</h2>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
