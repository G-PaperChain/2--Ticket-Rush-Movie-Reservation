'use client'
import { useState } from 'react'

export default function Dropdown() {
    const [open, setOpen] = useState(false)

    return (
        <div className="relative inline-block text-left">
            {/* Trigger */}
            <button
                onClick={() => setOpen(!open)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
                Menu
            </button>

            {/* Dropdown Panel */}
            <div
                className={`
          absolute mt-2 w-48 rounded-xl bg-white shadow-lg
          transition-all duration-300 ease-in-out origin-top
          ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
        `}
            >
                <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
                </ul>
            </div>
        </div>
    )
}
