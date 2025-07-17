import React from 'react';
import {
  IceCream, Clock, Shield, Smile,
  Users, Zap, Star, CheckCircle,
  ArrowRight, Phone
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: <IceCream className="w-10 h-10" />,
      title: "Signature Flavors",
      description: "A curated selection of our best-selling ice cream flavors.",
      features: [
        "Classic Vanilla Dream",
        "Rich Chocolate Bliss",
        "Strawberry Swirl",
        "Seasonal Specials"
      ],
      popular: true
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Custom Orders",
      description: "Made-to-order tubs and party packs for every occasion.",
      features: [
        "Birthday Packs",
        "Family-Sized Tubs",
        "Corporate Orders",
        "Gift Packaging"
      ],
      popular: false
    },
    {
      icon: <Star className="w-10 h-10" />,
      title: "Premium Ingredients",
      description: "Only the finest dairy and fruit go into our recipes.",
      features: [
        "Locally sourced milk",
        "Fresh seasonal fruits",
        "Natural flavor extracts",
        "No artificial colors"
      ],
      popular: false
    }
  ];

  const additionalServices = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Same-Day Pickup",
      description: "Order online and collect your favorites within hours."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Hygienic Preparation",
      description: "We follow strict hygiene protocols for all batches."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Quick Service",
      description: "Fast and friendly service from our trained staff."
    },
    {
      icon: <Smile className="w-6 h-6" />,
      title: "Happy Customers",
      description: "Loved by kids, families, and dessert lovers alike."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-[#0028F5] mb-4">
            Our <span className="text-[#113F67]">Ice Cream Services</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Explore what makes ZAIN ALLABAN the sweetest spot in town.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0028F5] mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600">Delight in every scoop</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-xl border ${
                  service.popular
                    ? 'border-[#0028F5] bg-white shadow-lg'
                    : 'border-gray-200 bg-white hover:border-[#0028F5] hover:shadow-md'
                } transition-all duration-300`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#0028F5] text-white px-3 py-1 rounded-full text-xs font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-[#0028F5] mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#0028F5] mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#0028F5] mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0028F5] mb-4">Extra Sweet Services</h2>
            <p className="text-xl text-gray-600">We go the extra scoop for you</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-white border border-gray-200 hover:border-[#0028F5] hover:shadow-sm transition-all duration-300"
              >
                <div className="text-[#0028F5] mb-4">{service.icon}</div>
                <h3 className="text-lg font-medium text-[#0028F5] mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0028F5] mb-6">Craving Something Sweet?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact ZAIN ALLABAN to place your order or ask about custom creations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-[#0028F5] hover:bg-[#113F67] text-white px-8 py-3 rounded-full inline-flex items-center justify-center font-medium transition-colors duration-300"
            >
              Order Now <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="tel:+971500000000"
              className="bg-white border border-gray-300 text-[#0028F5] hover:bg-blue-50 px-8 py-3 rounded-full inline-flex items-center justify-center font-medium transition-colors duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
