# QuillAlert Server

Este README explica cómo levantar el servidor backend y conectar la base de datos desde otro ordenador.

## Requisitos

- Node.js instalado (versión 18+ recomendada)
- Acceso al repositorio del proyecto
- Credenciales de base de datos PostgreSQL válidas

## Pasos para preparar el servidor

1. Clona el repositorio y entra en la carpeta del proyecto:

```powershell
git clone <REPO_URL>
cd QuillAlert\server
```

2. Instala dependencias del servidor:

```powershell
npm install
```

3. Crea el archivo de configuración de entorno:

```powershell
copy .env.example .env
```

4. Abre `.env` y configura tu conexión PostgreSQL.

### Opción recomendada: `DATABASE_URL`

Reemplaza `<YOUR_PASSWORD>` con tu contraseña real:

```env
DATABASE_URL=postgresql://postgres.glvjywfxzzdkyicddlez:<YOUR_PASSWORD>@aws-1-us-west-2.pooler.supabase.com:6543/postgres
```

### Alternativa con variables separadas

```env
PGHOST=aws-1-us-west-2.pooler.supabase.com
PGPORT=6543
PGDATABASE=postgres
PGUSER=postgres.glvjywfxzzdkyicddlez
PGPASSWORD=<YOUR_PASSWORD>
```

5. Opcional: define el puerto si quieres usar uno distinto al `3000`:

```env
PORT=3000
NODE_ENV=development
```

## Levantar el servidor

Desde `QuillAlert/server` ejecuta:

```powershell
npm start
```

El servidor debe iniciar en `http://localhost:3000` (o el puerto que hayas configurado).

## Verificar la conexión a la base de datos

Abre otro terminal y ejecuta:

```powershell
curl http://localhost:3000/dbtest
```

Debes recibir un JSON con `ok: true` y la hora actual del servidor.

## Notas importantes

- No subas el archivo `.env` al repositorio. Contiene credenciales sensibles.
- Si trabajas desde otro ordenador, copia también la carpeta `server` y crea el `.env` localmente.
- La carpeta `server/node_modules` es independiente de `client/node_modules`.
- Esta configuración asume que la base de datos es accesible desde tu red y que el host remoto permite conexiones.
