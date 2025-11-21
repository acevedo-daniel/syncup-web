# Proyecto - Entrega 2

Fecha de entrega: 20/11 - 23:59 horas
Estado: Obligatoria para aprobar el curso

## Objetivo

Incorporar interacción dinámica en la aplicación creada en el Módulo 1, utilizando:

- Estados
- Efectos (solo si es necesario)
- Consumo de datos desde un servicio externo

Cada alumno debe adaptar las consignas a su aplicación, manteniendo coherencia con la temática elegida.

## Temas a Aplicar

- useState
- useEffect (solo si es necesario; probablemente no lo requieras)
- Custom Hooks
- React Query (useQuery, useMutation)
- Manejo de estados de carga y error

## Requerimientos

### 1. Eliminar datos hardcodeados

Los datos deben venir de un servicio externo:

- API pública
- API propia del alumno
- Servicio mockeado

### 2. Integración con React Query

- Usar useQuery para lecturas
- Usar useMutation para crear, actualizar o eliminar datos

### 3. Agregar interacciones

Se debe demostrar manejo de estado y reactividad.

### 4. Mostrar estados de UI

- Loading: mientras se obtienen datos
- Error: si la petición falla
- Empty State: cuando no hay resultados

## Ejemplo Orientativo

Antes:

- Los datos venían de un array local

Ahora:

- Los datos deben venir de una API
- Ejemplo: https://api.themoviedb.org/3/movie/popular

## Forma de Entrega

1. Enviar link del repositorio
2. Enviar link de la aplicación desplegada
