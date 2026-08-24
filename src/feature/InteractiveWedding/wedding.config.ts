export const WEDDING = {
    groomName: "Nguyễn Quang Vinh",
    brideName: "Nguyễn Ngọc Diễm Linh",
    date_female: { day: "03", month: "10", year: "2026", weekday: "Thứ Bảy" },
    date_male: { day: "04", month: "10", year: "2026", weekday: "Chủ Nhật" },
    venue: "Tiệc Cưới Sẽ Được Tổ Chức Tại Tự Gia",
    address_male: "Số 318-A, Kinh 10A, Tân Hiệp, An Giang.",
    address_female: "Số 185, Kinh A2, Tân Phát B, Tân Hội, An Giang.",
    timeline: [
        { time: "10:30", label: "Đón khách" },
        { time: "11:00", label: "Tiệc Trưa" },
    ],
    nuptialMass: { time: "9:00", location: "Thánh Đường Giáo Xứ KITO VUA Kênh A2", date: "03/10/2026" },
} as const;

export const CARD_WIDTH_BY_STEP = [
    "w-full max-w-[340px] sm:max-w-[420px]",
    "w-full max-w-[380px] sm:max-w-[460px] md:max-w-[520px]",
    "w-full max-w-[95vw] sm:max-w-[680px] md:max-w-[900px] lg:max-w-[980px]",
] as const;
