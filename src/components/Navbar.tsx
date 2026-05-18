const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-6 px-10 border-b border-gray-200/50 max-w-7xl mx-auto">
            <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-gray-600">
                <a href="#home" className="hover:text-[#52594a]">
                    Home
                </a>
                <a href="#story" className="hover:text-[#52594a]">
                    Story
                </a>
                <a href="#gallery" className="hover:text-[#52594a]">
                    Gallery
                </a>
            </div>
            <div className="text-3xl font-serif italic text-[#52594a]">
                V & L
            </div>
            <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-gray-600">
                <a href="#events" className="hover:text-[#52594a]">
                    Events
                </a>
                <a href="#party" className="hover:text-[#52594a]">
                    Party
                </a>
                <a href="#rsvp" className="hover:text-[#52594a]">
                    RSVP
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
