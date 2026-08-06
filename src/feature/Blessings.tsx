"use client";

import { useEffect } from "react";
import {
  Flower2,
  Heart,
  MessageCircleHeart,
  RefreshCw,
  Sparkles,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import WishCard, { type WishInfo } from "@/components/WishCard";
import useBlessing from "@/hooks/useBlessing";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export default function Blessings() {
  const { blessingData, loading, error, fetchBlessings } = useBlessing();

  const reduceMotion = useReducedMotion();
  const wishes: WishInfo[] = blessingData ?? [];

  useEffect(() => {
    fetchBlessings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="blessings"
      className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#fffdf9_0%,#fbf6ee_50%,#fffdf9_100%)] px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
    >
      <BackgroundDecorations />

      <div className="relative mx-auto max-w-7xl">
        <BlessingsHeader reduceMotion={reduceMotion ?? false} />

        {error ? (
          <ErrorState onRetry={fetchBlessings} />
        ) : loading ? (
          <BlessingsSkeleton />
        ) : wishes.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {wishes.map((wish, index) => (
              <WishCard
                key={`${wish.name}-${wish.date}-${index}`}
                data={wish}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

interface BlessingsHeaderProps {
  reduceMotion: boolean;
}

const BlessingsHeader = ({
  reduceMotion,
}: BlessingsHeaderProps) => (
  <motion.header
    initial={reduceMotion ? false : { opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.8, ease: EASE_OUT }}
    className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
  >
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              scale: 0.7,
              rotate: -10,
            }
      }
      whileInView={{
        opacity: 1,
        scale: 1,
        rotate: 0,
      }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 170,
        damping: 15,
      }}
      className="mx-auto mb-5 grid size-14 place-items-center rounded-full border border-[#dca54c]/40 bg-white/75 text-[#721527] shadow-[0_12px_30px_rgba(114,21,39,0.09)] backdrop-blur"
    >
      <MessageCircleHeart className="size-6" />
    </motion.div>

    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#9a671d]">
      Wedding guestbook
    </p>

    <h2 className="font-serif text-3xl font-semibold leading-tight text-[#721527] sm:text-4xl lg:text-5xl">
      Sổ Lưu Bút
    </h2>

    <div
      aria-hidden="true"
      className="my-5 flex items-center justify-center gap-3"
    >
      <span className="h-px w-12 bg-linear-to-r from-transparent to-[#dca54c]" />
      <Flower2 className="size-4 text-[#dca54c]" />
      <span className="h-px w-12 bg-linear-to-l from-transparent to-[#dca54c]" />
    </div>

    <p className="mx-auto max-w-xl text-sm leading-7 text-[#665455] sm:text-base">
      Những lời chúc tốt đẹp nhất từ gia đình, bạn bè và những người thân yêu.
    </p>
  </motion.header>
);

const BlessingsSkeleton = () => (
  <div
    role="status"
    aria-label="Đang tải những lời chúc"
    className="columns-1 gap-6 sm:columns-2 lg:columns-3"
  >
    {Array.from({ length: 6 }).map((_, index) => (
      <div
        key={index}
        className="mb-6 break-inside-avoid animate-pulse rounded-[1.75rem] border border-[#dca54c]/15 bg-[#fffaf2]/80 p-6 shadow-[0_18px_45px_rgba(114,21,39,0.05)] sm:p-7"
      >
        <div className="mb-6 size-9 rounded-lg bg-[#dca54c]/10" />

        <div className="space-y-3">
          <div className="h-3 rounded-full bg-[#721527]/8" />
          <div className="h-3 w-11/12 rounded-full bg-[#721527]/8" />
          <div className="h-3 w-4/5 rounded-full bg-[#721527]/8" />

          {index % 2 === 0 && (
            <div className="h-3 w-2/3 rounded-full bg-[#721527]/8" />
          )}
        </div>

        <div className="my-6 h-px bg-[#dca54c]/15" />

        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="mb-2 h-2.5 w-16 rounded-full bg-[#dca54c]/15" />
            <div className="h-4 w-28 rounded-full bg-[#721527]/10" />
          </div>

          <div className="h-3 w-20 rounded-full bg-[#721527]/8" />
        </div>
      </div>
    ))}

    <span className="sr-only">
      Đang tải những lời yêu thương...
    </span>
  </div>
);

const EmptyState = () => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    className="mx-auto max-w-xl rounded-4xl border border-[#dca54c]/30 bg-[#fffaf2]/85 px-6 py-12 text-center shadow-[0_24px_70px_rgba(114,21,39,0.08)] backdrop-blur sm:px-10"
  >
    <div className="mx-auto mb-5 grid size-16 place-items-center rounded-full border border-[#dca54c]/35 bg-white text-[#721527] shadow-sm">
      <MessageCircleHeart className="size-7" />
    </div>

    <h3 className="font-serif text-2xl font-semibold text-[#721527]">
      Sổ lưu bút đang chờ
    </h3>

    <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#725f62] sm:text-base">
      Chưa có lời chúc nào. Hãy là người đầu tiên gửi lời yêu thương đến cặp đôi
      nhé!
    </p>

    <Heart
      aria-hidden="true"
      className="mx-auto mt-6 size-5 fill-[#dca54c]/20 text-[#dca54c]"
    />
  </motion.div>
);

interface ErrorStateProps {
  onRetry: () => void;
}

const ErrorState = ({
  onRetry,
}: ErrorStateProps) => (
  <motion.div
    role="alert"
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    className="mx-auto max-w-xl rounded-4xl border border-[#b76a76]/30 bg-[#fff5f4] px-6 py-10 text-center shadow-[0_20px_60px_rgba(114,21,39,0.08)] sm:px-10"
  >
    <div className="mx-auto mb-5 grid size-14 place-items-center rounded-full bg-[#721527]/10 text-[#721527]">
      <Heart className="size-6" />
    </div>

    <h3 className="font-serif text-2xl text-[#721527]">
      Chưa thể tải lời chúc
    </h3>

    <p className="mt-3 text-sm leading-7 text-[#725f62] sm:text-base">
      Đã có lỗi xảy ra khi tải sổ lưu bút. Vui lòng thử lại sau.
    </p>

    <button
      type="button"
      onClick={onRetry}
      className="group mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-[#dca54c]/60 bg-[#721527] px-6 py-3 text-sm font-semibold text-[#fff8ed] shadow-[0_12px_30px_rgba(114,21,39,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#5d1020] hover:shadow-[0_16px_40px_rgba(114,21,39,0.28)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#dca54c]/25"
    >
      <RefreshCw
        aria-hidden="true"
        className="size-4 transition-transform duration-500 group-hover:rotate-180"
      />

      Thử lại
    </button>
  </motion.div>
);

const BackgroundDecorations = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none"
  >
    <div className="absolute -left-32 top-24 -z-10 size-80 rounded-full bg-[#dca54c]/10 blur-3xl sm:size-96" />

    <div className="absolute -right-32 bottom-0 -z-10 size-80 rounded-full bg-[#721527]/10 blur-3xl sm:size-96" />

    <Flower2
      strokeWidth={1}
      className="absolute left-4 top-32 size-16 -rotate-12 text-[#dca54c]/15 sm:left-8 sm:size-24 lg:left-[5%]"
    />

    <Heart
      strokeWidth={1}
      className="absolute right-4 top-52 size-14 rotate-12 text-[#721527]/10 sm:right-8 sm:size-20 lg:right-[5%]"
    />

    <Sparkles className="absolute bottom-24 left-[8%] size-5 text-[#dca54c]/25" />
  </div>
);