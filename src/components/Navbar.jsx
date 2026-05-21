import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router'

library.add(fas, far, fab)


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen)
    }
  return (
    <nav className='relative w-full bg-slate-950'>
        <div className='w-full max-w-2xl mx-auto flex text-cyan-50 justify-between items-center px-3 h-10 gap-40'>
            <p>Nymd</p>

            <div className={`absolute top-10 bg-slate-950 right-0 w-full ${isMenuOpen ? "max-h-96" : "max-h-0"} overflow-hidden transition-[max-height] duration-500 ease-out sm:relative sm:bg-transparent sm:top-auto sm:right-auto`}>
                <ul className='sm:flex justify-between'>
                    <li 
                        className='hover:bg-slate-800 px-3 py-1 transition-colors duration-300 ease-linear sm:rounded-sm flex-1 text-center'
                    >
                        <Link to="/home">
                            Home
                        </Link>
                    </li>
                    <li 
                        className='hover:bg-slate-800 px-3 py-1 transition-colors duration-300 ease-linear sm:rounded-sm flex-1 text-center'
                    >
                        <Link to="/company">
                            Company
                        </Link>
                    </li>
                    <li 
                        className='hover:bg-slate-800 px-3 py-1 transition-colors duration-300 ease-linear sm:rounded-sm flex-1 text-center'
                    >
                        <Link to="/analytics">
                            Analytics
                        </Link>
                    </li>
                    <li 
                        className='hover:bg-slate-800 px-3 py-1 transition-colors duration-300 ease-linear sm:rounded-sm flex-1 text-center'
                    >
                        <Link to="/users">
                            Users
                        </Link>
                    </li>                                                            
                    <li 
                        className='hover:bg-slate-800 px-3 py-1 transition-colors duration-300 ease-linear sm:rounded-sm flex-1 text-center'
                    >
                        <Link to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>

            </div>
            <button
                className='sm:hidden'
                onClick={toggleMenu}
            >
                {
                    isMenuOpen ?  <FontAwesomeIcon icon="fa-solid fa-x" /> : <FontAwesomeIcon icon="fa-solid fa-bars" /> 
                }
            </button>            
        </div>
    </nav>
  )
}

export default Navbar