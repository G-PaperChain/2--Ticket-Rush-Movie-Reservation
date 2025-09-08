import React, { useEffect, useState } from 'react'
import { VscAccount } from "react-icons/vsc";
import LoginDropdown from './LoginDropdown';
import SignupDropdown from './SignupDropdown'

const Navbar = () => {
    const [username, setUsername] = useState()
    const [showLoginDropdown, setShowLoginDropdown] = useState(false)
    const [showSignupDropdown, setShowSignupDropdown] = useState(false)

    const inverseDropdownshow = () => {
        setShowLoginDropdown(!showLoginDropdown)
        setShowSignupDropdown(!showSignupDropdown)
    }

    const usernames = ['Basim', 'Zaaym', 'Atif', 'Abdullah', 'Ali'] 
    useEffect(() => {
        const username = usernames[Math.floor(Math.random() * usernames.length)];
        setUsername(username)
    });

    return (
        <>
            <div className='grid grid-cols-3 py-3 items-center'>
       
                <h1 className='text-red-500 text-3xl font-bold col-start-2 flex justify-center select-none'><a href="/">TicketRush</a></h1>

                {/* ACCOUNT  */}
                <div className='col-start-3 flex justify-center'>
                    <div className='select-none cursor-pointer col-start-3 justify-center flex items-center gap-1.5 w-max px-3 py-2 hover:bg-gray-800 hover:rounded-xl'
                        onClick={() => {
                            if (showLoginDropdown || showSignupDropdown) {
                                setShowLoginDropdown(false)
                                setShowSignupDropdown(false)
                            }
                            !showSignupDropdown ? setShowLoginDropdown(!showLoginDropdown) :  setShowSignupDropdown(!showSignupDropdown)
                        }}
                    >
                        <VscAccount
                            className='text-white text-2xl hovers:opacity-90 hovers:bg-gray-700 rounded-3xl'
                        />
                        <div className='text-white '>{username}</div>
                    </div>
                </div>

                {/* {showLoginDropdown ? <LoginDropdown showSignupDropdown={showSignupDropdown} setShowSignupDropdown={setShowSignupDropdown} /> : null}
                {showSignupDropdown ? <SignupDropdown showLoginDropdown={showLoginDropdown} setShowLoginDropdown={setShowLoginDropdown} /> : null} */}

                {showLoginDropdown ? <LoginDropdown inverseDropdownshow={inverseDropdownshow} /> : null}
                {showSignupDropdown ? <SignupDropdown inverseDropdownshow={inverseDropdownshow} /> : null}
            </div>
        </>
    )
}

export default Navbar