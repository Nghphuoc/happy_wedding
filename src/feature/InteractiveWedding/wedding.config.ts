export const WEDDING = {
    groomName: "Quang Vinh",
    brideName: "Diem Linh",
    date: { day: "25", month: "10", year: "2026", weekday: "Chủ Nhật" },
    venue: "Trung Tâm Tiệc Cưới Diamond Palace",
    address: "Số 18 Song Hành, TP. Hồ Chí Minh",
    timeline: [
        { time: "10:30", label: "Đón khách" },
        { time: "11:00", label: "Cử hành hôn lễ" },
        { time: "11:30", label: "Khai tiệc" },
    ],
    dressCodeColors: ["#721527", "#dca54c", "#2b2b2b", "#fdfbf7"],
} as const;

// Chiều rộng card cho từng bước mở (step 0 / 1 / 2)
export const CARD_WIDTH_BY_STEP = [
    "w-full max-w-[340px] sm:max-w-[420px]",
    "w-full max-w-[380px] sm:max-w-[460px] md:max-w-[520px]",
    "w-full max-w-[95vw] sm:max-w-[680px] md:max-w-[900px] lg:max-w-[980px]",
] as const;
