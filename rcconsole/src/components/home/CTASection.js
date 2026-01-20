import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Glossy Card with Gradient Border */}
          <div className="relative rounded-3xl p-12 md:p-16 bg-white shadow-2xl border border-gray-200 overflow-hidden group hover:shadow-3xl transition-all duration-300">
            {/* Outer Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-teal via-brand-purple to-brand-pink opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-4xl md:text-4xl font-normal mb-6">
                <span className="text-gradient">Run Your Entire Reseller Ecosystem From One Console</span>
              </h2>
              <p className="text-xl text-secondary mb-8 leading-relaxed">
                Join software companies, POS providers, and distributors who trust RC Console 
                to power their operations and scale their businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                  Request a Demo
                </Link>
                <Link href="/contact" className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all border-2 border-gray-200">
                  Talk to Sales
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
  );
}
