
export enum AppPages {
  DASHBOARD = 'dashboard',
  EVALUACION = 'evaluacion',
  ALUMNOS = 'alumnos',
  PAGOS = 'pagos',
  CALENDARIO = 'calendario',
  REPORTES = 'reportes',
  RECORDATORIOS = 'recordatorios',
  CONFIGURACION = 'configuracion'
}

export interface MetricCardProps {
  title: string;
  value: string | number;
  label: string;
  change?: string;
  icon: string;
  color: 'primary' | 'red' | 'teal' | 'orange';
}

export interface Activity {
  id: string;
  type: 'payment' | 'enrollment' | 'report' | 'alert';
  title: string;
  subtitle: string;
  time: string;
}

export interface Student {
  id: string;
  name: string;
  category: string;
  attendance: string;
  attendancePercent: number;
  status: 'excelente' | 'regular' | 'atrasado';
}
