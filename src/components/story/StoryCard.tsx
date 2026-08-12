import storyImage from "@/assets/chuchu.jpg";
import {
  CircleDotDashed,
  Flower2,
  Heart,
  MousePointerClick,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import type { KeyboardEvent } from "react";

import { revealTransition, VIEWPORT } from "./constants";

export type StoryCardContent = {
  title: string;
  content: string;
  subContent: string;
  subContent2: string;
  subContent3: string;
  subContent4: string;
  subContent5: string;
};

type StoryCardProps = {
  isFlipped: boolean;
  reduceMotion: boolean;
  onToggle: () => void;
  story: StoryCardContent;
};

export const StoryCard = ({
  isFlipped,
  reduceMotion,
  onToggle,
  story,
}: StoryCardProps) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onToggle();
    }
  };

  return (
    <motion.div
      initial={reduceMotion ? undefined : { opacity: 0, x: -36 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
      viewport={VIEWPORT}
      transition={revealTransition}
      className="relative mx-auto w-full max-w-87.5 sm:max-w-107.5 md:max-w-117.5"
      style={{ perspective: "1400px" }}
    >
      <CardDecorations />

      <motion.button
        type="button"
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        aria-label={isFlipped ? "Close story card" : "Open story card"}
        aria-pressed={isFlipped}
        animate={{
          rotateY: isFlipped ? 180 : 0,
          y: isFlipped ? -4 : 0,
        }}
        whileHover={
          reduceMotion
            ? undefined
            : {
                y: -7,
                scale: 1.012,
              }
        }
        whileTap={reduceMotion ? undefined : { scale: 0.99 }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : {
                rotateY: {
                  type: "spring",
                  stiffness: 90,
                  damping: 17,
                  mass: 0.9,
                },
                y: {
                  duration: 0.3,
                  ease: "easeOut",
                },
                scale: {
                  duration: 0.25,
                  ease: "easeOut",
                },
              }
        }
        style={{ transformStyle: "preserve-3d" }}
        className="relative block aspect-3/4 w-full cursor-pointer rounded-[1.75rem] text-left outline-none focus-visible:ring-4 focus-visible:ring-[#dca54c]/35 focus-visible:ring-offset-4"
      >
        <CardFront />
        <CardBack story={story} />
      </motion.button>
    </motion.div>
  );
};

const CardDecorations = () => (
  <>
    <div
      aria-hidden="true"
      className="absolute inset-4 -z-10 rotate-3 rounded-4xl border border-[#dca54c]/20 bg-[#721527]/5"
    />

    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-5 -top-6 z-20 grid size-14 place-items-center rounded-full border border-[#dca54c]/40 bg-[#fffaf2] text-[#9a671d] shadow-lg sm:-right-7 sm:-top-8 sm:size-16"
    >
      <CircleDotDashed className="size-6 sm:size-7" />
    </div>

    <Flower2
      aria-hidden="true"
      strokeWidth={1}
      className="pointer-events-none absolute -bottom-5 -left-4 z-20 size-20 rotate-6 text-[#721527]/25 sm:-bottom-8 sm:-left-8 sm:size-28"
    />
  </>
);

const CardFront = () => (
  <div
    className="absolute inset-0 overflow-hidden rounded-[1.75rem] border border-[#dca54c]/35 bg-[#fffaf2] p-2.5 shadow-[0_24px_70px_rgba(82,40,45,0.18)] sm:p-3"
    style={{
      backfaceVisibility: "hidden",
      WebkitBackfaceVisibility: "hidden",
    }}
  >
    <div className="relative size-full overflow-hidden rounded-[1.35rem]">
      <Image
        src={storyImage}
        alt="Our wedding story"
        fill
        priority
        sizes="(max-width: 640px) 88vw, (max-width: 768px) 430px, 42vw"
        className="object-cover"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-white/5"
      />

      <div
        aria-hidden="true"
        className="absolute left-4 top-4 size-12 border-l border-t border-white/70"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-4 right-4 size-12 border-b border-r border-white/70"
      />

      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/75 sm:text-xs">
            Our memories
          </p>

          <p className="mt-1 font-serif text-lg text-white sm:text-xl">
            Quang Vinh &amp; Diễm Linh
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2 rounded-full border border-white/30 bg-white/85 px-3 py-2 text-[10px] font-semibold text-[#721527] shadow-lg backdrop-blur sm:text-xs">
          <MousePointerClick className="size-3.5" />
          <span>Nhấn Vào Để xem</span>
        </div>
      </div>
    </div>
  </div>
);

type CardBackProps = {
  story: StoryCardContent;
};

const CardBack = ({ story }: CardBackProps) => (
  <div
    className="absolute inset-0 flex flex-col overflow-hidden rounded-[1.75rem] border border-[#dca54c]/30 bg-[linear-gradient(145deg,#5f1728_0%,#721527_55%,#46101c_100%)] p-5 shadow-[0_24px_70px_rgba(82,40,45,0.22)] sm:p-7 md:p-8"
    style={{
      backfaceVisibility: "hidden",
      WebkitBackfaceVisibility: "hidden",
      transform: "rotateY(180deg)",
    }}
  >
    <div
      aria-hidden="true"
      className="absolute -right-12 -top-12 size-36 rounded-full border border-white/10"
    />

    <div
      aria-hidden="true"
      className="absolute -right-7 -top-7 size-24 rounded-full border border-[#dca54c]/20"
    />

    <Sparkles
      aria-hidden="true"
      className="absolute right-6 top-6 size-5 text-[#e8c98d]/70"
    />

    <div className="relative z-10 mb-5 text-center">
      <div className="mx-auto mb-3 grid size-10 place-items-center rounded-full border border-[#e8c98d]/30 bg-white/10">
        <Heart className="size-4 fill-[#e8c98d]/20 text-[#e8c98d]" />
      </div>

      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#e8c98d]/80">
        Chapter of love
      </p>
    </div>

    <div className="relative z-10 flex-1 overflow-y-auto pr-2 text-white [scrollbar-color:rgba(232,201,141,0.45)_transparent] scrollbar-thin">
      <h4 className="mb-4 font-serif text-xl leading-snug text-[#fff9ef] sm:text-2xl">
        {story.title}
      </h4>

      <p className="mb-5 text-sm leading-7 text-white/80 sm:text-base">
        {story.content}{" "}
        <em className="font-medium text-white">{story.subContent}</em>.
      </p>

      <p className="mb-5 text-sm leading-7 text-white/80 sm:text-base">
        {story.subContent2}{" "}
        <em className="font-medium text-white">{story.subContent3}</em>{" "}
        {story.subContent4}
      </p>

      <blockquote className="mt-6 border-l-2 border-[#e8c98d]/70 pl-4 text-sm italic leading-7 text-[#e8c98d] sm:text-base">
        {story.subContent5}
      </blockquote>
    </div>

    <div className="relative z-10 mt-5 flex items-center justify-center gap-2 border-t border-white/10 pt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55 sm:text-xs">
      <MousePointerClick className="size-3.5" />
      <span>Tap to close</span>
    </div>
  </div>
);
