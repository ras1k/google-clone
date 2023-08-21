import '../App.css'
import { useState } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Main() {
    const [darkTheme, setDarkTheme] = useState(false)

    return (
        <div className={darkTheme ? 'dark' : ''}>
            <div className=" bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
                <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
                <Outlet />
                <Footer />
            </div>
        </div>
    )
}

export default Main;
