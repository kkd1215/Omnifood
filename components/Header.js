import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header class="bg-custom-orange-light h-24 py-0 px-12">
            <div class="container mx-auto flex justify-between p-5 items-center">
                <a class="flex flex-grow title-font font-medium items-center text-gray-900 ">
                    <img className='h-6' src="/content/img/omnifood-logo.png" alt="Omnifood logo" />
                </a>
                <nav >
                    <div className="mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <div className="hidden md:block">
                                    <div className="flex items-baseline space-x-2 lg:space-x-4">
                                        <a
                                            href="#"
                                            className=" hover:text-custom-orange-dark text-[#333] px-3 py-2 rounded-md text-base font-medium transform transition duration-150 "
                                        >
                                            Dashboard
                                        </a>

                                        <a
                                            href="#"
                                            className="text-[#333] hover:text-custom-orange-dark px-3 py-2 rounded-md text-base font-medium transform transition duration-150"
                                        >
                                            Team
                                        </a>

                                        <a
                                            href="#"
                                            className="text-[#333] hover:text-custom-orange-dark px-3 py-2 rounded-md text-base font-medium transform transition duration-150"
                                        >
                                            Projects
                                        </a>

                                        <a
                                            href="#"
                                            className="text-[#333] hover:text-custom-orange-dark px-3 py-2 rounded-md text-base font-medium transform transition duration-150"
                                        >
                                            Calendar
                                        </a>

                                        <a
                                            href="#"
                                            className="text-white bg-custom-orange-main hover:bg-custom-orange-dark px-3 py-2 rounded-md text-base font-medium transform transition duration-150"
                                        >
                                            Reports
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    type="button"
                                    className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
                            <div className="md:hidden" id="mobile-menu">
                                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                    <a
                                        href="#"
                                        className="hover:bg-custom-orange-dark text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Dashboard
                                    </a>

                                    <a
                                        href="#"
                                        className="text-[#333] hover:bg-custom-orange-dark hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Team
                                    </a>

                                    <a
                                        href="#"
                                        className="text-[#333] hover:bg-custom-orange-dark hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Projects
                                    </a>

                                    <a
                                        href="#"
                                        className="text-[#333] hover:bg-custom-orange-dark hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Calendar
                                    </a>

                                    <a
                                        href="#"
                                        className="text-[#333] hover:bg-custom-orange-dark hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Reports
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