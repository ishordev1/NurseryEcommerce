import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
    const navigate = useNavigate();
    const [mainImage, setMainImage] = useState('https://images.unsplash.com/photo-1526397751294-331021109fbd');
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('medium');
    const [activeTab, setActiveTab] = useState('description');

    // Sample product data
    const product = {
        name: 'Monstera Deliciosa',
        scientificName: 'Monstera deliciosa',
        commonNames: ['Swiss Cheese Plant', 'Split-Leaf Philodendron'],
        price: 34.99,
        discountPrice: 29.99,
        rating: 4.5,
        reviews: 128,
        inStock: true,
        description: 'The iconic Monstera with beautiful natural leaf holes. This tropical beauty is easy to care for and makes a dramatic statement in any space.',
        features: [
            'Air purifying qualities',
            'Fast growing when given proper care',
            'Develops larger leaves with more splits as it matures'
        ],
        careLevel: 'Easy',
        lightRequirements: 'Bright, indirect light',
        waterNeeds: 'Water when top 2" of soil is dry',
        humidity: 'Prefers moderate to high humidity',
        petFriendly: false,
        sizes: [
            { name: 'small', price: 24.99, label: '4" Nursery Pot', potType: 'Plastic' },
            { name: 'medium', price: 29.99, label: '6" Ceramic Pot', potType: 'Ceramic' },
            { name: 'large', price: 39.99, label: '8" Decorative Pot', potType: 'Ceramic' }
        ],
        images: [
            'https://images.unsplash.com/photo-1526397751294-331021109fbd',
            'https://images.unsplash.com/photo-1517848568502-d03fa74e1964',
            'https://images.unsplash.com/photo-1497250681960-ef046c08a56e',
            'https://images.unsplash.com/photo-1512428813834-c702c7702b78'
        ],
        careTips: [
            'Wipe leaves monthly to remove dust',
            'Rotate plant periodically for even growth',
            'Use well-draining potting mix'
        ]
    };

    const relatedProducts = [
        { id: 1, name: 'Fiddle Leaf Fig', price: 39.99, image: 'https://images.unsplash.com/photo-1534710961216-75c88202f43d' },
        { id: 2, name: 'Snake Plant', price: 24.99, image: 'https://images.unsplash.com/photo-1593483316242-efb5420596ca' },
        { id: 3, name: 'Pothos Golden', price: 19.99, image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85' },
        { id: 4, name: 'ZZ Plant', price: 27.99, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411' }
    ];

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                i <= product.rating ?
                    <i key={i} className="fas fa-star text-yellow-400"></i> :
                    <i key={i} className="far fa-star text-yellow-400"></i>
            );
        }
        return stars;
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Back Navigation */}
            <div className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-3">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center text-green-700 hover:text-green-800"
                    >
                        <i className="fas fa-chevron-left mr-2"></i>
                        Back to Plants
                    </button>
                </div>
            </div>

            {/* Product Section */}
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Product Images */}
                    <div className="lg:w-1/2">
                        <div className="bg-white rounded-lg shadow-md p-4 mb-4 border border-gray-100">
                            <img
                                src={`${mainImage}?w=800&auto=format`}
                                alt={product.name}
                                className="w-full h-80 md:h-96 object-contain rounded-lg"
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                            {product.images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setMainImage(img)}
                                    className={`border rounded-lg overflow-hidden transition-all ${mainImage === img ? 'border-green-600 ring-2 ring-green-400' : 'border-gray-200 hover:border-green-400'}`}
                                >
                                    <img
                                        src={`${img}?w=200&auto=format`}
                                        alt={`${product.name} view ${index + 1}`}
                                        className="w-full h-20 object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="lg:w-1/2">
                        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                            <div className="mb-4">
                                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{product.name}</h1>
                                <p className="text-gray-600 italic">{product.scientificName}</p>
                                <div className="flex flex-wrap gap-1 mt-1">
                                    {product.commonNames.map((name, index) => (
                                        <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                                            {name}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center mb-4">
                                <div className="mr-2">
                                    {renderStars()}
                                </div>
                                <span className="text-gray-600 text-sm">({product.reviews} reviews)</span>
                                {product.inStock ? (
                                    <span className="ml-3 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded">
                                        In Stock
                                    </span>
                                ) : (
                                    <span className="ml-3 bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded">
                                        Out of Stock
                                    </span>
                                )}
                            </div>

                            <div className="mb-6 p-4 bg-green-50 rounded-lg">
                                <span className="text-3xl font-bold text-green-700">${product.discountPrice}</span>
                                {product.discountPrice < product.price && (
                                    <span className="ml-2 text-lg text-gray-500 line-through">${product.price}</span>
                                )}
                                {product.discountPrice < product.price && (
                                    <span className="ml-2 bg-red-100 text-red-800 text-sm font-medium px-2 py-0.5 rounded">
                                        {Math.round((1 - product.discountPrice / product.price) * 100)}% OFF
                                    </span>
                                )}
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-3">Size Options</h3>
                                <div className="grid grid-cols-3 gap-3">
                                    {product.sizes.map((size) => (
                                        <button
                                            key={size.name}
                                            onClick={() => setSelectedSize(size.name)}
                                            className={`p-3 border rounded-lg text-center transition-all ${selectedSize === size.name ?
                                                'bg-green-100 border-green-600 text-green-800 ring-1 ring-green-400' :
                                                'border-gray-300 hover:border-green-400'}`}
                                        >
                                            <p className="font-medium">{size.label}</p>
                                            <p className="text-sm">${size.price.toFixed(2)}</p>
                                            <p className="text-xs text-gray-500">{size.potType}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-2">Quantity</h3>
                                <div className="flex items-center w-32">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="px-3 py-2 border border-gray-300 rounded-l-lg bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    >
                                        -
                                    </button>
                                    <span className="px-4 py-2 border-t border-b border-gray-300 bg-white text-center w-full">
                                        {quantity}
                                    </span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="px-3 py-2 border border-gray-300 rounded-r-lg bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 mb-6">
                                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-colors">
                                    <i className="fas fa-shopping-cart mr-2"></i> Add to Cart
                                </button>
                                <button className="sm:w-auto py-3 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors flex items-center justify-center">
                                    <i className="fas fa-heart mr-2 text-red-500"></i> Wishlist
                                </button>
                            </div>

                            <div className="bg-green-50 p-4 rounded-lg mb-6 border border-green-100">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center">
                                        <i className="fas fa-truck text-green-600 mr-2"></i>
                                        <span className="text-sm">Free shipping on orders over $50</span>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-shield-alt text-green-600 mr-2"></i>
                                        <span className="text-sm">30-day plant guarantee</span>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Care Info */}
                            <div className="border-t pt-4">
                                <h3 className="font-semibold mb-2">Quick Care Guide</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-start">
                                        <i className="fas fa-sun text-green-600 mt-1 mr-2"></i>
                                        <div>
                                            <p className="font-medium text-sm">Light</p>
                                            <p className="text-gray-600 text-sm">{product.lightRequirements}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <i className="fas fa-tint text-green-600 mt-1 mr-2"></i>
                                        <div>
                                            <p className="font-medium text-sm">Water</p>
                                            <p className="text-gray-600 text-sm">{product.waterNeeds}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <i className="fas fa-seedling text-green-600 mt-1 mr-2"></i>
                                        <div>
                                            <p className="font-medium text-sm">Care Level</p>
                                            <p className="text-gray-600 text-sm">{product.careLevel}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <i className="fas fa-paw text-green-600 mt-1 mr-2"></i>
                                        <div>
                                            <p className="font-medium text-sm">Pet Friendly</p>
                                            <p className="text-gray-600 text-sm">{product.petFriendly ? 'Yes' : 'No'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Details Tabs */}
                <div className="bg-white rounded-lg shadow-md p-6 mt-6 border border-gray-100">
                    <div className="border-b border-gray-200">
                        <nav className="-mb-px flex space-x-8">
                            <button
                                onClick={() => setActiveTab('description')}
                                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'description' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                            >
                                Description
                            </button>
                            <button
                                onClick={() => setActiveTab('care')}
                                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'care' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                            >
                                Care Guide
                            </button>
                            <button
                                onClick={() => setActiveTab('reviews')}
                                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'reviews' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                            >
                                Reviews ({product.reviews})
                            </button>
                        </nav>
                    </div>

                    <div className="py-6">
                        {activeTab === 'description' && (
                            <div>
                                <h3 className="text-lg font-semibold mb-3">About the {product.name}</h3>
                                <p className="text-gray-700 mb-4">{product.description}</p>

                                <h4 className="font-semibold mb-2">Key Features:</h4>
                                <ul className="list-disc pl-5 space-y-1 mb-4">
                                    {product.features.map((feature, index) => (
                                        <li key={index} className="text-gray-700">{feature}</li>
                                    ))}
                                </ul>

                                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                                    <h4 className="font-semibold text-green-800 mb-2">
                                        <i className="fas fa-leaf mr-2"></i>Why Choose Shiv Nursery?
                                    </h4>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-green-600 mr-2 mt-0.5"></i>
                                            <span>Premium quality plants grown with care</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-green-600 mr-2 mt-0.5"></i>
                                            <span>Expert advice available for all your plant questions</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-green-600 mr-2 mt-0.5"></i>
                                            <span>Sustainably sourced and eco-friendly packaging</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {activeTab === 'care' && (
                            <div>
                                <h3 className="text-lg font-semibold mb-3">
                                    <i className="fas fa-book mr-2 text-green-600"></i>Complete Care Guide
                                </h3>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold mb-2 text-green-700">
                                            <i className="fas fa-sun mr-2"></i>Light Requirements
                                        </h4>
                                        <p className="text-gray-700 mb-4">{product.lightRequirements}. Avoid direct sunlight which can scorch the leaves.</p>

                                        <h4 className="font-semibold mb-2 text-green-700">
                                            <i className="fas fa-tint mr-2"></i>Watering Needs
                                        </h4>
                                        <p className="text-gray-700 mb-4">{product.waterNeeds}. Water thoroughly until it drains from the bottom.</p>

                                        <h4 className="font-semibold mb-2 text-green-700">
                                            <i className="fas fa-cloud mr-2"></i>Humidity Preferences
                                        </h4>
                                        <p className="text-gray-700 mb-4">{product.humidity}. Mist leaves occasionally.</p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold mb-2 text-green-700">
                                            <i className="fas fa-seedling mr-2"></i>Care Tips
                                        </h4>
                                        <ul className="list-disc pl-5 space-y-1 mb-4">
                                            {product.careTips.map((tip, index) => (
                                                <li key={index} className="text-gray-700">{tip}</li>
                                            ))}
                                        </ul>

                                        <h4 className="font-semibold mb-2 text-green-700">
                                            <i className="fas fa-question-circle mr-2"></i>Troubleshooting
                                        </h4>
                                        <div className="text-sm bg-gray-50 p-3 rounded-lg">
                                            <p className="font-medium">Yellow leaves:</p>
                                            <p className="text-gray-700 mb-2">Usually indicates overwatering.</p>
                                            <p className="font-medium">Brown leaf edges:</p>
                                            <p className="text-gray-700">Could be from low humidity.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'reviews' && (
                            <div>
                                <h3 className="text-lg font-semibold mb-3">
                                    <i className="fas fa-star mr-2 text-yellow-400"></i>Customer Reviews
                                </h3>
                                <div className="flex items-center mb-6">
                                    <div className="mr-2 text-2xl">
                                        {renderStars()}
                                    </div>
                                    <span className="text-gray-600">{product.rating.toFixed(1)} out of 5</span>
                                </div>

                                <div className="space-y-6">
                                    {/* Sample Review */}
                                    <div className="border-b pb-6">
                                        <div className="flex items-center mb-2">
                                            <div className="mr-2">
                                                <i className="fas fa-star text-yellow-400"></i>
                                                <i className="fas fa-star text-yellow-400"></i>
                                                <i className="fas fa-star text-yellow-400"></i>
                                                <i className="fas fa-star text-yellow-400"></i>
                                                <i className="fas fa-star text-yellow-400"></i>
                                            </div>
                                            <span className="text-sm text-gray-500">2 weeks ago</span>
                                        </div>
                                        <h4 className="font-semibold">Beautiful and healthy plant!</h4>
                                        <p className="text-gray-700 mb-2">My Monstera arrived in perfect condition and was even bigger than I expected.</p>
                                        <p className="text-sm text-gray-500">- Sarah J.</p>
                                    </div>

                                    {/* Another Sample Review */}
                                    <div className="border-b pb-6">
                                        <div className="flex items-center mb-2">
                                            <div className="mr-2">
                                                <i className="fas fa-star text-yellow-400"></i>
                                                <i className="fas fa-star text-yellow-400"></i>
                                                <i className="fas fa-star text-yellow-400"></i>
                                                <i className="fas fa-star text-yellow-400"></i>
                                                <i className="far fa-star text-yellow-400"></i>
                                            </div>
                                            <span className="text-sm text-gray-500">1 month ago</span>
                                        </div>
                                        <h4 className="font-semibold">Great packaging</h4>
                                        <p className="text-gray-700 mb-2">The plant was so well packaged that even though it was cold outside, it arrived warm and happy.</p>
                                        <p className="text-sm text-gray-500">- Michael T.</p>
                                    </div>
                                </div>

                                <button className="mt-6 px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50">
                                    <i className="fas fa-pen mr-2"></i>Write a Review
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Related Products */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6">
                        <i className="fas fa-seedling mr-2 text-green-600"></i>Complete Your Indoor Jungle
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {relatedProducts.map((item) => (
                            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
                                <div className="relative">
                                    <img
                                        src={`${item.image}?w=400&auto=format`}
                                        alt={item.name}
                                        className="w-full h-48 object-cover"
                                    />
                                    <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md text-gray-700 hover:text-red-500">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                    <p className="text-green-700 font-bold mt-1">${item.price.toFixed(2)}</p>
                                    <div className="flex mt-3 space-x-2">
                                        <button className="flex-1 py-2 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 text-sm font-medium">
                                            <i className="fas fa-cart-plus mr-1"></i>Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;