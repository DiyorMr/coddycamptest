import React from 'react'

const Form = () => {
  return (
    <div>

      <div class="bg-[#121122] border border-purple-500/20 rounded-2xl shadow-xl p-8 max-w-lg w-full">

        <label class="text-gray-400 text-sm">TOLIQ ISM</label>
        <input type="text" placeholder="Abdullayev Jasur"
          class="w-full mt-2 mb-5 px-4 py-3 rounded-xl bg-[#1a1a2e] border border-transparent focus:border-purple-500 outline-none" />

        <div class="flex gap-4 mb-5">
          <div class="w-1/2">
            <label class="text-gray-400 text-sm">USERNAME</label>
            <input type="text" placeholder="jasur_dev"
              class="w-full mt-2 px-4 py-3 rounded-xl bg-[#1a1a2e] border border-transparent focus:border-purple-500 outline-none" />
          </div>

          <div class="w-1/2">
            <label class="text-gray-400 text-sm">ROL</label>
            <select
              class="w-full mt-2 px-4 py-3 rounded-xl bg-[#1a1a2e] border border-transparent focus:border-purple-500 outline-none text-gray-400">
              <option>Tanlang...</option>
              <option>Admin</option>
              <option>User</option>
            </select>
          </div>
        </div>

        <label class="text-gray-400 text-sm">EMAIL</label>
        <input type="email" placeholder="jasur@example.com"
          class="w-full mt-2 mb-5 px-4 py-3 rounded-xl bg-[#1a1a2e] border border-transparent focus:border-purple-500 outline-none" />

        <label class="text-gray-400 text-sm">PAROL</label>
        <input type="password" placeholder="********"
          class="w-full mt-2 mb-5 px-4 py-3 rounded-xl bg-[#1a1a2e] border border-transparent focus:border-purple-500 outline-none" />

        <button class="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-500 hover:opacity-90 transition">
          Royxatdan Otish →
        </button>

      </div>
    </div>

  )
}

export default Form