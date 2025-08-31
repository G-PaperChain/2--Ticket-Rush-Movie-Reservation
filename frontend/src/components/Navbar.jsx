import React, { useState } from 'react'
import { VscAccount } from "react-icons/vsc";
import Authmodal from './AuthDropdown';

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [open, setOpen] = useState(false)


    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <div className='grid grid-cols-3 p-4 items-center'>
                <h1 className='text-red-600 text-3xl font-bold col-start-2 flex justify-center'>TicketRush</h1>
                <div className='col-start-3 justify-center flex items-center gap-2'>
                    <VscAccount className='text-white text-2xl hover:text-white cursor-pointer hover:opacity-90 hover:bg-gray-700 rounded-3xl' onClick={() => setOpen(!open)} />
                    <div className='text-white cursor-pointer select-none' onClick={() => setOpen(!open)}>PaperChain</div>
                </div>

            </div>
            {isModalOpen && <Authmodal setOpen={setOpen} open={open} />}

        </>
    )
}

export default Navbar