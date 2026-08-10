"use client";
import { useTranslation } from "@/contexts/TranslationContext";
import SendBlessing from "@/feature/SendBlessing";
import { Flower2 } from "lucide-react";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import couple from "@/assets/blackCouple.jpg";
import whiteCouple from "@/assets/muoi.jpg";
import { Divider } from "@/utils/flower";

const Hero = () => {
  const { t } = useTranslation();
  const [isSendBlessingOpen, setIsSendBlessingOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<"front" | "back">("front");

  return (
    <>
      <section
        id="home"
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 pb-20 pt-5 sm:px-8 md:grid-cols-2 md:gap-12 md:px-8 md:pb-24 lg:min-h-[calc(100svh-7rem)] lg:px-10"
      >
        <div className="order-2 text-center md:order-1 md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9a671d]">
            {t("mainTitle")}
          </p>
          <h1 className="mt-5 font-serif text-4xl font-bold leading-[1.12] text-[#721527] sm:text-5xl lg:text-6xl">
            Quang Vinh <br />
            <span className="text-3xl">&</span> Diem Linh
          </h1>
          <Divider icon={<Flower2 size={18} />} align="left" />
          <p className="mx-auto max-w-xl text-base leading-8 text-[#564243] md:mx-0 lg:text-lg">
            {t("description")}
          </p>
          <div className="mt-10 mr-40 flex justify-center">
            <button
              type="button"
              onClick={() => setIsSendBlessingOpen(true)}
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-[#dca54c] bg-[#721527] px-8 py-4 font-semibold tracking-[0.08em] text-[#fff8ed] shadow-[0_20px_50px_rgba(114,21,39,0.28)] transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(114,21,39,0.38)] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-[#dca54c]/30"
            >
              {/* Light sweep */}
              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
              />

              <Heart
                aria-hidden="true"
                className="relative z-10 h-5 w-5 fill-[#dca54c] text-[#dca54c] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125"
              />

              <span className="relative z-10">{t("sendMessages")}</span>
            </button>
          </div>
        </div>
        <div className="relative order-1 h-107.5 w-full sm:h-130 md:order-2 md:h-150">
          {/* Ảnh phía sau */}
          <figure
            onClick={() => setActiveImage("back")}
            className={`absolute right-[2%] w-[68%] rotate-2 border border-[#dca54c] bg-white p-2 shadow-lg sm:w-[66%] ${
              activeImage === "back" ? "z-20 scale-105" : "z-10"
            }`}
          >
            <Image
              src={whiteCouple}
              alt="Bride and groom"
              priority
              sizes="(max-width: 768px) 68vw, 34vw"
              className="block h-auto w-full grayscale"
            />
          </figure>

          {/* Ảnh phía trước */}
          <figure
            onClick={() => setActiveImage("front")}
            className={`absolute bottom-1 left-[-2%] w-[66%] -rotate-3 border border-[#dca54c] bg-white p-2 shadow-xl sm:w-[64%] ${
              activeImage === "front" ? "z-20 scale-105" : "z-10"
            }`}
          >
            <Image
              src={couple}
              alt="Vinh and Linh in wedding attire"
              priority
              sizes="(max-width: 768px) 66vw, 32vw"
              className="block h-auto w-full"
            />
          </figure>
        </div>
      </section>

      <SendBlessing
        isOpen={isSendBlessingOpen}
        onClose={() => setIsSendBlessingOpen(false)}
      />
    </>
  );
};

export default Hero;
