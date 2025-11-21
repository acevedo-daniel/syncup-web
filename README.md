# SyncUp - Sistema de Mensajería

Aplicación React para sistema de mensajería desarrollada como proyecto académico.

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Requisitos Cumplidos

### Entrega 1

- Proyecto Vite + React
- Componentes: Navbar, ChatList, ChatCard, ChatDetail, Message, MessageInput, MessageList, Card
- Renderizado de datos desde API pública
- Estilos con CSS Modules
- Renderizado de listas
- Componente con children (Card)
- Datos mockeados (MOCK_CHATS en chatService.js)

### Entrega 2

- React Query (useQuery, useMutation)
- Estados de UI (Loading, Error, Empty State)
- Consumo de API pública (JSONPlaceholder)
- useState para manejo de estado
- Interacciones dinámicas

## API Externa

La aplicación consume datos de JSONPlaceholder:

- Endpoint: https://jsonplaceholder.typicode.com
- Posts se transforman en chats
- Comments se transforman en mensajes

## Estructura del Proyecto

```
src/
├── components/
│   ├── Card/
│   ├── ChatCard/
│   ├── ChatDetail/
│   ├── ChatList/
│   ├── Message/
│   ├── MessageInput/
│   ├── MessageList/
│   └── Navbar/
├── services/
│   └── chatService.js
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## Tecnologías

- React 18
- Vite
- React Query 3
- CSS Modules
