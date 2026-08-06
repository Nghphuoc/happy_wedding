"use client";

import { Flower2, Gift, Heart, Palette, Users, type LucideIcon } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";

interface DresscodeItem {
  title: string;
  highlight: string;
  description: string;
  icon: LucideIcon;
  featured?: boolean;
  colors?: string[];
}

const DRESSCODE_ITEMS: DresscodeItem[] = [
  {
    title: "Màu Sắc",
    highlight: "Dress Palette",
    description: "Đen, Trắng, Beige hoặc Hồng Pastel. Mong quý khách hạn chế trang phục màu đỏ hoặc xanh lá để tổng thể buổi tiệc được hài hòa.",
    icon: Palette,
    colors: ["#181411", "#fffaf2", "#d8bc91", "#ead4cf"],
  },
  {
    title: "Trẻ Em",
    highlight: "12+",
    description: "Để đảm bảo không gian tiệc cưới được trọn vẹn, chúng mình xin phép chỉ đón tiếp các vị khách từ 12 tuổi trở lên. Mong bạn thông cảm.",
    icon: Users,
    featured: true,
  },
  {
    title: "Quà Cưới",
    highlight: "Wishbox",
    description: "Sự hiện diện của bạn là món quà quý giá nhất. Nếu muốn gửi tặng thêm, chúng mình có chuẩn bị hộp quà tại khu vực đón khách.",
    icon: Gift,
  },
];

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
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

const Dresscode = () => {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section id="dresscode" className="relative isolate overflow-hidden bg-[linear-gradient(145deg,#3d0c18_0%,#721527_50%,#4a0e1d_100%)] px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28">
      <BackgroundDecorations />

      <div className="relative mx-auto max-w-7xl">
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
          className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
        >
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.7, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 170, damping: 15 }}
            className="mx-auto mb-5 grid size-14 place-items-center rounded-full border border-[#e2bc73]/40 bg-white/10 text-[#f1d599] shadow-[0_12px_35px_rgba(0,0,0,0.18)] backdrop-blur"
          >
            <Heart className="size-6 fill-[#f1d599]/10" />
          </motion.div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#e2bc73]">
            Wedding etiquette
          </p>

          <h2 className="font-serif text-3xl font-semibold leading-tight text-[#fffaf2] sm:text-4xl lg:text-5xl">
            Dresscode &amp; Lưu Ý
          </h2>

          <div aria-hidden="true" className="my-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-linear-to-r from-transparent to-[#e2bc73]" />
            <Flower2 className="size-4 text-[#e2bc73]" />
            <span className="h-px w-12 bg-linear-to-l from-transparent to-[#e2bc73]" />
          </div>

          <p className="mx-auto max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
            Một vài thông tin nhỏ để bạn có thể chuẩn bị thật thoải mái và cùng chúng mình tạo nên những khoảnh khắc thật đẹp trong ngày trọng đại.
          </p>
        </motion.header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6"
        >
          {DRESSCODE_ITEMS.map((item, index) => (
            <DresscodeCard key={item.title} item={item} index={index} reduceMotion={reduceMotion} />
          ))}
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease: EASE_OUT }}
          className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-3 rounded-2xl border border-[#e2bc73]/20 bg-white/6 px-5 py-4 text-center text-sm leading-6 text-white/65 backdrop-blur sm:px-7 sm:text-base"
        >
          <Heart className="size-4 shrink-0 fill-[#e2bc73]/15 text-[#e2bc73]" />
          <p>Cảm ơn bạn đã dành thời gian chuẩn bị và đồng hành cùng chúng mình trong ngày đặc biệt này.</p>
        </motion.div>
      </div>
    </section>
  );
};

interface DresscodeCardProps {
  item: DresscodeItem;
  index: number;
  reduceMotion: boolean;
}

const DresscodeCard = ({ item, index, reduceMotion }: DresscodeCardProps) => {
  const Icon = item.icon;

  return (
    <motion.article
      variants={itemVariants}
      whileHover={reduceMotion ? undefined : { y: -8, rotate: index === 1 ? 0 : index % 2 === 0 ? -0.4 : 0.4 }}
      transition={{ duration: 0.35, ease: EASE_OUT }}
      className={`group relative overflow-hidden rounded-[1.75rem] border p-6 text-center shadow-[0_24px_60px_rgba(0,0,0,0.18)] transition-[border-color,background-color,box-shadow] duration-500 sm:p-8 lg:p-9 ${item.featured ? "border-[#e2bc73]/55 bg-[#fffaf2] text-[#721527] shadow-[0_28px_75px_rgba(0,0,0,0.28)]" : "border-white/15 bg-white/[0.07] text-white backdrop-blur hover:border-[#e2bc73]/45 hover:bg-white/10"}`}
    >
      <div aria-hidden="true" className={`absolute -right-12 -top-12 size-36 rounded-full border transition-transform duration-700 group-hover:scale-110 ${item.featured ? "border-[#dca54c]/20" : "border-white/10"}`} />

      <div aria-hidden="true" className={`absolute -bottom-16 -left-16 size-40 rounded-full blur-2xl ${item.featured ? "bg-[#721527]/8" : "bg-[#dca54c]/10"}`} />

      <div className={`relative z-10 mx-auto mb-6 grid size-14 place-items-center rounded-full border transition duration-300 group-hover:-translate-y-1 group-hover:scale-105 ${item.featured ? "border-[#dca54c]/45 bg-[#721527] text-[#fff8ed] shadow-[0_12px_28px_rgba(114,21,39,0.2)]" : "border-[#e2bc73]/35 bg-white/10 text-[#e2bc73] shadow-[0_10px_25px_rgba(0,0,0,0.15)]"}`}>
        <Icon className="size-6" strokeWidth={1.6} />
      </div>

      <p className={`relative z-10 mb-3 text-xs font-semibold uppercase tracking-[0.22em] ${item.featured ? "text-[#9a671d]" : "text-[#e2bc73]"}`}>
        {item.title}
      </p>

      {item.colors ? (
        <ColorPalette colors={item.colors} />
      ) : (
        <p className={`relative z-10 mb-5 font-serif text-3xl font-semibold sm:text-4xl ${item.featured ? "text-[#721527]" : "text-[#fffaf2]"}`}>
          {item.highlight}
        </p>
      )}

      <div aria-hidden="true" className={`relative z-10 mx-auto mb-5 h-px w-16 transition-all duration-500 group-hover:w-24 ${item.featured ? "bg-[#dca54c]/60" : "bg-[#e2bc73]/45"}`} />

      <p className={`relative z-10 text-sm leading-7 sm:text-[15px] ${item.featured ? "text-[#705b5e]" : "text-white/65"}`}>
        {item.description}
      </p>
    </motion.article>
  );
};

interface ColorPaletteProps {
  colors: string[];
}

const ColorPalette = ({ colors }: ColorPaletteProps) => (
  <div className="relative z-10 mb-6">
    <p className="mb-4 font-serif text-2xl text-[#fffaf2]">Dress Palette</p>

    <div className="flex items-center justify-center gap-3">
      {colors.map((color) => (
        <span key={color} className="size-9 rounded-full border-2 border-white/50 shadow-[0_5px_15px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:scale-110" style={{ backgroundColor: color }} />
      ))}
    </div>
  </div>
);

const BackgroundDecorations = () => (
  <div aria-hidden="true" className="pointer-events-none">
    <div className="absolute -left-36 top-10 -z-10 size-96 rounded-full bg-[#dca54c]/10 blur-3xl" />
    <div className="absolute -right-36 bottom-0 -z-10 size-96 rounded-full bg-black/20 blur-3xl" />

    <Flower2 strokeWidth={1} className="absolute left-4 top-24 size-16 -rotate-12 text-[#e2bc73]/10 sm:left-8 sm:size-24 lg:left-[5%]" />
    <Heart strokeWidth={1} className="absolute right-4 top-40 size-14 rotate-12 text-white/6 sm:right-8 sm:size-20 lg:right-[5%]" />

    <span className="absolute left-[12%] top-[58%] size-1.5 rounded-full bg-[#e2bc73]/50 shadow-[0_0_18px_rgba(226,188,115,0.8)]" />
    <span className="absolute bottom-[14%] right-[10%] size-1 rounded-full bg-white/50 shadow-[0_0_15px_rgba(255,255,255,0.7)]" />
  </div>
);

export default Dresscode;