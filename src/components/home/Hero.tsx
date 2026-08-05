"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (reduce) {
      video.pause();
      video.removeAttribute("autoplay");
      return;
    }

    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay may be blocked; muted + playsInline covers most cases.
      });
    }
  }, [reduce]);

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          className="hero-video absolute left-1/2 top-1/2 h-full w-auto min-h-full min-w-full max-w-none object-cover object-center"
          autoPlay={!reduce}
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          controls={false}
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/video/accueil2.mp4" type="video/mp4" />
        </video>
        {/* Overlay plus léger + vignette centrale pour lisibilité sans flouter la vidéo */}
        <div
          className="absolute inset-0 bg-black/25"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.15)_55%,rgba(0,0,0,0.35)_100%)]"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto flex min-h-[100dvh] max-w-[1400px] items-center justify-center px-4 pb-16 pt-28 md:px-6 md:pb-20 md:pt-24">
        <div className="flex w-full max-w-3xl flex-col items-center text-center [text-shadow:0_2px_24px_rgba(0,0,0,0.65)]">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 md:mb-8"
          >
            <Image
              src="/image/logo.jpeg"
              alt="Logo officiel Aventurier 2.0"
              width={1080}
              height={1080}
              priority
              sizes="(max-width:768px) 120px, (max-width:1024px) 148px, 168px"
              className="mx-auto h-auto w-[7.5rem] rounded-full object-contain shadow-[0_16px_48px_rgba(0,0,0,0.45)] sm:w-[8.5rem] md:w-[9.5rem] lg:w-[10.5rem]"
            />
          </motion.div>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-accent"
          >
            Aventurier 2.0
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="display-font text-[clamp(3.5rem,12vw,8.5rem)] leading-[0.9] text-white"
          >
            STEP BY STEP
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-md text-lg text-zinc-200 md:text-xl"
          >
            L&apos;équipement des champions commence ici.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Button href="/boutique" variant="primary" size="lg" icon>
              Découvrir la boutique
            </Button>
            <Button href="/panier" variant="secondary" size="lg">
              Commander maintenant
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
