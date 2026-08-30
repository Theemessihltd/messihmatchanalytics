// PRO ADMIN DASHBOARD - MESSIH MATCH ANALYTICS
// CEO Level - Till 1581046 - 55 Games

import { useState } from 'react'

const AdminDashboard = () => {
  const [vipCode, setVipCode] = useState("VIP-8F9K-2XLM")
  
  const generateCode = () => {
    const code = "VIP-" + Math.random().toString(36).substr(2,4).toUpperCase() + "-" + Math.random().toString(36).substr(2,4).toUpperCase()
    setVipCode(code)
  }

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-yellow-400">MESSIH MATCH ANALYTICS - CEO ADMIN</h1>
        <div className="bg-green-600 px-4 py-2 rounded">● Online</div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-[#151a2d] p-6 rounded-xl border border-yellow-500/20">
          <p className="text-gray-400">Total Revenue KES</p>
          <h2 className="text-3xl font-bold">KES 8,245,300</h2>
          <p className="text-green-400 text-sm">+12.4% vs last month</p>
        </div>
        <div className="bg-[#151a2d] p-6 rounded-xl border border-yellow-500/20">
          <p className="text-gray-400">Active VIP Users</p>
          <h2 className="text-3xl font-bold">1,342</h2>
          <p className="text-green-400 text-sm">+8.2% vs last month</p>
        </div>
        <div className="bg-[#151a2d] p-6 rounded-xl border border-yellow-500/20">
          <p className="text-gray-400">M-Pesa Till 1581046</p>
          <h2 className="text-3xl font-bold">KES 2,103,450</h2>
          <p className="text-gray-400 text-sm">Today: KES 184,200 • 89 payments</p>
        </div>
        <div className="bg-[#151a2d] p-6 rounded-xl border border-yellow-500/20">
          <p className="text-gray-400">55 Games Today</p>
          <h2 className="text-3xl font-bold">55</h2>
          <p className="text-yellow-400 text-sm">+5 vs yesterday</p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* VIP Generator */}
        <div className="bg-[#151a2d] p-6 rounded-xl border border-yellow-500/30">
          <h3 className="text-xl font-bold mb-4 text-yellow-400">🔑 VIP Code Generator</h3>
          <div className="bg-black p-4 rounded flex justify-between items-center mb-4">
            <span className="text-2xl font-mono text-yellow-400">{vipCode}</span>
            <button className="bg-yellow-500 text-black px-4 py-1 rounded font-bold">Copy</button>
          </div>
          <button onClick={generateCode} className="w-full bg-yellow-500 text-black py-3 rounded-xl font-bold hover:bg-yellow-400">
            + Generate New Code
          </button>
          <p className="text-xs text-gray-500 mt-2">Codes auto-expire after 7 days. Till 1581046</p>
        </div>

        {/* Transactions */}
        <div className="bg-[#151a2d] p-6 rounded-xl border border-yellow-500/30">
          <h3 className="text-xl font-bold mb-4 text-yellow-400">💳 Recent M-Pesa Transactions</h3>
          <div className="space-y-3">
            <div className="flex justify-between bg-black p-3 rounded"><span>07** **** 9021</span><span>KES 5,000</span><span className="bg-green-600 px-2 rounded text-sm">Success</span></div>
            <div className="flex justify-between bg-black p-3 rounded"><span>07** **** 5563</span><span>KES 2,000</span><span className="bg-green-600 px-2 rounded text-sm">Success</span></div>
            <div className="flex justify-between bg-black p-3 rounded"><span>07** **** 1199</span><span>KES 10,000</span><span className="bg-green-600 px-2 rounded text-sm">Success</span></div>
          </div>
          <a href="https://wa.me/254793921100" className="block text-center mt-4 text-yellow-400">View All in WhatsApp →</a>
        </div>
      </div>

      {/* Game Management */}
      <div className="bg-[#151a2d] p-6 rounded-xl border border-yellow-500/30">
        <div className="flex justify-between mb-4">
          <h3 className="text-xl font-bold text-yellow-400">⚽ Game Management (55 Games)</h3>
          <button className="bg-yellow-500 text-black px-4 py-2 rounded font-bold">+ Add Game</button>
        </div>
        <p className="text-gray-400">Go to your main App.jsx games array to edit 55 games. This admin shows stats only.</p>
        <div className="mt-4 grid grid-cols-3 gap-4 text-center">
          <div className="bg-black p-4 rounded"><p>Live</p><p className="text-2xl font-bold text-green-400">12</p></div>
          <div className="bg-black p-4 rounded"><p>Upcoming</p><p className="text-2xl font-bold text-blue-400">28</p></div>
          <div className="bg-black p-4 rounded"><p>Finished</p><p className="text-2xl font-bold">15</p></div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
