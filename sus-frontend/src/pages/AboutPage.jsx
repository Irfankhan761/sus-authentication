import React from 'react';

export default function AboutPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white w-full py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            About Us
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl">
            Learn more about our mission, values, and the team behind our success.
          </p>
        </div>
      </section>

      {/* About Content Section */}
      <section className="w-full py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-base md:text-lg lg:text-xl mb-6">
            At our company, we are committed to delivering exceptional products and services that meet the needs of our customers. Our mission is to drive innovation and create value through our expertise and dedication.
          </p>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Meet the Team
          </h2>
          <p className="text-base md:text-lg lg:text-xl">
            Our team is composed of talented and experienced professionals who are passionate about what they do. Together, we work towards achieving our common goals and delivering outstanding results.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white w-full py-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
