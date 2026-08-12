import { Heart } from "lucide-react";
import { motion } from "motion/react";

import { revealTransition } from "./constants";
import { SectionDivider } from "./shared-elements";
import { montserrat, playfair } from "@/utils/Fonts";

type StoryHeaderProps = {
  title: string;
  description: string;
  reduceMotion: boolean;
};

export const StoryHeader = ({
  title,
  description,
  reduceMotion,
}: StoryHeaderProps) => (
  <motion.header
    initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={revealTransition}
    className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
  >
    <motion.div
      initial={reduceMotion ? undefined : { opacity: 0, scale: 0.7 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 15,
      }}
      className="mx-auto mb-5 grid size-14 place-items-center rounded-full border border-[#dca54c]/35 bg-white/80 text-[#721527] shadow-[0_10px_30px_rgba(114,21,39,0.08)] backdrop-blur"
    >
      <Heart className="size-6 fill-[#721527]/10" />
    </motion.div>

    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#9a671d]">
      Our journey
    </p>

    <h2 className={`text-3xl font-semibold leading-tight text-[#721527] sm:text-4xl lg:text-5xl ${playfair.className}`}>
      {title}
    </h2>

    <div className="my-5">
      <SectionDivider />
    </div>

    <p className={`mx-auto max-w-xl text-sm leading-7 text-[#665455] sm:text-base ${montserrat.className}`}>
      {description}
    </p>
  </motion.header>
);
