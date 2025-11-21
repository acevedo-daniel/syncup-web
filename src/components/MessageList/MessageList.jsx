import Message from '../Message/Message'
import './MessageList.css'

function MessageList({ messages, isLoading }) {
  if (isLoading) {
    return (
      <div className="message-list">
        <p style={{ color: '#666', textAlign: 'center', padding: '2rem' }}>Cargando...</p>
      </div>
    )
  }

  if (!messages || messages.length === 0) {
    return (
      <div className="message-list">
        <p style={{ color: '#666', textAlign: 'center', padding: '2rem' }}>No hay mensajes</p>
      </div>
    )
  }

  return (
    <div className="message-list">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  )
}

export default MessageList

