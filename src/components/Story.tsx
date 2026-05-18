/* eslint-disable @next/next/no-img-element */
"use client";

import { Heart } from "lucide-react";
import { motion, Variants } from "motion/react";
import { useState } from "react";

const Story = () => {
    const [isFlipped, setIsFlipped] = useState(false);

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
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <section
            id="story"
            className="py-24 max-w-7xl mx-auto px-6 overflow-hidden"
        >
            {/* --- Phần Tiêu Đề --- */}
            <motion.div
                className="text-center mb-16"
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
                    <Heart className="mx-auto text-[#c2a77d] mb-4" size={32} />
                </motion.div>

                <h2 className="text-4xl font-serif text-[#2c3127] mb-4">
                    Our Story
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                    Từ những người bạn chung trường, đến những người yêu, và giờ
                    là bạn đời của nhau.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* --- Phần Hình Ảnh Với Hiệu Ứng Lật (Flip) --- */}
                {/* 1. LỚP VỎ NGOÀI: Xử lý hiệu ứng xuất hiện (Fade & Slide in) */}
                <motion.div
                    className="relative h-96 md:h-125"
                    style={{ perspective: "1000px" }}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {/* 2. LỚP CARD BÊN TRONG: Chuyên xử lý lật 3D khi Hover */}
                    <motion.div
                        className="w-full h-full rounded-2xl shadow-xl relative"
                        animate={{ rotateY: isFlipped ? 180 : 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        onMouseEnter={() => setIsFlipped(true)}
                        onMouseLeave={() => setIsFlipped(false)}
                        style={{
                            transformStyle: "preserve-3d",
                            cursor: "pointer",
                        }}
                    >
                        {/* Mặt Trước (Chứa Hình Ảnh) */}
                        <motion.div
                            className="absolute inset-0 bg-[#e8ede3] flex items-center justify-center p-4 rounded-2xl overflow-hidden"
                            style={{ backfaceVisibility: "hidden" }}
                        >
                            {/* Khối nền nhạt ban đầu */}
                            <motion.div
                                className="absolute inset-0 bg-[#e8ede3] -ml-6 -mb-6 rounded-2xl"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 1,
                                    delay: 0.3,
                                    ease: "easeOut",
                                }}
                            />
                            <img
                                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Our story"
                                className="relative z-10 w-full h-full object-cover rounded-2xl shadow-sm"
                            />
                        </motion.div>

                        {/* Mặt Sau (Chứa Câu Chuyện Mới) */}
                        <motion.div
                            className="absolute inset-0 bg-[#e8ede3] p-10 rounded-2xl shadow-xl flex flex-col justify-center text-center overflow-hidden"
                            style={{
                                backfaceVisibility: "hidden",
                                transform: "rotateY(180deg)",
                            }}
                        >
                            <h4 className="text-2xl font-serif text-[#2c3127] mb-5">
                                Chuyện Chưa Kể
                            </h4>
                            <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                                Mẹ Linh từng kể, vào một buổi chiều nọ, có một
                                thanh niên cưỡi chiếc Sirius "cà tàng" cứ lượn
                                lờ, đánh võng mấy vòng trước cổng. Mẹ thấy khả
                                nghi quá mới quay sang hỏi:{" "}
                                <i>
                                    "Ủa Linh, thằng nào đi chiếc Sirius, da thì
                                    ngăm ngăm, tóc thì xoăn tít như mì tôm mà cứ
                                    dòm ngó nhà mình như đi đòi nợ vậy con?"
                                </i>
                                .
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                                Nghe xong, Linh bĩu môi chê ỏng chê eo, dõng dạc
                                tuyên bố:{" "}
                                <i>
                                    "À, cái thằng Vinh học cùng trường đó mẹ.
                                    Trông cái mặt ghét dễ sợ, có cho vàng con
                                    cũng không thèm!"
                                </i>
                                . Thế nhưng Linh đâu biết rằng, thanh niên "tóc
                                xoăn đòi nợ" hôm ấy lượn lờ với mục đích vô cùng
                                rõ ràng: cưa đổ bằng được con gái cưng của mẹ.
                            </p>
                            <p className="text-gray-600 leading-relaxed italic font-medium text-sm md:text-base">
                                Đúng là ông bà ta nói cấm có sai: "Ghét của nào
                                trời trao của đó". Mà ở đây là trời ép nhận luôn
                                nguyên combo "đen đen, xoăn xoăn" cộng thêm
                                chiếc Sirius!
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* --- Phần Chữ (Chính) --- */}
                <motion.div
                    variants={textContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h3
                        variants={textItemVariants}
                        className="text-3xl font-serif text-[#2c3127] mb-6"
                    >
                        Một cuộc gặp gỡ định mệnh
                    </motion.h3>

                    <motion.p
                        variants={textItemVariants}
                        className="text-gray-600 mb-6 leading-relaxed"
                    >
                        Chúng tôi gặp nhau vào một chiều mưa tháng 8. Linh đang
                        loay hoay với chiếc ô bị hỏng, còn Vinh thì tình cờ đi
                        ngang qua. Một câu chào ngại ngùng, một nụ cười trao
                        nhau, và phần còn lại đã trở thành lịch sử.
                    </motion.p>

                    <motion.p
                        variants={textItemVariants}
                        className="text-gray-600 mb-8 leading-relaxed"
                    >
                        Trải qua gần một thập kỉ bên nhau, cùng nhau vượt qua
                        bao thăng trầm, chúng tôi nhận ra mình không thể sống
                        thiếu người kia. Ngày Vinh quỳ gối cầu hôn dưới bầu trời
                        đầy sao, Linh biết rằng đây chính là bến đỗ bình yên
                        nhất của đời mình.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default Story;
