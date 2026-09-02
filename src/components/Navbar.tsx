"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import InteractiveWeddingCard from "@/feature/InteractiveWedding/index";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import LanguageSwitcher from "@/feature/LanguageSwicher";
import { useTranslation } from "@/contexts/TranslationContext";
import useGetInfo from "@/hooks/useGetInfo";
import { useUser } from "@/providers/UserProvider";

const NAV_SECTION_IDS = ["home", "story", "gallery", "events"];

const Navbar = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const codeFromUrl = searchParams.get("code");
  const lastScrollY = useRef(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const { lang } = useTranslation();
  const { t } = useTranslation();
  const { userInfo, fetchUserInfo } = useGetInfo(codeFromUrl || "");
  // setGlobalUserInfo từ Context
  const { setGlobalUserInfo } = useUser();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsCardOpen(true);
    setIsMenuOpen(false);
  };

  const handleSectionNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setActiveSection(sectionId);

    if (pathname !== "/") {
      router.push(`/#${sectionId}`);
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  const handleBlessingNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    router.push("/blessings");
  };

  const navLinks = [
    {
      id: "home",
      name: t("navigation.home"),
      href: "#home",
      action: (e: React.MouseEvent<HTMLAnchorElement>) =>
        handleSectionNavigation(e, "home"),
    },
    {
      id: "story",
      name: t("navigation.Story"),
      href: "#story",
      action: (e: React.MouseEvent<HTMLAnchorElement>) =>
        handleSectionNavigation(e, "story"),
    },
    {
      id: "gallery",
      name: t("navigation.Gallery"),
      href: "#gallery",
      action: (e: React.MouseEvent<HTMLAnchorElement>) =>
        handleSectionNavigation(e, "gallery"),
    },
    {
      id: "events",
      name: t("navigation.Events"),
      href: "#events",
      action: (e: React.MouseEvent<HTMLAnchorElement>) =>
        handleSectionNavigation(e, "events"),
    },
    {
      id: "invitation",
      name: t("navigation.Invitationcard"),
      href: "#",
      action: (e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e),
    },
    {
      id: "blessings",
      name: t("navigation.Blessings"),
      href: "/blessings",
      action: (e: React.MouseEvent<HTMLAnchorElement>) =>
        handleBlessingNavigation(e),
    },
  ];

  useEffect(() => {
    if (codeFromUrl) {
      fetchUserInfo();
    }
  }, [codeFromUrl]);

  useEffect(() => {
    if (userInfo) {
      // Save to global state
      setGlobalUserInfo(userInfo);

      // Logic to open the card after 5 seconds
      const timer = setTimeout(() => {
        setIsCardOpen(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [userInfo, setGlobalUserInfo]);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("blessings");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          const nextSection = visibleEntries[0].target.id;
          setActiveSection(nextSection);
        }
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.7],
        rootMargin: "-10% 0px -42% 0px",
      },
    );

    NAV_SECTION_IDS.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY.current;
      const shouldShow = isScrollingUp || currentScrollY < 40;

      setIsNavVisible(shouldShow);
      lastScrollY.current = currentScrollY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`bg-background fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isNavVisible ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="mx-auto max-w-400 px-3 pt-3 sm:px-5 lg:px-6 bg-background">
          <nav className="flex items-center justify-between rounded-2xl border border-[#d4b07c]/40 bg-[rgba(251,249,244,0.82)] px-4 py-3 shadow-[0_10px_35px_rgba(41,23,18,0.08)] backdrop-blur-xl ring-1 ring-white/60 transition-all duration-500 md:px-6 md:py-4">
            <div className="flex flex-1 items-center justify-start">
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="rounded-full border border-[#d4b07c]/50 bg-white/40 p-2 text-[#5b4b3c] transition-all duration-200 hover:border-[#c98d4b] hover:text-[#721527] md:hidden"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? (
                  <X size={22} strokeWidth={1.8} />
                ) : (
                  <Menu size={22} strokeWidth={1.8} />
                )}
              </button>

              <div className="hidden items-center gap-2 md:flex">
                {navLinks.slice(0, 3).map((link) => {
                  const isActiveItem =
                    pathname === "/" ? activeSection === link.id : pathname === "/blessings" && link.id === "blessings";

                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={link.action}
                      aria-current={isActiveItem ? "page" : undefined}
                      className={`relative inline-flex items-center rounded-full px-3 py-2 text-[0.7rem] font-medium uppercase tracking-[0.2em] transition-all duration-300 ${isActiveItem
                        ? "bg-[#721527] text-[#fffaf2] shadow-[0_10px_25px_rgba(114,21,39,0.22)]"
                        : "text-[#5d4d3a] hover:bg-[#f4e9dd] hover:text-[#721527]"
                        }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="shrink-0 px-3 text-center md:px-6">
              <div className="font-serif text-xl italic tracking-[0.18em] text-[#5d4d3a] md:text-2xl">
                VINH &amp; LINH
              </div>
            </div>

            <div className="flex flex-1 items-center justify-end gap-3 md:gap-4">
              <div className="hidden items-center gap-2 md:flex">
                {navLinks.slice(3).map((link) => {
                  const isActiveItem =
                    pathname === "/" ? activeSection === link.id : pathname === "/blessings" && link.id === "blessings";

                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={link.action}
                      aria-current={isActiveItem ? "page" : undefined}
                      className={`relative inline-flex items-center rounded-full px-3 py-2 text-[0.7rem] font-medium uppercase tracking-[0.2em] transition-all duration-300 ${isActiveItem
                        ? "bg-[#721527] text-[#fffaf2] shadow-[0_10px_25px_rgba(114,21,39,0.22)]"
                        : "text-[#5d4d3a] hover:bg-[#f4e9dd] hover:text-[#721527]"
                        }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>

              <div className="flex items-center justify-end">
                <LanguageSwitcher currentLang={lang} />
              </div>
            </div>
          </nav>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${isMenuOpen ? "mt-3 max-h-112 opacity-100" : "max-h-0 opacity-0"
              }`}
          >
            <div className="rounded-[1.3rem] border border-[#d4b07c]/40 bg-[rgba(251,249,244,0.96)] p-3 shadow-[0_12px_25px_rgba(41,23,18,0.08)] backdrop-blur-xl">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActiveItem =
                    pathname === "/" ? activeSection === link.id : pathname === "/blessings" && link.id === "blessings";

                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={link.action}
                      aria-current={isActiveItem ? "page" : undefined}
                      className={`rounded-2xl px-4 py-3 text-center text-[0.7rem] font-medium uppercase tracking-[0.2em] transition-all duration-300 ${isActiveItem
                        ? "bg-[#721527] text-[#fffaf2] shadow-[0_10px_25px_rgba(114,21,39,0.22)]"
                        : "bg-[#f6efe7] text-[#5d4d3a] hover:bg-[#f2e3c9] hover:text-[#721527]"
                        }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="h-24 md:h-28" aria-hidden="true" />

      <InteractiveWeddingCard
        isOpen={isCardOpen}
        onClose={() => setIsCardOpen(false)}
        name={userInfo?.data?.NAME}
        checkLocation={userInfo?.data?.CHECK}
      />
    </>
  );
};

export default Navbar;
