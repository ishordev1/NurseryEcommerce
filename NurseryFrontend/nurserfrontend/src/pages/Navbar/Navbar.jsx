import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
            {/* Left: Brand */}
            <div className="text-2xl font-bold text-green-700 flex items-center gap-2">
                <i className="fas fa-seedling text-green-600"></i> Shiv Nursery
            </div>

            {/* Middle: Links */}
            <div className="hidden md:flex gap-6 text-gray-600 font-medium">
                <a href="#" className="hover:text-green-600">
                    <i className="fas fa-home"></i> Home
                </a>
                <a href="#" className="hover:text-green-600">
                    <i className="fas fa-seedling"></i> Products
                </a>
                <a href="#" className="hover:text-green-600">
                    <i className="fas fa-shopping-cart"></i> Cart
                </a>
            </div>

            {/* Right: Auth buttons */}
            <div className="flex gap-4">
                <button className="px-4 py-1 border rounded text-green-600 border-green-600 hover:bg-green-50">
                    <i className="fas fa-sign-in-alt"></i> Login
                </button>
                <button className="px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700">
                    <i className="fas fa-user-plus"></i> Signup
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
