const RSVP = () => {
    return (
        <section
            id="rsvp"
            className="relative py-32 bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
            }}
        >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 max-w-3xl mx-auto px-6 bg-white/90 backdrop-blur-sm p-12 shadow-xl rounded-sm">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-serif text-[#2c3127] mb-2">
                        Are you attending?
                    </h2>
                    <p className="text-gray-500">
                        Vui lòng phản hồi trước ngày 01/12/2026
                    </p>
                </div>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Họ và Tên *"
                            className="w-full border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-[#52594a] transition-colors"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email (Tùy chọn)"
                            className="w-full border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-[#52594a] transition-colors"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <select className="w-full border-b border-gray-300 bg-transparent py-3 focus:outline-none text-gray-500 focus:text-black">
                            <option value="">Sẽ tham dự?</option>
                            <option value="yes">Chắc chắn rồi!</option>
                            <option value="no">Rất tiếc, tôi không thể</option>
                        </select>
                        <select className="w-full border-b border-gray-300 bg-transparent py-3 focus:outline-none text-gray-500 focus:text-black">
                            <option value="">Số người tham dự</option>
                            <option value="1">1 người</option>
                            <option value="2">2 người</option>
                        </select>
                    </div>
                    <textarea
                        placeholder="Bạn có lời nhắn hay yêu cầu đặc biệt về thực đơn không?"
                        rows={3}
                        className="w-full border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-[#52594a] transition-colors"
                    ></textarea>
                    <div className="text-center pt-4">
                        <button
                            type="submit"
                            className="bg-[#52594a] text-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-[#3a4034] transition-colors"
                        >
                            Xác Nhận RSVP
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default RSVP;
