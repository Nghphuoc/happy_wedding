"use client";

import {
  ChevronRight,
  Heart,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";

import { montserrat, playfair } from "@/utils/Fonts";

interface Answer {
  label: string;
  response: string;
}

interface Question {
  question: string;
  answers: Answer[];
}

const QUESTIONS: Question[] = [
  {
    question: "Ai là người yêu nhiều hơn?",
    answers: [
      {
        label: "Chú rể",
        response: "Sai rồi, người kia yêu nhiều hơn.",
      },
      {
        label: "Cô dâu",
        response: "Sai rồi, người kia yêu nhiều hơn.",
      },
    ],
  },
  {
    question: "Ai là người luôn đúng?",
    answers: [
      {
        label: "Chú rể",
        response: "Bạn chọn chú rể, chú rể chọn... cô dâu.",
      },
      {
        label: "Cô dâu",
        response: "Hehe, cô dâu cũng nghĩ vậy á.",
      },
    ],
  },
  {
    question: "Ai là người có quyền lực nhất nhà?",
    answers: [
      {
        label: "Chú rể",
        response: "Có quyền nha: quyền đồng ý.",
      },
      {
        label: "Cô dâu",
        response: "Chú rể chứ, gia trưởng mới lo được cho em.",
      },
    ],
  },
];

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const CoupleQuestionGame = () => {
  const reduceMotion = useReducedMotion() ?? false;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);

  const question = QUESTIONS[currentQuestion];
  const isAnswered = selectedAnswer !== null;

  const selectedResponse =
    selectedAnswer !== null
      ? question.answers[selectedAnswer].response
      : "";

  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;

  const handleSelectAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
  };

  const handleNext = () => {
    if (currentQuestion === QUESTIONS.length - 1) {
      setFinished(true);
      return;
    }

    setCurrentQuestion((prev) => prev + 1);
    setSelectedAnswer(null);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setFinished(false);
  };

  return (
    <section
      id="couple-question-game"
      className={`${montserrat.className} relative isolate overflow-hidden bg-[linear-gradient(145deg,#3d0c18_0%,#721527_50%,#4a0e1d_100%)] px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28`}
    >
      <BackgroundDecorations />

      <div className="relative mx-auto max-w-3xl">
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
          className="mx-auto mb-10 max-w-2xl text-center md:mb-12"
        >
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, scale: 0.7, rotate: -10 }
            }
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 170,
              damping: 15,
            }}
            className="mx-auto mb-5 grid size-14 place-items-center rounded-full border border-[#e2bc73]/40 bg-white/10 text-[#f1d599] shadow-[0_12px_35px_rgba(0,0,0,0.18)] backdrop-blur"
          >
            <Heart className="size-6 fill-[#f1d599]/10" />
          </motion.div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#e2bc73]">
            Wedding mini game
          </p>

          <h2
            className={`${playfair.className} text-3xl font-semibold leading-tight text-[#fffaf2] sm:text-4xl lg:text-5xl`}
          >
            Ai Mới Là Người...?
          </h2>

          <div
            aria-hidden="true"
            className="my-5 flex items-center justify-center gap-3"
          >
            <span className="h-px w-12 bg-linear-to-r from-transparent to-[#e2bc73]" />
            <Sparkles className="size-4 text-[#e2bc73]" />
            <span className="h-px w-12 bg-linear-to-l from-transparent to-[#e2bc73]" />
          </div>

          <p className="mx-auto max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
            Chọn theo trực giác của bạn nhé. Nhưng nhớ là trong chuyện tình
            này, đáp án đôi khi không quan trọng bằng phản ứng của cặp đôi đâu.
          </p>
        </motion.header>

        <AnimatePresence mode="wait">
          {!finished ? (
            <motion.div
              key={`question-${currentQuestion}`}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: 24,
                      scale: 0.98,
                    }
              }
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              exit={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 0,
                      x: -24,
                      scale: 0.98,
                    }
              }
              transition={{
                duration: 0.45,
                ease: EASE_OUT,
              }}
              className="overflow-hidden rounded-4xl border border-white/15 bg-white/[0.07] shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl"
            >
              <div className="border-b border-white/10 px-6 py-5 sm:px-8">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e2bc73]">
                    Câu {currentQuestion + 1} / {QUESTIONS.length}
                  </span>

                  <span className="text-xs text-white/45">Chọn 1 người</span>
                </div>

                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={false}
                    animate={{
                      width: `${progress}%`,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: EASE_OUT,
                    }}
                    className="h-full rounded-full bg-[#e2bc73]"
                  />
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <motion.div
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 12,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: 0.05,
                  }}
                  className="mb-8 text-center"
                >
                  <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                    Theo bạn thì...
                  </span>

                  <h3
                    className={`${playfair.className} text-2xl font-semibold leading-snug text-[#fffaf2] sm:text-3xl md:text-4xl`}
                  >
                    {question.question}
                  </h3>
                </motion.div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {question.answers.map((answer, index) => {
                    const selected = selectedAnswer === index;

                    return (
                      <motion.button
                        key={answer.label}
                        type="button"
                        disabled={isAnswered}
                        onClick={() => handleSelectAnswer(index)}
                        whileHover={
                          reduceMotion || isAnswered
                            ? undefined
                            : {
                                y: -5,
                                scale: 1.015,
                              }
                        }
                        whileTap={
                          reduceMotion || isAnswered
                            ? undefined
                            : {
                                scale: 0.97,
                              }
                        }
                        transition={{
                          duration: 0.25,
                        }}
                        className={`group relative min-h-36 overflow-hidden rounded-3xl border px-6 py-6 text-center transition-all duration-300 ${
                          selected
                            ? "border-[#e2bc73] bg-[#e2bc73]/15 text-[#fffaf2] shadow-[0_18px_50px_rgba(226,188,115,0.12)]"
                            : isAnswered
                              ? "border-white/5 bg-white/2.5 text-white/25"
                              : "border-white/15 bg-white/6 text-white/80 hover:border-[#e2bc73]/50 hover:bg-white/10"
                        }`}
                      >
                        <div
                          aria-hidden="true"
                          className={`absolute -right-10 -top-10 size-28 rounded-full border transition-transform duration-500 group-hover:scale-110 ${
                            selected ? "border-[#e2bc73]/30" : "border-white/10"
                          }`}
                        />

                        <div className="relative z-10">
                          <div
                            className={`mx-auto mb-4 grid size-12 place-items-center rounded-full border transition-all duration-300 ${
                              selected
                                ? "border-[#e2bc73]/50 bg-[#721527] text-[#f1d599]"
                                : "border-white/15 bg-white/6 text-white/45 group-hover:border-[#e2bc73]/40 group-hover:text-[#e2bc73]"
                            }`}
                          >
                            <Heart
                              className={`size-5 ${
                                selected ? "fill-[#e2bc73]/20" : ""
                              }`}
                            />
                          </div>

                          <span
                            className={`${playfair.className} text-2xl font-semibold sm:text-3xl`}
                          >
                            {answer.label}
                          </span>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                <AnimatePresence>
                  {isAnswered && (
                    <motion.div
                      initial={
                        reduceMotion
                          ? false
                          : {
                              opacity: 0,
                              y: 16,
                              scale: 0.97,
                            }
                      }
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: 8,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: EASE_OUT,
                      }}
                      className="mt-7 overflow-hidden rounded-2xl border border-[#e2bc73]/20 bg-[#25070e]/30"
                    >
                      <div className="px-5 py-6 text-center sm:px-8">
                        <div className="mx-auto mb-3 flex w-fit items-center gap-2 text-[#e2bc73]">
                          <Sparkles className="size-4" />

                          <span className="text-xs font-semibold uppercase tracking-[0.22em]">
                            Cặp đôi nói rằng
                          </span>

                          <Sparkles className="size-4" />
                        </div>

                        <p
                          className={`${playfair.className} text-xl font-semibold leading-relaxed text-[#fffaf2] sm:text-2xl`}
                        >
                          “{selectedResponse}”
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {isAnswered && (
                    <motion.div
                      initial={
                        reduceMotion
                          ? false
                          : {
                              opacity: 0,
                              y: 10,
                            }
                      }
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.35,
                        delay: 0.1,
                      }}
                      className="mt-7 flex justify-center"
                    >
                      <button
                        type="button"
                        onClick={handleNext}
                        className={`${montserrat.className} group inline-flex items-center gap-2 rounded-full bg-[#fffaf2] px-6 py-3 text-sm font-semibold text-[#721527] shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_16px_38px_rgba(0,0,0,0.24)] active:scale-[0.98]`}
                      >
                        {currentQuestion === QUESTIONS.length - 1
                          ? "Xem lời kết"
                          : "Câu tiếp theo"}

                        <ChevronRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 20,
                      scale: 0.96,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.55,
                ease: EASE_OUT,
              }}
              className="relative overflow-hidden rounded-4xl border border-[#e2bc73]/35 bg-[#fffaf2] px-6 py-10 text-center shadow-[0_30px_90px_rgba(0,0,0,0.3)] sm:px-10 sm:py-14"
            >
              <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-[#e2bc73]/15 to-transparent" />

              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 size-56 rounded-full border border-[#dca54c]/15"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-20 -left-20 size-56 rounded-full bg-[#721527]/5 blur-2xl"
              />

              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : {
                        scale: 0,
                        rotate: -16,
                      }
                }
                animate={{
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 14,
                  delay: 0.1,
                }}
                className="relative mx-auto mb-6 grid size-20 place-items-center rounded-full bg-[#721527] text-[#fffaf2] shadow-[0_16px_35px_rgba(114,21,39,0.28)]"
              >
                <Heart className="size-9 fill-[#e2bc73]/20 text-[#e2bc73]" />
              </motion.div>

              <div className="relative">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#9a671d]">
                  Hết game rồi
                </p>

                <h3
                  className={`${playfair.className} mx-auto mb-5 max-w-xl text-3xl font-semibold leading-tight text-[#721527] sm:text-4xl`}
                >
                  Bạn đã hiểu luật trong gia đình này chưa?
                </h3>

                <div
                  aria-hidden="true"
                  className="mx-auto mb-5 flex items-center justify-center gap-3"
                >
                  <span className="h-px w-12 bg-[#dca54c]/40" />
                  <Sparkles className="size-4 text-[#9a671d]" />
                  <span className="h-px w-12 bg-[#dca54c]/40" />
                </div>

                <p className="mx-auto max-w-lg text-sm leading-7 text-[#705b5e] sm:text-base sm:leading-8">
                  Đúng hay sai không quan trọng. Quan trọng là sau vài câu
                  hỏi, chắc bạn cũng đã phần nào hiểu được cách vận hành
                  của gia đình nhỏ này rồi đó.
                </p>

                <p
                  className={`${playfair.className} mt-4 text-xl italic text-[#721527]`}
                >
                  Tóm lại là... yêu nhau là được. 🤍
                </p>

                <button
                  type="button"
                  onClick={handleRestart}
                  className={`${montserrat.className} mt-8 inline-flex items-center gap-2 rounded-full bg-[#721527] px-6 py-3 text-sm font-semibold text-[#fffaf2] shadow-[0_12px_28px_rgba(114,21,39,0.22)] transition-all duration-300 hover:scale-[1.03] hover:bg-[#861a30] active:scale-[0.98]`}
                >
                  <RotateCcw className="size-4" />
                  Chơi lại
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!finished && (
          <motion.p
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                  }
            }
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.5,
              duration: 0.6,
            }}
            className={`${montserrat.className} mt-7 text-center text-xs leading-6 text-white/40`}
          >
            Không được quay sang hỏi cô dâu hoặc chú rể trước khi chọn nha 👀
          </motion.p>
        )}
      </div>
    </section>
  );
};

const BackgroundDecorations = () => (
  <div aria-hidden="true" className="pointer-events-none">
    <div className="absolute -left-36 top-10 -z-10 size-96 rounded-full bg-[#dca54c]/10 blur-3xl" />

    <div className="absolute -right-36 bottom-0 -z-10 size-96 rounded-full bg-black/20 blur-3xl" />

    <Heart
      strokeWidth={1}
      className="absolute left-4 top-24 size-16 -rotate-12 text-[#e2bc73]/10 sm:left-8 sm:size-24 lg:left-[5%]"
    />

    <Sparkles
      strokeWidth={1}
      className="absolute right-4 top-40 size-14 rotate-12 text-white/6 sm:right-8 sm:size-20 lg:right-[5%]"
    />

    <span className="absolute left-[12%] top-[58%] size-1.5 rounded-full bg-[#e2bc73]/50 shadow-[0_0_18px_rgba(226,188,115,0.8)]" />

    <span className="absolute bottom-[14%] right-[10%] size-1 rounded-full bg-white/50 shadow-[0_0_15px_rgba(255,255,255,0.7)]" />
  </div>
);

export default CoupleQuestionGame;