import Image from "next/image";
import { heroImage } from "@/lib/routes";

/** Wide promotional banner (recruitment or support), shown centred with its empty left area trimmed. */
export function Banner({ kind }: { kind: "recruitment" | "support" }) {
  const img = heroImage(kind);
  return (
    <div className="glow-frame mx-auto my-2 max-w-3xl" data-reveal>
      <div className="relative overflow-hidden rounded-[calc(1.25rem-3px)]" style={{ aspectRatio: img.centredRatio }}>
        <Image src={img.src} alt={img.alt} fill sizes="(min-width: 768px) 768px, 100vw" loading="lazy" className="object-cover object-right" />
      </div>
    </div>
  );
}
