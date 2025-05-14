
export interface PlanSpec {
  ram: string;
  cpu: string;
  storage: string;
  databases: number;
  backups: number;
  credits: number;
  serverLimit: string;
}

export interface Plan {
  name: string;
  emoji: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  specs: PlanSpec;
  idealFor: string;
  perfectFor: string;
}

export const plans: Plan[] = [
  {
    name: "FreePlan",
    emoji: "🪁",
    price: "0",
    period: "mes",
    specs: {
      ram: "4.7 GB",
      cpu: "2 vCores",
      storage: "8.1 GB",
      databases: 1,
      backups: 1,
      credits: 0,
      serverLimit: "1",
    },
    features: [
      "Instalación con un clic",
      "Protección DDoS",
      "Subdominio gratuito"
    ],
    idealFor: "Testing, aprendizaje, y experimentos rápidos",
    perfectFor: "Probar antes de hacer upgrade",
  },
  {
    name: "MiniCube",
    emoji: "🧩",
    price: "2",
    period: "mes",
    specs: {
      ram: "2.0 GB",
      cpu: "1.5 vCores",
      storage: "10.2 GB",
      databases: 1,
      backups: 1,
      credits: 20,
      serverLimit: "∞",
    },
    features: [
      "Instalación con un clic",
      "Protección DDoS",
      "Subdominio gratuito",
      "Soporte premium"
    ],
    idealFor: "Pequeños proyectos, pruebas, bots ligeros",
    perfectFor: "Empezar con cargas mínimas",
  },
  {
    name: "Galaxy",
    emoji: "🌌",
    price: "2,80",
    period: "mes",
    specs: {
      ram: "3.0 GB",
      cpu: "2 vCores",
      storage: "15.0 GB",
      databases: 1,
      backups: 1,
      credits: 28,
      serverLimit: "∞",
    },
    features: [
      "Instalación con un clic",
      "Protección DDoS",
      "Subdominio gratuito",
      "Soporte premium",
      "Panel avanzado"
    ],
    idealFor: "Juegos simples o sitios web ligeros",
    perfectFor: "Aplicaciones básicas o entornos modded ligeros",
  },
  {
    name: "Obsidian",
    emoji: "🖤",
    price: "4,20",
    period: "mes",
    popular: true,
    specs: {
      ram: "4.0 GB",
      cpu: "2.5 vCores",
      storage: "20.0 GB",
      databases: 2,
      backups: 2,
      credits: 42,
      serverLimit: "∞",
    },
    features: [
      "Instalación con un clic",
      "Protección DDoS",
      "Subdominio gratuito",
      "Soporte premium",
      "Panel avanzado",
      "Backups automáticos"
    ],
    idealFor: "Juegos multijugador, modpacks moderados",
    perfectFor: "Tráfico medio y apps web medianas",
  },
  {
    name: "Inferno",
    emoji: "🔥",
    price: "5,60",
    period: "mes",
    specs: {
      ram: "5.0 GB",
      cpu: "3.5 vCores",
      storage: "25.0 GB",
      databases: 3,
      backups: 2,
      credits: 56,
      serverLimit: "∞",
    },
    features: [
      "Instalación con un clic",
      "Protección DDoS",
      "Subdominio gratuito",
      "Soporte premium",
      "Panel avanzado",
      "Backups automáticos",
      "Dominio personalizado"
    ],
    idealFor: "Modpacks exigentes, mundos multijugador medianos",
    perfectFor: "Proyectos que necesitan mejor rendimiento",
  },
  {
    name: "Storm",
    emoji: "⚡",
    price: "7",
    period: "mes",
    specs: {
      ram: "8.0 GB",
      cpu: "4 vCores",
      storage: "51.2 GB",
      databases: 4,
      backups: 3,
      credits: 70,
      serverLimit: "∞",
    },
    features: [
      "Instalación con un clic",
      "Protección DDoS",
      "Subdominio gratuito",
      "Soporte premium",
      "Panel avanzado",
      "Backups automáticos",
      "Dominio personalizado",
      "API para desarrolladores"
    ],
    idealFor: "Muchos jugadores, grandes modpacks, apps web pesadas",
    perfectFor: "Proyectos intensivos en recursos",
  },
  {
    name: "Dragon",
    emoji: "🐉",
    price: "11,20",
    period: "mes",
    specs: {
      ram: "10.0 GB",
      cpu: "5.5 vCores",
      storage: "71.7 GB",
      databases: 6,
      backups: 4,
      credits: 112,
      serverLimit: "∞",
    },
    features: [
      "Instalación con un clic",
      "Protección DDoS",
      "Subdominio gratuito",
      "Soporte premium",
      "Panel avanzado",
      "Backups automáticos",
      "Dominio personalizado",
      "API para desarrolladores",
      "Soporte prioritario"
    ],
    idealFor: "Modpacks como Pixelmon o RLCraft",
    perfectFor: "Servidores de comunidad de alto rendimiento",
  },
  {
    name: "Quantum",
    emoji: "⚡",
    price: "14",
    period: "mes",
    specs: {
      ram: "12.0 GB",
      cpu: "6 vCores",
      storage: "102.4 GB",
      databases: 8,
      backups: 5,
      credits: 140,
      serverLimit: "∞",
    },
    features: [
      "Instalación con un clic",
      "Protección DDoS",
      "Subdominio gratuito",
      "Soporte premium",
      "Panel avanzado",
      "Backups automáticos",
      "Dominio personalizado",
      "API para desarrolladores",
      "Soporte prioritario",
      "Alta disponibilidad"
    ],
    idealFor: "Servidores avanzados, mundos personalizados, apps web grandes",
    perfectFor: "Rendimiento alto y múltiples usuarios",
  },
  {
    name: "Nebula",
    emoji: "🌌",
    price: "17",
    period: "mes",
    specs: {
      ram: "16.0 GB",
      cpu: "6.5 vCores",
      storage: "190.4 GB",
      databases: 16,
      backups: 12,
      credits: 170,
      serverLimit: "∞",
    },
    features: [
      "Instalación con un clic",
      "Protección DDoS",
      "Subdominio gratuito",
      "Soporte premium",
      "Panel avanzado",
      "Backups automáticos",
      "Dominio personalizado",
      "API para desarrolladores",
      "Soporte prioritario",
      "Alta disponibilidad",
      "IP dedicada"
    ],
    idealFor: "Redes a gran escala, juegos de alto rendimiento",
    perfectFor: "Proyectos extensos y grandes comunidades",
  },
  {
    name: "Titan",
    emoji: "👑",
    price: "21",
    period: "mes",
    specs: {
      ram: "20.0 GB",
      cpu: "7.5 vCores",
      storage: "254.8 GB",
      databases: 25,
      backups: 20,
      credits: 210,
      serverLimit: "∞",
    },
    features: [
      "Instalación con un clic",
      "Protección DDoS",
      "Subdominio gratuito",
      "Soporte premium",
      "Panel avanzado",
      "Backups automáticos",
      "Dominio personalizado",
      "API para desarrolladores",
      "Soporte prioritario",
      "Alta disponibilidad",
      "IP dedicada",
      "Recursos garantizados"
    ],
    idealFor: "Entornos masivos multijugador, eventos",
    perfectFor: "Gaming profesional, flexibilidad y alto rendimiento",
  },
  {
    name: "ZenoScale",
    emoji: "💎",
    price: "30",
    period: "mes",
    specs: {
      ram: "29.3 GB",
      cpu: "9.5 vCores",
      storage: "512.7 GB",
      databases: 100,
      backups: 100,
      credits: 300,
      serverLimit: "∞",
    },
    features: [
      "Instalación con un clic",
      "Protección DDoS",
      "Subdominio gratuito",
      "Soporte premium",
      "Panel avanzado",
      "Backups automáticos",
      "Dominio personalizado",
      "API para desarrolladores",
      "Soporte prioritario",
      "Alta disponibilidad",
      "IP dedicada",
      "Recursos garantizados",
      "Infraestructura dedicada"
    ],
    idealFor: "Proyectos de máximo nivel, redes a gran escala",
    perfectFor: "Aplicaciones exigentes y eventos de gran escala",
  },
];
