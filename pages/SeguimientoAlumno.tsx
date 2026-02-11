
import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

const radarData = [
  { subject: 'Velocidad', A: 90, B: 75, fullMark: 100 },
  { subject: 'Regate', A: 85, B: 60, fullMark: 100 },
  { subject: 'Pase', A: 75, B: 85, fullMark: 100 },
  { subject: 'Resistencia', A: 95, B: 70, fullMark: 100 },
  { subject: 'Fuerza', A: 80, B: 90, fullMark: 100 },
];

const SeguimientoAlumno: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-white font-display">Seguimiento de Alumno</h1>
          <p className="text-slate-400">Perfil técnico y evolutivo del jugador.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-slate-800 border border-slate-700 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-slate-700 transition-colors">
            <span className="material-symbols-outlined text-base">download</span> Exportar PDF
          </button>
          <button className="bg-primary text-background-dark px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-base">edit</span> Actualizar Datos
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="space-y-6">
          <div className="bg-background-card rounded-2xl shadow-2xl border border-slate-700 overflow-hidden group">
            <div className="h-28 bg-gradient-to-r from-primary-dark to-primary/40 relative">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
            </div>
            <div className="px-8 pb-8 text-center lg:text-left">
              <div className="relative -mt-14 mb-6 inline-block">
                <div className="w-28 h-28 rounded-2xl bg-slate-800 border-4 border-background-card overflow-hidden mx-auto shadow-2xl ring-4 ring-primary/10">
                  <img alt="Alumno" className="w-full h-full object-cover" src="https://picsum.photos/seed/mateo/200/200" />
                </div>
                <span className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-background-card rounded-full"></span>
              </div>
              <div className="mb-8">
                <h2 className="text-2xl font-black text-white font-display">Mateo Rodríguez</h2>
                <p className="text-primary font-bold text-sm tracking-wide uppercase mt-1">Delantero Centro • Dorsal #9</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <StatBox label="Edad" val="14 años" />
                <StatBox label="Categoría" val="Sub-15 A" />
                <StatBox label="Peso" val="58 kg" />
                <StatBox label="Altura" val="1.68 m" />
              </div>
              <div className="mt-10 pt-8 border-t border-slate-700">
                <h3 className="text-[10px] font-black text-slate-500 mb-5 uppercase tracking-widest">Información Académica</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 text-sm text-slate-300 font-medium">
                    <span className="material-symbols-outlined text-primary">school</span>
                    Colegio San Agustín - 3º ESO
                  </li>
                  <li className="flex items-center gap-4 text-sm text-slate-300 font-medium">
                    <span className="material-symbols-outlined text-primary">event</span>
                    Inscrito: Sept 2022
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-background-card p-8 rounded-2xl shadow-2xl border border-slate-700">
            <h3 className="font-bold text-white mb-6 flex items-center gap-3 font-display">
              <span className="material-symbols-outlined text-primary">medical_services</span>
              Estado Físico
            </h3>
            <div className="flex items-center gap-5 mb-5">
              <div className="flex-1 h-3 bg-slate-800 rounded-full overflow-hidden p-[2px]">
                <div className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full transition-all duration-1000" style={{ width: '95%' }}></div>
              </div>
              <span className="text-sm font-black text-primary">95%</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed font-medium italic">
              Apto para competición. Pequeña sobrecarga en gemelo izquierdo bajo control preventivo.
            </p>
          </div>
        </div>

        <div className="xl:col-span-2 space-y-8">
          <div className="bg-background-card p-8 rounded-2xl shadow-2xl border border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32"></div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-6 relative z-10">
              <div>
                <h2 className="text-xl font-bold text-white font-display">Análisis de Rendimiento</h2>
                <p className="text-sm text-slate-500">Comparativa: Estado Inicial vs Actual</p>
              </div>
              <div className="flex items-center gap-8 text-[10px] font-black tracking-widest uppercase">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-slate-600"></span>
                  <span className="text-slate-500">Inicial</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/40"></span>
                  <span className="text-primary">Actual</span>
                </div>
              </div>
            </div>
            <div className="h-80 relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 700 }} />
                  <Radar name="Inicial" dataKey="B" stroke="#475569" fill="#475569" fillOpacity={0.2} />
                  <Radar name="Actual" dataKey="A" stroke="#13ecec" fill="#13ecec" fillOpacity={0.4} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10 border-t border-slate-700 mt-6 relative z-10">
              <QuickStat val="12" label="Goles" />
              <QuickStat val="05" label="Asistencias" />
              <QuickStat val="92%" label="Asistencia" />
              <QuickStat val="8.5" label="Rating" />
            </div>
          </div>

          <div className="bg-background-card rounded-2xl shadow-2xl border border-slate-700 overflow-hidden">
            <div className="bg-slate-800/40 px-8 py-5 border-b border-slate-700 flex items-center justify-between">
              <h2 className="text-lg font-bold text-white flex items-center gap-3 font-display">
                <span className="material-symbols-outlined text-primary">history</span>
                Historial de Pruebas
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-800/20 text-slate-500 text-[10px] font-black uppercase tracking-widest">
                  <tr>
                    <th className="px-8 py-5">Fecha</th>
                    <th className="px-8 py-5">Tipo de Prueba</th>
                    <th className="px-8 py-5">Puntaje</th>
                    <th className="px-8 py-5 text-right">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <TableRow date="12 May, 2024" type="Mensual (Mayo)" score="8.5 / 10" />
                  <TableRow date="15 Abr, 2024" type="Mensual (Abril)" score="8.2 / 10" />
                  <TableRow date="20 Mar, 2024" type="Trimestral Q1" score="7.9 / 10" />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatBox: React.FC<{ label: string, val: string }> = ({ label, val }) => (
  <div className="p-4 bg-slate-800/40 rounded-2xl border border-slate-700/50 group-hover:bg-slate-800/60 transition-all">
    <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1.5">{label}</p>
    <p className="font-black text-slate-100 text-sm">{val}</p>
  </div>
);

const QuickStat: React.FC<{ val: string, label: string }> = ({ val, label }) => (
  <div className="text-center group">
    <p className="text-3xl font-black text-primary group-hover:scale-110 transition-transform mb-1">{val}</p>
    <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest">{label}</p>
  </div>
);

const TableRow: React.FC<{ date: string, type: string, score: string }> = ({ date, type, score }) => (
  <tr className="hover:bg-slate-800/40 transition-colors">
    <td className="px-8 py-5 text-xs text-slate-400 font-medium">{date}</td>
    <td className="px-8 py-5 text-sm font-bold text-white">{type}</td>
    <td className="px-8 py-5">
      <span className="bg-primary/10 text-primary text-[10px] font-black px-3 py-1.5 rounded-xl border border-primary/20">{score}</span>
    </td>
    <td className="px-8 py-5 text-right">
      <button className="text-primary hover:text-white transition-colors flex items-center gap-1 ml-auto text-xs font-black uppercase tracking-widest">
        Ver Detalles <span className="material-symbols-outlined text-sm">chevron_right</span>
      </button>
    </td>
  </tr>
);

export default SeguimientoAlumno;
