const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-green-700 to-green-500 text-white">
            <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Brand */}
                <div>
                    <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
                        <i className="fas fa-seedling text-lime-200"></i> Shiv Nursery
                    </h1>
                    <p className="text-sm">
                        Bringing nature closer to you 🌿. Premium plants and care tips at your doorstep.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#" className="hover:underline flex items-center gap-1">
                                <i className="fas fa-home"></i> Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline flex items-center gap-1">
                                <i className="fas fa-seedling"></i> Products
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline flex items-center gap-1">
                                <i className="fas fa-shopping-cart"></i> Cart
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline flex items-center gap-1">
                                <i className="fas fa-phone"></i> Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
                    <div className="flex gap-4 text-2xl">
                        <a href="#" className="hover:text-gray-300">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="text-center text-xs bg-green-800 py-2">
                &copy; {new Date().getFullYear()} Shiv Nursery. Crafted with 🌱 in Nepal.
            </div>
        </footer>
    );
};

export default Footer;
