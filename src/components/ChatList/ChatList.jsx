import { useQuery } from 'react-query'
import { getChats } from '../../services/chatService'
import ChatCard from '../ChatCard/ChatCard'
import './ChatList.css'

function ChatList({ onSelectChat, selectedChat }) {
  const { data: chats, isLoading, isError } = useQuery('chats', getChats)

  if (isLoading) {
    return (
      <div className="chat-list">
        <p style={{ padding: '2rem', color: '#666' }}>Cargando...</p>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="chat-list">
        <p style={{ padding: '2rem', color: '#999' }}>Error al cargar</p>
      </div>
    )
  }

  if (!chats || chats.length === 0) {
    return (
      <div className="chat-list">
        <p style={{ padding: '2rem', color: '#666' }}>No hay chats</p>
      </div>
    )
  }

  return (
    <div className="chat-list">
      <h2 className="chat-list-title">Conversaciones</h2>
      <div className="chat-list-items">
        {chats.map((chat) => {
          const isSelected = selectedChat && selectedChat.id === chat.id
          return (
            <ChatCard
              key={chat.id}
              chat={chat}
              onClick={() => onSelectChat(chat)}
              isSelected={isSelected}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ChatList

