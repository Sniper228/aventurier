import { Hero } from "@/components/home/Hero";
import { CategoryStrip } from "@/components/home/CategoryStrip";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { CustomizationTeaser } from "@/components/home/CustomizationTeaser";
import { WholesaleRetail } from "@/components/home/WholesaleRetail";
import { WhyUs } from "@/components/home/WhyUs";
import { RealisationsPreview } from "@/components/home/RealisationsPreview";
import { BlogPreview } from "@/components/home/BlogPreview";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryStrip />
      <FeaturedProducts />
      <CustomizationTeaser />
      <WholesaleRetail />
      <WhyUs />
      <RealisationsPreview />
      <BlogPreview />
      <section className="border-t border-white/10 bg-gradient-to-b from-accent/10 to-background px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="display-font text-5xl text-white md:text-6xl">
              Prêt à performer ?
            </h2>
            <p className="mt-3 max-w-lg text-zinc-300">
              Commandez votre kit, floquez votre équipe et avancez step by step.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/boutique" variant="primary" size="lg" icon>
              Découvrir la boutique
            </Button>
            <Button href="/contact" variant="ghost" size="lg">
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
