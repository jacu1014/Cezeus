
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
// Import MetricCardProps to resolve the "Cannot find name 'MetricCardProps'" error
import { Activity, Student, MetricCardProps } from '../types';

const data = [
  { name: 'ENE', val: 12 },
  { name: 'FEB', val: 18 },
  { name: 'MAR', val: 15 },
  { name: 'ABR', val: 24 },
  { name: 'MAY', val: 22 },
  { name: 'JUN', val: 32 },
];

const activities: Activity[] = [
  { id: '1', type: 'payment', title: 'Pago recibido: Mateo Sánchez', subtitle: 'Mensualidad Junio - Categoría U12', time: 'Hace 5 min' },
  { id: '2', type: 'enrollment', title: 'Nueva Inscripción: Lucía Pérez', subtitle: 'Categoría Femenil Infantil', time: 'Hace 2 horas' },
  { id: '3', type: 'report', title: 'Reporte Semanal Generado', subtitle: 'Resumen de asistencia y bajas', time: 'Hace 4 horas' },
  { id: '4', type: 'alert', title: 'Alerta de Pago Vencido', subtitle: 'Carlos Ruiz - 15 días de retraso', time: 'Ayer' },
];

const students: Student[] = [
  { id: '1', name: 'Rodrigo González', category: 'Sub-15', attendance: '12/12 Sesiones', attendancePercent: 100, status: 'excelente' },
  { id: '2', name: 'Santiago Vargas', category: 'Sub-12', attendance: '11/12 Sesiones', attendancePercent: 92, status: 'regular' },
  { id: '3', name: 'Juan Pérez', category: 'Sub-10', attendance: '9/12 Sesiones', attendancePercent: 75, status: 'regular' },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-white font-display">Dashboard</h1>
          <p className="text-slate-400 mt-1">Bienvenido de nuevo, Administrador</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">search</span>
            <input 
              className="pl-10 pr-4 py-2.5 bg-background-card border border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none text-sm w-72 text-white placeholder-slate-500 transition-all"
              placeholder="Buscar por alumno o ID..." 
              type="text"
            />
          </div>
          <button className="relative p-2.5 bg-background-card border border-slate-700 rounded-xl text-slate-300 hover:bg-slate-700 transition-colors">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-background-card"></span>
          </button>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard title="PAGOS PENDIENTES" value="14" label="Alumnos" change="+12%" icon="pending_actions" color="red" />
        <MetricCard title="INGRESOS DEL MES" value="$12,450" label="MXN" change="+8.4%" icon="monetization_on" color="primary" />
        <MetricCard title="ASISTENCIA FINDE" value="88%" label="Total alumnos" change="Meta: 90%" icon="event_available" color="teal" />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-background-card p-6 rounded-2xl border border-slate-700 shadow-xl">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-lg font-bold text-white font-display">Tendencia de Inscripciones</h3>
              <p className="text-sm text-slate-400">Comparativa mensual de nuevos ingresos</p>
            </div>
            <select className="bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium rounded-lg px-3 py-1.5 outline-none cursor-pointer">
              <option>Últimos 6 meses</option>
              <option>Año 2024</option>
            </select>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 10, fontWeight: 700 }} />
                <Tooltip 
                  cursor={{ fill: 'rgba(19, 236, 236, 0.05)' }}
                  contentStyle={{ backgroundColor: '#1E293B', borderRadius: '12px', border: '1px solid #334155', fontSize: '12px' }}
                />
                <Bar dataKey="val" radius={[6, 6, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === data.length - 1 ? '#13ecec' : '#137792'} fillOpacity={index === data.length - 1 ? 1 : 0.6} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-background-card p-6 rounded-2xl border border-slate-700 shadow-xl flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-white font-display">Actividades Recientes</h3>
            <button className="text-[10px] font-bold text-primary uppercase tracking-tighter hover:underline">Ver todo</button>
          </div>
          <div className="space-y-6 flex-1">
            {activities.map((act) => (
              <ActivityItem key={act.id} activity={act} />
            ))}
          </div>
        </div>
      </div>

      <section className="bg-background-card rounded-2xl border border-slate-700 shadow-xl overflow-hidden">
        <div className="p-6 border-b border-slate-700 flex justify-between items-center">
          <h3 className="text-lg font-bold text-white font-display">Alumnos Destacados (Asistencia)</h3>
          <button className="px-5 py-2.5 bg-primary text-background-dark text-xs font-bold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all uppercase tracking-wider">Exportar Lista</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/30">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Alumno</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Categoría</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Asistencias/Mes</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Estatus</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-300 border border-slate-600">
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-sm font-semibold text-slate-200">{student.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">{student.category}</td>
                  <td className="px-6 py-4">
                    <div className="w-full bg-slate-800 rounded-full h-1.5 max-w-[120px] mb-1.5">
                      <div className="bg-primary h-1.5 rounded-full" style={{ width: `${student.attendancePercent}%` }}></div>
                    </div>
                    <span className="text-[10px] font-bold text-primary uppercase">{student.attendance}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full border uppercase ${
                      student.status === 'excelente' 
                        ? 'bg-teal-900/30 text-teal-400 border-teal-800/30' 
                        : 'bg-blue-900/30 text-blue-400 border-blue-800/30'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-500 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

// Fixed: Correctly referencing the imported MetricCardProps
interface MetricCardPropsLocal extends MetricCardProps {}
const MetricCard: React.FC<MetricCardPropsLocal> = ({ title, value, label, change, icon, color }) => {
  const colorMap = {
    primary: 'bg-primary/10 text-primary',
    red: 'bg-red-900/20 text-red-400',
    teal: 'bg-teal-900/20 text-teal-400',
    orange: 'bg-orange-900/20 text-orange-400',
  };

  const badgeMap = {
    primary: 'bg-primary/20 text-primary',
    red: 'bg-red-900/30 text-red-400',
    teal: 'bg-emerald-900/20 text-emerald-400',
    orange: 'bg-orange-900/30 text-orange-400',
  };

  return (
    <div className="bg-background-card p-6 rounded-2xl border border-slate-700 shadow-xl hover:shadow-primary/5 transition-all group overflow-hidden relative">
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:scale-125 transition-transform duration-500"></div>
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className={`p-3 rounded-xl ${colorMap[color]}`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        {change && <span className={`text-[10px] font-black px-2.5 py-1 rounded-full ${badgeMap[color]}`}>{change}</span>}
      </div>
      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 relative z-10">{title}</p>
      <div className="flex items-baseline space-x-2 relative z-10">
        <h3 className="text-4xl font-black text-white">{value}</h3>
        <span className="text-slate-500 text-xs font-medium">{label}</span>
      </div>
    </div>
  );
};

const ActivityItem: React.FC<{ activity: Activity }> = ({ activity }) => {
  const iconMap = {
    payment: { icon: 'payment', color: 'bg-teal-900/30 text-teal-400 border-teal-800/50' },
    enrollment: { icon: 'person_add', color: 'bg-blue-900/30 text-blue-400 border-blue-800/50' },
    report: { icon: 'history_edu', color: 'bg-amber-900/30 text-amber-400 border-amber-800/50' },
    alert: { icon: 'notification_important', color: 'bg-red-900/30 text-red-400 border-red-800/50' },
  };

  const style = iconMap[activity.type];

  return (
    <div className="flex space-x-4">
      <div className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center border transition-transform hover:scale-110 ${style.color}`}>
        <span className="material-symbols-outlined text-lg">{style.icon}</span>
      </div>
      <div className="flex-1">
        <p className="text-sm font-bold text-slate-200 leading-tight">{activity.title}</p>
        <p className="text-xs text-slate-500 mt-1">{activity.subtitle}</p>
        <p className="text-[9px] font-black text-slate-600 uppercase mt-2 tracking-widest">{activity.time}</p>
      </div>
    </div>
  );
};

export default Dashboard;
