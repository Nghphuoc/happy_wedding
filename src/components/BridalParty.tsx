/* eslint-disable @next/next/no-img-element */
const BridalParty = () => {
    return (
        <section className="py-20 bg-white border-y border-gray-100">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif text-[#2c3127] mb-4">
                        Phù Dâu & Phù Rể
                    </h2>
                    <p className="text-gray-500">
                        Những người bạn thân thiết đồng hành cùng chúng tôi
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-12 text-center">
                    {[1, 2, 3, 4].map((item, index) => (
                        <div key={item} className="flex flex-col items-center">
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 border-4 border-[#fbf9f4] shadow-md relative">
                                <img
                                    src={`https://i.pravatar.cc/300?img=${index + 10}`}
                                    alt={`Friend ${item}`}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <h4 className="font-serif text-lg text-[#2c3127]">
                                Bạn Thân {item}
                            </h4>
                            <p className="text-sm text-gray-500">
                                {index % 2 === 0 ? "Phù rể" : "Phù dâu"}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BridalParty;
