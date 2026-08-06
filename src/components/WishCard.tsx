"use client";

import { CalendarDays, Heart, Quote } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export interface WishInfo {
  name: string;
  note: string;
  date: string;
}

interface WishCardProps {
  data: WishInfo;
  index?: number;
}

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const formatWishDate = (date: string) => {
  if (!date) return "";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(parsedDate);
};

const WishCard = ({ data, index = 0 }: WishCardProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.65,
        delay: Math.min(index * 0.06, 0.3),
        ease: EASE_OUT,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -8,
              rotate: index % 2 === 0 ? 0.35 : -0.35,
            }
      }
      className="group relative mb-6 break-inside-avoid overflow-hidden rounded-[1.75rem] border border-[#dca54c]/30 bg-[#fffaf2]/95 p-6 shadow-[0_18px_50px_rgba(114,21,39,0.08)] backdrop-blur transition-[border-color,box-shadow] duration-500 hover:border-[#dca54c]/65 hover:shadow-[0_28px_75px_rgba(114,21,39,0.16)] sm:p-7"
    >
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-10 size-32 rounded-full border border-[#dca54c]/15 transition-transform duration-700 group-hover:scale-110"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-14 -left-14 size-36 rounded-full bg-[#721527]/5 blur-2xl"
      />

      <Quote
        aria-hidden="true"
        strokeWidth={1.4}
        className="mb-5 size-9 fill-[#dca54c]/10 text-[#dca54c]/55 transition duration-500 group-hover:scale-110 group-hover:text-[#dca54c]"
      />

      <p className="relative z-10 whitespace-pre-line text-sm leading-7 text-[#665455] sm:text-base sm:leading-8">
        “{data.note}”
      </p>

      <div
        aria-hidden="true"
        className="my-6 h-px w-full bg-linear-to-r from-transparent via-[#dca54c]/35 to-transparent"
      />

      <footer className="relative z-10 flex items-end justify-between gap-4">
        <div className="min-w-0">
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9a671d]">
            Lời chúc từ
          </p>

          <div className="flex items-center gap-2">
            <Heart
              aria-hidden="true"
              className="size-4 shrink-0 fill-[#721527]/10 text-[#721527]"
            />

            <h3 className="truncate font-serif text-lg font-semibold text-[#721527] sm:text-xl">
              {data.name}
            </h3>
          </div>
        </div>

        {data.date && (
          <time
            dateTime={data.date}
            className="flex shrink-0 items-center gap-1.5 text-[11px] font-medium text-[#927d80] sm:text-xs"
          >
            <CalendarDays
              aria-hidden="true"
              className="size-3.5 text-[#9a671d]"
            />

            {formatWishDate(data.date)}
          </time>
        )}
      </footer>
    </motion.article>
  );
};

export default WishCard;