# Usa una imagen ligera de Node.js
FROM node:20-alpine AS builder

# Directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY package.json package-lock.json ./

# Instala las dependencias (incluyendo devDependencies para la build)
RUN npm ci

# Copia el resto del código
COPY . .

# Build de la aplicación (genera los archivos estáticos)
RUN npm run build

# --- Fase de producción ---
FROM node:20-alpine AS runner

WORKDIR /app

# Solo copia lo necesario para producción
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/build ./build  

# Instala solo dependencias de producción
RUN npm ci --omit=dev

# Expone el puerto (normalmente 3000 para SvelteKit con adaptador-node)
EXPOSE 3000

# Comando para iniciar el servidor
CMD ["node", "build"]