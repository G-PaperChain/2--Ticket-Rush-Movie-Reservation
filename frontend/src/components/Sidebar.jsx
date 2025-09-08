import React from 'react'

const Sidebar = () => {
    return (
        <div className='fixed bg-custom-black w-64 h-screen flex border-r-1 border-gray-800 flex-col top-0 z-10 left-0'>

            <form className='w-40 mb-32 mt-32 m-7'>
                <label className="text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="text" id="search" className="block w-full p-1 ps-10 text-sm text-gray-900   rounded-3xl bg-custom-black focus:ring-red-500 focus:border-red-500 dark:bg-custom-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-900 dark:focus:border-red-900 cursor-pointer" placeholder="Search" />
                </div>
            </form>


            <div>
                <ul className='flex flex-col text-white gap-3 justify-center items-center'>
                    <li className='cursor-pointer nav-el flex justify-start p-1 uppercase text-xl hover:bg-red-500 w-full transition duration-200 pl-3'>HOME</li>
                    <li className='cursor-pointer nav-el flex justify-start p-1 uppercase text-xl hover:bg-red-500 w-full transition duration-200 pl-3'>movies</li>
                    <li className='cursor-pointer nav-el flex justify-start p-1 uppercase text-xl hover:bg-red-500 w-full transition duration-200 pl-3'>wishlist</li>
                    <li className='cursor-pointer nav-el flex justify-start p-1 uppercase text-xl hover:bg-red-500 w-full transition duration-200 pl-3'>RESERVATIONS</li>
                </ul>
            </div>
        </div>

    )
}


export default Sidebar
