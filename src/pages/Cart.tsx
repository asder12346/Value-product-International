import { Link, useNavigate } from 'react-router-dom';
import { useAppStore } from '../store';
import { Button } from '../components/ui/button';
import { Trash2, ArrowRight, ShoppingBag } from 'lucide-react';

export function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useAppStore();
  const navigate = useNavigate();
  const total = getCartTotal();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center max-w-lg">
        <div className="w-24 h-24 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-12 h-12" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Your Cart is Empty</h1>
        <p className="text-slate-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/shop">
          <Button size="lg" className="w-full sm:w-auto">Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-4 p-4 bg-white border border-slate-200 rounded shadow-sm">
              <Link to={`/product/${item.id}`} className="w-24 h-24 bg-slate-100 rounded-[2px] overflow-hidden shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply opacity-90" />
              </Link>
              
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <Link to={`/product/${item.id}`}>
                      <h3 className="font-bold text-sm text-slate-900 line-clamp-1 hover:text-emerald-600 transition-colors">{item.name}</h3>
                    </Link>
                    <p className="text-xs font-bold uppercase tracking-tighter text-slate-400 mt-1">{item.category}</p>
                  </div>
                  <p className="font-bold text-slate-900">₦{(item.price * item.quantity).toLocaleString()}</p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center border border-slate-200 rounded-md bg-white">
                    <button 
                      type="button"
                      className="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors disabled:opacity-50"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="w-10 text-center text-sm font-medium">{item.quantity}</span>
                    <button 
                      type="button"
                      className="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors disabled:opacity-50"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      disabled={item.quantity >= item.stock}
                    >
                      +
                    </button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-rose-600 hover:text-rose-700 font-medium flex items-center gap-1"
                  >
                    <Trash2 className="w-4 h-4" /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-slate-50 border border-slate-200 rounded p-6 sticky top-24">
            <h2 className="text-sm tracking-widest uppercase font-bold text-slate-900 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span>₦{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Tax</span>
                <span>Calculated at checkout</span>
              </div>
            </div>
            
            <div className="border-t border-slate-200 pt-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-base font-bold text-slate-900">Total Estimated</span>
                <span className="text-xl font-bold text-slate-900">₦{total.toLocaleString()}</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="w-full gap-2"
              onClick={() => navigate('/checkout')}
            >
              Proceed to Checkout <ArrowRight className="w-4 h-4" />
            </Button>
            
            <div className="mt-4 text-center">
              <Link to="/shop" className="text-sm text-slate-500 font-bold uppercase tracking-wider hover:text-emerald-600 transition-colors">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
