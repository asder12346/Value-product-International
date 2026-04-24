import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../data';
import { useAppStore } from '../store';
import { Button } from '../components/ui/button';
import { ArrowLeft, ShoppingCart, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

export function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = MOCK_PRODUCTS.find((p) => p.id === id);
  const addToCart = useAppStore((state) => state.addToCart);
  
  const [quantity, setQuantity] = useState(1);
  const [adding, setAdding] = useState(false);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <Button onClick={() => navigate('/shop')}>Back to Shop</Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    setAdding(true);
    addToCart(product, quantity);
    setTimeout(() => {
      setAdding(false);
    }, 500);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/shop" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Shop
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Product Image */}
        <div className="bg-slate-100 rounded overflow-hidden aspect-square border border-slate-200">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover mix-blend-multiply opacity-90"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <p className="text-xs font-bold tracking-[0.2em] text-emerald-600 uppercase mb-2">
            {product.category}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            {product.name}
          </h1>
          <p className="text-3xl font-light text-slate-900 mb-6">
            ₦{product.price.toLocaleString()}
          </p>

          <div className="prose prose-slate mb-8">
            <p>{product.description}</p>
          </div>

          <div className="mb-8">
            <p className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">Status</p>
            {product.stock > 0 ? (
              <span className="inline-flex items-center px-2 py-1 rounded-sm text-[10px] font-bold tracking-wider uppercase border border-emerald-200 bg-emerald-50 text-emerald-700">
                In Stock ({product.stock} available)
              </span>
            ) : (
              <span className="inline-flex items-center px-2 py-1 rounded-sm text-[10px] font-bold tracking-wider uppercase border border-slate-200 bg-slate-50 text-slate-700">
                Out of Stock
              </span>
            )}
          </div>

          {/* Add to Cart Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex items-center border border-slate-200 rounded-md bg-white">
              <button 
                type="button"
                className="w-12 h-12 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={product.stock === 0}
              >
                -
              </button>
              <span className="w-12 text-center font-medium">{quantity}</span>
              <button 
                type="button"
                className="w-12 h-12 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                disabled={product.stock === 0}
              >
                +
              </button>
            </div>
            <Button 
              size="lg" 
              className="flex-1 gap-2"
              disabled={product.stock === 0}
              onClick={handleAddToCart}
            >
              {adding ? (
                <span>Adding...</span>
              ) : (
                <>
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </>
              )}
            </Button>
          </div>

          <div className="pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
             <div className="flex items-center gap-3 text-sm text-slate-600">
                <Truck className="w-5 h-5 text-slate-400" />
                <span>Free shipping over ₦100,000</span>
             </div>
             <div className="flex items-center gap-3 text-sm text-slate-600">
                <RefreshCw className="w-5 h-5 text-slate-400" />
                <span>30-day return policy</span>
             </div>
             <div className="flex items-center gap-3 text-sm text-slate-600 sm:col-span-2">
                <ShieldCheck className="w-5 h-5 text-slate-400" />
                <span>2-year extended warranty available</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
