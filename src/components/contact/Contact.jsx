import React, { useEffect } from 'react'

const Contact = () => {

    useEffect(()=>{
        window.scroll(9,0);
    },[])
    return (
        <>
            <>
                <section className="text-gray-400 body-font relative dark:bg-gray-800">
                    <div className="container px-5 py-16 mx-auto flex sm:flex-nowrap flex-wrap">
                        <div className="lg:w-2/3 md:w-1/2  rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                            <iframe
                                width="100%"
                                height="100%"
                                title="map"
                                className="absolute inset-0"
                                frameBorder={0}
                                marginHeight={0}
                                marginWidth={0}
                                scrolling="no"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55972.66616697161!2d77.05156307860767!3d28.740708463691533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d013a47a1803d%3A0xedfb8cc477815e2f!2sRohini%2C%20Delhi!5e0!3m2!1sen!2sin!4v1717864823673!5m2!1sen!2sin"
                                style={{ filter: "grayscale(0) contrast(1.2) opacity(0.65)" }}
                            />
                            
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0 flex-1">
                            <h2 className="text-zinc-700 text-lg mb-1 font-medium title-font dark:text-white">
                                Get in touch
                            </h2>
                            
                            <div className="relative mb-4">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-gray-800"
                                    
                                />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-gray-800"
                                    
                                />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-400">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full rounded border   focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out dark:bg-gray-800"
                                    defaultValue={""}
                                />
                            </div>
                            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Button
                            </button>
                            
                        </div>
                    </div>
                </section>
            </>

        </>
    )
}

export default Contact