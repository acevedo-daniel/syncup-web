# Instrucciones de Despliegue

## Preparación para GitHub

1. Verificar que todos los archivos estén listos
2. Asegurar que `.gitignore` incluya `node_modules` y `dist`
3. El proyecto está listo para subir

## Comandos para subir al repositorio

```bash
# Inicializar git (si no está inicializado)
git init

# Agregar el remoto
git remote add origin https://github.com/acevedo-daniel/syncup-web.git

# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Entrega 1 y 2 - Sistema de Mensajería React"

# Subir al repositorio
git push -u origin main
```

## Despliegue en Vercel

1. Conectar el repositorio de GitHub con Vercel
2. Vercel detectará automáticamente que es un proyecto Vite
3. La configuración en `vercel.json` está lista
4. El build se ejecutará automáticamente

## Verificación

- [x] Código verificado (sin patrones avanzados)
- [x] Requisitos Entrega 1 cumplidos
- [x] Requisitos Entrega 2 cumplidos
- [x] Build exitoso
- [x] README actualizado
- [x] .gitignore configurado

