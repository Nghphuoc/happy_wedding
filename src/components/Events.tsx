"use client";

import muoi from "@/assets/muoi.jpg";
import { useTranslation } from "@/contexts/TranslationContext";
import { montserrat, playfair } from "@/utils/Fonts";
import {
  Flower2,
  Heart,
  HouseHeart,
  Sparkles,
  Wine,
  type LucideIcon,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "motion/react";
import Image from "next/image";


/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

interface EventItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

/* -------------------------------------------------------------------------- */
/*                                  Animation                                 */
/* -------------------------------------------------------------------------- */

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASE_OUT,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                                  Components                                */
/* -------------------------------------------------------------------------- */

const SectionHeader = ({
  title,
  reduceMotion,
}: {
  title: string;
  reduceMotion: boolean;
}) => (
  <motion.header
    initial={reduceMotion ? false : { opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{
      duration: 0.8,
      ease: EASE_OUT,
    }}
    className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
  >
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 170,
        damping: 15,
      }}
      className="mx-auto mb-5 grid size-14 place-items-center rounded-full border border-[#dca54c]/40 bg-white/75 text-[#721527] shadow-[0_12px_30px_rgba(114,21,39,0.09)] backdrop-blur"
    >
      <Heart className="size-6 fill-[#721527]/10" />
    </motion.div>

    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#9a671d]">
      Wedding timeline
    </p>

    <h2
      className={`${playfair.className} text-3xl font-semibold leading-tight text-[#721527] sm:text-4xl lg:text-5xl`}
    >
      {title}
    </h2>

    <div
      aria-hidden="true"
      className="mt-5 flex items-center justify-center gap-3"
    >
      <span className="h-px w-12 bg-linear-to-r from-transparent to-[#dca54c]" />

      <Flower2 className="size-4 text-[#dca54c]" />

      <span className="h-px w-12 bg-linear-to-l from-transparent to-[#dca54c]" />
    </div>
  </motion.header>
);

const EventImage = ({
  reduceMotion,
}: {
  reduceMotion: boolean;
}) => (
  <motion.div
    initial={
      reduceMotion
        ? false
        : {
            opacity: 0,
            x: -36,
            rotate: -2,
          }
    }
    whileInView={{
      opacity: 1,
      x: 0,
      rotate: 0,
    }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{
      duration: 0.9,
      ease: EASE_OUT,
    }}
    className="relative mx-auto w-full max-w-87.5 sm:max-w-107.5 lg:max-w-117.5"
  >
    {/* Back frame */}
    <div
      aria-hidden="true"
      className="absolute inset-3 -z-10 rotate-3 rounded-4xl border border-[#dca54c]/25 bg-[#721527]/5"
    />

    {/* Top decoration */}
    <div
      aria-hidden="true"
      className="absolute -right-4 -top-5 z-20 grid size-14 place-items-center rounded-full border border-[#dca54c]/40 bg-[#fffaf2] text-[#9a671d] shadow-lg sm:-right-6 sm:-top-7 sm:size-16"
    >
      <Sparkles className="size-6" />
    </div>

    {/* Bottom floral decoration */}
    <Flower2
      aria-hidden="true"
      strokeWidth={1}
      className="pointer-events-none absolute -bottom-6 -left-5 z-20 size-24 rotate-12 text-[#721527]/20 sm:-bottom-8 sm:-left-8 sm:size-32"
    />

    <motion.figure
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -7,
              rotate: -0.8,
            }
      }
      transition={{
        duration: 0.4,
        ease: EASE_OUT,
      }}
      className="overflow-hidden rounded-[1.75rem] border border-[#dca54c]/45 bg-[#fffaf2] p-2.5 shadow-[0_24px_70px_rgba(82,40,45,0.18)] sm:p-3"
    >
      <div className="group relative aspect-4/5 overflow-hidden rounded-[1.35rem]">
        <Image
          src={muoi}
          alt="Wedding event portrait"
          fill
          sizes="(max-width: 640px) 88vw,
            (max-width: 1024px) 430px,
            470px
          "
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.035]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-[#321014]/55 via-transparent to-white/5"
        />

        <span
          aria-hidden="true"
          className="absolute left-4 top-4 size-12 border-l border-t border-white/70"
        />

        <span
          aria-hidden="true"
          className="absolute bottom-4 right-4 size-12 border-b border-r border-white/70"
        />

        <figcaption className="absolute inset-x-6 bottom-6 text-white">
          <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/70 sm:text-xs">
            Save the date
          </p>

          <p
            className={`${playfair.className} mt-1 text-2xl sm:text-3xl`}
          >
            Quang Vinh &amp; Diễm Linh
          </p>
        </figcaption>
      </div>
    </motion.figure>
  </motion.div>
);

const EventTimeline = ({
  events,
}: {
  events: EventItem[];
}) => (
  <motion.ol
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="relative space-y-5 sm:space-y-6"
  >
    {/* Desktop timeline line */}
    <div
      aria-hidden="true"
      className="absolute bottom-10 left-6.75 top-10 hidden w-px bg-linear-to-b from-transparent via-[#dca54c]/55 to-transparent sm:block"
    />

    {events.map((event, index) => (
      <EventTimelineItem
        key={`${event.title}-${index}`}
        event={event}
        index={index}
      />
    ))}
  </motion.ol>
);

const EventTimelineItem = ({
  event,
  index,
}: {
  event: EventItem;
  index: number;
}) => {
  const Icon = event.icon;

  return (
    <motion.li variants={itemVariants} className="group relative">
      <div
        className="relative flex gap-4 rounded-2xl border border-transparent px-3 py-4 transition duration-300 hover:border-[#dca54c]/25 hover:bg-white/60 hover:shadow-[0_14px_40px_rgba(114,21,39,0.07)] sm:gap-5 sm:px-4 sm:py-5"
      >
        {/* Icon and timeline node */}
        <div className="relative z-10 shrink-0">
          <div
            className="grid size-14 place-items-center rounded-full border border-[#dca54c]/35 bg-[#fffaf2] text-[#721527] shadow-[0_8px_24px_rgba(114,21,39,0.09)] transition duration-300 group-hover:-translate-y-1 group-hover:border-[#dca54c] group-hover:bg-[#721527] group-hover:text-[#fff8ed] group-hover:shadow-[0_12px_30px_rgba(114,21,39,0.18)]"
          >
            <Icon
              className="size-5"
              strokeWidth={1.6}
            />
          </div>

          <span
            aria-hidden="true"
            className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full border-2 border-[#fffaf2] bg-[#dca54c] text-[9px] font-semibold text-[#721527] shadow-sm"
          >
            {index + 1}
          </span>
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1 pt-1">
          <h3
            className={`${playfair.className} text-xl font-medium text-[#721527] transition-colors duration-300 sm:text-2xl`}
          >
            {event.title}
          </h3>

          <p className="mt-2 text-sm font-light leading-7 text-[#725f62] sm:text-base sm:leading-8">
            {event.description}
          </p>

          <div
            aria-hidden="true"
            className="mt-4 h-px w-12 bg-linear-to-r from-[#dca54c]/70 to-transparent transition-all duration-300 group-hover:w-24"
          />
        </div>
      </div>
    </motion.li>
  );
};

const BackgroundDecorations = () => (
  <div aria-hidden="true" className="pointer-events-none">
    <div className="absolute -left-32 top-20 -z-10 size-80 rounded-full bg-[#dca54c]/10 blur-3xl sm:size-96" />

    <div className="absolute -right-32 bottom-0 -z-10 size-80 rounded-full bg-[#721527]/10 blur-3xl sm:size-96" />

    <Flower2
      strokeWidth={1}
      className="absolute left-4 top-32 size-16 -rotate-12 text-[#dca54c]/15 sm:left-8 sm:size-24 lg:left-[5%]"
    />

    <Heart
      strokeWidth={1}
      className="absolute right-4 top-52 size-14 rotate-12 text-[#721527]/10 sm:right-8 sm:size-20 lg:right-[5%]"
    />
  </div>
);

/* -------------------------------------------------------------------------- */
/*                                    Events                                  */
/* -------------------------------------------------------------------------- */

export default function Events() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion() ?? false;

  const events: EventItem[] = [
    {
      title: t("events.Photography.title"),
      description: t("events.Photography.description"),
      icon: Sparkles,
    },
    {
      title: t("events.Ceremony.title"),
      description: t("events.Ceremony.description"),
      icon: Heart,
    },
    {
      title: t("events.Drink & Dinner.title"),
      description: t("events.Drink & Dinner.description"),
      icon: Wine,
    },
    {
      title: t("events.thankYou.title"),
      description: t("events.thankYou.description"),
      icon: HouseHeart,
    },
  ];

  return (
    <section
      id="events"
      className={`${montserrat.className} relative isolate overflow-hidden bg-[linear-gradient(180deg,#fffdf9_0%,#fbf6ee_50%,#fffdf9_100%)] px-4 pb-8 sm:px-6 sm:pb-10 md:pb-16 lg:px-8 lg:pb-20`}
    >
      <BackgroundDecorations />

      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title={t("events.title")}
          reduceMotion={reduceMotion}
        />

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <EventImage reduceMotion={reduceMotion} />

          <EventTimeline events={events} />
        </div>
      </div>
    </section>
  );
}