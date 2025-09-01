import React, { useState } from 'react'
import { VscAccount } from "react-icons/vsc";
import LoginDropdown from './LoginDropdown';
import SignupDropdown from './SignupDropdown'

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = () => {
        setActiveDropdown(activeDropdown ? null : 'login');
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <>
            <div className='grid grid-cols-3 p-4 items-center'>
                <h1 className='text-red-500 text-3xl font-bold col-start-2 flex justify-center select-none'>TicketRush</h1>
                <div className='col-start-3 justify-center flex items-center gap-2'>
                    <VscAccount
                        className='text-white text-2xl hover:text-white cursor-pointer hover:opacity-90 hover:bg-gray-700 rounded-3xl'
                        onClick={toggleDropdown}
                    />
                    <div
                        className='text-white cursor-default'
                        onClick={toggleDropdown}
                    >
                        Username
                    </div>
                </div>
            </div>

            <LoginDropdown
                open={activeDropdown === 'login'}
                onClose={() => setActiveDropdown(null)}
                onSwitchToSignup={() => setActiveDropdown('signup')}    
            />
            <SignupDropdown
                open={activeDropdown === 'signup'}
                onClose={() => setActiveDropdown(null)}
                onSwitchToLogin={() => setActiveDropdown('login')}
            />
        </>
    )
}

export default Navbar