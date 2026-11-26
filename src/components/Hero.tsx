import Image from "next/image";
import type { ReactNode } from "react";
import { heroImage, type HeroKey, type RouteKey } from "@/lib/routes";
import { Breadcrumbs } from "./Breadcrumbs";
import { DecoField } from "./DecoField";

type Props = {
  page: RouteKey;
  hero: HeroKey;
  title: ReactNode;
  accent?: ReactNode;
  children?: ReactNode;
  actions?: ReactNode;
};

/**
 * Page hero. The photo is a centred 16:10 landscape image (one creator + Chamet logo).
 * Phones/tablets: text first, photo below. Large screens: text left, photo right.
 */
export function Hero({ page, hero, title, accent, children, actions }: Props) {
  const img = heroImage(hero);
  return (
    <section className="relative isolate overflow-hidden" aria-labelledby="page-title">
      <DecoField />
      <div className="container-site grid items-center gap-8 pt-6 pb-10 lg:grid-cols-[1fr_1.1fr] lg:gap-10 lg:pt-10 lg:pb-16">
        <div className="relative z-10 max-w-xl">
          {page !== "home" && (
            <div className="mb-5">
              <Breadcrumbs page={page} />
            </div>
          )}
          {accent && <p className="eyebrow-italic mb-3 text-base sm:text-lg">{accent}</p>}
          <h1 id="page-title" className="text-[2rem] leading-[1.1] sm:text-[2.6rem] xl:text-[3rem]">
            {title}
          </h1>
          {children && <div className="mt-4 space-y-3 text-[1.05rem] font-semibold text-body sm:text-lg">{children}</div>}
          {actions && <div className="mt-6 flex flex-wrap gap-3">{actions}</div>}
        </div>
        <div className="glow-frame mx-auto w-full max-w-2xl">
          <Image
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            sizes="(min-width: 1216px) 620px, (min-width: 1024px) 52vw, (min-width: 672px) 672px, 100vw"
            loading="eager"
            fetchPriority="high"
            quality={80}
            className="block h-auto w-full rounded-[calc(1.25rem-3px)]"
          />
        </div>
      </div>
    </section>
  );
}
