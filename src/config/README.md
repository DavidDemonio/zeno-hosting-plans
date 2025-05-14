
# Configuración de Planes para ZenoScale

Este directorio contiene archivos de configuración para la aplicación de ZenoScale, incluyendo la definición de planes de hosting.

## Estructura de `plans.ts`

El archivo `plans.ts` define la estructura y datos de los planes de hosting disponibles en ZenoScale. Este archivo puede ser modificado manualmente para añadir, eliminar o actualizar planes.

### Estructura de datos

#### Interfaz `PlanSpec`

Define las especificaciones técnicas de un plan:

```typescript
export interface PlanSpec {
  ram: string;         // Cantidad de RAM (ej: "4.7 GB")
  cpu: string;         // Recursos de CPU (ej: "2 vCores")
  storage: string;     // Almacenamiento (ej: "8.1 GB")
  databases: number;   // Número de bases de datos
  backups: number;     // Número de copias de seguridad
  credits: number;     // Créditos incluidos
  serverLimit: string; // Límite de servidores ("∞" para ilimitado)
}
```

#### Interfaz `Plan`

Define un plan completo con todas sus características:

```typescript
export interface Plan {
  name: string;        // Nombre del plan
  emoji: string;       // Emoji representativo
  price: string;       // Precio (sin símbolo de moneda)
  period: string;      // Período de facturación (ej: "mes")
  features: string[];  // Lista de características destacadas
  popular?: boolean;   // Indica si es un plan destacado/popular
  specs: PlanSpec;     // Especificaciones técnicas
  idealFor: string;    // Descripción de casos de uso ideales
  perfectFor: string;  // Descripción concisa de uso ideal
}
```

### Cómo añadir un nuevo plan

Para añadir un nuevo plan, simplemente añada un nuevo objeto al array `plans` siguiendo la estructura existente:

```typescript
{
  name: "NuevoPlan",
  emoji: "🚀",
  price: "X,XX",
  period: "mes",
  specs: {
    ram: "X.X GB",
    cpu: "X vCores",
    storage: "XX.X GB",
    databases: X,
    backups: X,
    credits: XX,
    serverLimit: "∞",
  },
  features: [
    "Característica 1",
    "Característica 2",
    "Característica 3"
  ],
  idealFor: "Descripción de casos de uso",
  perfectFor: "Descripción breve",
}
```

### Cómo modificar planes existentes

Para modificar un plan existente, localice el objeto correspondiente en el array `plans` y actualice sus valores según sea necesario. Los cambios se reflejarán automáticamente en la interfaz de usuario cuando se recargue la aplicación.

## Uso en la aplicación

Este archivo es importado por el componente `PricingSection` para mostrar los planes disponibles en la página.
