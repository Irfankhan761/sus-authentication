import React from 'react';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <section className="bg-blue-700 text-white w-full py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            Welcome to Our Website
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            We provide the best solutions for your needs. Explore our services and get in touch with us for more information.
          </p>
          <a
            href="/contact"
            className="bg-pink-700 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-pink-600 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>

 
      <section className="w-full py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About Us
          </h2>
          <p className="text-base md:text-lg lg:text-xl mb-6">
            We are dedicated to delivering high-quality products and services. Our team of experts is committed to ensuring customer satisfaction and exceeding expectations. Learn more about our mission and values.
          </p>
          <a
            href="/about"
            className="bg-blue-700 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </section>

      <section className="w-full py-12 px-4 bg-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our Services
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="flex-1 bg-white p-6 mb-6 md:mb-0 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Service One</h3>
              <p>
                Description of Service One. We offer top-notch service with a focus on quality and customer satisfaction.
              </p>
            </div>
            <div className="flex-1 bg-white p-6 mb-6 md:mb-0 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Service Two</h3>
              <p>
                Description of Service Two. Our team is skilled and experienced in delivering exceptional results.
              </p>
            </div>
            <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Service Three</h3>
              <p>
                Description of Service Three. We are committed to providing solutions that meet your needs and exceed your expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-blue-700 text-white w-full py-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
