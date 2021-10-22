import React, { useEffect, useState } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const stickyClass = 'fixed top-0 bottom-0 w-full h-24 bg-orange-light opacity-[98%] z-30 shadow-md transition ease-in-out duration-150'

    useEffect(() => {
        // Sticky navigation

        const sectionHeroEl = document.querySelector(".section-hero");

        const obs = new IntersectionObserver(
            function (entries) {
                const ent = entries[0];

                if (ent.isIntersecting === false) {
                    setIsSticky(true);
                }

                if (ent.isIntersecting === true) {
                    setIsSticky(false);
                }
            },
            {
                // In the viewport
                root: null,
                threshold: 0,
                rootMargin: "-80px",
            }
        );
        obs.observe(sectionHeroEl);
    }, []);

    return (
        <header className='bg-orange-light relative h-24 py-0'>
            <div className={`container mx-auto flex justify-between p-5 px-12 items-center ${isSticky ? stickyClass : ''}`}>
                <a href='#' className="flex  title-font font-medium items-center text-grayC-900">
                    <img className='h-6' src="/content/img/omnifood-logo.png" alt="Omnifood logo" />
                </a>
                <nav >
                    <div className="mx-auto sm:px-2 md:px-4 lg:px-6 px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <div className={`block md:absolute md:top-0 md:left-0 md:bg-orange-light md:w-full md:h-screen md:z-10  md:transition-all md:duration-500 ${isOpen ? 'md:opacity-[98%] md:pointer-events-auto md:visible md:translate-x-0' : 'md:opacity-0 md:pointer-events-none md:invisible md:translate-x-[100%]'}`}>
                                    <div className='flex items-baseline space-x-8 lg:space-x-6 md:space-x-0 md:flex md:flex-col md:items-center md:justify-center md:gap-12 md:mt-[25vh]'>
                                        <a onClick={() => {
                                            setIsOpen(false);
                                        }}
                                            href="#how"
                                            className=" hover:text-orange-dark text-grayC-dark px-3 py-2 rounded-md text-base font-medium md:text-3xl md:font-bold transform transition duration-150 "
                                        >
                                            How it works
                                        </a>

                                        <a onClick={() => {
                                            setIsOpen(false);
                                        }}
                                            href="#meals"
                                            className="text-grayC-dark hover:text-orange-dark px-3 py-2 rounded-md text-base font-medium md:text-3xl md:font-bold transform transition duration-150"
                                        >
                                            Meals
                                        </a>

                                        <a onClick={() => {
                                            setIsOpen(false);
                                        }}
                                            href="#testimonials"
                                            className="text-grayC-dark hover:text-orange-dark px-3 py-2 rounded-md text-base font-medium md:text-3xl md:font-bold transform transition duration-150"
                                        >
                                            Testimonials
                                        </a>

                                        <a onClick={() => {
                                            setIsOpen(false);
                                        }}
                                            href="#pricing"
                                            className="text-grayC-dark hover:text-orange-dark px-3 py-2 rounded-md text-base font-medium md:text-3xl md:font-bold transform transition duration-150"
                                        >
                                            Pricing
                                        </a>

                                        <a onClick={() => {
                                            setIsOpen(false);
                                        }}
                                            href="#cta"
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
