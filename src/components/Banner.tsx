import Image from "next/image";
import { heroImage } from "@/lib/routes";

/** Wide promotional banner (recruitment or support), shown once per page at most. */
export function Banner({ kind }: { kind: "recruitment" | "support" }) {
  const img = heroImage(kind);
  return (
    <div className="glow-frame my-2" data-reveal>
      <Image src={img.src} alt={img.alt} width={img.width} height={img.height} sizes="(min-width: 1216px) 1168px, 100vw" loading="lazy" className="block h-auto w-full" />
    </div>
  );
}
