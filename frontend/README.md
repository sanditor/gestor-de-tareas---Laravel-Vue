

```markdown
# 🖥️ Frontend - Vue 3 + Axios - Gestor de Tareas

Este frontend consume la API REST del backend Laravel usando Vue 3 (Composition API) y Axios.

## 📋 Requisitos

- Node.js >= 18
- npm o yarn

## 🚀 Instalación

```bash
cd frontend
npm install
npm run dev

```

## 🚀 Recomendaciones Importantes

- Asegúrate de que tu backend esté corriendo en http://localhost:8000.

- Conexión con API. La conexión está configurada en api.js con axios. Las cookies de sesión se envían automáticamente con withCredentials.

🧩 Componentes:
    TaskForm.vue: Formulario para crear nuevas tareas
    TaskItem.vue: Componente de tarea individual (checkbox + eliminar)
    TaskList.vue: Vista principal con listado de tareas

✅ Funcionalidades:
    Login/Registro de usuario (vía API Laravel)
    Crear, ver, editar y eliminar tareas
    Marcar tareas como completadas

🛠️ Tips:
    Usa Vue Router para separar vistas de login, registro y tareas. 
    Protege rutas usando autenticación en el frontend.
    Puedes usar Pinia si deseas manejar estado global.

🐾 Para Producción
    Ejecuta npm run build para compilar el frontend.
    Puedes servirlo desde Laravel con public/dist o desplegarlo en Vercel/Netlify.
