import React from 'react';
import { Clock, Shield, Users, Map } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Clock className="h-6 w-6 text-[#58A0C8]" />,
      title: "Freshly Served",
      description: "Our ice creams are crafted and served fresh every day.",
    },
    {
      icon: <Shield className="h-6 w-6 text-[#58A0C8]" />,
      title: "Premium Quality",
      description: "We use only high-quality ingredients for a rich taste.",
    },
    {
      icon: <Users className="h-6 w-6 text-[#58A0C8]" />,
      title: "Customer Satisfaction",
      description: "Loved by families and kids across the city.",
    },
  ];

  return (
    <div className="bg-white text-[#1f1f1f]">
      {/* Hero */}
      <section className="py-16 md:py-24 text-center px-4">
        <h1 className="text-4xl font-bold mb-4 text-[#113F67]">About ZAIN ALLABAN</h1>
        <p className="text-[#4a4a4a] max-w-2xl mx-auto text-lg">
          At ZAIN ALLABAN, we serve happiness in every scoop. Discover our delightful variety of ice creams made with love and care.
        </p>
      </section>

      {/* Overview */}
      <section className="py-12 bg-[#FDF5AA]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-[#113F67]">Our Flavors</h2>
          <p className="text-[#4a4a4a] mb-8">
            Explore our signature flavors that keep our customers coming back for more.
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            {['Vanilla Dream', 'Choco Bliss', 'Berry Burst'].map((flavor) => (
              <div
                key={flavor}
                className="bg-white p-3 rounded-md shadow-sm hover:shadow-md transition"
              >
                <span className="font-medium text-[#34699A]">{flavor}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-12 text-[#113F67]">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <div key={index} className="p-6 rounded-md text-center bg-[#f9f9f9]">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-[#4a4a4a] text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Location */}
      <section className="py-16 bg-[#FDF5AA]">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-[#113F67]">Visit Our Store</h2>
            <p className="text-[#4a4a4a] mb-4">
              Come enjoy your favorite flavors at our cozy ice cream shop.
            </p>
            <div className="flex gap-3 items-start">
              <Map className="h-5 w-5 mt-1 text-[#58A0C8]" />
              <p className="text-[#4a4a4a] text-sm">
                123 Ice Cream Street, Sweet Town, Pakistan
              </p>
            </div>
          </div>
          <div className="md:w-1/2 bg-white p-6 rounded shadow-sm flex items-center justify-center">
            <div className="text-center">
              <Map className="h-10 w-10 mx-auto text-[#58A0C8] mb-2" />
              <p className="text-[#4a4a4a] font-medium">Family-Friendly Environment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: 'Daily Visitors', value: '200+' },
            { label: 'Flavors Offered', value: '30+' },
            { label: 'Customer Satisfaction', value: '98%' },
            { label: 'Open Hours', value: '12PM - 12AM' },
          ].map((stat, index) => (
            <div key={index}>
              <p className="text-3xl font-bold text-[#34699A] mb-2">{stat.value}</p>
              <p className="text-[#4a4a4a] text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
