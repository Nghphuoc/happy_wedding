const Dresscode = () => {
    return (
        <section className="bg-[#2c3127] py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif text-white mb-4">
                        Dresscode & Lưu Ý
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Vui lòng tham khảo gợi ý trang phục để có những bức ảnh
                        kỷ niệm thật đẹp cùng cô dâu chú rể.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border border-[#4a5241] p-10 text-center hover:bg-[#343a2e] transition-colors">
                        <h3 className="text-[#c2a77d] text-lg uppercase tracking-widest mb-6">
                            Màu Sắc
                        </h3>
                        <div className="flex justify-center gap-4 mb-6">
                            <div className="w-8 h-8 rounded-full bg-black border border-white"></div>
                            <div className="w-8 h-8 rounded-full bg-white border border-gray-300"></div>
                            <div className="w-8 h-8 rounded-full bg-[#c2a77d]"></div>
                            <div className="w-8 h-8 rounded-full bg-[#f4e8e1]"></div>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Đen, Trắng, Beige, hoặc Hồng Pastel. Mong quý khách
                            tránh trang phục màu đỏ hoặc xanh lá cây.
                        </p>
                    </div>
                    <div className="border border-[#4a5241] p-10 text-center hover:bg-[#343a2e] transition-colors bg-[#3a4034]">
                        <h3 className="text-[#c2a77d] text-lg uppercase tracking-widest mb-6">
                            Trẻ Em
                        </h3>
                        <div className="text-4xl text-white mb-4 font-serif">
                            12+
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Để đảm bảo không gian tiệc cưới trọn vẹn, chúng tôi
                            xin phép chỉ đón tiếp các vị khách từ 12 tuổi trở
                            lên. Mong bạn thông cảm.
                        </p>
                    </div>
                    <div className="border border-[#4a5241] p-10 text-center hover:bg-[#343a2e] transition-colors">
                        <h3 className="text-[#c2a77d] text-lg uppercase tracking-widest mb-6">
                            Quà Cưới
                        </h3>
                        <div className="text-4xl text-white mb-4 font-serif">
                            Wishbox
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Sự hiện diện của bạn là món quà lớn nhất. Nếu muốn
                            gửi tặng thêm, chúng tôi có chuẩn bị hộp quà tại khu
                            vực đón khách.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dresscode;
