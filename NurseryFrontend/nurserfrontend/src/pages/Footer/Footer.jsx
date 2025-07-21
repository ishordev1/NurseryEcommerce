const Footer = () => {
    return (
        <>
            {/* Footer */}
            <footer className="bg-green-900 text-white pt-12 pb-6">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Shiv Nursery</h3>
                            <p className="mb-4">Bringing nature's beauty to your doorstep since 2015.</p>
                            <div className="flex space-x-4">
                                <a href="#" className="hover:text-green-300">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="hover:text-green-300">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="hover:text-green-300">
                                    <i className="fab fa-pinterest-p"></i>
                                </a>
                                <a href="#" className="hover:text-green-300">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Shop</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-green-300">All Plants</a></li>
                                <li><a href="#" className="hover:text-green-300">New Arrivals</a></li>
                                <li><a href="#" className="hover:text-green-300">Best Sellers</a></li>
                                <li><a href="#" className="hover:text-green-300">Sale</a></li>
                                <li><a href="#" className="hover:text-green-300">Gift Cards</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Help</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-green-300">Contact Us</a></li>
                                <li><a href="#" className="hover:text-green-300">FAQs</a></li>
                                <li><a href="#" className="hover:text-green-300">Shipping Info</a></li>
                                <li><a href="#" className="hover:text-green-300">Returns</a></li>
                                <li><a href="#" className="hover:text-green-300">Plant Care</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Contact</h4>
                            <address className="not-italic">
                                <p className="mb-2">123 Garden Lane</p>
                                <p className="mb-2">Portland, OR 97201</p>
                                <p className="mb-2">(555) 123-4567</p>
                                <p>hello@shivnursery.com</p>
                            </address>
                        </div>
                    </div>
                    <div className="border-t border-green-800 pt-6 flex flex-col md:flex-row justify-between items-center">
                        <p>© 2023 Shiv Nursery. All rights reserved.</p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <a href="#" className="hover:text-green-300">Privacy Policy</a>
                            <a href="#" className="hover:text-green-300">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
