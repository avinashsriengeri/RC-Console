"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "Reseller & Partner Management",
      description: "Manage multi-tier reseller hierarchies, onboard partners seamlessly, and maintain complete visibility across your distribution network."
    },
    {
      title: "CRM & Sales Pipeline",
      description: "Track prospects, opportunities, and customers through your sales funnel. Monitor activities and never miss a follow-up."
    },
    {
      title: "Quotes, Orders & Invoices",
      description: "Generate professional quotes, convert to orders, and automate invoicing. Handle payments and financial workflows effortlessly."
    },
    {
      title: "Digital Document Signing",
      description: "Send NDAs, contracts, and proposals for e-signature. Track document status and maintain a secure digital paper trail."
    },
    {
      title: "Commission Tracking",
      description: "Automate commission calculations based on product sales, tiers, and loyalty levels. Keep resellers motivated and informed."
    },
    {
      title: "Support & Enquiries",
      description: "Centralize support tickets, track SLAs, and provide exceptional customer service with a built-in knowledge base."
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-4xl md:text-5xl font-normal mb-6">
            <span className="text-gradient">Everything You Need in One Platform</span>
          </h2>
          <p className="text-lg text-secondary leading-relaxed">
            RC Console eliminates the complexity of managing multiple tools. Run your entire 
            business—from partner onboarding to commission payouts—in one unified system.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-2xl border border-gray-100 bg-gray-50/50 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <h3 className="text-lg font-semibold text-primary mb-3 whitespace-nowrap">
                {feature.title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className={`text-center mt-12 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`} style={{ transitionDelay: "800ms" }}>
          <Link 
            href="/features" 
            className="inline-flex items-center gap-2 text-brand-purple font-medium hover:gap-3 transition-all"
          >
            View all features
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
