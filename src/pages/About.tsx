import { ShieldCheck, Truck, Headphones, Users, Leaf, Globe } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <span className="text-emerald-500 font-bold tracking-widest text-xs uppercase mb-4 block">Our Story</span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">Value Product International</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We believe that high-quality products shouldn't come with exorbitant price tags. We source the best accessories, electronics, and fashion items directly from manufacturers to bring you unmatched value.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-8 border border-slate-200 rounded relative bg-white">
            <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500"></div>
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              To democratize access to premium contemporary products. We rigorously test all items in our catalog to ensure they meet our strict standards for durability, functionality, and aesthetic appeal.
            </p>
          </div>
          <div className="p-8 border border-slate-200 rounded relative bg-white">
            <div className="absolute top-0 left-0 w-2 h-full bg-slate-900"></div>
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed">
              To become the most trusted international retailer prioritizing customer satisfaction, ethical sourcing, and environmental sustainability in our daily operations.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold uppercase tracking-tight">Our Core Values</h2>
            <div className="w-16 h-1 bg-emerald-500 mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white border border-slate-200 flex items-center justify-center rounded-sm mb-6 text-slate-900">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Uncompromising Quality</h3>
              <p className="text-slate-500 text-sm">Every product runs through a 12-point quality inspection before hitting our shelves.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white border border-slate-200 flex items-center justify-center rounded-sm mb-6 text-slate-900">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Global Reach, Local Feel</h3>
              <p className="text-slate-500 text-sm">We partner with global suppliers but tailor our service to support your local needs.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white border border-slate-200 flex items-center justify-center rounded-sm mb-6 text-slate-900">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Sustainable Practices</h3>
              <p className="text-slate-500 text-sm">We're actively working to reduce packaging waste and choose eco-friendly transport options.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
