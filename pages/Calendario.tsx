
import React from 'react';

const Calendario: React.FC = () => {
  const days = Array.from({ length: 35 }, (_, i) => i - 1); // Mock month starting on Sunday (adjust for Oct 2024)
  const events = [
    { day: 1, title: 'Entren. U-15', color: 'bg-primary' },
    { day: 3, title: 'Entren. Senior', color: 'bg-primary' },
    { day: 5, title: 'Liga vs Inter', color: 'bg-blue-500' },
    { day: 8, title: 'Sesión Táctica', color: 'bg-purple-500' },
    { day: 9, title: 'Entren. Porteros', color: 'bg-primary', active: true },
    { day: 15, title: 'Reunión Padres', color: 'bg-purple-500' },
    { day: 19, title: 'Torneo Reg.', color: 'bg-blue-500' },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      <header className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <h1 className="text-3xl font-extrabold text-white font-display">Octubre 2024</h1>
          <div className="flex bg-slate-800/50 p-1 rounded-xl border border-slate-700">
            <button className="p-1.5 hover:bg-slate-700 rounded-lg text-slate-400">
              <span className="material-symbols-outlined text-base">chevron_left</span>
            </button>
            <button className="px-4 py-1 text-[10px] font-black uppercase tracking-widest text-white hover:bg-slate-700 rounded-lg">Hoy</button>
            <button className="p-1.5 hover:bg-slate-700 rounded-lg text-slate-400">
              <span className="material-symbols-outlined text-base">chevron_right</span>
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex bg-slate-800/50 p-1 rounded-xl border border-slate-700 mr-2">
            <button className="px-5 py-2 text-xs font-black bg-primary text-background-dark rounded-lg shadow-sm">Mes</button>
            <button className="px-5 py-2 text-xs font-black text-slate-400 hover:text-slate-200">Semana</button>
            <button className="px-5 py-2 text-xs font-black text-slate-400 hover:text-slate-200">Día</button>
          </div>
          <button className="bg-primary text-background-dark px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-base">add</span>
            Crear Evento
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="bg-background-card border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-7 border-b border-slate-700 bg-slate-800/30">
              {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map(d => (
                <div key={d} className="py-4 text-center text-[10px] font-black uppercase tracking-widest text-slate-500">{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 min-h-[600px]">
              {days.map((d, i) => {
                const dayEvents = events.filter(e => e.day === d);
                const isToday = d === 9;
                return (
                  <div key={i} className={`border-r border-b border-slate-700/50 p-3 min-h-[120px] transition-colors hover:bg-slate-800/20 ${isToday ? 'bg-primary/5 ring-1 ring-inset ring-primary' : ''}`}>
                    <div className="flex justify-between items-start">
                      <span className={`text-sm font-bold ${isToday ? 'text-primary' : d > 0 && d <= 31 ? 'text-slate-300' : 'text-slate-700'}`}>
                        {d > 0 && d <= 31 ? d : d <= 0 ? 30 + d : d - 31}
                      </span>
                      {isToday && <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>}
                    </div>
                    <div className="mt-3 space-y-1.5">
                      {dayEvents.map((e, idx) => (
                        <div key={idx} className={`text-[9px] font-black uppercase tracking-tighter px-2 py-1.5 rounded-lg border flex items-center gap-1.5 ${
                          e.active ? 'bg-primary text-background-dark border-primary shadow-sm' : 
                          `${e.color.replace('bg-', 'bg-')}/20 ${e.color.replace('bg-', 'text-')} ${e.color.replace('bg-', 'border-')}/30`
                        }`}>
                          {!e.active && <span className={`w-1 h-1 rounded-full ${e.color}`}></span>}
                          {e.title}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-background-card border border-slate-700 rounded-2xl p-6 shadow-xl">
            <h2 className="text-lg font-bold mb-6 flex items-center gap-3 font-display">
              <span className="material-symbols-outlined text-primary">event_note</span>
              Filtros
            </h2>
            <div className="space-y-3">
              <FilterToggle label="Entrenamientos" color="primary" checked={true} />
              <FilterToggle label="Partidos Oficiales" color="blue-500" checked={true} />
              <FilterToggle label="Eventos Especiales" color="purple-500" checked={false} />
            </div>
          </div>

          <div className="bg-background-card border border-slate-700 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold flex items-center gap-3 font-display">
                <span className="material-symbols-outlined text-primary">schedule</span>
                Próximos
              </h2>
              <button className="text-[10px] font-black text-primary uppercase tracking-tighter hover:underline">Ver todo</button>
            </div>
            <div className="space-y-5">
              <EventCard 
                date="26 OCT, 10:00 AM" 
                title="Final de Torneo: Copa Cezeus" 
                loc="Estadio Principal - Campo A" 
                type="trophy" 
                color="purple-500" 
              />
              <EventCard 
                date="15 OCT, 06:30 PM" 
                title="Reunión de Padres U-15" 
                loc="Sala de Conferencias B" 
                type="groups" 
                color="slate-400" 
              />
              <EventCard 
                date="12 OCT, 09:00 AM" 
                title="Amistoso vs Lions Academy" 
                loc="Complejo Municipal" 
                type="flag" 
                color="blue-500" 
              />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

const FilterToggle: React.FC<{ label: string, color: string, checked: boolean }> = ({ label, color, checked }) => (
  <label className="flex items-center justify-between p-3.5 rounded-xl border border-slate-800 bg-slate-900/20 cursor-pointer hover:bg-slate-800 transition-all group">
    <div className="flex items-center gap-3">
      <div className={`w-3 h-3 rounded-full ring-4 ring-offset-2 ring-offset-background-card ${checked ? `bg-${color} ring-${color}/10` : 'bg-slate-700 ring-slate-700/10'}`}></div>
      <span className={`text-xs font-bold uppercase tracking-wide transition-colors ${checked ? 'text-slate-200' : 'text-slate-600'}`}>{label}</span>
    </div>
    <input checked={checked} readOnly className="form-checkbox h-4 w-4 text-primary bg-background-dark border-slate-700 rounded" type="checkbox"/>
  </label>
);

const EventCard: React.FC<{ date: string, title: string, loc: string, type: string, color: string }> = ({ date, title, loc, type, color }) => (
  <div className={`group relative border-l-4 border-${color} p-4 rounded-r-2xl bg-slate-800/10 hover:bg-slate-800/30 transition-all cursor-pointer`}>
    <div className="flex justify-between items-start mb-2">
      <span className={`text-[9px] font-black uppercase tracking-widest text-${color}/80`}>{date}</span>
      <span className={`material-symbols-outlined text-base text-${color}`}>{type === 'trophy' ? 'emoji_events' : type}</span>
    </div>
    <h3 className="text-sm font-bold text-white mb-1 group-hover:text-primary transition-colors">{title}</h3>
    <p className="text-[10px] font-medium text-slate-500">{loc}</p>
  </div>
);

export default Calendario;
