import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'


const Header = () => {

    const darkTheme = () => {
        let html = document.querySelector("html");
        html.classList.toggle("dark")
    }

    const cartItemLength = useSelector((state) => state.cartItems.length)
    
    const toggleNav = () => {
        const navActions = document.querySelector(".nav-actions");
        const navLinks = document.querySelector(".nav-linkss");

        navActions.classList.toggle("hidden")
        navActions.classList.toggle("absolute");
        navActions.classList.toggle("flex");
        navActions.classList.toggle("right-0");
        navActions.classList.toggle("z-50");
        navActions.classList.toggle("top-12");
        navActions.classList.toggle("w-screen");
        navActions.classList.toggle("justify-center");
        navActions.classList.toggle("items-center");
        navActions.classList.toggle("h-28");
        navActions.classList.toggle("bg-zinc-300");

        navLinks.classList.toggle("hidden")
        navLinks.classList.toggle("absolute");
        navLinks.classList.toggle("flex-col");
        navLinks.classList.toggle("right-0");
        navLinks.classList.toggle("w-screen");
        // navLinks.classList.toggle("h-3/6");
        navLinks.classList.toggle("font-lg");
        navLinks.classList.toggle("top-40");
        navLinks.classList.toggle("text-lg");
        navLinks.classList.toggle("pb-12");
        navLinks.classList.toggle("bg-zinc-300");
    }
  return (
    <>
        <nav className='flex justify-between items-center px-6 py-2  bg-zinc-100 h border-b-2 border-zinc-300 dark:border-gray-700 sticky top-0 z-10 dark:bg-zinc-900'>
            <div className="logo">
                <NavLink to="/" className='text-2xl font-semibold  text-red-600 cursor-pointer top-'>StyleSquare</NavLink>
            </div>

        
            <div className="nav-linkss md:block hidden dark:bg-zinc-900">
                <ul className='flex md:flex-row flex-col  items-center gap-2'>
                    <li>
                    <NavLink to="/"
                        className={({isActive})=>`${isActive? "text-reddish dark:text-red-500" : "text-zinc-600 dark:text-zinc-400"} p-1.5`}
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="about"
                        className={({isActive})=>`${isActive? "text-reddish dark:text-red-500" : "text-zinc-600 dark:text-zinc-400"} p-1.5`}
                        >
                            About
                        </NavLink>
                    </li>

                    {/* <li>
                        <NavLink to="orders"
                        className={({isActive})=>`${isActive? "text-reddish dark:text-red-500" : "text-zinc-600 dark:text-zinc-400"} p-1.5`}
                        >
                            Track Order
                        </NavLink>
                    </li> */}

                    <li>
                        <NavLink to="contact"
                        className={({isActive})=>`${isActive? "text-reddish dark:text-red-500" : "text-zinc-600 dark:text-zinc-400"} p-1.5`}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className='md:flex hidden  gap-6 nav-actions dark:bg-zinc-900 nav-links' id='nav-action'>
                <img src="https://img.icons8.com/?size=50&id=7820&format=png" alt="" className='dark:invert dark:opacity-80'/>
                <Link to='cart/:id' className='flex relative dark:invert dark:opacity-80'>
                    <img src="https://img.icons8.com/?size=50&id=3686&format=png" alt="" className='' />
                    <span className='absolute top-2 left-1/3 text-sm font-bold'>{cartItemLength}</span>
                </Link>

                <img src="https://img.icons8.com/?size=50&id=104618&format=png" onClick={darkTheme} alt="" className='dark:invert dark:opacity-80'/>
            </div>

            <div className="collapse-navbar block md:hidden dark:invert" onClick={toggleNav}>
                <img src="https://img.icons8.com/?size=50&id=8113&format=png" alt="" className='h-8 '/>
            </div>
            
        </nav>
    </>
  )
}

export default Header