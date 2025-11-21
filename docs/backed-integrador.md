# Trabajo Integrador - Programación IV (TUP 2025)

## Sistema de Mensajería en Tiempo Real

Versión: Borrador - 2.0 (20251003)
Carrera: Tecnicatura Universitaria en Programación - UTN
Año: 2025

---

## 1. Información General

El presente trabajo integrador es grupal (3 a 5 integrantes).

La entrega incluye:

- Repositorio grupal en GitHub
- Informe en PDF / Formato APA
- Coloquio con demostración funcionando

La rúbrica total suma 100 puntos (nota final 10).

---

## 2. Descripción General

Las aplicaciones de mensajería en tiempo real son esenciales en la comunicación moderna.

Este trabajo busca desarrollar un sistema similar a:

- WhatsApp
- Telegram
- Aplicaciones de chat en tiempo real

Utilizando:

- .NET 9 o superior
- Arquitectura de microservicios
- WebSockets / SignalR
- Persistencia con capacidades de tiempo real
- APIs REST
- JWT para autenticación
- Servicios desacoplados

---

## 3. Escenario

La empresa ficticia UTN Inc. selecciona un equipo para diseñar y desarrollar una aplicación de Mensajería en Tiempo Real.

---

## 4. Requerimientos Funcionales

### REQ-01 - Gestión de Usuarios y Autenticación

- Registro con validación (email único, contraseña fuerte).
- Login que devuelve:
  - access token
  - refresh token
- Perfil de usuario editable (nombre, avatar opcional).
- Puede haber usuarios seed para pruebas.
- Usuarios + Auth pueden fusionarse en un solo servicio si está justificado.

---

### REQ-02 - API Usuarios / Auth Service

- Registro
- Login
- Obtención y actualización de perfil
- Validación y emisión de tokens JWT

---

### REQ-03 - API Mensajes Service

- Enviar mensajes
- Listar mensajes por conversación (con paginado)
- Manejo del evento: "escribiendo..." via SignalR
- Registro de acuses de lectura ("visto")
- Persistencia con timestamps

---

### REQ-04 - API Grupos Service

- Crear / eliminar grupos
- Agregar / remover participantes
- Listar miembros
- Listar grupos de un usuario

---

### REQ-05 - Funcionalidades de Mensajería

- Chats 1:1
- Iniciar conversación entre dos usuarios
- Envío y recepción en tiempo real
- Historial paginado

---

### REQ-06 - Chats Grupales

- Crear grupos con múltiples participantes
- Enviar mensajes a todos los miembros conectados
- Agregar / quitar miembros
- Mostrar lista de participantes

---

### REQ-07 - Indicadores en Tiempo Real

- Mostrar: "{usuario} está escribiendo..."
- Detectar actividad de tipeo
- Enviar evento a participantes mediante SignalR
- Ocultar indicador después de aproximadamente 3 segundos sin actividad

---

### REQ-08 - Acuses de Lectura / "Visto"

- Registrar cuándo cada usuario lee cada mensaje (timestamp)
- Guardar en la base de datos
- Sincronizar el estado en tiempo real
- Mostrar indicadores visibles (por ejemplo: doble check azul)

---

### REQ-09 - Historial de Lectura

- Ver listado de usuarios que leyeron un mensaje
- Ver fecha y hora de lectura

---

### REQ-10 - Autenticación y Seguridad

- Todos los endpoints requieren JWT (excepto register/login)
- Validación de token en SignalR Hub
- Un usuario solo puede acceder a sus propios chats
- Hash seguro de contraseñas
- CORS configurado para permitir el frontend

---

### REQ-11 - Interfaz de Usuario (UI)

La UI puede utilizar:

- React
- Vue
- Angular
- Blazor
- HTML + JS vanilla

La UI debe permitir:

- Login / registro
- Listar chats
- Abrir chat y ver mensajes
- Enviar mensajes
- Ver "escribiendo..."
- Ver "visto"
- Crear grupos
- Agregar miembros

No se evalúa diseño visual; se aceptan plantillas o UIs básicas.

---

## 5. Rúbrica (Resumen)

| Nivel | Descripción |
|------|-------------|
| Excelente (100%) | Completo, bien estructurado, presentado en tiempo y forma. Extiende y mejora el TP. Demuestra dominio total en el coloquio. |
| Satisfactorio (80%) | Funciona en un 75%. Le faltan detalles. Entregado en tiempo y forma. |
| Básico (60%) | Realizado al 50%, con fallas. No se explica bien en el coloquio. Organización deficiente. |
| Escaso (0%) | No presentado, incompleto o con errores graves. |
