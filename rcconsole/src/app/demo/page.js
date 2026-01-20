"use client";

import { useState } from "react";

export default function RequestDemo() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Demo request submitted:", formData);
    // You can add API call here to send data to your backend
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-page min-h-screen">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start max-w-6xl mx-auto">
          {/* Left Side - Demo Information */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-medium text-primary mb-8 mt-4">
              Request a Demo
            </h1>
            <p className="text-lg text-secondary leading-relaxed">
              See RC Console in action! Schedule a personalized demo with our team 
              and discover how we can transform your business operations.
            </p>

            {/* Why Demo Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">What You'll Get</h3>
                  <ul className="space-y-1 text-secondary">
                    <li>• Personalized walkthrough</li>
                    <li>• Live Q&A session</li>
                    <li>• Custom solution design</li>
                    <li>• Pricing consultation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Duration Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Demo Duration</h3>
                  <p className="text-secondary">
                    30-45 minutes tailored to your business needs and use cases.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Support Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Need Help?</h3>
                  <a 
                    href="mailto:info@reliancecorporation.co.za" 
                    className="text-brand-blue hover:underline font-medium"
                  >
                    info@reliancecorporation.co.za
                  </a>
                  <p className="text-secondary text-sm mt-1">
                    Or call us at (+27) 87 250 2288
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Demo Request Form */}
          <div className="bg-white rounded-2xl p-6 pb-8 shadow-lg border border-gray-100 mt-28">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Fill in your details
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Name and Last Name */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-base font-medium text-primary mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-base font-medium text-primary mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-base font-medium text-primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all"
                  required
                />
              </div>

              {/* Company and Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-base font-medium text-primary mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-base font-medium text-primary mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-primary mb-2">
                  Tell us about your needs
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What are your main challenges? What features are you most interested in?"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-2">
                <button 
                  type="submit" 
                  className="btn-primary flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold"
                >
                  <span>Request Demo</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

