# Car4Films - CRUD Application

Una aplicacion CRUD completa para gestion de coches con React + Node.js + Express + SQLite, completamente dockerizada.

> Demo funcional: [`link`](https://cars4films.netlify.app) (Backend en Render + Neo, Frontend en Netlify)

## Descripcion del Proyecto

Cars4Films es una aplicacion full-stack que permite crear, listar, buscar, ver, editar y borrar informacion de coches. Incluye funcionalidades de búsqueda, paginacion y un sistema robusto de manejo de errores.

## Arquitectura

- **Frontend**: React 19 + Vite + React Router
- **Backend**: Node.js + Express + Prisma + SQLite
- **Base de Datos**: SQLite (desarrollo) / PostgreSQL (produccion)
- **Containerizacion**: Docker + Docker Compose

## Estructura del Proyecto

```
cars4films/
├── README.md
├── docker-compose.yml
├── backend/
│   ├── src/
│   ├── prisma/
│   ├── package.json
│   ├── Dockerfile
│   └── .env.example
├── frontend/
│   ├── src/
│   ├── package.json
│   ├── Dockerfile
│   └── .env.example
└── postman/
    └── cars4films-collection.json
```

## Instalacion y Ejecucion

```bash
git clone https://github.com/cars4films/cars4films.git
docker compose up -d
docker compose exec backend npx prisma migrate dev --name init
docker compose exec backend npm run seed
docker compose logs -f
```

### Prerrequisitos

- Node.js 20+
- Docker y Docker Compose
- Git

### 🐳 Opcion 1: Docker Compose (Recomendado)

```pwsh
# Clonar el repositorio
git clone https://github.com/cars4films/cars4films.git

# Levantar todo el stack en segundo plano
docker compose up -d

# CONFIGURACIoN INICIAL DE BASE DE DATOS (Solo la primera vez)
# Crear las tablas con migraciones de Prisma (cuando te pida nombre, escribe: init)
docker compose exec backend npx prisma migrate dev --name init

# Poblar la base de datos con datos de ejemplo
docker compose exec backend npm run seed

# Ver logs para verificar que todo funciona
docker compose logs -f
```

**Primera ejecucion**: Los pasos de migracion y seed son obligatorios la primera vez para crear las tablas y los datos iniciales.

La aplicacion estara disponible en:

- Frontend: http://localhost:5173
- Backend: http://localhost:3000
- Health Check: http://localhost:3000/api/health

### 💻 Opcion 2: Desarrollo Local

> Nota: en desarrollo local los scripts `npm run migrate` y `npm run seed` estan definidos en `package.json` y pueden ejecutarse directamente.

#### Backend (local)

```pwsh
cd backend

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env

# Generar cliente Prisma (opcional si ya existe)
npm run db:generate

# Ejecutar migraciones (cuando te pida nombre, escribe: init)
npm run migrate

# Cargar datos de prueba (20 items de ejemplo)
npm run seed

# Iniciar servidor de desarrollo
npm run dev
```

El backend estara disponible en http://localhost:3000

#### Frontend (local)

```pwsh
cd frontend

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env

# Iniciar servidor de desarrollo
npm run dev
```

El frontend estara disponible en http://localhost:5173

## Variables de Entorno

### Backend (.env)

```env
DATABASE_URL="file:./dev.db"
PORT=3000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

### Frontend (.env)

```env
VITE_API_BASE_URL=http://localhost:3000
```

## Troubleshooting

### Error 500 en /api/items - "Table main.items does not exist"

Si obtienes este error al acceder a los endpoints de items:

docker compose exec backend npx prisma migrate dev --name init
docker compose exec backend npm run seed

```pwsh
# Solucion: ejecutar migraciones y seed
docker compose exec backend npx prisma migrate dev --name init
docker compose exec backend npm run seed

# Verificar que funciona
curl http://localhost:3000/api/items
```

### Otros problemas comunes

```bash
# Reiniciar todos los contenedores
docker compose down && docker compose up -d

# Ver logs detallados
docker compose logs backend
docker compose logs frontend

# Verificar estado de contenedores
docker compose ps
```

## API Endpoints

### Health Check

- `GET /api/health` - Estado del servidor y conexion DB

### Items (Cars)

- `GET /api/items?search=&page=1&pageSize=10` - Listar con búsqueda y paginacion
- `POST /api/items` - Crear nuevo item
- `GET /api/items/:id` - Obtener item por ID
- `PUT /api/items/:id` - Actualizar item
- `DELETE /api/items/:id` - Eliminar item

### Formato de Respuesta

```json
{
  "data": [
    {
      "id": 1,
      "title": "BMW X5",
      "description": "SUV de lujo",
      "tags": ["suv", "luxury", "bmw"],
      "createdAt": "2025-01-01T00:00:00.000Z",
      "updatedAt": "2025-01-01T00:00:00.000Z"
    }
  ],
  "meta": {
    "page": 1,
    "pageSize": 10,
    "total": 42,
    "totalPages": 5
  }
}
```

## Testing

### Backend Tests

```bash
cd backend
npm test
```

### Postman Collection

Importar `postman/cars4films-collection.json` en Postman para probar todos los endpoints.

## Características Implementadas

### Requisitos Obligatorios

- [x] Frontend React con React Router
- [x] Backend Node.js + Express
- [x] CRUD completo con persistencia real (SQLite)
- [x] Listado, detalle y formulario de alta/edicion
- [x] Consumo de API real con manejo de loading y errores
- [x] Búsqueda de items con debounce
- [x] Boton "Probar conexion" con GET /api/health
- [x] README completo con instrucciones
- [x] Test de integracion backend

### Requisitos Opcionales

- [x] CSS Basico y Responsive
- [x] Animaciones y transiciones
- [x] Accesibilidad basica (foco, labels, contraste)
- [x] Docker Compose completo
- [x] Todos los endpoints requeridos
- [x] Paginacion en servidor
- [x] Manejo de errores

## Características de UX

- **Loading States**: Skeletons y spinners durante cargas
- **Error Handling**: Mensajes claros y recuperables
- **Responsive Design**: Mobile-first (≤ 360px)
- **Accessibility**: Gestion de foco, ARIA labels, contraste adecuado
- **Optimistic UI**: Actualizaciones inmediatas con rollback en caso de error

## Scripts Disponibles

### Backend

```bash
npm run dev          # Servidor desarrollo
npm run start        # Servidor produccion
npm run migrate      # Ejecutar migraciones (desarrollo local)
npm run seed         # Cargar datos de prueba
npm run test         # Ejecutar tests
npm run lint         # Linter
npm run format       # Formatear codigo
```

### Docker Commands (Produccion/Contenedores)

```bash
# Setup inicial de base de datos
docker compose exec backend npx prisma migrate dev --name init
docker compose exec backend npm run seed

# Comandos de desarrollo
docker compose up -d         # Levantar servicios
docker compose down          # Bajar servicios
docker compose logs -f       # Ver logs en tiempo real
```

### Frontend

```bash
npm run dev          # Servidor desarrollo
npm run build        # Build para produccion
npm run preview      # Preview del build
npm run test         # Ejecutar tests
npm run lint         # Linter
```

> Nota: en el paquete `backend` también estan disponibles comandos útiles como `npm run db:generate` (genera Prisma Client) y `npm run db:studio` (abre Prisma Studio).

## Base de Datos (resumen)

El proyecto utiliza SQLite con Prisma. Archivos importantes:

- `prisma/schema.prisma` - esquema de la BD (incluido en el repo)
- `prisma/migrations/` - historial de migraciones (incluido en el repo)
- `prisma/dev.db` - no incluido (cada desarrollador genera su propia BD local)

Para resetear la base de datos local durante desarrollo:

```pwsh
npx prisma migrate reset
```

Si necesitas aplicar cambios rapidos sin crear migraciones:

```pwsh
npx prisma db push
```

### Nombres recomendados para migraciones

Cuando Prisma te pida un nombre para una migracion, usa nombres descriptivos:

- Primera migracion: `init` o `initial_schema`
- Agregar campo: `add_price_field`
- Cambiar tabla: `update_user_table`
- Eliminar columna: `remove_old_column`

Ejemplo:

```pwsh
$ npm run migrate
✔ Enter a name for the new migration: … init
```

## Solucion de Problemas (adicional)

### Error: Puerto ya en uso

```pwsh
# Encontrar y terminar procesos en puertos 3000 y 5173 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Error: No se puede conectar a la base de datos

1. Verificar que el archivo `backend/prisma/dev.db` existe
2. Ejecutar migraciones: `npm run migrate` (nombre sugerido: `init`)
3. Si persiste, resetear: `npx prisma migrate reset`

### Error: CORS en el frontend

1. Verificar que `VITE_API_BASE_URL` apunta al backend correcto
2. El backend tiene configurado `CORS_ORIGIN` correctamente
3. Ambos servicios estan corriendo

### Docker: Error de permisos

```pwsh
# En Windows, ejecutar Docker Desktop como administrador
# En Linux/Mac, dar permisos al directorio
sudo chown -R $USER:$USER .
```

## Pruebas Manuales

```bash
# Health check
curl http://localhost:3000/api/health

# Listar items con búsqueda
curl "http://localhost:3000/api/items?search=bmw&page=1&pageSize=5"

# Crear item
curl -X POST http://localhost:3000/api/items \
  -H "Content-Type: application/json" \
  -d '{"title":"Tesla Model 3","description":"Coche eléctrico","tags":["electric","tesla"]}'
```

## 📄 Licencia

MIT License - ver archivo [LICENSE](LICENSE) para detalles.

---

**Desarrollado por [`@xarlizard`](https://www.github.com/xarlizard)**
