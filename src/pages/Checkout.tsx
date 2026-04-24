import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { CheckCircle2, Lock } from 'lucide-react';

export function CheckoutPage() {
  const { cart, getCartTotal, clearCart } = useAppStore();
  const navigate = useNavigate();
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [isProcessing, setIsProcessing] = useState(false);

  // If accidentally navigated here with empty cart
  if (cart.length === 0 && step !== 'success') {
    navigate('/cart');
    return null;
  }

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing...
    setTimeout(() => {
      setIsProcessing(false);
      setStep('success');
      clearCart();
    }, 2000);
  };

  if (step === 'success') {
    return (
      <div className="container mx-auto px-4 py-20 text-center max-w-lg">
        <div className="w-20 h-20 border-2 border-emerald-600 text-emerald-600 rounded-sm flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-4">Order Confirmed!</h1>
        <p className="text-slate-600 mb-8">
          Thank you for shopping with Value Product International. Your order #VPI-{Math.floor(Math.random() * 100000)} has been placed successfully and will be processed shortly.
        </p>
        <Button onClick={() => navigate('/')} size="lg">Return to Home</Button>
      </div>
    );
  }

  const total = getCartTotal();
  const shipping = 15000; // Flat rate for demo
  const finalTotal = total + shipping;

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          <form onSubmit={handleCheckout} className="space-y-8">
            {/* Contact Info */}
            <section>
              <h2 className="text-xs uppercase tracking-widest font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <Input id="email" type="email" required placeholder="you@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <Input id="phone" type="tel" required placeholder="+234 ..." />
                </div>
              </div>
            </section>

            {/* Shipping Info */}
            <section>
              <h2 className="text-xs uppercase tracking-widest font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Shipping Address</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                   <div>
                    <label htmlFor="fname" className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                    <Input id="fname" required placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lname" className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                    <Input id="lname" required placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-1">Street Address</label>
                  <Input id="address" required placeholder="123 Standard Way" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <div>
                    <label htmlFor="city" className="block text-sm font-medium text-slate-700 mb-1">City</label>
                    <Input id="city" required placeholder="Lagos" />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-1">Country</label>
                    <Input id="country" required defaultValue="Nigeria" />
                  </div>
                </div>
              </div>
            </section>

            {/* Payment Info Mock */}
            <section>
              <h2 className="text-xs uppercase tracking-widest font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2 flex justify-between items-center">
                <span>Payment</span>
                <Lock className="w-4 h-4 text-slate-400" />
              </h2>
              <div className="bg-slate-50 border border-slate-200 rounded p-4 space-y-4">
                 <p className="text-sm text-slate-600 mb-2">This is a secure mock payment form.</p>
                 <div>
                    <label htmlFor="card" className="block text-sm font-medium text-slate-700 mb-1">Card Number</label>
                    <Input id="card" required placeholder="0000 0000 0000 0000" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                   <div>
                    <label htmlFor="exp" className="block text-sm font-medium text-slate-700 mb-1">Expiry Date</label>
                    <Input id="exp" required placeholder="MM/YY" />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-slate-700 mb-1">CVV</label>
                    <Input id="cvv" required placeholder="123" />
                  </div>
                </div>
              </div>
            </section>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full" 
              disabled={isProcessing}
            >
              {isProcessing ? "Processing Payment..." : `Pay ₦${finalTotal.toLocaleString()}`}
            </Button>
          </form>
        </div>

        {/* Order Summary Sidebar */}
        <div className="order-first lg:order-last">
          <div className="bg-slate-50 border border-slate-200 rounded p-6 lg:sticky lg:top-24">
            <h2 className="text-xs uppercase tracking-widest font-bold text-slate-900 mb-4">In your cart</h2>
            
            <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 items-center">
                  <div className="w-16 h-16 bg-white border border-slate-200 rounded-sm overflow-hidden shrink-0 relative">
                    <span className="absolute -top-1 -right-1 bg-emerald-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold z-10 block">
                      {item.quantity}
                    </span>
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply opacity-90" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xs font-bold text-slate-900 line-clamp-1">{item.name}</h3>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">{item.category}</p>
                  </div>
                  <p className="font-bold text-sm text-slate-900">₦{(item.price * item.quantity).toLocaleString()}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-200 pt-4 space-y-3 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span>₦{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Shipping</span>
                <span>₦{shipping.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="border-t border-slate-200 pt-4 mt-4">
              <div className="flex justify-between items-center text-lg font-bold text-slate-900">
                <span>Total</span>
                <span>₦{finalTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
