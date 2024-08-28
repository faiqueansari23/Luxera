import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='bg-gray-100'>
            <div
                className="relative mx-auto w-full max-w-7xl h-screen flex flex-col justify-center items-center bg-center bg-cover bg-no-repeat -mt-28"
                style={{
                    backgroundImage: "url('/image/img2.jpg')",
                }}
            >
                {/* Optional overlay */}
                <div className="absolute inset-0 bg-black opacity-10"></div>

                <div className="relative text-center text-white px-4">
                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Discover the Latest in Ladies Accessories
                    </h1>

                    {/* Paragraph */}
                    <p className="text-lg md:text-xl mb-8">
                        Explore our curated collection of fashion-forward accessories designed to enhance your style and make a statement.
                    </p>

                    {/* Button */}
                    <Link
                        to="/shop"
                        className="bg-orange-700 hover:bg-orange-800 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
                    >
                        Shop Now
                    </Link>
                </div>
            </div>

            <div className="relative text-center text-gray-800 px-6 md:px-12 py-8 md:py-16 bg-white shadow-xl rounded-lg mt-12 max-w-3xl mx-auto transform transition-transform duration-300 hover:scale-105">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    Embrace Your Unique Style
                </h2>
                <p className="text-base md:text-lg leading-relaxed">
                    Elevate your elegance with our exclusive range of accessories. From timeless classics to modern trends, discover pieces that define your unique style.
                </p>
            </div>

            {/* Image Gallery */}
            <div className="my-12 px-4 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* Large Image */}
                    <div className="md:col-span-2 relative group overflow-hidden">
                        <img
                            src="/image/img12.jpg"
                            alt="Accessory 1"
                            className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-white text-xl md:text-2xl font-bold mb-2">Shoes</h3>
                            <p className="text-white text-lg mb-4">$60.00</p>
                            <Link
                                to="/shop"
                                className="bg-orange-700 hover:bg-orange-800 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
                            >
                                Shop Now
                            </Link>
                        </div>
                    </div>

                    {/* Side Images */}
                    <div className="flex flex-col gap-4 md:col-span-1">
                        <div className="relative group overflow-hidden">
                            <img
                                src="/image/img6.jpg"
                                alt="Accessory 2"
                                className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-white text-lg md:text-xl font-bold mb-2">Makeup</h3>
                                <p className="text-white text-md mb-4">$40.00</p>
                                <Link
                                    to="/shop"
                                    className="bg-orange-700 hover:bg-orange-800 text-white font-medium py-1 px-4 rounded-lg transition-colors duration-300"
                                >
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden">
                            <img
                                src="/image/img7.jpg"
                                alt="Accessory 3"
                                className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-white text-lg md:text-xl font-bold mb-2">Glasses</h3>
                                <p className="text-white text-md mb-4">$30.00</p>
                                <Link
                                    to="/shop"
                                    className="bg-orange-700 hover:bg-orange-800 text-white font-medium py-1 px-4 rounded-lg transition-colors duration-300"
                                >
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 md:col-span-1">
                        <div className="relative group overflow-hidden">
                            <img
                                src="/image/img8.jpg"
                                alt="Accessory 4"
                                className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-white text-lg md:text-xl font-bold mb-2">Jewellery</h3>
                                <p className="text-white text-md mb-4">$120.00</p>
                                <Link
                                    to="/shop"
                                    className="bg-orange-700 hover:bg-orange-800 text-white font-medium py-1 px-4 rounded-lg transition-colors duration-300"
                                >
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden">
                            <img
                                src="/image/img10.jpg"
                                alt="Accessory 5"
                                className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-white text-lg md:text-xl font-bold mb-2">Stylish Bag</h3>
                                <p className="text-white text-md mb-4">$40.00</p>
                                <Link
                                    to="/shop"
                                    className="bg-orange-700 hover:bg-orange-800 text-white font-medium py-1 px-4 rounded-lg transition-colors duration-300"
                                >
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trending Accessories Section */}
            <div className="px-4 md:px-12 py-12 bg-gray-100">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Trending: Essential Accessories</h2>
                    <p className="text-lg text-gray-600">Check out the latest trending accessories to elevate your style.</p>
                </div>
            </div>

            <div className="flex flex-wrap gap-6 justify-center mb-20">
                {/* Card 1 */}
                <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden" style={{ width: '350px' }}>
                    <img src="/image/img13.webp" alt="Product 1" className="w-full h-96 object-cover" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">
                            <a href="#" className="text-gray-800 hover:text-gray-600">Best hairdryer</a>
                        </h3>
                        <div className="flex justify-between items-center mb-2">
                            <div className="pricing">
                                <p className="text-lg font-bold text-gray-900"><span>$49.99</span></p>
                            </div>
                            <div className="rating flex items-center">
                                <span className="text-yellow-400">★★★★★</span>
                                <span className="text-gray-400"> (5)</span>
                            </div>
                        </div>
                        <hr className="border-gray-200 mb-3" />
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-primary hover:text-primary-dark flex items-center">
                                <span>Add to cart</span>
                                <i className="ml-1 fas fa-cart-plus"></i>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-800">
                                <i className="fas fa-heart"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden" style={{ width: '350px' }}>
                    <img src="/image/img14.jpg" alt="Product 3" className="w-full h-96 object-cover" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">
                            <a href="#" className="text-gray-800 hover:text-gray-600">Necklaces</a>
                        </h3>
                        <div className="flex justify-between items-center mb-2">
                            <div className="pricing">
                                <p className="text-lg font-bold text-gray-900"><span>$29.99</span></p>
                            </div>
                            <div className="rating flex items-center">
                                <span className="text-yellow-400">★★★★☆</span>
                                <span className="text-gray-400"> (4)</span>
                            </div>
                        </div>
                        <hr className="border-gray-200 mb-3" />
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-primary hover:text-primary-dark flex items-center">
                                <span>Add to cart</span>
                                <i className="ml-1 fas fa-cart-plus"></i>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-800">
                                <i className="fas fa-heart"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden" style={{ width: '350px' }}>
                    <img src="/image/img15.jpeg" alt="Product 3" className="w-full h-96 object-cover" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">
                            <a href="#" className="text-gray-800 hover:text-gray-600">Rings</a>
                        </h3>
                        <div className="flex justify-between items-center mb-2">
                            <div className="pricing">
                                <p className="text-lg font-bold text-gray-900"><span>$69.99</span></p>
                            </div>
                            <div className="rating flex items-center">
                                <span className="text-yellow-400">★★★★★</span>
                                <span className="text-gray-400"> (5)</span>
                            </div>
                        </div>
                        <hr className="border-gray-200 mb-3" />
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-primary hover:text-primary-dark flex items-center">
                                <span>Add to cart</span>
                                <i className="ml-1 fas fa-cart-plus"></i>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-800">
                                <i className="fas fa-heart"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stay Updated Section */}
            <div className="bg-orange-100 py-12">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Stay Updated!</h2>
                    <p className="text-lg text-gray-600">Subscribe to our newsletter for the latest updates and exclusive offers.</p>
                </div>
                <form className="flex justify-center">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="p-3 w-80 border border-gray-300 rounded-lg"
                    />
                    <button
                        type="submit"
                        className="bg-orange-700 hover:bg-orange-800 text-white font-medium py-2 px-6 rounded-lg ml-4 transition-colors duration-300"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
}
