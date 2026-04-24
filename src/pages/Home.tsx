import { Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../data';
import { Button } from '../components/ui/button';
import { ArrowRight, ShoppingCart, ShieldCheck, Truck, Headphones, Mail, Phone, MapPin } from 'lucide-react';

export function HomePage() {
  const featuredProducts = MOCK_PRODUCTS.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="bg-white flex flex-col md:flex-row overflow-hidden border-b border-slate-200">
        <div className="w-full md:w-1/2 p-8 lg:p-16 flex flex-col justify-center gap-4 relative z-10">
          <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase">Spring Collection {new Date().getFullYear()}</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.1] uppercase tracking-tight">Shop Quality Products at Affordable Prices</h1>
          <p className="text-slate-500 max-w-md text-sm sm:text-base">Discover our curated collection of premium accessories, electronics, and fashion items designed for your modern lifestyle.</p>
          <div className="flex gap-3 mt-6">
            <Link to="/shop" className="flex-1 sm:flex-none">
              <Button className="w-full sm:w-auto" size="lg">Shop Now</Button>
            </Link>
            <Link to="/about" className="flex-1 sm:flex-none">
              <Button variant="outline" className="w-full sm:w-auto bg-white/80 backdrop-blur-sm" size="lg">Learn More</Button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-slate-100 flex items-center justify-center relative md:flex py-12 md:py-0">
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
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {featuredProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="group flex flex-col bg-white border border-slate-200 hover:border-slate-300 transition-colors cursor-pointer overflow-hidden rounded-sm relative shadow-sm">
              <div className="w-full aspect-square bg-slate-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-200 opacity-0 group-hover:opacity-20 transition-opacity z-0"></div>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="object-cover w-full h-full mix-blend-multiply opacity-90 group-hover:opacity-100 group-hover:scale-105 duration-500 relative z-10"
                />
              </div>
              <div className="flex flex-col p-4 border-t border-slate-100 bg-white">
                <div className="text-[9px] text-slate-400 font-bold uppercase mb-1.5 tracking-[0.2em]">{product.category}</div>
                <div className="font-bold text-sm mb-4 group-hover:text-emerald-600 line-clamp-1 leading-tight transition-colors text-slate-800">{product.name}</div>
                <div className="flex justify-between items-center mt-auto">
                  <span className="font-extrabold text-slate-900 text-sm">₦{product.price.toLocaleString()}</span>
                  <div className="w-7 h-7 flex items-center justify-center bg-slate-50 text-slate-400 border border-slate-200 rounded-sm group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-colors">
                    <ShoppingCart className="w-3.5 h-3.5" />
                  </div>
                </div>
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
        <div className="max-w-5xl mx-auto bg-white border border-slate-200 rounded flex flex-col md:flex-row overflow-hidden shadow-sm">
          <div className="md:w-1/3 bg-slate-900 text-white p-8 sm:p-12 flex flex-col justify-between relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 rounded-bl-full opacity-10"></div>
            <div>
              <h2 className="text-2xl font-extrabold uppercase tracking-tight mb-2">Get in Touch</h2>
              <p className="text-slate-400 text-sm mb-12">We'd love to hear from you. Our friendly team is always here to chat.</p>
              
              <div className="space-y-8">
                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                       <Mail className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                       <h3 className="font-bold text-xs uppercase tracking-widest mb-1 text-slate-300">Email</h3>
                       <p className="text-white text-sm">support@valueproduct.com</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                       <Phone className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                       <h3 className="font-bold text-xs uppercase tracking-widest mb-1 text-slate-300">Phone</h3>
                       <p className="text-white text-sm">+234 (0) 800 123 4567</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                       <MapPin className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                       <h3 className="font-bold text-xs uppercase tracking-widest mb-1 text-slate-300">Office</h3>
                       <p className="text-white text-sm">123 Commerce Ave,<br/>Lagos, Nigeria</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 p-8 sm:p-12 bg-white">
            <h3 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Send us a message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-2">First Name</label>
                  <input type="text" className="w-full h-12 bg-slate-50 px-4 border border-slate-200 rounded-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors text-sm text-slate-900" placeholder="Jane" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-2">Last Name</label>
                  <input type="text" className="w-full h-12 bg-slate-50 px-4 border border-slate-200 rounded-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors text-sm text-slate-900" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-2">Email Address</label>
                <input type="email" className="w-full h-12 bg-slate-50 px-4 border border-slate-200 rounded-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors text-sm text-slate-900" placeholder="jane@example.com" />
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-2">Message</label>
                <textarea className="w-full h-32 bg-slate-50 p-4 border border-slate-200 rounded-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors text-sm resize-none text-slate-900" placeholder="How can we help you?"></textarea>
              </div>
              <div className="pt-2">
                <Button type="button" size="lg" className="w-full">Send Message</Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
