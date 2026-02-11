
import React from 'react';

const Evaluacion: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fadeIn">
      <header className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-extrabold text-white font-display">Módulo de Profesor</h1>
          <p className="text-slate-400 mt-1">Gestión académica y seguimiento de campo</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right">
            <p className="text-sm font-bold text-white">Prof. Carlos Mendoza</p>
            <p className="text-[10px] text-primary font-black uppercase tracking-widest">Coordinador Técnico</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-background-dark font-black shadow-lg shadow-primary/20">CM</div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Section Evaluation */}
        <section className="lg:col-span-2 space-y-6">
          <div className="bg-background-card rounded-2xl shadow-2xl border border-slate-700 p-8">
            <div className="flex items-center gap-4 mb-10 border-b border-slate-700 pb-6">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <span className="material-symbols-outlined text-3xl">analytics</span>
              </div>
              <h2 className="text-xl font-bold text-white font-display">Evaluación Inicial</h2>
            </div>

            <form className="space-y-10">
              <div>
                <label className="block text-[10px] font-black mb-3 text-slate-500 uppercase tracking-widest">Seleccionar Alumno</label>
                <select className="w-full rounded-xl border-slate-700 bg-slate-800/50 text-slate-200 focus:ring-primary focus:border-primary py-3.5 px-4 transition-all outline-none">
                  <option>Mateo Rodríguez - Categoría U12</option>
                  <option>Juan Pérez - Categoría U10</option>
                </select>
              </div>

              <div className="space-y-10">
                <RatingSlider label="Capacidad Técnica" val={85} desc="Drible, Pase, Control orientado" />
                <RatingSlider label="Visión Táctica" val={60} desc="Posicionamiento, Transiciones" />
                <RatingSlider label="Condición Física" val={72} desc="Velocidad, Resistencia, Potencia" />
              </div>

              <div className="pt-4">
                <label className="block text-[10px] font-black mb-3 text-slate-500 uppercase tracking-widest">Observaciones</label>
                <textarea 
                  className="w-full rounded-2xl border-slate-700 bg-slate-800/50 text-slate-200 focus:ring-primary focus:border-primary text-sm p-4 placeholder:text-slate-700 outline-none resize-none transition-all" 
                  placeholder="Anotaciones sobre el desempeño..." 
                  rows={4}
                />
              </div>

              <button className="w-full bg-primary hover:bg-primary-light text-background-dark font-black py-5 px-6 rounded-2xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 uppercase tracking-widest text-xs">
                <span className="material-symbols-outlined">save</span>
                Guardar Evaluación
              </button>
            </form>
          </div>
        </section>

        {/* Section Attendance */}
        <section className="lg:col-span-3 space-y-6">
          <div className="bg-background-card rounded-2xl shadow-2xl border border-slate-700 overflow-hidden">
            <div className="p-8 border-b border-slate-700 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <span className="material-symbols-outlined text-3xl">checklist_rtl</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white font-display">Pase de Lista</h2>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black mt-1">Semana 14 - Mayo</p>
                </div>
              </div>
              <div className="flex bg-slate-900 p-1.5 rounded-xl border border-slate-700">
                <button className="px-6 py-2 rounded-lg text-xs font-black bg-primary text-background-dark shadow-lg shadow-primary/20 uppercase tracking-widest transition-all">Sábado</button>
                <button className="px-6 py-2 rounded-lg text-xs font-black text-slate-500 hover:text-slate-200 uppercase tracking-widest transition-all">Domingo</button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-800/40">
                  <tr>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Estudiante</th>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Categoría</th>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest text-center">Asistencia</th>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest text-right">Estado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <AttendanceRow name="Mateo Rodríguez" cat="U12 - Sub 12" present={true} status="Presente" />
                  <AttendanceRow name="Juan Pérez" cat="U10 - Sub 10" present={false} status="Faltó" />
                  <AttendanceRow name="Lucas García" cat="U12 - Sub 12" present={true} status="Presente" />
                  <AttendanceRow name="Diego Luna" cat="U10 - Sub 10" present={true} status="Presente" />
                  <AttendanceRow name="Santi Díaz" cat="U10 - Sub 10" present={false} status="Tardanza" />
                </tbody>
              </table>
            </div>

            <div className="p-8 bg-slate-900/40 border-t border-slate-700 flex flex-col sm:flex-row gap-6 justify-between items-center">
              <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
                <strong className="text-primary">18</strong> Alumnos registrados para este horario
              </div>
              <button className="w-full sm:w-auto bg-slate-700 text-white font-black py-4 px-10 rounded-2xl hover:bg-slate-600 transition-all uppercase tracking-widest text-[10px] flex items-center justify-center gap-3">
                Finalizar Pase de Lista
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <StatsMiniCard label="Presentes" val="14" color="emerald" icon="how_to_reg" />
            <StatsMiniCard label="Ausentes" val="03" color="rose" icon="person_off" />
            <StatsMiniCard label="Tardanzas" val="01" color="amber" icon="schedule" />
          </div>
        </section>
      </div>
    </div>
  );
};

const RatingSlider: React.FC<{ label: string, val: number, desc: string }> = ({ label, val, desc }) => (
  <div>
    <div className="flex justify-between items-center mb-4">
      <label className="text-sm font-bold text-slate-300">{label}</label>
      <span className="text-primary font-black px-4 py-1 bg-primary/10 rounded-full text-xs">{val}%</span>
    </div>
    <div className="relative h-2 bg-slate-800 rounded-full">
      <div className="absolute top-0 left-0 h-full bg-primary rounded-full" style={{ width: `${val}%` }}></div>
      <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full shadow-lg cursor-pointer" style={{ left: `${val}%` }}></div>
    </div>
    <p className="text-[9px] mt-4 text-slate-600 uppercase tracking-widest font-black leading-tight">{desc}</p>
  </div>
);

const AttendanceRow: React.FC<{ name: string, cat: string, present: boolean, status: string }> = ({ name, cat, present, status }) => (
  <tr className="hover:bg-slate-800/40 transition-colors">
    <td className="px-8 py-5">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-500">
          <span className="material-symbols-outlined text-xl">person</span>
        </div>
        <span className="font-bold text-slate-200 text-sm">{name}</span>
      </div>
    </td>
    <td className="px-8 py-5 text-xs text-slate-500 font-medium">{cat}</td>
    <td className="px-8 py-5 text-center">
      <div className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${present ? 'bg-primary' : 'bg-slate-700'}`}>
        <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${present ? 'translate-x-6' : 'translate-x-0'}`}></div>
      </div>
    </td>
    <td className="px-8 py-5 text-right">
      <span className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border ${
        status === 'Presente' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 
        status === 'Faltó' ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' : 
        'bg-amber-500/10 text-amber-400 border-amber-500/20'
      }`}>
        {status}
      </span>
    </td>
  </tr>
);

const StatsMiniCard: React.FC<{ label: string, val: string, color: string, icon: string }> = ({ label, val, color, icon }) => (
  <div className="bg-background-card p-6 rounded-2xl border border-slate-700 flex items-center gap-5 transition-transform hover:-translate-y-1 shadow-lg">
    <div className={`w-12 h-12 flex items-center justify-center bg-${color}-500/10 text-${color}-400 rounded-2xl border border-${color}-500/20`}>
      <span className="material-symbols-outlined text-2xl">{icon}</span>
    </div>
    <div>
      <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest">{label}</p>
      <p className="text-2xl font-black text-white">{val}</p>
    </div>
  </div>
);

export default Evaluacion;
