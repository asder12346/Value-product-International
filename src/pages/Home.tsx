import { Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../data';
import { Button } from '../components/ui/button';
import { ArrowRight, ShoppingCart, ShieldCheck, Truck, Headphones } from 'lucide-react';

export function HomePage() {
  const featuredProducts = MOCK_PRODUCTS.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="h-[340px] bg-white flex flex-col md:flex-row overflow-hidden border-b border-slate-200">
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center gap-4">
          <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase">Spring Collection {new Date().getFullYear()}</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.1]">Shop Quality Products at Affordable Prices</h1>
          <p className="text-slate-500 max-w-md">Discover our curated collection of premium accessories, electronics, and fashion items designed for your modern lifestyle.</p>
          <div className="flex gap-3 mt-4">
            <Link to="/shop">
              <Button>Shop Now</Button>
            </Link>
            <Link to="/about">
              <Button variant="outline">Learn More</Button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-slate-100 flex items-center justify-center relative hidden md:flex">
          <div className="absolute w-[400px] h-[400px] bg-emerald-500 rounded-full opacity-10"></div>
          <div className="z-10 bg-white p-8 rounded shadow-2xl rotate-2 border border-slate-200">
            <div className="w-64 h-48 bg-slate-200 flex items-center justify-center mb-4 rounded-sm overflow-hidden">
               <img src={MOCK_PRODUCTS[0]?.image} alt="" className="w-full h-full object-cover opacity-90" />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm font-bold truncate max-w-[150px]">{MOCK_PRODUCTS[0]?.name}</div>
                <div className="text-xs text-slate-400">Featured Item</div>
              </div>
              <div className="text-emerald-600 font-bold">₦{MOCK_PRODUCTS[0]?.price.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 border-y border-slate-200 py-16 bg-slate-50 mt-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white text-slate-900 rounded-sm flex items-center justify-center mb-6 border border-slate-200 shadow-sm relative">
              <div className="absolute top-0 right-0 w-2 h-2 bg-emerald-500 rounded-bl-sm"></div>
              <Truck className="w-8 h-8" />
            </div>
            <h3 className="font-extrabold uppercase tracking-tight text-lg mb-2 text-slate-900">Fast Delivery</h3>
            <p className="text-slate-600 text-sm font-medium">Nationwide delivery within 2-5 business days.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white text-slate-900 rounded-sm flex items-center justify-center mb-6 border border-slate-200 shadow-sm relative">
              <div className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-bl-sm"></div>
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="font-extrabold uppercase tracking-tight text-lg mb-2 text-slate-900">Secure Payments</h3>
            <p className="text-slate-600 text-sm font-medium">Safe and trusted payment gateways included.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white text-slate-900 rounded-sm flex items-center justify-center mb-6 border border-slate-200 shadow-sm relative">
              <div className="absolute top-0 right-0 w-2 h-2 bg-purple-500 rounded-bl-sm"></div>
              <Headphones className="w-8 h-8" />
            </div>
            <h3 className="font-extrabold uppercase tracking-tight text-lg mb-2 text-slate-900">24/7 Support</h3>
            <p className="text-slate-600 text-sm font-medium">Our customer care team is here to help.</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">Featured Products</h2>
            <p className="text-slate-600">Handpicked selections to upgrade your daily routine.</p>
          </div>
          <Link to="/shop">
            <Button variant="link" className="hidden sm:flex text-emerald-600 border-b border-emerald-600 pb-1 rounded-none p-0 h-auto">
              View All Products
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 max-w-7xl mx-auto">
          {featuredProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="bg-white border border-slate-200 rounded p-3 flex flex-col group cursor-pointer hover:border-slate-300 transition-colors shadow-sm hover:shadow">
              <div className="w-full aspect-square bg-slate-100 rounded-[2px] mb-3 flex items-center justify-center group-hover:bg-slate-200 transition-colors overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="object-cover w-full h-full mix-blend-multiply opacity-90 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-300"
                />
              </div>
              <div className="text-[10px] text-slate-400 font-bold uppercase mb-1 tracking-widest">{product.category}</div>
              <div className="font-bold text-sm mb-1 group-hover:text-emerald-600 line-clamp-1 leading-tight">{product.name}</div>
              <div className="flex justify-between items-center mt-auto pt-2 border-t border-slate-100">
                <span className="font-bold text-slate-900 text-sm">₦{product.price.toLocaleString()}</span>
                <button className="p-1.5 bg-slate-900 text-white rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <ShoppingCart className="w-4 h-4" />
                </button>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link to="/shop">
            <Button variant="outline" className="w-full">View All Products</Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold uppercase tracking-tight mb-4 text-white">Ready for the ultimate experience?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Join thousands of satisfied customers and upgrade your lifestyle today. Don't wait.
          </p>
          <Link to="/shop">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white border-0">
              Start Shopping Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 p-8 sm:p-12 rounded">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold uppercase tracking-tight text-slate-900">Get in Touch</h2>
            <p className="text-slate-500 text-sm mt-2">Have a question? Our team is available to assist you.</p>
          </div>
          <form className="space-y-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold tracking-wider uppercase text-slate-700 mb-1">Name</label>
                <input type="text" className="w-full h-10 px-3 border border-slate-200 rounded focus:outline-none focus:border-emerald-500 transition-colors text-sm" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-wider uppercase text-slate-700 mb-1">Email</label>
                <input type="email" className="w-full h-10 px-3 border border-slate-200 rounded focus:outline-none focus:border-emerald-500 transition-colors text-sm" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold tracking-wider uppercase text-slate-700 mb-1">Message</label>
              <textarea className="w-full h-32 p-3 border border-slate-200 rounded focus:outline-none focus:border-emerald-500 transition-colors text-sm resize-none" placeholder="How can we help?"></textarea>
            </div>
            <div className="text-center pt-2">
              <Button type="button" className="w-full sm:w-auto px-12">Submit Message</Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
