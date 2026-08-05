import { Flower2, Heart } from "lucide-react";

export const SectionDivider = () => (
  <div aria-hidden="true" className="flex items-center justify-center gap-3">
    <span className="h-px w-12 bg-linear-to-r from-transparent to-[#dca54c]" />
    <Flower2 className="size-4 text-[#dca54c]" />
    <span className="h-px w-12 bg-linear-to-l from-transparent to-[#dca54c]" />
  </div>
);

export const WeddingDecorations = () => (
  <div aria-hidden="true" className="pointer-events-none">
    <div className="absolute -left-36 top-24 -z-10 size-80 rounded-full bg-[#dca54c]/10 blur-3xl sm:size-96" />
    <div className="absolute -right-36 bottom-0 -z-10 size-80 rounded-full bg-[#721527]/10 blur-3xl sm:size-96" />

    <Flower2
      strokeWidth={1}
      className="absolute left-4 top-20 size-16 -rotate-12 text-[#dca54c]/20 sm:left-8 sm:size-24 lg:left-[6%]"
    />

    <Heart
      strokeWidth={1}
      className="absolute right-4 top-48 size-14 rotate-12 text-[#721527]/10 sm:right-8 sm:size-20 lg:right-[6%]"
    />
  </div>
);
