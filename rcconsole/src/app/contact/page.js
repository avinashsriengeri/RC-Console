"use client";

import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: null, text: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage({ type: null, text: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatusMessage({
          type: "success",
          text: "Thank you for contacting us! We'll get back to you soon.",
        });
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        setStatusMessage({
          type: "error",
          text: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setStatusMessage({
        type: "error",
        text: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsLoading(false);
    }
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
            {/* Left Side - Contact Information */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-medium text-primary mb-8 mt-4 whitespace-nowrap">
                Get in touch with us
              </h1>

              {/* Email Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-secondary font-semibold uppercase tracking-wider mb-1">Email</p>
                    <a 
                      href="mailto:info@reliancecorporation.co.za" 
                      className="text-brand-blue hover:underline font-medium"
                    >
                      info@reliancecorporation.co.za
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-secondary font-semibold uppercase tracking-wider mb-2">Phone</p>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm text-secondary mb-0.5">Customer Care:</p>
                        <a href="tel:+27872502288" className="text-primary font-semibold hover:text-brand-blue">
                          (+27) 87 250 2288
                        </a>
                      </div>
                      <div>
                        <p className="text-sm text-secondary mb-0.5">Office:</p>
                        <a href="tel:+27104471845" className="text-primary font-semibold hover:text-brand-blue">
                          (+27) 10 447 1845
                        </a>
                      </div>
                    </div>
                    <p className="text-sm text-secondary mt-3">Monday - Friday, 08:00h - 17:00h</p>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-secondary font-semibold uppercase tracking-wider mb-1">Address</p>
                    <p className="text-primary font-medium leading-relaxed">
                      Fish Eagle Office Park 1, Unit 7 & 8<br />
                      Kingfisher Crescent, Meyersdal<br />
                      Alberton, Johannesburg 1448
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-2xl p-6 pb-8 shadow-lg border border-gray-100 mt-28">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Status Message */}
                {statusMessage.type && (
                  <div
                    className={`p-4 rounded-lg ${
                      statusMessage.type === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    <p className="font-medium">{statusMessage.text}</p>
                  </div>
                )}
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      required
                      disabled={isLoading}
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      required
                      disabled={isLoading}
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      required
                      disabled={isLoading}
                    />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-primary mb-2">
                    How can we help you?
                  </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your payroll needs or ask any questions..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                      required
                      disabled={isLoading}
                    />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end pt-2">
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="btn-primary flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
}
