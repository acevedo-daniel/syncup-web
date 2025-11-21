import './MessageInput.css'

function MessageInput({ value, onChange, onSubmit, isLoading }) {
  return (
    <form className="message-input" onSubmit={onSubmit}>
      <input
        type="text"
        className="message-input-field"
        placeholder="Escribe un mensaje..."
        value={value}
        onChange={onChange}
        disabled={isLoading}
      />
      <button type="submit" className="message-input-button" disabled={isLoading || !value.trim()}>
        Enviar
      </button>
    </form>
  )
}

export default MessageInput

