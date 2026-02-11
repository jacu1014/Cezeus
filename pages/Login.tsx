
import React, { useState } from 'react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simular login
    setTimeout(() => {
      onLogin();
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-background-dark flex items-center justify-center p-6 relative overflow-hidden">
      {/* Soccer field pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-white"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-white rounded-full"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-white"></div>
      </div>

      <div className="w-full max-w-md relative z-10 animate-fadeIn">
        <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 p-10 rounded-[2.5rem] shadow-2xl">
          <div className="flex flex-col items-center mb-10">
            <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-2xl shadow-primary/40 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <span className="material-symbols-outlined text-background-dark text-4xl font-black">sports_soccer</span>
            </div>
            <h1 className="text-3xl font-black text-white font-display tracking-tight text-center uppercase">Club Deportivo Cezeus</h1>
            <p className="text-slate-400 text-sm mt-2 font-bold tracking-widest uppercase text-center">Gestión Deportiva</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Usuario / Email</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">person</span>
                <input 
                  required
                  type="text"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-700/50 rounded-2xl py-4 pl-12 pr-4 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-700"
                  placeholder="admin@cezeusfc.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Contraseña</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">lock</span>
                <input 
                  required
                  type="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-700/50 rounded-2xl py-4 pl-12 pr-4 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-700"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs px-1">
              <label className="flex items-center gap-2 text-slate-400 cursor-pointer select-none">
                <input type="checkbox" className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-primary focus:ring-primary" />
                Recordarme
              </label>
              <a href="#" className="text-primary font-bold hover:underline">¿Olvidaste tu clave?</a>
            </div>

            <button 
              disabled={loading}
              type="submit"
              className="w-full bg-primary text-background-dark font-black py-4 rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-background-dark border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <span>Ingresar</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-10 pt-10 border-t border-slate-700/50 text-center">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
              ¿No tienes cuenta? <a href="#" className="text-white hover:text-primary transition-colors">Contacta a soporte</a>
            </p>
          </div>
        </div>
        
        <p className="text-center text-slate-600 text-[10px] mt-8 font-black uppercase tracking-[0.2em]">
          Powered by Cezeus Tech © 2024
        </p>
      </div>
    </div>
  );
};

export default Login;
