import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, Clock } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/logo.png" 
              alt="Zain Allaban Logo" 
              className="h-16 w-auto"
            />
          </div>
          <h1 className="text-4xl font-light text-gray-800 mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg font-light">
            Get in touch with ZAIN ALLABAN Ice Cream
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
        {/* Contact Info */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-light text-gray-800 mb-8">Get In Touch</h2>
            
            <div className="space-y-6">
              {[
                {
                  icon: <Phone className="w-5 h-5 text-[#0028F5]" />,
                  title: 'Phone',
                  content: (
                    <a href="tel:0000000000" className="text-gray-600 hover:text-[#0028F5] transition-colors">
                      0000 000 000
                    </a>
                  )
                },
                {
                  icon: <Mail className="w-5 h-5 text-[#0028F5]" />,
                  title: 'Email',
                  content: (
                    <a href="mailto:icecream@zainallaban.com" className="text-gray-600 hover:text-[#0028F5] transition-colors">
                      icecream@zainallaban.com
                    </a>
                  )
                },
                {
                  icon: <MapPin className="w-5 h-5 text-[#0028F5]" />,
                  title: 'Address',
                  content: (
                    <p className="text-gray-600 leading-relaxed">
                      Dubai, UAE
                    </p>
                  )
                },
                {
                  icon: <Clock className="w-5 h-5 text-[#0028F5]" />,
                  title: 'Service Hours',
                  content: (
                    <p className="text-gray-600">
                      Open daily from 10:00 AM to 12:00 AM
                    </p>
                  )
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start group">
                  <div className="bg-blue-50 p-3 rounded-full mr-4 group-hover:bg-blue-100 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">{item.title}</h3>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <iframe
              title="ZAIN ALLABAN Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.6488495361065!2d55.20424507526434!3d25.11933667781682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b77db50fbd3%3A0xf45ad90b8e4f40cb!2sAl%20Barsha%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1752900000000!5m2!1sen!2sae"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-gray-50 p-8 rounded-xl border border-gray-100">
          <h2 className="text-2xl font-light text-gray-800 mb-8">Send Us a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              { name: 'name', type: 'text', placeholder: 'Your Name', required: true },
              { name: 'email', type: 'email', placeholder: 'Your Email', required: true },
              { name: 'phone', type: 'tel', placeholder: 'Phone Number (Optional)', required: false },
            ].map((field) => (
              <div key={field.name}>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0028F5] focus:border-transparent transition-all duration-300 bg-white"
                />
              </div>
            ))}

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows="5"
                required
                className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0028F5] focus:border-transparent transition-all duration-300 bg-white resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-[#0028F5] hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center hover:shadow-lg transform hover:scale-105 disabled:transform-none disabled:hover:shadow-none"
            >
              {status === 'sending' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="flex items-center p-4 bg-green-50 text-green-700 rounded-lg border border-green-200">
                <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                <p className="font-medium">Message sent successfully! We'll contact you soon.</p>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
                <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                <p className="font-medium">Failed to send message. Please try again.</p>
              </div>
            )}
          </form>
        </section>
      </main>
    </div>
  );
};

export default Contact;