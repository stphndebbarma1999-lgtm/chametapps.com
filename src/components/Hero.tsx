import Image from "next/image";
import type { ReactNode } from "react";
import { heroImage, type HeroKey, type RouteKey } from "@/lib/routes";
import { Breadcrumbs } from "./Breadcrumbs";
import { DecoLogos } from "./DecoLogos";

type Props = {
  page: RouteKey;
  hero: HeroKey;
  title: ReactNode;
  accent?: ReactNode;
  children?: ReactNode;
  actions?: ReactNode;
};

/**
 * Page hero. ≥1280px: live HTML text sits over the empty left area of the photo.
 * Below that: text first, then the complete image (never cropped, faces and logos intact).
 */
export function Hero({ page, hero, title, accent, children, actions }: Props) {
  const img = heroImage(hero);
  return (
    <section className="relative isolate overflow-hidden" aria-labelledby="page-title">
      <DecoLogos spots={[{ top: "12%", left: "-30px", size: 120, rot: -12, mobile: true }, { bottom: "8%", right: "2%", size: 90, rot: 10 }]} />
      <div className="hero-grid mx-auto max-w-[96rem]">
        <div className="relative z-10 flex items-center xl:pointer-events-none">
          <div className="container-site pt-6 pb-8 xl:pt-10 xl:pb-24">
            <div className="max-w-xl xl:pointer-events-auto xl:max-w-[32rem] 2xl:max-w-[38rem]">
              {page !== "home" && (
                <div className="mb-5">
                  <Breadcrumbs page={page} />
                </div>
              )}
              {accent && <p className="eyebrow-italic mb-3 text-base sm:text-lg">{accent}</p>}
              <h1 id="page-title" className="text-[2rem] leading-[1.1] sm:text-[2.6rem] xl:text-[3.1rem]">
                {title}
              </h1>
              {children && <div className="mt-4 space-y-3 text-[1.05rem] font-semibold text-body sm:text-lg">{children}</div>}
              {actions && <div className="mt-6 flex flex-wrap gap-3">{actions}</div>}
            </div>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 xl:px-0">
          {/* One image: below 1280px the empty left area is trimmed so the people sit centred;
              from 1280px the full image shows and the heading is overlaid on its empty left area. */}
          <div className="glow-frame mx-auto max-w-2xl xl:max-w-none xl:rounded-none xl:bg-none xl:p-0 xl:shadow-none">
            <div
              className="hero-media relative overflow-hidden rounded-[calc(1.25rem-3px)] xl:rounded-none"
              style={{ ["--ratio-centred" as string]: img.centredRatio, ["--ratio-full" as string]: `${img.width} / ${img.height}` }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 100vw, (min-width: 672px) 672px, 100vw"
                loading="eager"
                fetchPriority="high"
                quality={75}
                className="object-cover object-right"
              />
            </div>
          </div>
          {/* Soft fade on wide screens so the HTML heading stays readable over the image's empty left area. */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-ink/85 via-ink/30 via-45% to-transparent xl:block" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-24 bg-gradient-to-t from-ink to-transparent xl:block" />
        </div>
      </div>
    </section>
  );
}
