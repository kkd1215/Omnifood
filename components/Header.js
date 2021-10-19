import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="bg-orange-light h-24 py-0 px-12">
            <div className="container mx-auto flex justify-between p-5 items-center">
                <a href='#' className="flex flex-grow title-font font-medium items-center text-grayC-900">
                    <img className='h-6' src="/content/img/omnifood-logo.png" alt="Omnifood logo" />
                </a>
                <nav >
                    <div className="mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <div className="md:hidden block">
                                    <div className="flex items-baseline space-x-2 lg:space-x-4">
                                        <a
                                            href="#"
                                            className=" hover:text-orange-dark text-grayC-dark px-3 py-2 rounded-md text-base font-medium transform transition duration-150 "
                                        >
                                            How it works
                                        </a>

                                        <a
                                            href="#"
                                            className="text-grayC-dark hover:text-orange-dark px-3 py-2 rounded-md text-base font-medium transform transition duration-150"
                                        >
                                            Meals
                                        </a>

                                        <a
                                            href="#"
                                            className="text-grayC-dark hover:text-orange-dark px-3 py-2 rounded-md text-base font-medium transform transition duration-150"
                                        >
                                            Testimonials
                                        </a>

                                        <a
                                            href="#"
                                            className="text-grayC-dark hover:text-orange-dark px-3 py-2 rounded-md text-base font-medium transform transition duration-150"
                                        >
                                            Pricing
                                        </a>

                                        <a
                                            href="#"
                                            className="text-white bg-orange-main hover:bg-orange-dark px-3 py-2 rounded-md text-base font-medium transform transition duration-150"
                                        >
                                            Try for free
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="-mr-2 flex hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    type="button"
                                    className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-grayC-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    aria-controls="mobile-menu"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {!isOpen ? (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    <Transition
                        show={isOpen}
                        enter="transition ease-out duration-100 transform"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-75 transform"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        {(ref) => (
                            <div className="md:hidden z-10 bg-black" id="mobile-menu">
                                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
                                    <a
                                        href="#"
                                        className="hover:bg-orange-dark text-grayC-dark block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        How it works
                                    </a>

                                    <a
                                        href="#"
                                        className="text-grayC-dark hover:bg-orange-dark block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Meals
                                    </a>

                                    <a
                                        href="#"
                                        className="text-grayC-dark hover:bg-orange-dark block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Testimonials
                                    </a>

                                    <a
                                        href="#"
                                        className="text-grayC-dark hover:bg-orange-dark block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Pricing
                                    </a>

                                    <a
                                        href="#"
                                        className="text-grayC-dark hover:bg-orange-dark block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Try for free
                                    </a>
                                </div>
                            </div>
                        )}
                    </Transition>
                </nav>
            </div>
        </header>
    )
}

export default Header
