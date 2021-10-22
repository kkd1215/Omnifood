import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const displays = isOpen ? 'block' : 'none';

    return (
        <header className="bg-orange-light relative h-24 py-0 px-12 md:px-0">
            <div className="container mx-auto flex justify-between p-5 items-center">
                <a href='#' className="flex  title-font font-medium items-center text-grayC-900">
                    <img className='h-6' src="/content/img/omnifood-logo.png" alt="Omnifood logo" />
                </a>
                <nav >
                    <div className="mx-auto sm:px-2 md:px-4 lg:px-6 px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <div className={`block md:absolute md:top-0 md:left-0 md:bg-orange-light md:w-full md:h-screen md:z-10  md:transition-all md:duration-500 ${isOpen ? 'md:opacity-[97%] md:pointer-events-auto md:visible md:translate-x-0' : 'md:opacity-0 md:pointer-events-none md:invisible md:translate-x-[100%]'}`}>
                                    <div className='flex items-baseline space-x-8 lg:space-x-6 md:space-x-0 md:flex md:flex-col md:items-center md:justify-center md:gap-12 md:mt-56'>
                                        <a
                                            href="#"
                                            className=" hover:text-orange-dark text-grayC-dark px-3 py-2 rounded-md text-base font-medium md:text-3xl md:font-bold transform transition duration-150 "
                                        >
                                            How it works
                                        </a>

                                        <a
                                            href="#"
                                            className="text-grayC-dark hover:text-orange-dark px-3 py-2 rounded-md text-base font-medium md:text-3xl md:font-bold transform transition duration-150"
                                        >
                                            Meals
                                        </a>

                                        <a
                                            href="#"
                                            className="text-grayC-dark hover:text-orange-dark px-3 py-2 rounded-md text-base font-medium md:text-3xl md:font-bold transform transition duration-150"
                                        >
                                            Testimonials
                                        </a>

                                        <a
                                            href="#"
                                            className="text-grayC-dark hover:text-orange-dark px-3 py-2 rounded-md text-base font-medium md:text-3xl md:font-bold transform transition duration-150"
                                        >
                                            Pricing
                                        </a>

                                        <a
                                            href="#"
                                            className="text-white bg-orange-main hover:bg-orange-dark px-3 py-2 rounded-md text-base font-medium md:text-3xl md:font-bold transform transition duration-150"
                                        >
                                            Try for free
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className='hidden md:block z-10'>
                    <button className={`${isOpen ? 'md:hidden' : 'md:block'} cursor-pointer`} onClick={() => setIsOpen(!isOpen)}>
                        <ion-icon name="menu" style={{ color: "#333", height: "3rem", width: "3rem" }}></ion-icon>
                    </button>
                    <button className={`${isOpen ? 'md:block' : 'md:hidden'} cursor-pointer`} onClick={() => setIsOpen(!isOpen)}>
                        <ion-icon name="close" style={{ color: "#333", height: "3rem", width: "3rem" }}></ion-icon>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
