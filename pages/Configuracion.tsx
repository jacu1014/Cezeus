
import React from 'react';

const Configuracion: React.FC = () => {
  return (
    <div className="space-y-10 animate-fadeIn">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <nav className="flex mb-3">
            <ol className="inline-flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-slate-500">
              <li>Configuración</li>
              <li><span className="material-symbols-outlined text-sm">chevron_right</span></li>
              <li className="text-primary">Perfil de la Escuela</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-extrabold text-white font-display">Perfil de la Escuela</h1>
          <p className="text-slate-400">Administra la información general y visual de la institución.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 rounded-xl border border-slate-700 hover:bg-slate-800 transition-all text-xs font-black uppercase tracking-widest text-slate-400">Cancelar</button>
          <button className="bg-primary text-background-dark px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-primary/20">Guardar Cambios</button>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 space-y-8">
          <section className="bg-background-card p-8 rounded-2xl border border-slate-700 shadow-2xl">
            <div className="flex items-center gap-4 mb-10 border-b border-slate-700 pb-6">
              <span className="material-symbols-outlined text-primary text-2xl">info</span>
              <h3 className="text-lg font-bold font-display">Información Básica</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputGroup label="Nombre de la Escuela" val="Escuela de Fútbol Cezeus" />
              <InputGroup label="NIT / ID Fiscal" val="900.234.567-1" />
              <InputGroup label="Sede Principal" val="Calle 100 # 15-20, Bogotá" />
              <InputGroup label="Teléfono de Contacto" val="+57 310 456 7890" />
              <div className="md:col-span-2">
                <InputGroup label="Email Institucional" val="contacto@cezeusfutbol.com" />
              </div>
            </div>
          </section>

          <section className="bg-background-card p-8 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between mb-10 border-b border-slate-700 pb-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-2xl">groups</span>
                <h3 className="text-lg font-bold font-display">Gestión de Categorías</h3>
              </div>
              <button className="flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest hover:underline">
                <span className="material-symbols-outlined text-base">add_circle</span>
                Añadir Categoría
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-slate-500 uppercase text-[10px] font-black tracking-widest border-b border-slate-700">
                  <tr>
                    <th className="py-4 px-4">Categoría</th>
                    <th className="py-4 px-4">Entrenador</th>
                    <th className="py-4 px-4">Color</th>
                    <th className="py-4 px-4 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <CategoryRow cat="Sub-8 (Semilleros)" coach="Carlos Rodríguez" color="#13ecec" label="Teal" />
                  <CategoryRow cat="Sub-12 (Intermedio)" coach="Martha López" color="#fbbf24" label="Gold" />
                  <CategoryRow cat="Sub-16 (Juvenil)" coach="Juan Pablo Duarte" color="#f43f5e" label="Red" />
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section className="bg-background-card p-10 rounded-2xl border border-slate-700 shadow-2xl flex flex-col items-center text-center">
            <div className="w-full flex items-center gap-4 mb-10 border-b border-slate-700 pb-6 text-left">
              <span className="material-symbols-outlined text-primary text-2xl">image</span>
              <h3 className="text-lg font-bold font-display">Identidad Visual</h3>
            </div>
            <div className="relative group cursor-pointer">
              <div className="w-44 h-44 bg-slate-900 rounded-3xl border-4 border-primary/20 flex items-center justify-center overflow-hidden transition-all group-hover:border-primary group-hover:shadow-2xl group-hover:shadow-primary/20 ring-4 ring-offset-8 ring-offset-background-card ring-primary/5">
                <div className="w-full h-full bg-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-background-dark text-6xl font-black">sports_soccer</span>
                </div>
                <div className="absolute inset-0 bg-background-dark/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-white text-3xl">add_a_photo</span>
                </div>
              </div>
            </div>
            <div className="mt-8 space-y-3">
              <p className="text-sm font-black text-white uppercase tracking-tight">Logo de la Escuela</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">PNG, SVG • Máximo 2MB</p>
              <button className="mt-4 px-6 py-2.5 bg-primary/10 text-primary text-[10px] font-black rounded-xl border border-primary/20 uppercase tracking-widest hover:bg-primary/20 transition-all">
                Cambiar Logo
              </button>
            </div>
            <div className="w-full mt-10 pt-10 border-t border-slate-700 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Color Primario</span>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black font-mono text-slate-300">#13ECEC</span>
                  <div className="w-6 h-6 rounded-lg bg-primary border border-white/20 shadow-lg shadow-primary/20"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Plan de Cuenta</span>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-[9px] font-black rounded-xl border border-emerald-500/20 uppercase tracking-widest">Activa / Pro</span>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-primary to-primary-dark p-8 rounded-2xl shadow-2xl text-background-dark overflow-hidden relative group">
            <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
               <span className="material-symbols-outlined text-[160px] font-black">auto_awesome</span>
            </div>
            <div className="relative z-10 flex flex-col gap-6">
              <span className="material-symbols-outlined text-5xl font-black">auto_awesome</span>
              <div>
                <h4 className="text-xl font-black font-display uppercase tracking-tight">Planificación Pro</h4>
                <p className="text-xs font-bold opacity-80 leading-relaxed mt-2 uppercase tracking-wide">Has utilizado 12 de tus 20 categorías permitidas. Sube de plan para equipos ilimitados.</p>
              </div>
              <button className="w-full bg-background-dark text-white py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl">
                Ver Planes
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const InputGroup: React.FC<{ label: string, val: string }> = ({ label, val }) => (
  <div className="space-y-3">
    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">{label}</label>
    <input className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary outline-none text-sm text-white font-bold transition-all" type="text" defaultValue={val} />
  </div>
);

const CategoryRow: React.FC<{ cat: string, coach: string, color: string, label: string }> = ({ cat, coach, color, label }) => (
  <tr className="group hover:bg-slate-800/20 transition-colors">
    <td className="py-5 px-4 font-bold text-slate-200">{cat}</td>
    <td className="py-5 px-4 text-xs text-slate-500 font-bold uppercase">{coach}</td>
    <td className="py-5 px-4">
      <div className="flex items-center gap-3">
        <div className="w-4 h-4 rounded-full shadow-lg shadow-white/5" style={{ backgroundColor: color }}></div>
        <span className="text-[10px] font-black uppercase text-slate-500">{label}</span>
      </div>
    </td>
    <td className="py-5 px-4 text-right">
      <button className="p-2 text-slate-600 hover:text-primary transition-all">
        <span className="material-symbols-outlined text-lg">edit</span>
      </button>
    </td>
  </tr>
);

export default Configuracion;
