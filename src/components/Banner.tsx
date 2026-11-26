import Image from "next/image";
import { heroImage } from "@/lib/routes";

/** Promotional banner (recruitment or support): centred one-creator image. */
export function Banner({ kind }: { kind: "recruitment" | "support" }) {
  const img = heroImage(kind);
  return (
    <div className="glow-frame mx-auto my-2 max-w-3xl" data-reveal>
      <Image
        src={img.src}
        alt={img.alt}
        width={img.width}
        height={img.height}
        sizes="(min-width: 768px) 768px, 100vw"
        loading="lazy"
        className="block h-auto w-full rounded-[calc(1.25rem-3px)]"
      />
    </div>
  );
}
