import React, { useState } from 'react'
import { VscAccount } from "react-icons/vsc";
import AuthDropdown from './AuthDropdown'; // Fixed import name

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <div className='grid grid-cols-3 p-4 items-center'>
                <h1 className='text-red-600 text-3xl font-bold col-start-2 flex justify-center'>TicketRush</h1>
                <div className='col-start-3 justify-center flex items-center gap-2'>
                    <VscAccount 
                        className='text-white text-2xl hover:text-white cursor-pointer hover:opacity-90 hover:bg-gray-700 rounded-3xl' 
                        onClick={toggleDropdown} 
                    />
                    <div 
                        className='text-white cursor-pointer select-none' 
                        onClick={toggleDropdown}
                    >
                        PaperChain
                    </div>
                </div>
            </div>
            
            {/* Only render dropdown when open */}
            {isDropdownOpen && <AuthDropdown open={isDropdownOpen} />}
        </>
    )
}

export default Navbar