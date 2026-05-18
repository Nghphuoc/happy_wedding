import Image from "next/image";

const Hero = () => {
    return (
        <section
            id="home"
            className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
            <div>
                <p className="uppercase tracking-[0.2em] text-sm text-gray-500 mb-4">
                    We are getting married
                </p>
                <h1 className="text-5xl md:text-7xl font-serif text-[#2c3127] leading-tight mb-6">
                    Quang Vinh <br /> <span className="text-3xl">&</span> Diem
                    Linh
                </h1>
                <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
                    Mời bạn cùng chúng tôi viết tiếp chương đẹp nhất của cuộc
                    đời. Sự hiện diện của bạn là món quà vô giá dành cho chúng
                    tôi.
                </p>
                <button className="bg-[#52594a] text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-[#3a4034] transition-colors">
                    Gửi Lời Chúc
                </button>
            </div>
            <div className="grid grid-cols-2 gap-4 h-150">
                <div className="h-full overflow-hidden rounded-t-full">
                    <Image
                        src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Couple 1"
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                        width={400}
                        height={600}
                    />
                </div>
                <div className="grid grid-rows-2 gap-4">
                    <div className="overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Couple 2"
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                            width={400}
                            height={300}
                        />
                    </div>
                    <div className="overflow-hidden relative">
                        <Image
                            src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Rings"
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                            fill
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
