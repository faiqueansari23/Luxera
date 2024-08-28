import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa'; // Import Font Awesome Search icon

// Sample product data (replace this with actual data from an API or database)
const sampleProducts = [
  { id: 1, name: 'Elegant Necklace', price: 29.99, image: '/image/imgA.webp', category: 'Jewelry' },
  { id: 2, name: 'Stylish Earrings', price: 19.99, image: '/image/imgB.webp', category: 'Jewelry' },
  { id: 3, name: 'Trendy Bracelet', price: 24.99, image: '/image/imgC.webp', category: 'Jewelry' },
  { id: 4, name: 'Classic Watch', price: 59.99, image: '/image/imgD.webp', category: 'Jewelry' },
  { id: 5, name: 'Elegant Ring', price: 39.99, image: '/image/imgE.jpg', category: 'Jewelry' },
  { id: 6, name: 'Stylish Sunglasses', price: 49.99, image: '/image/imgF.jpg', category: 'Glasses' },
  { id: 7, name: 'Hair Accessories', price: 49.99, image: '/image/imgH.webp', category: 'Glasses' },
  { id: 8, name: 'Leather gloves', price: 49.99, image: '/image/imgI.jpg', category: 'Glasses' },
  { id: 9, name: 'Wallets', price: 49.99, image: '/image/imgJ.avif', category: 'Glasses' },
  { id: 10, name: 'Silk scarves', price: 49.99, image: '/image/imgK.avif', category: 'Glasses' },
  { id: 11, name: 'Leather belts', price: 49.99, image: '/image/imgL.webp', category: 'Glasses' },
  { id: 12, name: 'Hats and Caps', price: 49.99, image: '/image/imgM.webp', category: 'Glasses' },
  // Add more sample products here
];

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('default');
  const [category, setCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setProducts(sampleProducts); // Replace this with actual data fetching logic
      setLoading(false);
    }, 1000);
  }, []);

  const handleSearchChange = (e) => {
    setFilter(e.target.value.toLowerCase());
    setCurrentPage(1); // Reset to first page on search
  };

  const handleSearchSubmit = () => {
    // Add functionality if needed when search icon is clicked
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
    setCurrentPage(1); // Reset to first page on sort
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setCurrentPage(1); // Reset to first page on category change
  };

  const filteredProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(filter) &&
      (category === 'all' || product.category === category)
    );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sort === 'price-asc') return a.price - b.price;
    if (sort === 'price-desc') return b.price - a.price;
    return 0; // Default sorting
  });

  // Pagination logic
  const totalItems = sortedProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentItems = sortedProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Background Image Section */}
      <div className="relative bg-cover bg-center h-80 mb-6 mx-0 w-full -mt-36 bg-gradient-to-r from-black via-transparent to-black" style={{ backgroundImage: 'url("/image/img17.jpg")' }}>
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search for accessories..."
              className="border border-gray-300 px-4 py-2 rounded-full w-full pl-10 pr-14 shadow-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              onChange={handleSearchChange}
              value={filter}
            />
            <button
              onClick={handleSearchSubmit}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              <FaSearch size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Filters and Sorting */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        {/* Category Filter */}
        <select
          value={category}
          onChange={handleCategoryChange}
          className="border border-gray-300 px-4 py-2 rounded-full w-full sm:w-64 md:w-72 lg:w-80 xl:w-96 max-w-xs sm:max-w-none shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="all">All Categories</option>
          <option value="Jewelry">Jewelry</option>
          <option value="Undergarments">Undergarments</option>
          <option value="Shoes">Shoes</option>
          <option value="Necklace">Necklace</option>
          <option value="Glasses">Glasses</option>
          <option value="Other">Other</option>
          {/* Add more categories here */}
        </select>

        {/* Sort Dropdown */}
        <select
          value={sort}
          onChange={handleSortChange}
          className="border border-gray-300 px-4 py-2 rounded-full w-full sm:w-64 md:w-72 lg:w-80 xl:w-96 max-w-xs sm:max-w-none shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="default">Price</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      {loading ? (
        <div className="text-center py-10">Loading...</div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentItems.length === 0 ? (
              <div className="text-center py-10">No products found</div>
            ) : (
              currentItems.map(product => (
                <div key={product.id} className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                  <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
                  <div className="p-4">
                    <h3 className="text-md font-semibold mb-1 truncate">{product.name}</h3>
                    <p className="text-gray-700 mb-3 text-sm">${product.price.toFixed(2)}</p>
                    <button className="w-full bg-orange-500 text-white px-4 py-1 rounded-lg hover:bg-orange-600 transition-colors duration-300 text-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-6">
            <nav>
              <ul className="flex items-center space-x-2">
                <li>
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-100 disabled:opacity-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    &lt;
                  </button>
                </li>
                {[...Array(totalPages)].map((_, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handlePageChange(index + 1)}
                      className={`px-3 py-1 border border-gray-300 rounded-full text-gray-700 bg-white hover:bg-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 ${currentPage === index + 1 ? 'bg-orange-500 text-black' : ''}`}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-100 disabled:opacity-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    &gt;
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}

export default Shop;
