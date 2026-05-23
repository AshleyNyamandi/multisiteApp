import React, { useState, useEffect, useRef } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Link, NavLink } from 'react-router'

library.add(fas, far, fab)


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef(null)
    const buttonRef = useRef(null)

    const toggleMenu = () => {
        setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    // Handle click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                isMenuOpen && 
                menuRef.current && 
                !menuRef.current.contains(event.target) &&
                buttonRef.current && 
                !buttonRef.current.contains(event.target)
            ) {
                closeMenu()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isMenuOpen])


    return (
        <nav className='relative w-full bg-slate-950'>
            <div className='w-full max-w-2xl mx-auto flex text-cyan-50 justify-between items-center px-3 h-10 gap-40'>
                <p>Nymd</p>

                <div 
                    ref={menuRef}
                    className={`absolute top-10 bg-slate-950 right-0 w-full ${isMenuOpen ? "not-sm:max-h-96" : "not-sm:max-h-0"} overflow-hidden transition-[max-height] duration-500 ease-in-out sm:relative sm:bg-transparent sm:top-auto sm:right-auto`}
                >
                    <ul className='sm:flex justify-between'>
                        <li 
                            className='hover:bg-slate-800 px-3 py-1 transition-colors duration-300 ease-linear sm:rounded-sm flex-1 text-center'
                            onClick={closeMenu}
                        >
                            <NavLink 
                                to="/"
                                className={( { isActive} ) => 
                                    isActive ? "active" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li 
                            className='hover:bg-slate-800 px-3 py-1 transition-colors duration-300 ease-linear sm:rounded-sm flex-1 text-center'
                            onClick={closeMenu}
                        >
                            <NavLink to="/company">
                                Company
                            </NavLink>
                        </li>
                        <li 
                            className='hover:bg-slate-800 px-3 py-1 transition-colors duration-300 ease-linear sm:rounded-sm flex-1 text-center'
                            onClick={closeMenu}
                        >
                            <NavLink to="/analytics">
                                Analytics
                            </NavLink>
                        </li>
                        <li 
                            className='hover:bg-slate-800 px-3 py-1 transition-colors duration-300 ease-linear sm:rounded-sm flex-1 text-center'
                            onClick={closeMenu}
                        >
                            <NavLink to="/users">
                                Users
                            </NavLink>
                        </li>                                                            
                        <li 
                            className='hover:bg-slate-800 px-3 py-1 transition-colors duration-300 ease-linear sm:rounded-sm flex-1 text-center'
                            onClick={closeMenu}
                        >
                            <NavLink to="/contact">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <button
                    ref={buttonRef}
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