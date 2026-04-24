import { Link } from 'react-router-dom';
import { ShoppingCart, LogIn, LogOut, ShieldAlert } from 'lucide-react';
import { useAppStore } from '../store';
import { Button } from './ui/button';

export function Header() {
  const getCartCount = useAppStore((state) => state.getCartCount);
  const user = useAppStore((state) => state.user);
  const setUser = useAppStore((state) => state.setUser);
  const cartCount = getCartCount();

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm shrink-0">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-sm flex items-center justify-center text-white font-bold tracking-tighter">VPI</div>
            <span className="font-bold text-xl tracking-tight uppercase text-slate-900 hidden sm:block">ValueProduct</span>
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-500">
            <Link to="/" className="hover:text-slate-900 py-5 transition-colors">Home</Link>
            <Link to="/shop" className="hover:text-slate-900 py-5 transition-colors">Shop</Link>
            <Link to="/about" className="hover:text-slate-900 py-5 transition-colors">About</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {user?.role === 'admin' && (
            <Link to="/admin">
              <Button variant="ghost" size="sm" className="hidden md:flex gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-500" />
                <span className="text-rose-600 font-medium tracking-tight">Admin</span>
              </Button>
            </Link>
          )}

          <Link to="/cart" className="relative p-2 text-slate-600 hover:text-emerald-600">
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>

          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-slate-700 hidden sm:inline-block">
                Hi, {user.name}
              </span>
              <Button variant="ghost" size="icon" onClick={handleLogout} title="Log out">
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            <Link to="/login">
              <Button variant="outline" size="sm" className="gap-2">
                <LogIn className="w-4 h-4" />
                <span>Log in</span>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="h-auto md:h-[104px] bg-slate-900 text-slate-400 p-8 flex flex-col md:flex-row items-start md:items-center justify-between flex-shrink-0 mt-auto gap-8 md:gap-0">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full md:w-auto">
        <div>
          <div className="text-white font-bold text-sm mb-1 uppercase tracking-widest">Contact</div>
          <div className="text-[10px]">support@valueproduct.com</div>
          <div className="text-[10px]">+234 (0) 800 123 4567</div>
        </div>
        <div>
          <div className="text-white font-bold text-sm mb-1 uppercase tracking-widest">Policies</div>
          <div className="text-[10px] flex gap-3 italic">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/returns" className="hover:text-white transition-colors">Returns</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start md:items-end w-full md:w-auto">
        <div className="flex gap-4 mb-2">
          <span className="text-[9px] uppercase font-bold text-slate-500 border border-slate-700 px-2 py-0.5 rounded">Paystack</span>
          <span className="text-[9px] uppercase font-bold text-slate-500 border border-slate-700 px-2 py-0.5 rounded">Flutterwave</span>
          <span className="text-[9px] uppercase font-bold text-slate-500 border border-slate-700 px-2 py-0.5 rounded">Stripe</span>
        </div>
        <p className="text-[10px]">&copy; {new Date().getFullYear()} Value Product International. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
