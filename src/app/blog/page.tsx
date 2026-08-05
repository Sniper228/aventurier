import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Conseils football, choix des crampons, entretien maillot et actualités personnalisation.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 pb-20 pt-28 md:px-6 md:pb-28 md:pt-32">
      <h1 className="display-font text-5xl text-white md:text-7xl">Blog</h1>
      <p className="mt-4 max-w-2xl text-zinc-400">
        Conseils terrain, guides d&apos;achat et actualités de l&apos;atelier.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface transition-colors hover:border-accent/40"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={post.image}
                alt=""
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 text-xs text-zinc-500">
                <span className="text-accent">{post.category}</span>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-white group-hover:text-accent">
                {post.title}
              </h2>
              <p className="mt-3 text-sm text-zinc-400">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
