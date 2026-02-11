
import React, { useState } from 'react';
import { AppPages } from './types';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Pagos from './pages/Pagos';
import Calendario from './pages/Calendario';
import Recordatorios from './pages/Recordatorios';
import Configuracion from './pages/Configuracion';
import Evaluacion from './pages/Evaluacion';
import SeguimientoAlumno from './pages/SeguimientoAlumno';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<AppPages>(AppPages.DASHBOARD);

  const renderPage = () => {
    switch (currentPage) {
      case AppPages.DASHBOARD:
        return <Dashboard />;
      case AppPages.PAGOS:
        return <Pagos />;
      case AppPages.CALENDARIO:
        return <Calendario />;
      case AppPages.RECORDATORIOS:
        return <Recordatorios />;
      case AppPages.CONFIGURACION:
        return <Configuracion />;
      case AppPages.EVALUACION:
        return <Evaluacion />;
      case AppPages.ALUMNOS:
        return <SeguimientoAlumno />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-background-dark text-slate-100 font-sans">
      <Sidebar activePage={currentPage} onPageChange={setCurrentPage} />
      
      <main className="flex-1 ml-64 p-8 overflow-y-auto custom-scrollbar">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;
