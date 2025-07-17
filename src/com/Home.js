import React from 'react';
import { IceCream, Smile, ThumbsUp, Star } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section with Single Background Image */}
      <section className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/pic3.jpg"
            alt="Ice Cream Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#0028F5]/40 flex items-center justify-center text-white text-center px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold">Welcome to ZAIN ALLABAN</h1>
            <p className="mt-4 text-lg md:text-xl max-w-xl mx-auto">
              Where every scoop is a celebration of flavor and joy!
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0028F5] mb-8">Why Choose Us?</h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg bg-white border border-gray-200 hover:border-[#0028F5] hover:shadow-sm transition-all duration-300">
              <IceCream className="mx-auto h-10 w-10 text-[#0028F5]" />
              <h3 className="text-xl font-semibold mt-4">Fresh Flavors</h3>
              <p className="mt-2 text-gray-600">Always made from the finest ingredients.</p>
            </div>
            <div className="p-6 rounded-lg bg-white border border-gray-200 hover:border-[#0028F5] hover:shadow-sm transition-all duration-300">
              <Smile className="mx-auto h-10 w-10 text-[#0028F5]" />
              <h3 className="text-xl font-semibold mt-4">Family Friendly</h3>
              <p className="mt-2 text-gray-600">Fun treats for all age groups.</p>
            </div>
            <div className="p-6 rounded-lg bg-white border border-gray-200 hover:border-[#0028F5] hover:shadow-sm transition-all duration-300">
              <ThumbsUp className="mx-auto h-10 w-10 text-[#0028F5]" />
              <h3 className="text-xl font-semibold mt-4">Trusted Quality</h3>
              <p className="mt-2 text-gray-600">Loved by our community in every scoop.</p>
            </div>
            <div className="p-6 rounded-lg bg-white border border-gray-200 hover:border-[#0028F5] hover:shadow-sm transition-all duration-300">
              <Star className="mx-auto h-10 w-10 text-[#0028F5]" />
              <h3 className="text-xl font-semibold mt-4">Top Rated</h3>
              <p className="mt-2 text-gray-600">Reviewed and rated by our loyal customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0028F5] mb-4">Sweet Moments Await</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              At ZAIN ALLABAN, every scoop tells a story of quality, freshness, and joy. 
              Experience the difference that premium ingredients and passionate craftsmanship make.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-[#0028F5] mb-4">Our Promise</h3>
              <p className="text-gray-600 mb-6">
                We're committed to creating memorable moments with every visit. From our signature flavors 
                to our warm, family-friendly atmosphere, we bring happiness to your day.
              </p>
              <a
                href="/about"
                className="inline-flex items-center text-[#0028F5] font-medium hover:underline transition-colors"
              >
                Learn More About Us
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-[#0028F5] mb-1">200+</div>
                <div className="text-sm text-gray-600">Daily Visitors</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-[#0028F5] mb-1">30+</div>
                <div className="text-sm text-gray-600">Flavors</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-[#0028F5] mb-1">98%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-[#0028F5] mb-1">12h</div>
                <div className="text-sm text-gray-600">Daily Open</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0028F5] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Scoop Happiness Together!</h2>
          <p className="text-lg mb-6">Visit us or connect online to taste the magic of ZAIN ALLABAN.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-[#0028F5] px-6 py-3 rounded-full font-medium shadow hover:bg-gray-100 transition-colors duration-300"
            >
              Contact Now
            </a>
            <a
              href="https://www.facebook.com/share/1CTJhMUS5u/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#001fbb] text-white px-6 py-3 rounded-full font-medium shadow hover:bg-[#001aa3] transition-colors duration-300"
            >
              Visit Facebook
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
