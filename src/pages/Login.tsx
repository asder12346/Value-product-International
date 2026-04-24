import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

export function LoginPage() {
  const setUser = useAppStore((state) => state.setUser);
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple mock logic for demonstration
    if (email === 'admin@valueproduct.com') {
      setUser({
        id: '1',
        name: 'Admin User',
        email,
        role: 'admin'
      });
      navigate('/admin');
    } else {
      setUser({
        id: '2',
        name: email.split('@')[0],
        email,
        role: 'user'
      });
      navigate('/');
    }
  };

  return (
    <div className="flex bg-slate-50 py-20 px-4 mt-8 sm:mt-16 sm:mb-16">
      <div className="max-w-md w-full mx-auto bg-white p-8 border border-slate-200 rounded shadow-sm relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-emerald-600 rounded-t"></div>
        <div className="text-center mb-8 pt-4">
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 uppercase">Welcome Back</h1>
          <p className="text-xs font-bold tracking-wider uppercase text-slate-400 mt-2">Sign in to your account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold tracking-wider uppercase text-slate-700 mb-1">Email</label>
            <Input 
              type="email" 
              required 
              placeholder="user@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
             <label className="block text-xs font-bold tracking-wider uppercase text-slate-700 mb-1">Password</label>
             <Input 
               type="password" 
               required 
               placeholder="••••••••"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
             />
          </div>
          <div className="pt-2">
            <Button type="submit" className="w-full">Sign In</Button>
          </div>
        </form>

        <div className="mt-6 text-center text-[10px] uppercase font-bold tracking-wider text-slate-400">
          <p>Mock Credentials:</p>
          <p className="mt-1">Admin: admin@valueproduct.com</p>
          <p>User: anything@else.com</p>
        </div>
      </div>
    </div>
  );
}
