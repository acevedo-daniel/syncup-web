import Card from '../Card/Card'
import './ChatCard.css'

function ChatCard({ chat, onClick, isSelected }) {
  let className = 'chat-card'
  if (isSelected) {
    className = 'chat-card selected'
  }

  let lastMessage = chat.lastMessage
  if (!lastMessage) {
    lastMessage = 'Sin mensajes'
  }

  return (
    <Card>
      <div className={className} onClick={onClick}>
        <div className="chat-card-avatar">
          {chat.name.charAt(0).toUpperCase()}
        </div>
        <div className="chat-card-content">
          <h3 className="chat-card-name">{chat.name}</h3>
          <p className="chat-card-message">{lastMessage}</p>
        </div>
      </div>
    </Card>
  )
}

export default ChatCard

