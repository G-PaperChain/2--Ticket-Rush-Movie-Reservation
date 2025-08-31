import React, { useEffect, useRef, useState } from 'react'
import { IoTriangle } from "react-icons/io5";

const AuthDropdown = ({ open, onClose }) => {
    const dropdownRef = useRef(null)
    const [currentDropdown, setCurrentDropdown] = useState('false')


    const createAccount = () => {

    }


    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                onClose();
            }
        };

        const handleEscapeKey = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (open) {
            // Small delay to prevent immediate closing when dropdown opens
            const timer = setTimeout(() => {
                document.addEventListener('mousedown', handleClickOutside);
                document.addEventListener('keydown', handleEscapeKey);
                setCurrentDropdown('true')
            }, 100);

            return () => {
                clearTimeout(timer);
                document.removeEventListener('mousedown', handleClickOutside);
                document.removeEventListener('keydown', handleEscapeKey);
            };
        }
    }, [open, onClose]);

    // Don't render anything if not open
    if (!open) return null;

    return (
        <div
            ref={dropdownRef}
            className={`flex flex-col justify-center px-6 py-6 fixed bg-custom-black rounded-3xl right-16 top-16 z-50
            shadow-2xl border border-gray-800 w-80
            transition-all duration-300 ease-out origin-top-right
            ${open ?
                    'opacity-100 scale-100 translate-y-0' :
                    'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                }`}
            style={{
                animation: open ? 'dropdownIn 0.3s ease-out forwards' : 'dropdownOut 0.2s ease-in forwards'
            }}
        >

            <h2 className="mt-2 text-center text-xl font-bold tracking-tight text-white">
                Sign in to your account
            </h2>

            <div className="mt-6 w-full">
                <form action="#" method="POST" className="space-y-5">

                    {/* <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                            Username
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="off"
                            className="block w-full rounded-lg bg-custom-black border border-gray-600 px-3 py-2.5 text-white 
                                     placeholder:text-gray-400 focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-400/20 focus:bg-custom-black
                                     transition-all duration-200 hover:border-gray-500"
                            placeholder="Enter your username"
                        />
                    </div> */}

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                            Email address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="off"
                            className="block w-full rounded-lg bg-custom-black border border-gray-600 px-3 py-2.5 text-white 
                                     placeholder:text-gray-400 focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-400/20 focus:bg-custom-black
                                     transition-all duration-200 hover:border-gray-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-200">
                                Password
                            </label>
                            <a href="#" className="text-xs font-semibold text-red-400 hover:text-red-300 transition-colors duration-200">
                                Forgot password?
                            </a>
                        </div>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            autoComplete="current-password"
                            className="block w-full rounded-lg bg-custom-black border border-gray-600 px-3 py-2.5 text-white 
                                     placeholder:text-gray-400 focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-400/20
                                     transition-all duration-200 hover:border-gray-500"
                            placeholder="Enter your password"
                        />
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-lg bg-red-600 px-3 py-2.5 text-sm font-semibold text-white 
                                     hover:bg-red-700 focus:outline-none 
                                     transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]
                                     cursor-pointer"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-5 text-center text-sm text-gray-400">
                    Not a member?{' '}
                    <a href="#" className="font-semibold text-red-400 hover:text-red-300 transition-colors duration-200 hover:underline" onClick={() => createAccount()}>
                        Create an Account
                    </a>
                </p>
            </div>

            <style jsx>{`
                @keyframes dropdownIn {
                    0% {
                        opacity: 0;
                        transform: scale(1) translateY(-10px);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1) translateY(0px);
                    }
                }
                    
                @keyframes dropdownOut {
                    0% {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                    100% {
                        opacity: 0;
                        transform: scale(1) translateY(-10px);
                    }
                }
            `}</style>
        </div>
    )
}

export default AuthDropdown