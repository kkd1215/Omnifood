import React from 'react'

function HeroSection() {
    return (
        <section className=" bg-orange-light">
            <div className="containers xl:max-w-7xl max-w-[1300px] mx-auto flex pt-12 pb-24 xs:pt-6 xs:pb-16 flex-row md:flex-col items-center xs:px-1">
                <div className="flex-grow flex flex-col w-1/2 md:w-5/6 items-start text-left md:mb-16 mb-0 md:items-center md:text-center">
                    <h1 className="text-grayC-dark mb-10 xl:text-[2.75rem]">A healthy meal delivered to your door, every single day
                    </h1>
                    <p className="mb-10 leading-relaxed text-xl font-normal">The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.</p>
                    <div className="flex justify-center">
                        <a href='#cta' className="inline-flex text-white bg-orange-main border-0 py-2 px-6 focus:outline-none hover:bg-orange-dark rounded-lg text-xl font-semibold transform transition duration-150">Start eating well</a>
                        <a href='#how' className="ml-4 inline-flex bg-white border-2 border-white py-2 px-6 focus:outline-none hover:bg-orange-light rounded-lg text-xl font-semibold transform transition duration-150">Learn more &darr;</a>
                    </div>

                    <div className='flex mt-10 items-center gap-4'>
                        <div className='flex'>
                            <img className='rounded-full w-12 h-12 border-4 border-orange-light -mr-4' src="/content/img/customers/customer-1.jpg" alt="Customer photo" />
                            <img className='rounded-full w-12 h-12 border-4 border-orange-light -mr-4' src="/content/img/customers/customer-2.jpg" alt="Customer photo" />
                            <img className='rounded-full w-12 h-12 border-4 border-orange-light -mr-4' src="/content/img/customers/customer-3.jpg" alt="Customer photo" />
                            <img className='rounded-full w-12 h-12 border-4 border-orange-light -mr-4' src="/content/img/customers/customer-4.jpg" alt="Customer photo" />
                            <img className='rounded-full w-12 h-12 border-4 border-orange-light -mr-4' src="/content/img/customers/customer-5.jpg" alt="Customer photo" />
                            <img className='rounded-full w-12 h-12 border-4 border-orange-light m-0' src="/content/img/customers/customer-6.jpg" alt="Customer photo" />
                        </div>
                        <p className='lg:ml-10 md:ml-0 md:text-base xs:text-sm font-semibold'><span className='text-orange-dark'>250,000+</span> delivered meals last year!</p>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full w-1/2 md:w-5/6 pl-8 lg:pl-6 md:pl-4">
                    <img className="object-cover object-center rounded" alt="woman enjoying food, meals in a storage container, and food bowls on a table" src="/content/img/hero.png" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection
