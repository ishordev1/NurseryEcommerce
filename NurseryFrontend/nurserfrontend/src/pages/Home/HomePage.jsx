import React from 'react';

const Homepage = () => {
    // Featured plants data
    const featuredPlants = [
        {
            id: 1,
            name: 'Monstera Deliciosa',
            price: 34.99,
            image: 'https://images.unsplash.com/photo-1526397751294-331021109fbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            category: 'Indoor Plants',
            light: 'Medium',
            water: 'Weekly'
        },
        {
            id: 2,
            name: 'Snake Plant',
            price: 24.99,
            image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            category: 'Low Maintenance',
            light: 'Low',
            water: 'Bi-weekly'
        },
        {
            id: 3,
            name: 'Fiddle Leaf Fig',
            price: 39.99,
            image: 'https://images.unsplash.com/photo-1534710961216-75c88202f43a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            category: 'Popular Plants',
            light: 'Bright',
            water: 'Weekly'
        },
        {
            id: 4,
            name: 'Peace Lily',
            price: 29.99,
            image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            category: 'Flowering Plants',
            light: 'Medium',
            water: 'Weekly'
        }
    ];

    // Categories data
    const categories = [
        {
            id: 1,
            name: 'Indoor Plants',
            icon: 'leaf',
            image: 'https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
            id: 2,
            name: 'Outdoor Plants',
            icon: 'seedling',
            image: 'https://images.unsplash.com/photo-1598884145120-5a1cfb8288f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
            id: 3,
            name: 'Succulents',
            icon: 'tint',
            image: 'https://images.unsplash.com/photo-1519336056116-2c1d7b5046b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
            id: 4,
            name: 'Gardening Tools',
            icon: 'sun',
            image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        }
    ];

    // Testimonials data
    const testimonials = [
        {
            id: 1,
            name: 'Sarah J.',
            rating: 5,
            comment: '"The plants arrived in perfect condition and have transformed my living room. The customer service was exceptional!"',
            image: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
        {
            id: 2,
            name: 'Michael T.',
            rating: 5,
            comment: '"I\'m a beginner at plant care, but the detailed guide that came with my order made it so easy. My fiddle leaf fig is thriving!"',
            image: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        {
            id: 3,
            name: 'Emma R.',
            rating: 5,
            comment: '"The subscription service is fantastic! I get a new beautiful plant every month and they\'re always healthy and well-packed."',
            image: 'https://randomuser.me/api/portraits/women/68.jpg'
        }
    ];

    return (
        <div className="font-sans bg-gray-50" style={{ fontFamily: "'Poppins', sans-serif" }}>


            {/* Hero Section */}
            <section className="relative bg-green-50">
                <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Bring Nature Into Your Home</h1>
                        <p className="text-lg text-gray-700 mb-6">
                            Discover our premium collection of indoor and outdoor plants that purify your air and elevate your space.
                        </p>
                        <div className="flex space-x-4">
                            <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-medium transition duration-300">
                                Shop Now
                            </button>
                            <button className="border-2 border-green-700 text-green-700 hover:bg-green-50 px-6 py-3 rounded-lg font-medium transition duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                            alt="Indoor plants"
                            className="rounded-lg shadow-lg max-w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Shop by Category</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {categories.map((category) => (
                            <div key={category.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-48 object-cover transition duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center">
                                    <i className={`fas fa-${category.icon} text-white text-3xl mb-2`}></i>
                                    <h3 className="text-white text-xl font-bold">{category.name}</h3>
                                </div>
                                <a href="#" className="absolute inset-0"></a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Plants */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold text-green-800">Featured Plants</h2>
                        <a href="#" className="text-green-700 hover:text-green-900 font-medium">
                            View All <i className="fas fa-chevron-right ml-1"></i>
                        </a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {featuredPlants.map((plant) => (
                            <div key={plant.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                                <div className="relative">
                                    <img
                                        src={plant.image}
                                        alt={plant.name}
                                        className="w-full h-48 object-cover"
                                    />
                                    <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                                        {plant.category}
                                    </span>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{plant.name}</h3>
                                    <div className="flex items-center text-sm text-gray-600 mb-2">
                                        <i className="fas fa-sun mr-1 text-yellow-500"></i>
                                        <span className="mr-3">{plant.light}</span>
                                        <i className="fas fa-tint mr-1 text-blue-500"></i>
                                        <span>{plant.water}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-green-700 font-bold">${plant.price.toFixed(2)}</span>
                                        <button className="bg-green-100 hover:bg-green-200 text-green-800 px-3 py-1 rounded-md text-sm font-medium">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Banner Section */}
            <section className="py-12 bg-green-700 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Join Our Green Community</h2>
                    <p className="text-lg mb-6 max-w-2xl mx-auto">
                        Sign up for our newsletter and get 10% off your first order plus plant care tips and exclusive offers.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="px-4 py-3 rounded-l-lg sm:rounded-r-none rounded-r-lg sm:w-2/3 text-gray-800 focus:outline-none"
                        />
                        <button className="bg-green-900 hover:bg-green-800 px-6 py-3 rounded-r-lg sm:rounded-l-none rounded-l-lg sm:w-1/3 font-medium transition duration-300">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-green-800 mb-12">What Our Customers Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                                <div className="flex items-center mb-4">
                                    <div className="flex-shrink-0">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="h-12 w-12 rounded-full"
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                                        <div className="flex text-yellow-400">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <i key={i} className="fas fa-star w-4 h-4"></i>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-700">{testimonial.comment}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Homepage;