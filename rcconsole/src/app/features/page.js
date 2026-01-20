"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Features() {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const featureCategories = [
    {
      id: "access",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "User & Access Management",
      description: "Control who sees what with granular permission systems designed for complex organizational structures.",
      features: [
        { name: "Multi-level Roles", desc: "Define custom roles for administrators, managers, resellers, sales reps, and support teams." },
        { name: "Permission-based Access", desc: "Set granular permissions for viewing, editing, and deleting data." },
        { name: "Secure Authentication", desc: "Two-factor authentication, password policies, and audit logs." }
      ]
    },
    {
      id: "reseller",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Reseller & Partner Management",
      description: "Build and manage complex partner networks with hierarchical structures and comprehensive tracking.",
      features: [
        { name: "Multi-tier Hierarchy", desc: "Support distributor → channel partner → dealer structures with cascading visibility." },
        { name: "Onboarding & Agreements", desc: "Streamline partner registration and digital agreement signing." },
        { name: "Document Verification", desc: "Collect and verify business licenses, tax documents, and compliance certificates." }
      ]
    },
    {
      id: "crm",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "CRM & Sales Management",
      description: "Track every interaction, nurture leads, and close deals faster with a complete CRM system.",
      features: [
        { name: "Sales Pipeline", desc: "Move prospects through stages—from lead to opportunity to customer." },
        { name: "Activity Tracking", desc: "Log calls, meetings, emails, and notes. Set follow-up reminders." },
        { name: "Quotes & Proposals", desc: "Generate professional quotes with product catalogs and pricing rules." }
      ]
    },
    {
      id: "finance",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Sales & Finance",
      description: "Automate your financial workflows from order to payment with built-in invoicing and reconciliation.",
      features: [
        { name: "Sales Orders", desc: "Convert quotes to orders with approval workflows and delivery tracking." },
        { name: "Invoicing", desc: "Auto-generate branded invoices with taxes, discounts, and payment terms." },
        { name: "Payments & Credit Notes", desc: "Record payments, apply credits, and handle partial payments." }
      ]
    },
    {
      id: "documents",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Digital Documents & Signing",
      description: "Go paperless with secure document management, templates, and legally binding e-signatures.",
      features: [
        { name: "NDAs & Contracts", desc: "Create, send, and track non-disclosure agreements and partnership contracts." },
        { name: "E-Signature Workflow", desc: "Send documents for signature and receive automatic notifications." },
        { name: "Document Library", desc: "Store signed agreements with version control and audit trails." }
      ]
    },
    {
      id: "commissions",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Commissions & Incentives",
      description: "Motivate your reseller network with automated, transparent commission calculations.",
      features: [
        { name: "Product-based Commissions", desc: "Set commission rates per product, category, or SKU." },
        { name: "Tiered Loyalty Levels", desc: "Reward high performers with bronze, silver, gold, and platinum tiers." },
        { name: "Employee Commissions", desc: "Track sales rep performance and calculate based on targets." }
      ]
    },
    {
      id: "marketing",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Marketing & Communication",
      description: "Engage customers and partners with targeted campaigns and branded communications.",
      features: [
        { name: "Email Campaigns", desc: "Create and schedule email campaigns with open and click tracking." },
        { name: "WhatsApp/SMS Templates", desc: "Send bulk WhatsApp and SMS messages with custom templates." },
        { name: "Product Collaterals", desc: "Share brochures, spec sheets, and marketing materials instantly." }
      ]
    },
    {
      id: "support",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Support & Enquiries",
      description: "Deliver exceptional customer service with a complete ticketing system and SLA management.",
      features: [
        { name: "Ticket Management", desc: "Create, assign, and track support tickets with priority levels." },
        { name: "SLA Tracking", desc: "Set response and resolution time commitments with breach alerts." },
        { name: "Knowledge Base", desc: "Build a self-service help center with articles, FAQs, and guides." }
      ]
    },
    {
      id: "analytics",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Dashboards & Analytics",
      description: "Make data-driven decisions with real-time insights and visual dashboards tailored to your role.",
      features: [
        { name: "Custom Dashboards", desc: "Build personalized dashboards with widgets for sales and metrics." },
        { name: "Sales & Performance Insights", desc: "Track trends, conversion rates, and revenue forecasts." },
        { name: "Time-based Filters", desc: "View data by day, week, month, quarter, or custom ranges." }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Global background decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-brand-teal/5 via-transparent to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-brand-purple/5 via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Feature Categories */}
      <section className="pt-32 pb-20 relative">
        <div className="container-custom">
          <div className="space-y-40">
            {featureCategories.map((category, index) => {
              const isVisible = visibleSections.has(category.id);
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={category.id} 
                  id={category.id}
                  ref={(el) => (sectionRefs.current[index] = el)}
                  className="scroll-mt-32 relative"
                >
                  {/* Decorative connector line */}
                  {index > 0 && (
                    <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-px h-12 bg-gradient-to-b from-transparent via-brand-teal/30 to-brand-purple/30"></div>
                  )}

                  {/* Category Row */}
                  <div className={`grid lg:grid-cols-12 gap-10 lg:gap-20 transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  } ${!isEven ? "lg:direction-rtl" : ""}`}>
                    
                    {/* Left - Title Section */}
                    <div className={`lg:col-span-5 ${!isEven ? "lg:order-2" : ""}`}>
                      <div className="lg:sticky lg:top-32">
                        {/* Glassmorphism card for title */}
                        <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm border border-white/50 shadow-xl shadow-brand-purple/5">
                          {/* Category header */}
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-teal/20 to-brand-purple/20 border border-brand-purple/10 flex items-center justify-center text-brand-purple shadow-lg shadow-brand-purple/10">
                              {category.icon}
                            </div>
                          </div>
                          
                          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 leading-tight">
                            {category.title}
                          </h2>
                          <p className="text-secondary leading-relaxed">
                            {category.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right - Feature Cards */}
                    <div className={`lg:col-span-7 ${!isEven ? "lg:order-1" : ""}`}>
                      <div className="space-y-5">
                        {category.features.map((feature, fIndex) => (
                          <div 
                            key={fIndex}
                            className={`relative transition-all duration-700 ${
                              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                            style={{ transitionDelay: `${fIndex * 150 + 300}ms` }}
                          >
                            {/* Card */}
                            <div className="relative p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                              <div className="flex items-start gap-4">
                                {/* Checkmark icon */}
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-teal to-brand-purple flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                
                                <div className="flex-1 min-w-0">
                                  <h3 className="text-lg font-semibold text-primary mb-2">
                                    {feature.name}
                                  </h3>
                                  <p className="text-secondary leading-relaxed">
                                    {feature.desc}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center relative">
            {/* Glossy Card with Gradient Border */}
            <div className="relative rounded-3xl p-12 md:p-16 bg-white shadow-2xl border border-gray-200 overflow-hidden group hover:shadow-3xl transition-all duration-300">
              {/* Outer Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-teal via-brand-purple to-brand-pink opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-normal mb-6">
                  <span className="text-gradient">See RC Console in Action</span>
                </h2>
                <p className="text-xl text-secondary mb-8 leading-relaxed">
                  Experience how RC Console can transform your business operations. 
                  Request a personalized demo with our team today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                    Request a Demo
                  </Link>
                  <Link href="/pricing" className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all border-2 border-gray-200">
                    View Pricing
                  </Link>
                </div>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-secondary">
                  <div className="flex items-center gap-2">
                    <span className="text-brand-teal text-2xl">✓</span>
                    <span>On-site installation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-brand-teal text-2xl">✓</span>
                    <span>Dedicated support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
