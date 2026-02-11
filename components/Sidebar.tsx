
import React from 'react';
import { AppPages } from '../types';

interface SidebarProps {
  activePage: AppPages;
  onPageChange: (page: AppPages) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, onPageChange }) => {
  const menuItems = [
    { id: AppPages.DASHBOARD, label: 'Dashboard', icon: 'dashboard' },
    { id: AppPages.ALUMNOS, label: 'Alumnos', icon: 'groups' },
    { id: AppPages.EVALUACION, label: 'Evaluación', icon: 'checklist_rtl' },
    { id: AppPages.PAGOS, label: 'Pagos', icon: 'payments' },
    { id: AppPages.CALENDARIO, label: 'Calendario', icon: 'calendar_today' },
    { id: AppPages.REPORTES, label: 'Reportes', icon: 'assessment' },
    { id: AppPages.RECORDATORIOS, label: 'Notificaciones', icon: 'notifications_active' },
    { id: AppPages.CONFIGURACION, label: 'Configuración', icon: 'settings' },
  ];

  return (
    <aside className="w-64 bg-background-sidebar border-r border-slate-800 flex flex-col fixed h-full z-30">
      <div className="p-6 flex flex-col items-center border-b border-slate-800">
        <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined text-background-dark text-3xl font-bold">sports_soccer</span>
        </div>
        <h1 className="font-display font-bold text-lg text-white tracking-tight">CEZEUS FC</h1>
        <h2 className="text-[10px] font-bold uppercase tracking-widest text-primary">Escuela de Fútbol</h2>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto custom-scrollbar">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onPageChange(item.id)}
            className={`w-full flex items-center px-4 py-3 rounded-xl transition-all group ${
              activePage === item.id
                ? 'bg-primary text-background-dark shadow-lg shadow-primary/20'
                : 'text-slate-400 hover:bg-slate-800'
            }`}
          >
            <span className={`material-symbols-outlined mr-3 ${
              activePage === item.id ? '' : 'group-hover:text-primary'
            }`}>
              {item.icon}
            </span>
            <span className="font-medium text-sm">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-background-dark font-bold text-xs shadow-sm shadow-primary/30">
            AD
          </div>
          <div className="overflow-hidden">
            <p className="text-xs font-bold text-white truncate">Admin User</p>
            <p className="text-[9px] text-slate-500 truncate uppercase font-bold tracking-wider">Administrador</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
