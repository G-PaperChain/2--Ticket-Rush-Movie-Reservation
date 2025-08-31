import React, { useState, useEffect, useRef } from 'react'
import { IoTriangle } from "react-icons/io5";

const AuthDropdown = ({ open }) => {
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                // You might want to pass a close function from parent instead
                // closeDropdown();
            }
        };

        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open]);

    return (
        <div 
            ref={dropdownRef}
            className={`flex flex-col justify-center px-6 py-6 fixed bg-black rounded-3xl right-16 top-16 z-50
            transition-all duration-300 ease-in-out origin-top shadow-2xl border border-gray-800
            ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
        >
            {/* Triangle pointer */}
            <IoTriangle className='absolute -top-2 right-8 text-black rotate-180' />

            <h2 className="mt-4 text-center text-2xl font-bold tracking-tight text-white">
                Sign in to your account
            </h2>

            <div className="mt-8 w-full max-w-sm">
                <form action="#" method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-100">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                className="block w-full rounded-md bg-white/5 px-3 py-2 text-white border border-white/10 
                                         placeholder:text-gray-500 focus:border-red-400 focus:outline-none focus:ring-1 focus:ring-red-400"
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-100">
                                Password
                            </label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-red-400 hover:text-red-300 transition-colors duration-200">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                autoComplete="current-password"
                                className="block w-full rounded-md bg-white/5 px-3 py-2 text-white border border-white/10 
                                         placeholder:text-gray-500 focus:border-red-400 focus:outline-none focus:ring-1 focus:ring-red-400"
                                placeholder="Enter your password"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white 
                                     hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900
                                     transition-colors duration-200"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-6 text-center text-sm text-gray-400">
                    Not a member?{' '}
                    <a href="#" className="font-semibold text-red-400 hover:text-red-300 transition-colors duration-200">
                        Create an Account
                    </a>
                </p>
            </div>
        </div>
    )
}

export default AuthDropdown