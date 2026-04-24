import { Navigate } from 'react-router-dom';
import { useAppStore } from '../store';
import { MOCK_PRODUCTS } from '../data';
import { Package, Users, DollarSign, ShoppingCart, Edit, Trash2 } from 'lucide-react';

export function AdminDashboard() {
  const user = useAppStore((state) => state.user);

  if (!user || user.role !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 uppercase">Admin Dashboard</h1>
          <p className="text-xs font-bold tracking-wider text-slate-400 mt-1 uppercase">Manage your storefront and view metrics.</p>
        </div>
        <button className="bg-slate-900 text-white px-4 py-2 rounded text-xs font-bold tracking-wider uppercase hover:bg-slate-800 transition-colors self-start sm:self-auto">
          + Add Product
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 border border-slate-200 rounded shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold tracking-widest uppercase text-slate-400">Total Revenue</h3>
            <div className="w-8 h-8 bg-slate-100 text-slate-900 flex items-center justify-center rounded-sm">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-extrabold text-slate-900">₦12,450,000</p>
        </div>
        
        <div className="bg-white p-6 border border-slate-200 rounded shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-slate-800"></div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold tracking-widest uppercase text-slate-400">Sales</h3>
            <div className="w-8 h-8 bg-slate-100 text-slate-900 flex items-center justify-center rounded-sm">
              <ShoppingCart className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-extrabold text-slate-900">+340</p>
        </div>

        <div className="bg-white p-6 border border-slate-200 rounded shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-slate-400"></div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold tracking-widest uppercase text-slate-400">Active Users</h3>
            <div className="w-8 h-8 bg-slate-100 text-slate-900 flex items-center justify-center rounded-sm">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-extrabold text-slate-900">1,200</p>
        </div>

        <div className="bg-white p-6 border border-slate-200 rounded shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-slate-200"></div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold tracking-widest uppercase text-slate-400">Products</h3>
            <div className="w-8 h-8 bg-slate-100 text-slate-900 flex items-center justify-center rounded-sm">
              <Package className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-extrabold text-slate-900">{MOCK_PRODUCTS.length}</p>
        </div>
      </div>

      {/* Product List */}
      <div className="bg-white border border-slate-200 rounded shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-sm tracking-widest uppercase font-bold text-slate-900">Inventory</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-900 font-medium">
            <thead className="bg-slate-50 text-[10px] tracking-widest uppercase font-bold text-slate-500 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3">Product</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Stock</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_PRODUCTS.map((p) => (
                <tr key={p.id} className="hover:bg-slate-50/50">
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-100 rounded-[2px] overflow-hidden shrink-0 border border-slate-200">
                      <img src={p.image} alt="" className="w-full h-full object-cover mix-blend-multiply opacity-90" />
                    </div>
                    <span className="font-bold text-slate-900">{p.name}</span>
                  </td>
                  <td className="px-6 py-4 text-[10px] uppercase font-bold tracking-wider text-slate-400">{p.category}</td>
                  <td className="px-6 py-4 font-bold">₦{p.price.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    {p.stock > 0 ? (
                       <span className="text-slate-900">{p.stock}</span>
                    ) : (
                       <span className="text-rose-600 font-medium">Out of stock</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                       <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors" title="Edit">
                         <Edit className="w-4 h-4" />
                       </button>
                       <button className="p-2 text-slate-400 hover:text-rose-600 transition-colors" title="Delete">
                         <Trash2 className="w-4 h-4" />
                       </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
