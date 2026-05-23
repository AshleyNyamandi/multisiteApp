import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
        <Navbar />
        <div
            className=''
        >
            <div
                className='container mx-auto min-h-screen'
            >
                <Outlet />
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Layout