import './Message.css'

function Message({ message }) {
  let className = 'message'
  if (message.isOwn) {
    className = 'message own'
  }

  return (
    <div className={className}>
      {!message.isOwn && <span className="message-sender">{message.sender}</span>}
      <p className="message-text">{message.text}</p>
    </div>
  )
}

export default Message

