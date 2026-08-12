import { Heart, Sparkles } from "lucide-react";
import { motion } from "motion/react";

import {
  contentItemVariants,
  contentVariants,
  VIEWPORT,
} from "./constants";
import { montserrat, playfair } from "@/utils/Fonts";

type StoryContentProps = {
  title: string;
  content: string;
  subContent: string;
  highlight: string;
  titleCard: string;
  contentCard: string;
};

export const StoryContent = ({
  title,
  content,
  subContent,
  highlight,
  titleCard,
  contentCard
}: StoryContentProps) => (
  <motion.div
    variants={contentVariants}
    initial="hidden"
    whileInView="visible"
    viewport={VIEWPORT}
    className="relative mx-auto max-w-xl text-center md:mx-0 md:text-left"
  >
    <motion.div
      variants={contentItemVariants}
      className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#dca54c]/25 bg-white/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9a671d] shadow-sm backdrop-blur sm:text-xs"
    >
      <Sparkles className="size-3.5" />
      <span>A beautiful beginning</span>
    </motion.div>

    <motion.h3
      variants={contentItemVariants}
      className={`mb-5 ${playfair.className} text-2xl font-semibold leading-tight text-[#721527] sm:text-3xl lg:text-4xl`}
    >
      {title}
    </motion.h3>

    <motion.div
      variants={contentItemVariants}
      className="mx-auto mb-6 flex items-center justify-center gap-3 md:mx-0 md:justify-start"
    >
      <span className="h-px w-10 bg-[#dca54c]/70" />
      <Heart className="size-4 fill-[#721527]/10 text-[#721527]" />
      <span className="h-px w-20 bg-linear-to-r from-[#dca54c]/70 to-transparent" />
    </motion.div>

    <motion.p
      variants={contentItemVariants}
      className="mb-5 text-sm leading-7 text-[#665455] sm:text-base sm:leading-8"
    >
      <em>{content}</em>
    </motion.p>

    <motion.p
      variants={contentItemVariants}
      className="text-sm leading-7 text-[#665455] sm:text-base sm:leading-8"
    >
      <em>{subContent}</em>
      <strong> {highlight} </strong>
    </motion.p>

    <motion.div
      variants={contentItemVariants}
      className="mt-8 rounded-2xl border border-[#dca54c]/25 bg-white/65 p-5 shadow-[0_15px_45px_rgba(114,21,39,0.06)] backdrop-blur sm:p-6"
    >
      <div className="flex items-start gap-4">
        <div className="grid size-10 shrink-0 place-items-center rounded-full bg-[#721527] text-[#fff8ed] shadow-md">
          <Heart className="size-4 fill-current" />
        </div>

        <div className="text-left">
          <p className="font-semibold text-lg text-[#721527]">
            {titleCard}
          </p>

          <p className="mt-1 text-xs leading-6 text-[#7c6869] sm:text-sm">
            {contentCard}
          </p>
        </div>
      </div>
    </motion.div>
  </motion.div>
);
