
import React from 'react';

const Pagos: React.FC = () => {
  const payments = [
    { id: 'CEZ-2024-001', name: 'Santiago Mendoza', cat: 'Sub-12', status: 'Pagado', date: '05 Oct, 2023', method: 'Transferencia', amount: '$450.00' },
    { id: 'CEZ-2024-042', name: 'Mateo Alarcón', cat: 'Sub-10', status: 'Pendiente', date: '-', method: 'No registrado', amount: '$450.00' },
    { id: 'CEZ-2023-118', name: 'Juan Rodríguez', cat: 'Sub-15', status: 'Atrasado', date: 'Vencido (15d)', method: 'Efectivo', amount: '$900.00' },
    { id: 'CEZ-2024-015', name: 'Elena López', cat: 'Femenil Sub-15', status: 'Beca 100%', date: 'Automático', method: 'Institucional', amount: '$0.00' },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-white font-display">Gestión de Pagos</h1>
          <p className="text-slate-400 mt-1">Control de mensualidades y becas</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex bg-slate-800/50 p-1 rounded-xl border border-slate-700">
            <button className="px-4 py-2 text-xs font-bold rounded-lg bg-slate-700 text-white shadow-sm transition-all">Este Mes</button>
            <button className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-300">Historial</button>
          </div>
          <button className="bg-primary text-background-dark px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-base">add</span>
            Registrar Pago
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-background-card p-6 rounded-2xl border border-slate-700 shadow-xl group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-primary/20 text-primary rounded-xl">
              <span className="material-symbols-outlined">account_balance_wallet</span>
            </div>
            <span className="text-[10px] font-black text-emerald-400 bg-emerald-900/30 px-2.5 py-1 rounded-full">+12.5%</span>
          </div>
          <h3 className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Recaudación Total</h3>
          <p className="text-3xl font-black text-white">$12,450.00</p>
        </div>
        <div className="bg-background-card p-6 rounded-2xl border border-slate-700 shadow-xl group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-orange-900/20 text-orange-400 rounded-xl">
              <span className="material-symbols-outlined">pending_actions</span>
            </div>
            <span className="text-[10px] font-black text-orange-400 bg-orange-900/30 px-2.5 py-1 rounded-full">28 Alumnos</span>
          </div>
          <h3 className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Pagos Pendientes</h3>
          <p className="text-3xl font-black text-white">$3,120.00</p>
        </div>
        <div className="bg-background-card p-6 rounded-2xl border border-slate-700 shadow-xl group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-indigo-900/20 text-indigo-400 rounded-xl">
              <span className="material-symbols-outlined">workspace_premium</span>
            </div>
            <span className="text-[10px] font-black text-indigo-400 bg-indigo-900/30 px-2.5 py-1 rounded-full">15% del total</span>
          </div>
          <h3 className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Becas Activas</h3>
          <p className="text-3xl font-black text-white">14 Alumnos</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">search</span>
          <input 
            className="w-full bg-background-card border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:ring-2 focus:ring-primary outline-none transition-all" 
            placeholder="Buscar alumno por nombre o ID..." 
            type="text"
          />
        </div>
        <div className="flex gap-4">
          <select className="bg-background-card border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-300 outline-none">
            <option>Todas las Categorías</option>
          </select>
          <button className="p-3 bg-background-card border border-slate-700 rounded-xl text-slate-400 hover:text-white transition-colors">
            <span className="material-symbols-outlined">filter_list</span>
          </button>
        </div>
      </div>

      <div className="bg-background-card border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-500 text-[10px] font-black uppercase tracking-widest">
              <tr>
                <th className="px-6 py-5">Alumno</th>
                <th className="px-6 py-5">Categoría</th>
                <th className="px-6 py-5">Estado</th>
                <th className="px-6 py-5">Fecha de Pago</th>
                <th className="px-6 py-5">Método</th>
                <th className="px-6 py-5 text-right">Monto</th>
                <th className="px-6 py-5 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {payments.map((p, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs border border-primary/20">
                        {p.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-bold text-slate-200 text-sm">{p.name}</p>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">ID: {p.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5"><span className="text-xs text-slate-300">{p.cat}</span></td>
                  <td className="px-6 py-5">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-black border uppercase tracking-widest ${
                      p.status === 'Pagado' ? 'bg-primary/20 text-primary border-primary/20' : 
                      p.status === 'Pendiente' ? 'bg-orange-900/30 text-orange-400 border-orange-800/30' :
                      p.status === 'Atrasado' ? 'bg-red-900/30 text-red-400 border-red-800/30' :
                      'bg-indigo-900/30 text-indigo-400 border-indigo-800/30'
                    }`}>
                      {p.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-xs text-slate-500">{p.date}</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-medium italic">
                      {p.method}
                    </div>
                  </td>
                  <td className={`px-6 py-5 text-right font-black text-sm ${p.status === 'Atrasado' ? 'text-red-400' : 'text-slate-200'}`}>
                    {p.amount}
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 text-slate-500 hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">description</span></button>
                      <button className="p-2 text-slate-500 hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">edit</span></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-5 bg-slate-900/30 border-t border-slate-800 flex items-center justify-between">
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Mostrando 1 a 4 de 156 registros</p>
          <div className="flex gap-2">
            <button className="p-2 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-500 transition-colors">
              <span className="material-symbols-outlined text-base">chevron_left</span>
            </button>
            <button className="px-4 py-2 rounded-xl bg-primary text-background-dark font-black text-xs">1</button>
            <button className="p-2 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-500 transition-colors">
              <span className="material-symbols-outlined text-base">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagos;
