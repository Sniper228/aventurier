import { Buildings, Storefront } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function WholesaleRetail() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-20 md:px-6 md:py-28">
      <Reveal>
        <h2 className="display-font text-5xl text-white md:text-6xl">
          Vente en gros & détail
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-[2rem] border border-white/10 bg-gradient-to-br from-accent/20 to-surface p-8 md:p-10">
            <Buildings className="h-10 w-10 text-accent" weight="duotone" />
            <h3 className="mt-6 text-3xl font-semibold">Vente en gros</h3>
            <p className="mt-3 max-w-md text-zinc-300">
              Conditions clubs, académies, associations et entreprises. Devis
              volume, délais production et accompagnement projet.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="secondary">
                Demander un devis
              </Button>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="h-full rounded-[2rem] border border-white/10 bg-gradient-to-br from-accent-strong/20 to-surface p-8 md:p-10">
            <Storefront className="h-10 w-10 text-accent-strong" weight="duotone" />
            <h3 className="mt-6 text-3xl font-semibold">Vente au détail</h3>
            <p className="mt-3 max-w-md text-zinc-300">
              Commandez en ligne, choisissez tailles et couleurs, ajoutez un
              flocage individuel et recevez un équipement prêt à performer.
            </p>
            <div className="mt-8">
              <Button href="/boutique" variant="primary">
                Acheter maintenant
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
