
import React, { useState, useEffect } from 'react';
import { AppPages } from './types';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Pagos from './pages/Pagos';
import Calendario from './pages/Calendario';
import Recordatorios from './pages/Recordatorios';
import Configuracion from './pages/Configuracion';
import Evaluacion from './pages/Evaluacion';
import SeguimientoAlumno from './pages/SeguimientoAlumno';
import Login from './pages/Login';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<AppPages>(AppPages.DASHBOARD);

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

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

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      <Sidebar 
        activePage={currentPage} 
        onPageChange={setCurrentPage} 
        isDarkMode={isDarkMode} 
        toggleTheme={() => setIsDarkMode(!isDarkMode)}
        onLogout={handleLogout}
      />
      
      <main className="flex-1 ml-64 p-8 overflow-y-auto custom-scrollbar">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;
