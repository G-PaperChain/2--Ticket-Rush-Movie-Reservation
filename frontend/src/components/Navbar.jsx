import React, { useState } from 'react'
import { VscAccount } from "react-icons/vsc";
import Authmodal from './authmodal';

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <div className='grid grid-cols-3 p-4 items-center'>
                <h1 className='text-red-600 text-3xl font-bold col-start-2 flex justify-center'>TicketRush</h1>
                <div className='col-start-3 justify-center flex items-center gap-2'>
                    <VscAccount className='text-white text-2xl hover:text-white cursor-pointer hover:opacity-90 hover:bg-gray-700 rounded-3xl' onClick={toggleModal} />
                    <div className='text-white cursor-pointer select-none' onClick={toggleModal}>PaperChain</div>
                </div>

            </div>
            { isModalOpen && <Authmodal /> }
            
        </>
    )
}

export default Navbar