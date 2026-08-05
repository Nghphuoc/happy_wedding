"use client";

import { useTranslation } from "@/contexts/TranslationContext";
import { useReducedMotion } from "motion/react";
import { useState } from "react";

import { StoryCard } from "./story/StoryCard";
import { StoryContent } from "./story/StoryContent";
import { StoryHeader } from "./story/StoryHeader";
import { WeddingDecorations } from "./story/shared-elements";

const Story = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion() ?? false;
  const [isFlipped, setIsFlipped] = useState(false);

  const storyCardContent = {
    title: t("ourStory.story2.title"),
    content: t("ourStory.story2.content"),
    subContent: t("ourStory.story2.subContent"),
    subContent2: t("ourStory.story2.subContent2"),
    subContent3: t("ourStory.story2.subContent3"),
    subContent4: t("ourStory.story2.subContent4"),
    subContent5: t("ourStory.story2.subContent5"),
  };

  return (
    <section
      id="story"
      className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#fffdf9_0%,#fbf6ee_50%,#fffdf9_100%)] px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
    >
      <WeddingDecorations />

      <div className="mx-auto max-w-7xl">
        <StoryHeader
          title={t("ourStory.title")}
          description={t("ourStory.description")}
          reduceMotion={reduceMotion}
        />

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-14 lg:gap-20">
          <StoryCard
            isFlipped={isFlipped}
            reduceMotion={reduceMotion}
            onToggle={() => setIsFlipped((current) => !current)}
            story={storyCardContent}
          />

          <StoryContent
            title={t("ourStory.story1.title")}
            content={t("ourStory.story1.content")}
            subContent={t("ourStory.story1.subContent")}
            titleCard={t("ourStory.card.title")}
            contentCard={t("ourStory.card.content")}
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
