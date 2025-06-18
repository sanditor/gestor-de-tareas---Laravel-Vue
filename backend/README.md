# 🐘 Backend - API REST Laravel - Gestor de Tareas

Este backend es una API REST construida con Laravel que permite a usuarios autenticados gestionar sus tareas personales (crear, leer, actualizar y eliminar).

## 📋 Requisitos

- PHP >= 8.1
- Composer
- MySQL o MariaDB
- Laravel 10+
- Extensiones PHP: OpenSSL, PDO, Mbstring, Tokenizer, XML, Ctype, JSON, BCMath

## 🚀 Instalación

```bash
cd backend
cp .env.example .env
composer install
php artisan key:generate
php artisan migrate
php artisan serve

```

## 🚀 Recomendaciones Importantes

- Asegúrate de configurar correctamente la conexión a tu base de datos en .env.
- Autenticación: Este proyecto usa Laravel Sanctum para manejar la autenticación vía     tokens y cookies seguras entre el frontend (SPA) y el backend.
- Rutas API:
    POST /api/register – Registrar nuevo usuario
    POST /api/login – Iniciar sesión
    POST /api/logout – Cerrar sesión
    GET /api/tasks – Listar tareas
    POST /api/tasks – Crear tarea
    GET /api/tasks/{id} – Ver tarea específica
    PUT /api/tasks/{id} – Actualizar tarea
    DELETE /api/tasks/{id} – Eliminar tarea
- Pruebas: Puedes probar la API usando Postman, Insomnia o con el frontend provisto en ../frontend.
- Archivos Importantes:

    TaskController.php: Controlador de operaciones CRUD
    AuthController.php: Controlador de login/registro/logout
    Task.php: Modelo con relación a usuario
    User.php: Modelo extendido con relación tasks()
- Tips: 
    Usa php artisan migrate:fresh --seed para reiniciar la base de datos.
    Habilita CORS en config/cors.php para permitir llamadas desde el frontend.

