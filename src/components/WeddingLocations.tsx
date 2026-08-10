"use client";

import { useState } from "react";
import {
  Check,
  Copy,
  Flower2,
  Heart,
  MapPin,
  Navigation,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";

interface LocationItem {
  title: string;
  highlight: string;
  address: string;
  latitude: number;
  longitude: number;
  mapEmbedUrl: string;
  mapLink: string;
  icon: LucideIcon;
  featured?: boolean;
}

const LOCATION_ITEMS: LocationItem[] = [
  {
    title: "Lễ Vu Quy",
    highlight: "Nhà Gái",
    address: "Số 185, Kinh A2, Tân Phát B, Tân Hội, An Giang.",
    latitude: 10.174219,
    longitude: 105.240011,
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d936.0439835860633!2d105.24001155291567!3d10.17421910032423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1svi!2s!4v1786347708007!5m2!1svi!2s",
    mapLink: "https://maps.app.goo.gl/rLNsafBACMH8wwtR7",
    icon: MapPin,
  },
  {
    title: "Lễ Tân Hôn",
    highlight: "Nhà Trai",
    address: "Số 318-A, Kinh 10A, Tân Hiệp, An Giang.",
    latitude: 10.064973,
    longitude: 105.326317,
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d679.4335658483808!2d105.32631707316759!3d10.064973432070929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0a35fde4978e7%3A0x542a77bef6a99c05!2zQsO6biwgcGjhu58ga2jDtCDEkOG7qWMgSOG6oW5o!5e1!3m2!1svi!2s!4v1786347119538!5m2!1svi!2s",
    mapLink: "https://maps.app.goo.gl/ZfoNyJV7EEFXWSEc7",
    icon: MapPin,
    featured: true,
  },
];

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE_OUT },
  },
};

const GRAB_FALLBACK = "https://www.grab.com/vn/download/";
const GREEN_SM_IOS =
  "https://apps.apple.com/vn/app/xanh-sm-%C4%91%E1%BA%B7t-xe-%C4%91i%E1%BB%87n/id6446425595";
const GREEN_SM_ANDROID =
  "https://play.google.com/store/apps/details?id=com.gsm.customer&hl=vi";

const WeddingLocations = () => {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      id="locations"
      className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top,#8d2639_0%,#6e1729_34%,#430b18_72%,#2a0710_100%)] px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8"
    >
      <BackgroundDecorations />

      <div className="relative mx-auto max-w-5xl">
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, ease: EASE_OUT }}
          className="mx-auto mb-10 max-w-2xl text-center md:mb-14"
        >
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.78 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 170, damping: 16 }}
            className="relative mx-auto mb-5 grid size-14 place-items-center rounded-full border border-[#f1d8a0]/40 bg-[#fff8eb]/10 text-[#f3d99d] shadow-[0_16px_40px_rgba(0,0,0,0.25)] backdrop-blur-md"
          >
            <span className="absolute inset-1 rounded-full border border-[#f3d99d]/20" />
            <MapPin className="relative z-10 size-6" strokeWidth={1.7} />
          </motion.div>

          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#f3d99d]/20 bg-white/6 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#f3d99d] backdrop-blur">
            <Sparkles className="size-3.5" />
            Wedding Locations
          </div>

          <h2 className="font-serif text-3xl font-semibold leading-tight text-[#fff9ef] sm:text-4xl lg:text-5xl">
            Địa Điểm Tổ Chức
          </h2>

          <div aria-hidden="true" className="my-4 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-linear-to-r from-transparent to-[#e8bd6e]" />
            <Flower2 className="size-4 text-[#e8bd6e]" />
            <span className="h-px w-12 bg-linear-to-l from-transparent to-[#e8bd6e]" />
          </div>

          <p className="mx-auto max-w-xl text-sm leading-6 text-[#f7eadf]/72 sm:text-[15px] sm:leading-7">
            Rất hân hạnh được đón tiếp bạn đến chung vui cùng gia đình chúng mình. Chọn địa điểm bên dưới để xem bản đồ hoặc mở ứng dụng đặt xe.
          </p>
        </motion.header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-8"
        >
          {LOCATION_ITEMS.map((item, index) => (
            <LocationCard
              key={item.title}
              item={item}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface LocationCardProps {
  item: LocationItem;
  index: number;
  reduceMotion: boolean;
}

const LocationCard = ({ item, index, reduceMotion }: LocationCardProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const Icon = item.icon;

  const handleCopy = async () => {
    await navigator.clipboard?.writeText(item.address);
    setIsCopied(true);
    window.setTimeout(() => setIsCopied(false), 1800);
  };

  const openDeepLink = (
    deepLink: string,
    fallbackUrl: string,
    beforeOpen?: () => void,
  ) => {
    beforeOpen?.();

    const startedAt = Date.now();
    window.location.href = deepLink;

    window.setTimeout(() => {
      const appLikelyOpened = document.hidden || Date.now() - startedAt > 1800;
      if (!appLikelyOpened) window.location.href = fallbackUrl;
    }, 1200);
  };

  const openGrab = () => {
    const destinationName = encodeURIComponent(`${item.highlight} - ${item.title}`);
    const grabDeepLink = `grab://open?dropOffLatitude=${item.latitude}&dropOffLongitude=${item.longitude}&dropOffName=${destinationName}`;
    console.log("Opening Grab deep link:", grabDeepLink);
    openDeepLink(grabDeepLink, GRAB_FALLBACK);
  };

  const openGreenSM = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const fallback = isIOS ? GREEN_SM_IOS : GREEN_SM_ANDROID;

    console.log("Opening Green SM deep link:", "xanhsm://");
    openDeepLink("xanhsm://", fallback, () => {
      navigator.clipboard?.writeText(item.address).catch(() => undefined);
    });
  };

  return (
    <motion.article
      variants={itemVariants}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.3, ease: EASE_OUT }}
      className={`group relative flex flex-col overflow-hidden rounded-[28px] border p-4 shadow-[0_28px_80px_rgba(20,0,7,0.26)] transition-all duration-500 sm:p-5 lg:p-6 ${
        item.featured
          ? "border-[#e4bd73]/55 bg-[linear-gradient(155deg,#fffaf1_0%,#fff6e8_48%,#f8ead7_100%)] text-[#681426] shadow-[0_32px_90px_rgba(20,0,7,0.34)]"
          : "border-white/15 bg-[linear-gradient(155deg,rgba(255,255,255,0.105),rgba(255,255,255,0.055))] text-white backdrop-blur-xl hover:border-[#e8bd6e]/40 hover:bg-white/11"
      }`}
    >
      <div
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#f3d99d]/80 to-transparent ${
          item.featured ? "opacity-80" : "opacity-55"
        }`}
      />
      <div
        aria-hidden="true"
        className={`absolute -right-16 -top-16 size-44 rounded-full border transition-transform duration-700 group-hover:scale-110 ${
          item.featured ? "border-[#cf9d42]/18" : "border-white/10"
        }`}
      />
      <div
        aria-hidden="true"
        className={`absolute -bottom-16 -left-16 size-40 rounded-full blur-3xl ${
          item.featured ? "bg-[#8a1d31]/10" : "bg-[#d9aa54]/10"
        }`}
      />

      <div className="relative z-10 flex flex-col items-center px-1 pt-1 text-center">
        <div
          className={`mb-4 grid size-12 place-items-center rounded-2xl border shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:rotate-2 ${
            item.featured
              ? "border-[#d1a55d]/45 bg-[#71162a] text-[#fff9ef] shadow-[0_12px_26px_rgba(113,22,42,0.2)]"
              : "border-[#f1d08f]/30 bg-[#fff9ef]/10 text-[#f1d08f] shadow-[0_10px_24px_rgba(0,0,0,0.16)]"
          }`}
        >
          <Icon className="size-5" strokeWidth={1.7} />
        </div>

        <p
          className={`mb-1.5 text-[10px] font-bold uppercase tracking-[0.24em] ${
            item.featured ? "text-[#a06f28]" : "text-[#edc778]"
          }`}
        >
          {item.title}
        </p>

        <h3
          className={`mb-3 font-serif text-2xl font-semibold sm:text-[30px] ${
            item.featured ? "text-[#681426]" : "text-[#fff9ef]"
          }`}
        >
          {item.highlight}
        </h3>

        <div
          aria-hidden="true"
          className={`mx-auto mb-3 h-px w-12 transition-all duration-500 group-hover:w-20 ${
            item.featured ? "bg-[#c99744]/65" : "bg-[#ebc777]/50"
          }`}
        />

        <p
          className={`mb-5 min-h-12 text-sm leading-6 ${
            item.featured ? "text-[#765b60]" : "text-[#f7eadf]/70"
          }`}
        >
          {item.address}
        </p>
      </div>

      <div className="relative z-10 mt-auto flex flex-col gap-3">
        <div
          className={`group/map relative overflow-hidden rounded-2xl border shadow-[0_14px_34px_rgba(0,0,0,0.12)] ${
            item.featured ? "border-[#d6ad69]/35" : "border-white/10"
          }`}
        >
          <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-black/10 via-transparent to-transparent" />
          <iframe
            title={`Bản đồ ${item.highlight}`}
            src={item.mapEmbedUrl}
            width="100%"
            height="210"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="bg-black/5 transition duration-500 group-hover/map:scale-[1.015]"
          />
        </div>

        <div className="flex w-full flex-col gap-2.5">
          <div className="flex w-full items-center gap-2">
            <a
              href={item.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex min-h-12 flex-1 items-center justify-center gap-2 rounded-2xl px-4 text-sm font-bold shadow-md transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ${
                item.featured
                  ? "bg-[#6f1629] text-white hover:bg-[#57101f]"
                  : "bg-[#e9bf73] text-[#3d0b17] hover:bg-[#f2d396]"
              }`}
            >
              <Navigation className="size-4" />
              <span>Google Maps</span>
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className={`grid size-12 shrink-0 place-items-center rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 ${
                item.featured
                  ? "border-[#71162a]/15 bg-[#71162a]/5 text-[#71162a] hover:bg-[#71162a]/10"
                  : "border-[#e9bf73]/25 bg-white/6 text-[#efcf91] hover:bg-white/11"
              }`}
              title="Sao chép địa chỉ"
              aria-label="Sao chép địa chỉ"
            >
              {isCopied ? <Check className="size-4.5" /> : <Copy className="size-4.5" />}
            </button>
          </div>

          <div className="grid w-full grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={openGrab}
              className="flex min-h-11 items-center justify-center gap-2 rounded-2xl border border-[#00b14f]/28 bg-[#00b14f] px-3 text-[13px] font-bold text-white shadow-[0_10px_24px_rgba(0,177,79,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#009f47] active:translate-y-0 active:scale-[0.98]"
              aria-label={`Mở Grab đến ${item.highlight}`}
            >
              <span className="grid size-5 place-items-center rounded-full bg-white/15 text-[10px] font-black">G</span>
              Grab
            </button>

            <button
              type="button"
              onClick={openGreenSM}
              className="flex min-h-11 items-center justify-center gap-2 rounded-2xl border border-[#04a989]/30 bg-[linear-gradient(135deg,#08b896,#07977d)] px-3 text-[13px] font-bold text-white shadow-[0_10px_24px_rgba(7,151,125,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0 active:scale-[0.98]"
              aria-label={`Mở Green SM đến ${item.highlight}`}
            >
              <span className="grid size-5 place-items-center rounded-full bg-white/15 text-[10px] font-black">X</span>
              Xanh SM
            </button>
          </div>

          <p
            className={`px-1 text-center text-[10px] leading-4 ${
              item.featured ? "text-[#856d70]" : "text-white/45"
            }`}
          >
            Xanh SM sẽ tự sao chép địa chỉ trước khi mở ứng dụng.
          </p>
        </div>
      </div>
    </motion.article>
  );
};

const BackgroundDecorations = () => (
  <div aria-hidden="true" className="pointer-events-none">
    <div className="absolute -left-36 top-8 -z-10 size-104 rounded-full bg-[#d7a64c]/10 blur-3xl" />
    <div className="absolute -right-40 -bottom-16 -z-10 size-120 rounded-full bg-black/25 blur-3xl" />
    <div className="absolute left-1/2 top-1/3 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-[#9f233d]/18 blur-3xl" />

    <Flower2
      strokeWidth={1}
      className="absolute left-4 top-24 size-16 -rotate-12 text-[#e8bd6e]/10 sm:left-8 sm:size-24 lg:left-[5%]"
    />
    <Heart
      strokeWidth={1}
      className="absolute right-4 top-40 size-14 rotate-12 text-white/5 sm:right-8 sm:size-20 lg:right-[5%]"
    />

    <span className="absolute left-[12%] top-[58%] size-1.5 rounded-full bg-[#e8bd6e]/55 shadow-[0_0_18px_rgba(232,189,110,0.75)]" />
    <span className="absolute bottom-[14%] right-[10%] size-1 rounded-full bg-white/50 shadow-[0_0_15px_rgba(255,255,255,0.65)]" />
  </div>
);

export default WeddingLocations;