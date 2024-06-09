import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <> 
                {/* component */}
                <link
                    rel="stylesheet"
                    href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
                />
                <link
                    rel="stylesheet"
                    href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
                />
                <footer className="relative pt-8 pb-6 bg-gray-800 text-zinc-200">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap text-left lg:text-left">
                            <div className="w-full lg:w-6/12 px-4">
                                <h4 className="text-3xl fonat-semibold text-zinc-200">
                                    Let's keep in touch!
                                </h4>
                                <h5 className="text-lg mt-0 mb-2 text-zinc-200">
                                    Find us on any of these platforms, we respond 1-2 business days.
                                </h5>
                                <div className="mt-6 lg:mb-0 mb-6">
                                    <button
                                        className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                        type="button"
                                    >
                                        <i className="fab fa-twitter" />
                                    </button>
                                    <button
                                        className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                        type="button"
                                    >
                                        <i className="fab fa-facebook-square" />
                                    </button>
                                    <button
                                        className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                        type="button"
                                    >
                                        <i className="fab fa-dribbble" />
                                    </button>
                                    <button
                                        className="bg-white text-zinc-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                        type="button"
                                    >
                                        <i className="fab fa-github" />
                                    </button>
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="flex flex-wrap items-top mb-6">
                                    <div className="w-full lg:w-4/12 px-4 ml-auto ">
                                        <span className="block uppercase text-zinc-200 text-sm font-semibold mb-2">
                                            Useful Links
                                        </span>
                                        <ul className="list-unstyled">
                                            <li>
                                                <NavLink
                                                    className="text-zinc-200 hover:text-zinc-400 font-semibold block pb-2 text-sm"
                                                    to='/'
                                                >
                                                    Home
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    className="text-zinc-200 hover:text-zinc-400 font-semibold block pb-2 text-sm"
                                                    to='about'
                                                >
                                                    About Us
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    className="text-zinc-200 hover:text-zinc-400 font-semibold block pb-2 text-sm"
                                                    to='orders'
                                                >
                                                    Orders
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    className="text-zinc-200 hover:text-zinc-400 font-semibold block pb-2 text-sm"
                                                    to='contact'
                                                >
                                                    Contact
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4">
                                        <span className="block uppercase text-sm font-semibold mb-2 text-zinc-200">
                                            Other Resources
                                        </span>
                                        <ul className="list-unstyled">
                                            <li>
                                                <a
                                                    className="text-zinc-200 hover:text-zinc-400 font-semibold block pb-2 text-sm"
                                                    href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                                                >
                                                    MIT License
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="text-zinc-200 hover:text-zinc-400 font-semibold block pb-2 text-sm"
                                                    href="https://creative-tim.com/terms?ref=njs-profile"
                                                >
                                                    Terms &amp; Conditions
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="text-zinc-200 hover:text-zinc-400 font-semibold block pb-2 text-sm"
                                                    href="https://creative-tim.com/privacy?ref=njs-profile"
                                                >
                                                    Privacy Policy
                                                </a>
                                            </li>
                                            <li>
                                                <NavLink
                                                    className="text-zinc-200 hover:text-zinc-400 font-semibold block pb-2 text-sm"
                                                    to='contact'
                                                >
                                                    Contact
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="my-6 border-blueGray-300" />
                        <div className="flex flex-wrap items-center md:justify-between justify-center">
                            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                                <div className="text-sm text-zinc-400 font-semibold py-1">
                                   Copywrite @ 2024 all rights reserver
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>

        </>
    )
}

export default Footer