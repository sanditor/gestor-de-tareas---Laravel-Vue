# Proyecto Ejemplo: Gestor de Tareas (Task Manager)

Este es un proyecto completo de aplicación de gestión de tareas usando Laravel como backend y Vue 3 como frontend. Ambos están organizados en carpetas `/backend` y `/frontend`, listos para ser subidos a GitHub.

---

## 📂 Estructura del Proyecto
```
project-root/
│
├── backend/               # Laravel API REST con autenticación Sanctum
│   ├── README.md          # Instrucciones para instalar y ejecutar
│   ├── TaskController.php
│   ├── AuthController.php
│   ├── Task.php (modelo)
│   └── User.php (modelo extendido)
│
├── frontend/              # Vue 3 app que consume la API Laravel
│   ├── README.md          # Instrucciones para instalar y ejecutar
│   ├── api.js
│   ├── components/
│   │   ├── TaskForm.vue
│   │   └── TaskItem.vue
│   └── views/TaskList.vue
│
└── .gitignore             # Incluye Laravel y Node exclusions
```





