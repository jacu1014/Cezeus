
import React from 'react';

const Recordatorios: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <header className="mb-10">
        <h1 className="text-3xl font-extrabold text-white font-display">Recordatorios Automáticos</h1>
        <p className="text-slate-400 mt-1">Gestiona cómo se notifican los pagos pendientes a los representantes.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* WhatsApp Card */}
        <section className="space-y-8">
          <div className="bg-[#1a2e2b] border border-primary/20 rounded-2xl p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#25D366]/20 rounded-2xl flex items-center justify-center text-[#25D366] border border-[#25D366]/30">
                  <span className="material-symbols-outlined text-3xl">chat</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white font-display">WhatsApp Business</h2>
                  <p className="text-[10px] text-[#25D366] font-black uppercase tracking-widest flex items-center gap-2 mt-1">
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span> API Conectada
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input checked readOnly className="sr-only peer" type="checkbox" />
                <div className="w-14 h-7 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Días de antelación</label>
                  <input className="w-full bg-slate-900 border border-primary/10 rounded-xl px-4 py-3.5 text-white focus:ring-2 focus:ring-primary outline-none transition-all font-bold" type="number" defaultValue={3} />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Frecuencia</label>
                  <select className="w-full bg-slate-900 border border-primary/10 rounded-xl px-4 py-3.5 text-white focus:ring-2 focus:ring-primary outline-none transition-all font-bold">
                    <option>Diario</option>
                    <option>Semanal</option>
                  </select>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest">Mensaje personalizado</label>
                  <span className="text-[9px] text-primary font-bold bg-primary/10 px-2 py-1 rounded-lg">Usa {'{Nombre_Alumno}'}</span>
                </div>
                <textarea 
                  className="w-full bg-slate-900 border border-primary/10 rounded-2xl px-5 py-4 text-white focus:ring-2 focus:ring-primary outline-none resize-none transition-all text-sm leading-relaxed" 
                  rows={4}
                  defaultValue="Hola {Nombre_Padre}, te recordamos que el pago de la mensualidad de {Nombre_Alumno} por un monto de {Monto} vence en {Dias} días. ¡Gracias!"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button className="flex-1 bg-primary text-background-dark font-black py-4 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-[10px] shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined text-lg">save</span> Guardar
                </button>
                <button className="px-5 py-4 border border-primary/30 text-primary rounded-xl hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-lg">send</span>
                </button>
              </div>
            </div>
          </div>

          {/* Phone Preview */}
          <div className="relative mx-auto w-full max-w-[320px] h-[550px] bg-slate-900 rounded-[3.5rem] border-8 border-slate-800 shadow-2xl overflow-hidden ring-1 ring-slate-700/50">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20"></div>
            <div className="h-full flex flex-col font-sans">
              <div className="bg-[#075e54] p-4 pt-10 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-400 flex items-center justify-center border border-white/10">
                  <span className="material-symbols-outlined text-white text-xl">person</span>
                </div>
                <div>
                  <p className="text-white text-xs font-black leading-none uppercase tracking-tight">Escuela Cezeus</p>
                  <p className="text-[9px] text-white/70 font-bold mt-1 uppercase tracking-widest">En línea</p>
                </div>
              </div>
              <div className="flex-1 bg-[#0b141a] p-5 space-y-4 overflow-y-auto relative" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)', backgroundSize: '16px 16px' }}>
                <div className="bg-[#056162] text-white text-[11px] font-medium p-3.5 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl max-w-[85%] relative shadow-xl">
                  Hola Juan Pérez, te recordamos que el pago de la mensualidad de Carlos Pérez por un monto de $45.00 vence en 3 días. ¡Gracias!
                  <span className="text-[8px] text-white/50 block text-right mt-2 uppercase font-bold">10:45 AM</span>
                </div>
              </div>
              <div className="p-4 bg-slate-900/90 flex gap-3 border-t border-white/5">
                <div className="bg-slate-800 flex-1 rounded-full h-11 px-5 flex items-center text-slate-500 text-xs font-medium italic">Mensaje...</div>
                <div className="w-11 h-11 bg-primary/20 rounded-full flex items-center justify-center text-primary border border-primary/20">
                  <span className="material-symbols-outlined text-lg">mic</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Email Card & Preview */}
        <section className="space-y-8">
          <div className="bg-[#1a2e2b] border border-primary/20 rounded-2xl p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary border border-primary/30">
                  <span className="material-symbols-outlined text-3xl">alternate_email</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white font-display">Email Corporativo</h2>
                  <p className="text-[10px] text-primary font-black uppercase tracking-widest flex items-center gap-2 mt-1">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> Sistema Activo
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input checked readOnly className="sr-only peer" type="checkbox" />
                <div className="w-14 h-7 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Antelación (días)</label>
                  <input className="w-full bg-slate-900 border border-primary/10 rounded-xl px-4 py-3.5 text-white focus:ring-2 focus:ring-primary outline-none" type="number" defaultValue={5} />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Frecuencia</label>
                  <select className="w-full bg-slate-900 border border-primary/10 rounded-xl px-4 py-3.5 text-white focus:ring-2 focus:ring-primary outline-none">
                    <option>Semanal</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Asunto</label>
                <input className="w-full bg-slate-900 border border-primary/10 rounded-xl px-4 py-3.5 text-white focus:ring-2 focus:ring-primary outline-none font-bold" type="text" defaultValue="Recordatorio de Pago - Cezeus FC" />
              </div>
              <div className="pt-4 flex gap-4">
                <button className="flex-1 bg-primary text-background-dark font-black py-4 rounded-xl uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined text-lg">save</span> Guardar
                </button>
                <button className="px-5 py-4 border border-primary/30 text-primary rounded-xl hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-lg">preview</span>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col min-h-[400px]">
            <div className="bg-slate-100 px-5 py-3 flex items-center gap-3 border-b">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="ml-4 flex-1 bg-white rounded-lg border border-slate-200 px-4 py-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                cezeus.club/billing/preview
              </div>
            </div>
            <div className="p-10 bg-white text-slate-800 flex-1 flex flex-col items-center">
              <div className="w-20 h-20 mb-8 bg-slate-100 rounded-3xl flex items-center justify-center border-2 border-slate-200 shadow-inner">
                <span className="material-symbols-outlined text-4xl text-background-dark font-black">sports_soccer</span>
              </div>
              <h2 className="text-3xl font-black mb-4 text-center font-display uppercase tracking-tight">Aviso de Vencimiento</h2>
              <div className="w-14 h-1.5 bg-primary rounded-full mb-8"></div>
              <p className="text-center text-slate-600 mb-10 max-w-sm font-medium leading-relaxed">
                Estimado Juan Pérez, le recordamos que la cuota de Carlos Pérez vence el 15 de Octubre de 2024.
              </p>
              <button className="bg-background-dark text-white px-10 py-4 rounded-full font-black text-xs tracking-widest shadow-xl hover:scale-105 transition-all">
                PAGAR MENSUALIDAD
              </button>
              <p className="mt-12 text-[9px] text-slate-400 font-black uppercase tracking-widest">Escuela de Fútbol Cezeus © 2024</p>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-12 p-8 bg-primary/5 border border-primary/10 rounded-2xl relative overflow-hidden group">
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/5 rounded-full group-hover:scale-110 transition-transform duration-700"></div>
        <h3 className="text-sm font-black text-primary mb-6 flex items-center gap-3 uppercase tracking-widest relative z-10">
          <span className="material-symbols-outlined text-xl">info</span> Etiquetas Dinámicas
        </h3>
        <div className="flex flex-wrap gap-3 relative z-10">
          {['{Nombre_Alumno}', '{Nombre_Padre}', '{Monto}', '{Fecha_Vencimiento}', '{Mes_Correspondiende}', '{Enlace_Pago}'].map(tag => (
            <span key={tag} className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-xl text-[10px] font-black text-primary shadow-sm">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recordatorios;
