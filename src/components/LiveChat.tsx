'use client'

import { useState } from 'react'

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([
    { text: 'Hi! 👋 How can we help you today?', sender: 'bot' }
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }])
      setInput('')

      // Simulate bot response
      setTimeout(() => {
        const responses = [
          'Great question! Our support team will help you shortly.',
          'You can enroll anytime. Our courses start immediately after enrollment.',
          'All courses include lifetime access to recorded lectures.',
          'Check out our FAQ section for more answers!',
        ]
        const randomResponse = responses[Math.floor(Math.random() * responses.length)]
        setMessages(prev => [...prev, { text: randomResponse, sender: 'bot' }])
      }, 1000)
    }
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-primary-600 to-accent-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all animate-bounce z-40"
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-h-[500px] glass-effect rounded-2xl shadow-2xl flex flex-col z-40 animate-slide-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-accent-500 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Nirupam Support 🎓</h3>
              <p className="text-xs opacity-90">Usually replies in minutes</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-2xl hover:opacity-75">
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-primary-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-slate-200 dark:border-slate-700 p-4 flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-800 focus:outline-none focus:border-primary-500 text-sm"
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition text-sm font-semibold"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  )
}
