import React from 'react';

const About = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/image/imgAbout.jpg" // Replace with your product or brand image
              alt="Elegant Accessories"
              className="w-full h-auto object-cover rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 md:pl-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Our Story
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              At <span className="font-bold text-orange-600">Luxera</span>, we believe that accessories are not just add-ons, but a reflection of one’s personality. Our collection is designed with you in mind, blending timeless elegance with modern trends.
            </p>
            <p className="text-xl text-gray-700 mb-8">
              Founded with a passion for fashion and craftsmanship, we bring you pieces that are meticulously crafted and curated to enhance your style. From statement jewelry to chic handbags, our accessories are designed to make every moment special.
            </p>
            <p className="text-xl text-gray-700">
              Discover our collection and join us on a journey to celebrate beauty and elegance. Thank you for choosing <span className="font-bold text-orange-600">Luxera</span>!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
