import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'


const Header = () => {

    const darkTheme = () => {
        let html = document.querySelector("html");
        html.classList.toggle("dark")
    }

    const cartItemLength = useSelector((state) => state.cartItems.length)
    

  return (
    <>
        <nav className='flex justify-between items-center px-6 py-2 bg-zinc-100 border-b-2 border-zinc-300 dark:border-gray-700 sticky top-0 z-10 dark:bg-zinc-900'>
            <div className="logo">
                <NavLink to="/" className='text-2xl font-semibold text-red-600 cursor-pointer '>StyleSquare</NavLink>
            </div>

            <div className="nav-links">
                <ul className='flex items-center gap-2'>
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

            <div className='flex items-center gap-6 nav-actions dark:invert dark:opacity-80 ' id='nav-action'>
                <img src="https://img.icons8.com/?size=50&id=7820&format=png" alt="" />
                <Link to='cart/:id' className='flex relative'>
                    <img src="https://img.icons8.com/?size=50&id=3686&format=png" alt="" className='' />
                    <span className='absolute top-2 left-1/3 text-sm font-bold'>{cartItemLength}</span>
                </Link>

                <img src="https://img.icons8.com/?size=50&id=104618&format=png" onClick={darkTheme} alt="" />
            </div>
        </nav>
    </>
  )
}

export default Header