"use client";

import Link from "next/link";
import { useState } from "react";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState("pro");

  const plans = [
    {
      id: "starter",
      name: "Starter",
      tag: "Up to 10 Users",
      tagColor: "gray",
      userRange: "1 - 10 Users",
      description: "Perfect for small teams getting started. Get all essential features to manage your business efficiently from one dashboard.",
      monthlyPrice: 2499,
      yearlyPrice: 24990,
    },
    {
      id: "pro",
      name: "Pro",
      tag: "Most Popular",
      tagColor: "green",
      userRange: "11 - 50 Users",
      description: "Ideal for growing businesses with 11 to 50 users. Includes all features plus advanced analytics and priority support.",
      monthlyPrice: 4999,
      yearlyPrice: 49990,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      tag: "Unlimited",
      tagColor: "purple",
      userRange: "50+ Users",
      description: "For larger organizations with more than 50 users. Unlimited capacity with dedicated support and custom integrations.",
      monthlyPrice: 7999,
      yearlyPrice: 79990,
    }
  ];

  const planFeatures = {
    starter: [
      "Unified dashboard",
      "CRM & lead tracking",
      "Sales pipeline",
      "KPI monitoring",
      "Basic reports",
      "Email support",
      "Up to 10 users",
      "5GB storage"
    ],
    pro: [
      "Everything in Starter",
      "Multi-product integration",
      "Custom reports",
      "Team collaboration",
      "Business analytics",
      "Priority support",
      "Up to 50 users",
      "50GB storage"
    ],
    enterprise: [
      "Everything in Pro",
      "Unlimited users",
      "Dedicated account manager",
      "Custom integrations",
      "API access",
      "24/7 Priority support",
      "On-premise option",
      "Unlimited storage"
    ]
  };

  const enterpriseAddons = [
    "Custom integrations",
    "Dedicated account manager",
    "Priority support 24/7",
    "On-premise deployment option",
    "Custom branding",
    "Advanced reporting"
  ];

  const currentPlan = plans.find(p => p.id === selectedPlan);

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-gradient-page">
      {/* Hero Section */}
      <section className="py-8 md:py-10">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h1 className="text-8xl md:text-6xl font-normal mb-4">
              <span className="text-gradient">Pricing</span>
            </h1>
            <p className="text-lg text-secondary font-light">
              All-in-one business management platform. Track leads, manage sales pipeline, monitor KPIs, and control all your RC products from one dashboard.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  billingCycle === "monthly"
                    ? "bg-white text-primary shadow-md"
                    : "text-tertiary hover:text-secondary"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  billingCycle === "yearly"
                    ? "bg-white text-primary shadow-md"
                    : "text-tertiary hover:text-secondary"
                }`}
              >
                Yearly
              </button>
            </div>
          </div>

          {/* Pricing Cards - 3 in a row */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`relative cursor-pointer transition-all duration-300 rounded-2xl ${
                    selectedPlan === plan.id
                      ? "p-[2px] bg-gradient-to-r from-brand-teal via-brand-purple to-brand-pink shadow-lg"
                      : ""
                  }`}
                >
                  <div className={`bg-white rounded-2xl p-6 h-full ${
                    selectedPlan !== plan.id
                      ? "border border-gray-200 hover:border-gray-300 hover:shadow-md"
                      : ""
                  }`}>
                    {/* Radio/Check Button */}
                    <div className="absolute top-5 right-5">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                        selectedPlan === plan.id
                          ? "bg-brand-purple"
                          : "border-2 border-gray-300"
                      }`}>
                        {selectedPlan === plan.id && (
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>

                    {/* Plan Name */}
                    <h3 className="text-xl font-bold text-primary mb-3">{plan.name}</h3>
                    
                    {/* Tag */}
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${
                      plan.tagColor === "green" 
                        ? "bg-green-100 text-green-700" 
                        : plan.tagColor === "purple"
                        ? "bg-purple-100 text-brand-purple"
                        : "bg-gray-100 text-tertiary"
                    }`}>
                      {plan.tag}
                    </span>

                    {/* User Range */}
                    <p className="text-base font-medium text-gradient mb-3">{plan.userRange}</p>

                    {/* Description */}
                    <p className="text-sm text-secondary font-light mb-6 leading-relaxed min-h-[60px]">
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="flex items-baseline gap-1">
                      <span className={`text-3xl font-bold ${
                        selectedPlan === plan.id ? "text-gradient" : "text-primary"
                      }`}>
                        R {billingCycle === "monthly" ? plan.monthlyPrice.toLocaleString() : plan.yearlyPrice.toLocaleString()}
                      </span>
                      <span className="text-tertiary text-sm">/{billingCycle === "monthly" ? "month" : "year"}</span>
                    </div>
                    <p className="text-xs text-tertiary mt-1">Billed {billingCycle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Choose Plan Button */}
            <div className="text-center mb-12">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center px-8 py-3 text-base"
              >
                Choose {currentPlan.name}
              </Link>
            </div>

            {/* Features Section - Two Columns */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-sm max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {/* Left Column - Plan Features */}
                <div className="flex flex-col items-center md:items-start md:pl-6">
                  <h4 className="text-xl font-semibold text-primary mb-6">
                    {currentPlan.name} - Features Included
                  </h4>
                  <div className="space-y-4">
                    {planFeatures[selectedPlan].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-brand-purple flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Enterprise Add-ons */}
                <div className="md:border-l md:border-gray-100 md:pl-8">
                  <p className="text-sm font-semibold text-brand-purple uppercase tracking-wider mb-6">
                    Enterprise Add-ons Available
                  </p>
                  <div className="space-y-4">
                    {enterpriseAddons.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-brand-purple flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solution CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center relative">
            {/* Glossy Card with Gradient Border */}
            <div className="relative rounded-3xl p-12 md:p-16 bg-white shadow-2xl border border-gray-200 overflow-hidden group hover:shadow-3xl transition-all duration-300">
              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-normal mb-6">
                  <span className="text-gradient">Need a Custom Solution?</span>
                </h2>
                <p className="text-xl text-secondary mb-8 leading-relaxed">
                  Get tailored features, dedicated support, and enterprise-grade solutions designed specifically for your business needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                    Contact 
                  </Link>
                  <Link href="/features" className="btn-secondary text-lg px-8 py-4">
                    View All Features
                  </Link>
                </div>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-secondary">
                  <div className="flex items-center gap-2">
                    <span className="text-brand-teal text-2xl">✓</span>
                    <span>Flexible deployment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-brand-teal text-2xl">✓</span>
                    <span>Priority support</span>
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
