import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/data/blog";
import { Reveal } from "@/components/ui/Reveal";

export function BlogPreview() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-20 md:px-6 md:py-28">
      <Reveal>
        <h2 className="display-font text-5xl text-white md:text-6xl">Blog</h2>
        <p className="mt-3 max-w-lg text-zinc-400">
          Conseils football, entretien et actualités personnalisation.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-4">
        {blogPosts.map((post, index) => (
          <Reveal key={post.slug} delay={index * 0.05}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block h-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface transition-colors hover:border-accent/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 25vw"
                />
              </div>
              <div className="p-5">
                <p className="text-xs text-accent">{post.category}</p>
                <h3 className="mt-2 text-lg font-semibold text-white group-hover:text-accent">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400">{post.excerpt}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
