export const WEDDING = {
    groomName: "Quang Vinh",
    brideName: "Diem Linh",
    date_female: { day: "04", month: "10", year: "2026", weekday: "Chủ Nhật" },
    date_male: { day: "05", month: "10", year: "2026", weekday: "Thứ Hai" },
    venue: "Tiệc Cưới Được Tổ Chức Tại Tư Gia",
    address_male: "Số 218-A, Kinh 10A, Tân Hiệp, Kiên Giang.",
    address_female: "Số 123, Kinh A, Tân Hiệp, Kiên Giang.", // TODO
    timeline: [
        { time: "10:30", label: "Đón khách" },
        { time: "11:00", label: "Cử hành hôn lễ" },
        { time: "11:30", label: "Khai tiệc" },
    ],
    dressCodeColors: ["#721527", "#dca54c", "#2b2b2b", "#fdfbf7"],
} as const;

export const CARD_WIDTH_BY_STEP = [
    "w-full max-w-[340px] sm:max-w-[420px]",
    "w-full max-w-[380px] sm:max-w-[460px] md:max-w-[520px]",
    "w-full max-w-[95vw] sm:max-w-[680px] md:max-w-[900px] lg:max-w-[980px]",
] as const;
