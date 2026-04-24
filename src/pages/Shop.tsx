import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_PRODUCTS, CATEGORIES } from '../data';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Search, ShoppingCart, Filter } from 'lucide-react';
import { useAppStore } from '../store';

export function ShopPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const addToCart = useAppStore((state) => state.addToCart);

  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory ? product.category === activeCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header & Search */}
      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">Shop All Products</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input 
              placeholder="Search products..." 
              className="pl-9"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
            <div className="flex overflow-x-auto pb-2 -mb-2 md:pb-0 md:mb-0 gap-2 scrollbar-hide">
             <Button 
                variant={activeCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(null)}
                className="whitespace-nowrap"
              >
                All
              </Button>
            {CATEGORIES.map((cat) => (
              <Button 
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat)}
                className="whitespace-nowrap"
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 shadow-sm">
          <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <Filter className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-medium text-slate-900 mb-2">No products found</h3>
          <p className="text-slate-500">Try adjusting your search or filter criteria.</p>
          <Button 
            variant="link" 
            onClick={() => { setSearch(""); setActiveCategory(null); }}
            className="mt-4"
          >
            Clear Filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group flex flex-col bg-white border border-slate-200 rounded p-4 cursor-pointer relative">
               {product.stock < 10 && product.stock > 0 && (
                <span className="absolute top-6 left-6 z-10 bg-rose-100 text-rose-700 text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                  Low Stock
                </span>
               )}
               {product.stock === 0 && (
                <span className="absolute top-6 left-6 z-10 bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                  Out of Stock
                </span>
               )}
              <Link to={`/product/${product.id}`} className="w-full aspect-[4/3] bg-slate-100 rounded mb-4 flex items-center justify-center group-hover:bg-slate-200 transition-colors overflow-hidden block">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="object-cover w-full h-full mix-blend-multiply opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </Link>
              <div className="flex-1 flex flex-col">
                <p className="text-xs text-slate-400 font-bold uppercase mb-1 tracking-tighter">{product.category}</p>
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-bold text-sm mb-1 group-hover:text-emerald-600 line-clamp-1 transition-colors">{product.name}</h3>
                </Link>
                <div className="mt-auto pt-2 flex items-center justify-between">
                  <span className="font-bold text-slate-900">₦{product.price.toLocaleString()}</span>
                  <button 
                    disabled={product.stock === 0}
                    className="p-1.5 bg-slate-900 text-white rounded-sm opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-50"
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                    }}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span className="sr-only">Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
