"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function CapabilitiesSection() {
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

  const capabilities = [
    {
      title: "Multi-tier Reseller Hierarchies",
      description: "Support complex distributor → channel partner → dealer structures with automatic cascading permissions and commission flows."
    },
    {
      title: "Advanced Analytics & Dashboards",
      description: "Real-time insights into sales performance, reseller activity, revenue trends, and operational KPIs with customizable dashboards."
    },
    {
      title: "Marketing Automation",
      description: "Send targeted email campaigns, WhatsApp messages, and SMS. Distribute product collaterals and track engagement."
    },
    {
      title: "White-label Ready",
      description: "Brand the platform with your logo, colors, and domain. Provide a seamless experience under your company identity."
    },
    {
      title: "API & Integration Support",
      description: "Connect with accounting software, payment gateways, and existing tools. Build custom integrations with our REST API."
    },
    {
      title: "Enterprise Security",
      description: "Role-based access control, audit logs, two-factor authentication, and compliance-ready infrastructure for your peace of mind."
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-4xl md:text-5xl font-normal mb-6">
            <span className="text-gradient">Built for Scale and Complexity</span>
          </h2>
          <p className="text-lg text-secondary leading-relaxed">
            Advanced capabilities that grow with your business and adapt to your unique requirements.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-2xl bg-white border border-gray-100 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <h3 className="text-lg font-semibold text-primary mb-3">
                {capability.title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                {capability.description}
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
            Explore all features
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
