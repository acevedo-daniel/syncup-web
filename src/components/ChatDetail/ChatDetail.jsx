import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getMessages, sendMessage } from '../../services/chatService'
import MessageList from '../MessageList/MessageList'
import MessageInput from '../MessageInput/MessageInput'
import './ChatDetail.css'

function ChatDetail({ chat, onClose }) {
  const [newMessage, setNewMessage] = useState('')
  const queryClient = useQueryClient()

  const { data: messages, isLoading } = useQuery(
    ['messages', chat.id],
    () => getMessages(chat.id)
  )

  const sendMutation = useMutation(
    (text) => sendMessage(chat.id, text),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['messages', chat.id])
        setNewMessage('')
      },
    }
  )

  const handleSend = (e) => {
    e.preventDefault()
    if (newMessage.trim()) {
      sendMutation.mutate(newMessage.trim())
    }
  }


  return (
    <div className="chat-detail">
      <div className="chat-detail-header">
        <button className="close-button" onClick={onClose}>←</button>
        <h2>{chat.name}</h2>
      </div>
      <MessageList messages={messages || []} isLoading={isLoading} />
      <MessageInput
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onSubmit={handleSend}
        isLoading={sendMutation.isLoading}
      />
    </div>
  )
}

export default ChatDetail

