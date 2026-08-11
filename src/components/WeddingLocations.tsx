
"use client";

import { MapPin, Navigation, CarFront, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { montserrat } from "@/utils/Fonts";

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
});

type LocationItem = {
  title: string;
  highlight: string;
  address: string;
  latitude: number;
  longitude: number;
  mapEmbedUrl: string;
  mapLink: string;
  featured?: boolean;
};

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
    featured: true,
  },
];

const GRAB_FALLBACK = "https://www.grab.com/vn/download/";

const GREEN_SM_IOS =
  "https://apps.apple.com/vn/app/xanh-sm-%C4%91%E1%BA%B7t-xe-%C4%91i%E1%BB%87n/id6446425595";

const GREEN_SM_ANDROID =
  "https://play.google.com/store/apps/details?id=com.gsm.customer&hl=vi";

function openXanhSM() {
  const ua = navigator.userAgent.toLowerCase();

  if (/iphone|ipad|ipod/.test(ua)) {
    window.open(GREEN_SM_IOS, "_blank");
    return;
  }

  if (/android/.test(ua)) {
    window.open(GREEN_SM_ANDROID, "_blank");
    return;
  }

  window.open("https://www.xanhsm.com/", "_blank");
}

export default function WeddingLocations() {
  return (
    <section className="overflow-hidden px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-9 text-center sm:mb-12">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9a671d]">
            Wedding Location
          </p>

          <h2
            className={`${playfair.className} mt-2 text-3xl text-[#721527] sm:text-4xl`}
          >
            Địa điểm ngày vui
          </h2>

          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#dca54c]/70" />
            <Heart className="size-3.5 fill-[#721527]/10 text-[#721527]" />
            <span className="h-px w-10 bg-[#dca54c]/70" />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {LOCATION_ITEMS.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative rounded-sm border border-[#dca54c] bg-[#fffaf2] p-2 shadow-[0_18px_50px_rgba(114,21,39,0.13)] transition-shadow duration-500 hover:shadow-[0_25px_65px_rgba(114,21,39,0.2)]"
            >
              <div className="relative overflow-hidden bg-[#eee5d8]">
                <div className="relative aspect-16/10 overflow-hidden">
                  <iframe
                    src={item.mapEmbedUrl}
                    title={`${item.title} - ${item.highlight}`}
                    className="h-full w-full border-0 grayscale-10 transition duration-700 group-hover:scale-[1.015] group-hover:grayscale-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />

                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />

                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-4 top-4 size-10 border-l border-t border-white/70"
                  />

                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-4 right-4 size-10 border-b border-r border-white/70"
                  />

                  <div className="pointer-events-none absolute bottom-4 left-4">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/85">
                      {item.highlight}
                    </p>

                    <p
                      className={`${montserrat.className} mt-1 text-2xl text-white drop-shadow-sm`}
                    >
                      {item.title}
                    </p>
                  </div>

                  {item.featured && (
                    <div className="absolute right-4 top-4 rounded-sm border border-[#dca54c]/80 bg-[#fffaf2]/95 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#721527] shadow-sm backdrop-blur">
                      Nhà Trai
                    </div>
                  )}
                </div>
              </div>

              <div className="px-2 pb-2 pt-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center border border-[#dca54c]/60 bg-[#fff7e9] text-[#721527]">
                    <MapPin className="size-4" />
                  </div>

                  <div className="min-w-0">
                    <p
                      className={`${montserrat.className} text-lg leading-snug font-bold text-[#721527]`}
                    >
                      {item.address}
                    </p>

                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  <a
                    href={item.mapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="col-span-2 flex items-center justify-center gap-2 border border-[#721527] bg-[#721527] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#fffaf2] transition-all duration-300 hover:bg-[#8c2035] active:scale-[0.98]"
                  >
                    <Navigation className="size-3.5" />
                    Mở chỉ đường
                  </a>

                  <a
                    href={GRAB_FALLBACK}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 border border-[#dca54c]/70 bg-transparent px-3 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#721527] transition-all duration-300 hover:bg-[#fff1d8] active:scale-[0.98]"
                  >
                    <CarFront className="size-3.5" />
                    Grab
                  </a>

                  <button
                    type="button"
                    onClick={openXanhSM}
                    className="flex items-center justify-center gap-2 border border-[#dca54c]/70 bg-transparent px-3 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#721527] transition-all duration-300 hover:bg-[#fff1d8] active:scale-[0.98]"
                  >
                    <CarFront className="size-3.5" />
                    Xanh SM
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

