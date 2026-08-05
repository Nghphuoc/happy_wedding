"use client";

import { useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight, Heart, } from "lucide-react";
import {
  motion,
  useReducedMotion,
  type PanInfo,
} from "motion/react";

import { Divider } from "@/utils/flower";
import { useTranslation } from "@/contexts/TranslationContext";
import couple from "@/assets/whiteCouple.jpg";
import image2 from "@/assets/blackCouple.jpg";
import gun from "@/assets/gun.jpg";
import bring from "@/assets/bring.jpg";
import story from "@/assets/story.jpg";
import singleDad from "@/assets/singleDad.jpg";
import goodGirl from "@/assets/goodGirl.jpg";
import double from "@/assets/double.jpg";
import alone from "@/assets/alone.jpg";
import smiley from "@/assets/smiley.jpg";
import chuchu from "@/assets/chuchu.jpg";
import look from "@/assets/look.jpg";
import women from "@/assets/women.jpg";
import muoi from "@/assets/muoi.jpg";
import dance from "@/assets/dance.jpg";
import walk from "@/assets/walk.jpg";
import noName from "@/assets/noName.jpg";

import { playfair } from "./Events";

interface GalleryItem {
  src: StaticImageData;
  alt: string;
  caption: string;
  rotation: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: image2,
    alt: "Quang Vinh and Diem Linh walking together",
    caption: "A beautiful beginning",
    rotation: "-rotate-2",
  },
  {
    src: couple,
    alt: "Wedding rings and intertwined hands",
    caption: "Forever starts here",
    rotation: "rotate-1",
  },
  {
    src: gun,
    alt: "Joyful bridal portrait",
    caption: "Moments of happiness",
    rotation: "-rotate-1",
  },
  {
    src: bring,
    alt: "Wedding stationery with a wax seal",
    caption: "Written with love",
    rotation: "rotate-2",
  },
  {
    src: story,
    alt: "Wedding portrait of the couple",
    caption: "Our favorite memory",
    rotation: "-rotate-2",
  },
  {
    src: singleDad,
    alt: "Single father with his daughter",
    caption: "A special bond",
    rotation: "rotate-1",
  },
  {
    src: goodGirl,
    alt: "Bride and groom sharing a dance",
    caption: "Dancing through life",
    rotation: "-rotate-1",
  },
  {
    src: double,
    alt: "Couple holding hands with a scenic background",
    caption: "Together, always",
    rotation: "rotate-2",
  },
  {
    src: alone,
    alt: "Bride and groom in a quiet moment",
    caption: "A moment of reflection",
    rotation: "-rotate-2",
  },
  {
    src: smiley,
    alt: "Couple laughing together",
    caption: "Laughter and love",
    rotation: "rotate-1",
  },
  {
    src: chuchu,
    alt: "Couple enjoying a playful moment",
    caption: "Playful hearts",
    rotation: "-rotate-1",
  },
  {
    src: look,
    alt: "Couple gazing into each other's eyes",
    caption: "A look that says it all",
    rotation: "rotate-2",
  },
  {
    src: women,
    alt: "Bride and groom in a romantic moment",
    caption: "A moment of romance",
    rotation: "-rotate-2",
  },
  {
    src: muoi,
    alt: "Couple walking hand in hand",
    caption: "Walking into the future",
    rotation: "rotate-1",
  },
  {
    src: dance,
    alt: "Couple dancing under the stars",
    caption: "Dancing under the stars",
    rotation: "-rotate-1",
  },
  {
    src: walk,
    alt: "Couple walking along the beach",
    caption: "A walk to remember",
    rotation: "rotate-2",
  },
  {
    src: noName,
    alt: "Couple sharing a quiet moment together",
    caption: "A quiet moment",
    rotation: "-rotate-2",
  }
];

const SWIPE_THRESHOLD = 60;

const Gallery = () => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index: number) => {
    const nextIndex = Math.max(
      0,
      Math.min(index, GALLERY_ITEMS.length - 1)
    );

    setActiveIndex(nextIndex);

    const carousel = carouselRef.current;
    const slide = carousel?.children[nextIndex] as HTMLElement | undefined;

    slide?.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const handlePrevious = () => {
    goToSlide(activeIndex - 1);
  };

  const handleNext = () => {
    goToSlide(activeIndex + 1);
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x < -SWIPE_THRESHOLD) {
      handleNext();
      return;
    }

    if (info.offset.x > SWIPE_THRESHOLD) {
      handlePrevious();
    }
  };

  return (
    <section
      id="gallery"
      className="relative overflow-hidden px-5 py-20 sm:px-8 md:py-24 lg:px-10"
    >
      <div
        aria-hidden="true"
        className="absolute -left-24 top-24 size-72 rounded-full bg-[#dca54c]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-24 bottom-0 size-72 rounded-full bg-[#721527]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <header className="mb-10 text-center md:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#9a671d]">
            Our memories
          </p>

          <h2
            className={`${playfair.className} text-4xl text-[#721527] md:text-5xl`}
          >
            {t("Moments.title")}
          </h2>

          <Divider icon={<Heart size={15} />} />
        </header>

        <div className="relative">
          <motion.div
            ref={carouselRef}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={handleDragEnd}
            className="
              flex snap-x snap-mandatory gap-5
              overflow-x-auto scroll-smooth
              px-[8vw] pb-8 pt-4
              scrollbar-none
              [&::-webkit-scrollbar]:hidden
              sm:gap-6 sm:px-[18vw]
              lg:px-[33%]
            "
          >
            {GALLERY_ITEMS.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.figure
                  key={`${item.alt}-${index}`}
                  onClick={() => goToSlide(index)}
                  onFocus={() => goToSlide(index)}
                  initial={false}
                  animate={{
                    scale: isActive ? 1 : 0.92,
                    opacity: isActive ? 1 : 0.65,
                    y: isActive ? 0 : 12,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`
                    group relative shrink-0 snap-center cursor-pointer
                    w-[78vw] max-w-87.5
                    rounded-sm border border-[#dca54c]
                    bg-[#fffaf2] p-2
                    shadow-[0_18px_50px_rgba(114,21,39,0.13)]
                    transition-shadow duration-500
                    hover:shadow-[0_25px_65px_rgba(114,21,39,0.2)]
                    sm:w-[52vw]
                    md:w-[38vw]
                    lg:w-[30vw]
                    ${item.rotation}
                  `}
                >
                  <div className="relative aspect-4/5 overflow-hidden bg-[#eee5d8]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="
                        (max-width: 640px) 78vw,
                        (max-width: 768px) 52vw,
                        (max-width: 1024px) 38vw,
                        30vw
                      "
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        ease-[cubic-bezier(.22,1,.36,1)]
                        group-hover:scale-[1.035]
                      "
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

                    <span
                      aria-hidden="true"
                      className="absolute left-4 top-4 size-10 border-l border-t border-white/70"
                    />

                    <span
                      aria-hidden="true"
                      className="absolute bottom-4 right-4 size-10 border-b border-r border-white/70"
                    />
                  </div>

                  <figcaption className="flex items-center justify-between gap-3 px-2 pb-2 pt-4">
                    <div>
                      <p
                        className={`${playfair.className} text-lg text-[#721527]`}
                      >
                        {item.caption}
                      </p>

                      <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9a671d]">
                        Quang Vinh &amp; Diem Linh
                      </p>
                    </div>

                    <Heart className="size-4 shrink-0 fill-[#721527]/10 text-[#721527]" />
                  </figcaption>
                </motion.figure>
              );
            })}
          </motion.div>

          <button
            type="button"
            onClick={handlePrevious}
            disabled={activeIndex === 0}
            aria-label="Ảnh trước"
            className="
              absolute left-0 top-1/2 z-20
              hidden size-12 -translate-y-1/2
              place-items-center rounded-full
              border border-[#dca54c]/60
              bg-[#fffaf2]/90 text-[#721527]
              shadow-lg backdrop-blur
              transition duration-300
              hover:-translate-x-1
              hover:border-[#dca54c]
              hover:bg-white
              disabled:pointer-events-none
              disabled:opacity-30
              md:grid
            "
          >
            <ChevronLeft className="size-5" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={activeIndex === GALLERY_ITEMS.length - 1}
            aria-label="Ảnh tiếp theo"
            className="
              absolute right-0 top-1/2 z-20
              hidden size-12 -translate-y-1/2
              place-items-center rounded-full
              border border-[#dca54c]/60
              bg-[#fffaf2]/90 text-[#721527]
              shadow-lg backdrop-blur
              transition duration-300
              hover:translate-x-1
              hover:border-[#dca54c]
              hover:bg-white
              disabled:pointer-events-none
              disabled:opacity-30
              md:grid
            "
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        <div className="mt-2 flex items-center justify-center gap-2">
          {GALLERY_ITEMS.map((item, index) => (
            <button
              key={`${item.alt}-indicator`}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Đi đến ảnh ${index + 1}`}
              aria-current={activeIndex === index}
              className={`
                h-2 rounded-full
                transition-all duration-300
                ${
                  activeIndex === index
                    ? "w-8 bg-[#721527]"
                    : "w-2 bg-[#dca54c]/45 hover:bg-[#dca54c]"
                }
              `}
            />
          ))}
        </div>

        <p className="mt-4 text-center text-xs italic text-[#8c7779] md:hidden">
          Vuốt sang trái hoặc phải để xem thêm
        </p>
      </div>
    </section>
  );
};

export default Gallery;