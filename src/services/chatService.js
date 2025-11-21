const API_URL = 'https://jsonplaceholder.typicode.com'

// Datos de ejemplo
const MOCK_CHATS = [
  { id: 1, name: 'Juan Pérez', lastMessage: 'Hola, ¿cómo estás?' },
  { id: 2, name: 'María García', lastMessage: 'Nos vemos mañana' },
  { id: 3, name: 'Equipo Desarrollo', lastMessage: 'Revisen el código' },
]

export const getChats = async () => {
  const response = await fetch(`${API_URL}/posts?_limit=10`)
  if (!response.ok) throw new Error('Error al cargar los chats')
  const posts = await response.json()
  return posts.map((post) => ({
    id: post.id,
    name: post.title.substring(0, 30),
    lastMessage: post.body.substring(0, 50),
  }))
}

export const getMessages = async (chatId) => {
  const response = await fetch(`${API_URL}/posts/${chatId}/comments`)
  if (!response.ok) throw new Error('Error al cargar los mensajes')
  const comments = await response.json()
  return comments.map((comment, index) => ({
    id: comment.id,
    sender: comment.name.split(' ')[0],
    text: comment.body,
    isOwn: index % 2 === 0,
  }))
}

export const sendMessage = async (chatId, text) => {
  await fetch(`${API_URL}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'Mensaje', body: text, userId: 1 }),
  })
  return {
    id: Date.now(),
    sender: 'Tú',
    text: text,
    isOwn: true,
  }
}

