import { useState } from 'react';

const ShopPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOption, setSortOption] = useState('featured');

  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Monstera Deliciosa',
      price: 29.99,
      originalPrice: 34.99,
      rating: 4.5,
      reviews: 128,
      category: 'Indoor Plants',
      light: 'Medium',
      size: 'Medium',
      petFriendly: false,
      image: 'https://images.unsplash.com/photo-1526397751294-331021109fbd'
    },
    {
      id: 2,
      name: 'Fiddle Leaf Fig',
      price: 39.99,
      rating: 4.2,
      reviews: 86,
      category: 'Indoor Plants',
      light: 'Bright',
      size: 'Large',
      petFriendly: false,
      image: 'https://images.unsplash.com/photo-1534710961216-75c88202f43d'
    },
    {
      id: 3,
      name: 'Snake Plant',
      price: 24.99,
      rating: 4.7,
      reviews: 215,
      category: 'Low Light Plants',
      light: 'Low',
      size: 'Small',
      petFriendly: true,
      image: 'https://images.unsplash.com/photo-1593483316242-efb5420596ca'
    },
    {
      id: 4,
      name: 'Pothos Golden',
      price: 19.99,
      originalPrice: 24.99,
      rating: 4.3,
      reviews: 92,
      category: 'Hanging Plants',
      light: 'Medium',
      size: 'Small',
      petFriendly: false,
      image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85'
    },
    {
      id: 5,
      name: 'ZZ Plant',
      price: 27.99,
      rating: 4.6,
      reviews: 143,
      category: 'Low Light Plants',
      light: 'Low',
      size: 'Medium',
      petFriendly: false,
      image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411'
    },
    {
      id: 6,
      name: 'Rubber Plant',
      price: 32.99,
      rating: 4.4,
      reviews: 76,
      category: 'Indoor Plants',
      light: 'Bright',
      size: 'Medium',
      petFriendly: false,
      image: 'https://images.unsplash.com/photo-1591958915259-d3cfb3132a54'
    },
    {
      id: 7,
      name: 'Peace Lily',
      price: 22.99,
      originalPrice: 27.99,
      rating: 4.1,
      reviews: 68,
      category: 'Flowering Plants',
      light: 'Medium',
      size: 'Small',
      petFriendly: false,
      image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78'
    },
    {
      id: 8,
      name: 'Aloe Vera',
      price: 18.99,
      rating: 4.8,
      reviews: 194,
      category: 'Succulents',
      light: 'Bright',
      size: 'Small',
      petFriendly: true,
      image: 'https://images.unsplash.com/photo-1526397751294-331021109fbd'
    }
  ];

  const categories = [...new Set(products.map(product => product.category))];
  const lightRequirements = ['Low', 'Medium', 'Bright'];
  const sizes = ['Small', 'Medium', 'Large'];

  // Filter logic
  const filteredProducts = products.filter(product => {
    // Search filter
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());

    // Price filter
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

    // Category filter
    const matchesCategory = selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    return matchesSearch && matchesPrice && matchesCategory;
  });

  // Sort logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return a.id - b.id; // Default sort (featured)
    }
  });

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= Math.floor(rating) ?
          <i key={i} className="fas fa-star text-yellow-400"></i> :
          <i key={i} className="far fa-star text-yellow-400"></i>
      );
    }
    return stars;
  };

  const toggleCategory = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Shop Header */}
      <div className="bg-green-700 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Plant Shop</h1>
          <p className="text-green-100">Find the perfect plants for your home</p>
        </div>
      </div>

      {/* Main Shop Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar - Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-between w-full bg-white p-3 rounded-lg shadow-md border border-gray-200"
            >
              <span className="font-medium">
                <i className="fas fa-filter mr-2"></i> Filters
              </span>
              <i className={`fas fa-chevron-${showFilters ? 'up' : 'down'}`}></i>
            </button>

            {showFilters && (
              <div className="bg-white p-4 mt-2 rounded-lg shadow-md border border-gray-200">
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Price Range</h3>
                  <div className="px-2">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                    <div className="flex justify-between mt-2">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Categories</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <label key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={() => toggleCategory(category)}
                          className="mr-2 rounded text-green-600"
                        />
                        {category}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Filters Sidebar - Desktop */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white p-4 rounded-lg shadow-md sticky top-4 border border-gray-200">
              <h2 className="font-bold text-lg mb-4">
                <i className="fas fa-filter mr-2"></i> Filters
              </h2>

              <div className="mb-6">
                <h3 className="font-semibold mb-2">Price Range</h3>
                <div className="px-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between mt-2">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-2">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                        className="mr-2 rounded text-green-600"
                      />
                      {category}
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-2">Light Requirements</h3>
                <div className="space-y-2">
                  {lightRequirements.map(light => (
                    <label key={light} className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2 rounded text-green-600"
                      />
                      {light}
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-2">Size</h3>
                <div className="space-y-2">
                  {sizes.map(size => (
                    <label key={size} className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2 rounded text-green-600"
                      />
                      {size}
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedCategories([]);
                  setPriceRange([0, 100]);
                }}
                className="text-green-600 hover:text-green-800 text-sm font-medium"
              >
                <i className="fas fa-times mr-1"></i> Clear all filters
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Search and Sort */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center border border-gray-200">
              <div className="relative mb-3 sm:mb-0 w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Search plants..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
              </div>

              <div className="flex items-center">
                <span className="text-gray-600 mr-2">Sort by:</span>
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-4 text-gray-600">
              Showing {filteredProducts.length} of {products.length} products
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white p-8 rounded-lg shadow-md text-center border border-gray-200">
                <i className="fas fa-seedling text-4xl text-gray-300 mb-3"></i>
                <h3 className="text-lg font-medium mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters or search term</p>
                <button
                  onClick={() => {
                    setSelectedCategories([]);
                    setPriceRange([0, 100]);
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedProducts.map(product => (
                  <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
                    <div className="relative">
                      {product.originalPrice && (
                        <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                          SALE
                        </div>
                      )}
                      <img
                        src={`${product.image}?w=400&auto=format`}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                      <button className="absolute top-2 left-2 p-2 bg-white rounded-full shadow-md text-gray-700 hover:text-red-500">
                        <i className="fas fa-heart"></i>
                      </button>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
                      <div className="flex items-center mb-2">
                        <div className="mr-1">
                          {renderStars(product.rating)}
                        </div>
                        <span className="text-gray-600 text-sm">({product.reviews})</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-lg font-bold text-green-700">${product.price.toFixed(2)}</span>
                        {product.originalPrice && (
                          <span className="ml-2 text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                        )}
                      </div>
                      <div className="mt-3 flex space-x-2">
                        <button className="flex-1 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-medium">
                          <i className="fas fa-shopping-cart mr-1"></i> Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <div className="mt-8 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button className="px-3 py-1 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-100">
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button className="px-3 py-1 border border-green-600 rounded-lg bg-green-100 text-green-800 font-medium">
                    1
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-100">
                    2
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-100">
                    3
                  </button>
                  <span className="px-2 text-gray-500">...</span>
                  <button className="px-3 py-1 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-100">
                    8
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-100">
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;