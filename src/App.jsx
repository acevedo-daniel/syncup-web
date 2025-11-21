import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import ChatList from './components/ChatList/ChatList'
import ChatDetail from './components/ChatDetail/ChatDetail'
import './App.css'

function App() {
  const [selectedChat, setSelectedChat] = useState(null)

  return (
    <div className="app">
      <Navbar />
      <div className="app-content">
        <ChatList onSelectChat={setSelectedChat} selectedChat={selectedChat} />
        {selectedChat && (
          <ChatDetail chat={selectedChat} onClose={() => setSelectedChat(null)} />
        )}
      </div>
    </div>
  )
}

export default App

