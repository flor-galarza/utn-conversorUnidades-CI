# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

# Conversor de Unidades CI

Conversor de temperatura desarrollado en SvelteKit con integración continua, testing automatizado, despliegue en Docker, Render y automatización con Jira.

---

## 🚀 Funcionalidad

- Conversión entre Celsius y Fahrenheit.
- Interfaz web simple y responsiva.
- Código abierto y fácil de extender.

---

## 🛠️ Tecnologías

- [SvelteKit](https://kit.svelte.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://vitest.dev/) (tests unitarios)
- [Playwright](https://playwright.dev/) (tests E2E)
- [Prettier](https://prettier.io/) y [ESLint](https://eslint.org/) (calidad de código)
- [Docker](https://www.docker.com/)
- [Render](https://render.com/) (deploy Docker)
- [Jira](https://www.atlassian.com/software/jira) (automatización de issues)
- [GitHub Actions](https://github.com/features/actions) (CI/CD)

---

## 📦 Instalación local

```sh
git clone https://github.com/flor-galarza/utn-conversorUnidades-CI.git
cd utn-conversorUnidades-CI
npm install
```

---

## 🧑‍💻 Desarrollo

```sh
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## 🧪 Testing

- **Tests unitarios:**
  ```sh
  npm run test:unit
  ```
- **Tests E2E:**
  ```sh
  npx playwright install
  npm run test:e2e
  ```
- **Lint y formato:**
  ```sh
  npm run lint
  npm run format
  ```

---

## 🏗️ Build

```sh
npm run build
```

Esto corre los tests unitarios y luego genera el build de producción.

---

## 🐳 Docker

### Build y ejecución local

```sh
docker build -t conversor-unidades-ci .
docker run -p 3000:3000 conversor-unidades-ci
```

La app estará disponible en [http://localhost:3000](http://localhost:3000).

---

## 🌐 Deploy

### Render (Docker)

1. El workflow de GitHub Actions publica la imagen en GHCR.
2. En Render, crea un servicio tipo **"Web Service" → "Existing Image"**.
3. Usa la imagen:
   ```
   ghcr.io/flor-galarza/utn-conversorunidades-ci:latest
   ```
4. Configura el token de acceso si tu repo es privado.

## 🔄 Integración Continua (CI/CD)

- Cada push o pull request a `main` ejecuta:
  - Lint y formato (Prettier + ESLint)
  - Tests unitarios y E2E
  - Build de producción
  - Publicación de imagen Docker en GHCR
  - Notificaciones a Slack
  - Automatización de issues en Jira (mueve a "En curso" o "Finalizada" según el mensaje del commit)

---

## 📝 Convenciones de commits y Jira

- Para mover una historia a **"En curso"**:  
  Incluí el issue y `#start` en el mensaje, por ejemplo:
  ```
  SCRUM-123 #start: implementa conversión de Celsius a Fahrenheit
  ```
- Para mover una historia a **"Finalizada"** (al hacer merge a main):
  ```
  SCRUM-123: finaliza conversión y agrega tests
  ```

---

## 📁 Estructura del proyecto

```
├── src/
│   ├── lib/               # Lógica de conversión y tests unitarios
│   └── routes/            # Rutas SvelteKit y componentes de UI
├── e2e/                   # Tests E2E (Playwright)
├── Dockerfile
├── package.json
├── svelte.config.js
├── vite.config.ts
└── .github/workflows/ci.yml
```

---

**¡Contribuciones y sugerencias son bienvenidas!**
si