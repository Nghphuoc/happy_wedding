/* eslint-disable @next/next/no-img-element */
const Gallery = () => {
    // Dùng <img> thường cho Gallery để dễ config layout thay vì component <Image /> của Next (bắt buộc fill hoặc width/height fixed)
    return (
        <section id="gallery" className="py-24 bg-[#fbf9f4]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif text-[#2c3127] mb-4">
                        Memories & Moments
                    </h2>
                    <p className="text-gray-500">
                        Những khoảnh khắc tuyệt vời nhất
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <img
                        src="https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                        alt="Gal 1"
                        className="w-full h-64 object-cover col-span-2 row-span-2"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                        alt="Gal 2"
                        className="w-full h-64 object-cover"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                        alt="Gal 3"
                        className="w-full h-64 object-cover"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                        alt="Gal 4"
                        className="w-full h-64 object-cover"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1596484552993-9c869fb13b18?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                        alt="Gal 5"
                        className="w-full h-64 object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default Gallery;
