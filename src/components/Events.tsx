import Image from "next/image";
import { Clock } from "lucide-react";

const Events = () => {
    return (
        <section id="events" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif text-[#2c3127] mb-4">
                        Sự kiện chính
                    </h2>
                    <p className="text-gray-500">
                        Chi tiết về các hoạt động trong ngày trọng đại
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-[#fbf9f4] p-8 text-center group cursor-pointer hover:shadow-lg transition-all duration-300 border border-gray-100">
                        <div className="w-full h-48 mb-6 overflow-hidden relative">
                            <Image
                                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                alt="Lễ Gia Tiên"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                fill
                            />
                        </div>
                        <h3 className="font-serif text-xl mb-3">Lễ Gia Tiên</h3>
                        <p className="text-gray-500 text-sm mb-4">
                            Nghi thức truyền thống với sự góp mặt của hai bên
                            gia đình nội ngoại.
                        </p>
                        <div className="flex items-center justify-center text-sm text-[#52594a] mb-2">
                            <Clock size={16} className="mr-2" /> 09:00 Sáng
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#52594a] text-white p-8 text-center group cursor-pointer hover:shadow-lg transition-all duration-300 relative -top-4">
                        <div className="w-full h-48 mb-6 overflow-hidden relative">
                            <Image
                                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                alt="Lễ Cưới"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                fill
                            />
                        </div>
                        <h3 className="font-serif text-xl mb-3">
                            Lễ Thành Hôn
                        </h3>
                        <p className="text-gray-300 text-sm mb-4">
                            Khoảnh khắc trao lời thề nguyện dưới sự chứng kiến
                            của những người thân yêu nhất.
                        </p>
                        <div className="flex items-center justify-center text-sm text-[#d9e0d1] mb-2">
                            <Clock size={16} className="mr-2" /> 17:00 Chiều
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#fbf9f4] p-8 text-center group cursor-pointer hover:shadow-lg transition-all duration-300 border border-gray-100">
                        <div className="w-full h-48 mb-6 overflow-hidden relative">
                            <Image
                                src="https://images.unsplash.com/photo-1530103862676-de8892ebeea0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                alt="Tiệc Tối"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                fill
                            />
                        </div>
                        <h3 className="font-serif text-xl mb-3">
                            Tiệc Tối & Khiêu Vũ
                        </h3>
                        <p className="text-gray-500 text-sm mb-4">
                            Cùng thưởng thức bữa tối ngon miệng và nâng ly chúc
                            mừng hạnh phúc.
                        </p>
                        <div className="flex items-center justify-center text-sm text-[#52594a] mb-2">
                            <Clock size={16} className="mr-2" /> 19:00 Tối
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Events;
