"use client";

import { useTranslation } from "@/contexts/TranslationContext";
import { Heart, MousePointerClick } from "lucide-react";
import { motion, Variants } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const textItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

const Story = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const { t } = useTranslation();

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsFlipped((prev) => !prev);
        }
    };

    return (
        <section
            id="story"
            className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 overflow-hidden"
        >
            {/* HEADER */}
            <motion.div
                className="text-center mb-12 md:mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: 0.2,
                        type: "spring",
                        bounce: 0.5,
                    }}
                >
                    <Heart className="mx-auto text-[#c2a77d] mb-3 md:mb-4 w-6 h-6 md:w-8 md:h-8" />
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-serif text-[#2c3127] mb-3 md:mb-4 px-2">
                    {t("ourStory.title")}
                </h2>

                <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base px-4">
                    {t("ourStory.description")}
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
                {/* CARD SECTION */}
                <motion.div
                    className="relative w-full max-w-md mx-auto"
                    style={{ perspective: "1200px" }}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.div
                        onClick={() => setIsFlipped(!isFlipped)}
                        onKeyDown={handleKeyDown}
                        role="button"
                        tabIndex={0}
                        aria-pressed={isFlipped}
                        aria-label="Toggle story card"
                        animate={{ rotateY: isFlipped ? 180 : 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        style={{ transformStyle: "preserve-3d" }}
                        className="relative w-full aspect-3/4 sm:aspect-4/5 md:aspect-4/5 cursor-pointer outline-none focus-visible:ring-4 focus-visible:ring-[#c2a77d]/50 rounded-2xl"
                    >
                        {/* FRONT */}
                        <div
                            className="absolute inset-0 rounded-2xl overflow-hidden bg-[#e8ede3] p-3 sm:p-4 shadow-xl"
                            style={{ backfaceVisibility: "hidden" }}
                        >
                            <div className="relative w-full h-full rounded-xl overflow-hidden">
                                {/* 3. THAY THẾ BẰNG NEXT/IMAGE ĐỂ TỐI ƯU */}
                                <Image
                                    src="https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Our story"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </div>

                            <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium text-gray-700 shadow-md">
                                <MousePointerClick size={14} />
                                <span>Tap to flip</span>
                            </div>
                        </div>

                        {/* BACK */}
                        <div
                            className="absolute inset-0 rounded-2xl bg-[#52594a] shadow-xl p-6 sm:p-8 flex flex-col"
                            style={{
                                backfaceVisibility: "hidden",
                                transform: "rotateY(180deg)",
                            }}
                        >
                            {/* Scroll Area */}
                            <div className="flex-1 overflow-y-auto pr-2 scrollbar-hide text-white">
                                <h4 className="text-xl sm:text-2xl font-serif text-[#e8ede3] mb-4">
                                    {t("ourStory.story2.title")}
                                </h4>

                                <p className="text-white/80 mb-5 leading-relaxed text-sm md:text-base">
                                    {t("ourStory.story2.content")}{" "}
                                    <i className="text-white">
                                        {t("ourStory.story2.subContent")}
                                    </i>
                                    .
                                </p>

                                <p className="text-white/80 mb-5 leading-relaxed text-sm md:text-base">
                                    {t("ourStory.story2.subContent2")}{" "}
                                    <i className="text-white">
                                        {t("ourStory.story2.subContent3")}
                                    </i>{" "}
                                    {t("ourStory.story2.subContent4")}
                                </p>

                                <p className="text-[#c2a77d] italic font-medium text-sm md:text-base mt-auto pt-4 border-t border-white/20">
                                    {t("ourStory.story2.subContent5")}
                                </p>
                            </div>

                            <p className="text-[10px] sm:text-xs text-white/50 mt-4 uppercase tracking-widest text-center">
                                Tap to close
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* TEXT SECTION */}
                <motion.div
                    variants={textContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center md:text-left px-2 sm:px-0"
                >
                    <motion.h3
                        variants={textItemVariants}
                        className="text-2xl sm:text-3xl font-serif text-[#2c3127] mb-4 sm:mb-6"
                    >
                        {t("ourStory.story1.title")}
                    </motion.h3>

                    <motion.p
                        variants={textItemVariants}
                        className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm md:text-base"
                    >
                        {t("ourStory.story1.content")}
                    </motion.p>

                    <motion.p
                        variants={textItemVariants}
                        className="text-gray-600 leading-relaxed text-sm md:text-base"
                    >
                        {t("ourStory.story1.subContent")}
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default Story;
