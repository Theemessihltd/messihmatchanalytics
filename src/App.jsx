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
