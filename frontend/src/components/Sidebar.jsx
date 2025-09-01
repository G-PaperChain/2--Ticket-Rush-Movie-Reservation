import React from 'react'



const Sidebar = () => {
    return (
        <div className='sidebar bg-custom-black w-50 fixed top-0 h-screen flex justify-center items-center'>
            <form className='fixed top-10 w-35'>
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="text" id="search" className="block w-full p-1 ps-10 text-sm text-gray-900   rounded-3xl bg-custom-black focus:ring-red-500 focus:border-red-500 dark:bg-custom-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-900 dark:focus:border-red-900 cursor-pointer " placeholder="Search" />
                </div>
            </form>
            <div>
                <ul className='flex flex-col text-white gap-3 justify-center items-center'>
                    <li className='cursor-pointer nav-el flex justify-center p-1'>HOME</li>
                    <li className='cursor-pointer nav-el flex justify-center p-1'>TV SHOWS</li>
                    <li className='cursor-pointer nav-el flex justify-center p-1'>MOVIES</li>
                    <li className='cursor-pointer nav-el flex justify-center p-1'>LATEST</li>
                    <li className='cursor-pointer nav-el flex justify-center p-1'>MY LIST</li>
                </ul>
            </div>
        </div>

    )
}

export default Sidebar
