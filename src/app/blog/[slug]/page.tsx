import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/lib/data/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article introuvable" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [post.image] },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 pb-20 pt-28 md:px-6 md:pb-28 md:pt-32">
      <Link href="/blog" className="text-sm text-accent hover:text-white">
        Retour au blog
      </Link>
      <p className="mt-6 text-sm text-zinc-500">
        {post.category} · {post.date} · {post.readTime}
      </p>
      <h1 className="mt-3 display-font text-5xl text-white md:text-6xl">
        {post.title}
      </h1>
      <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-[1.75rem] border border-white/10">
        <Image src={post.image} alt="" fill className="object-cover" sizes="100vw" priority />
      </div>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-zinc-300">
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
