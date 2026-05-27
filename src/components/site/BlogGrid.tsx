import { posts } from "@/data/posts";
import { BlogCard } from "./BlogCard";

export function BlogGrid() {
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p.slug !== featured.slug).slice(0, 5);

  return (
    <section id="articles" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl container-pad">
        <div className="reveal flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.18em] text-primary">From the journal</span>
            <h2 className="mt-2 text-3xl md:text-4xl">Clinician-written, plain-English health writing.</h2>
          </div>
          <a href="#articles" className="hidden text-sm font-medium text-primary hover:underline md:block">
            All articles →
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:mt-10">
          <div className="reveal">
            <BlogCard post={featured} large />
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <div key={p.slug} className="reveal">
                <BlogCard post={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
