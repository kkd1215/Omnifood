import React from 'react'

function HeroSection() {
    return (
        <section className=" bg-orange-light">
            <div className="max-w-[1300px] mx-auto">
                <div className="container mx-auto flex px-14 pt-12 pb-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font text-grayC-dark mb-10 ">A healthy meal delivered to your door, every single day
                        </h1>
                        <p className="mb-10 leading-relaxed text-xl font-normal">The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-orange-main border-0 py-2 px-6 focus:outline-none hover:bg-orange-dark rounded-lg text-xl font-semibold transform transition duration-150">Start eating well</button>
                            <button className="ml-4 inline-flex bg-white border-2 border-white py-2 px-6 focus:outline-none hover:bg-orange-light rounded-lg text-xl font-semibold transform transition duration-150">Learn more &darr;</button>
                        </div>

                        <div className='flex mt-10 items-center gap-4'>
                            <div className='flex'>
                                <img className='rounded-full w-12 h-12 border-4 border-orange-light -mr-4' src="/content/img/customers/customer-1.jpg" alt="Customer photo" />
                                <img className='rounded-full w-12 h-12 border-4 border-orange-light -mr-4' src="/content/img/customers/customer-2.jpg" alt="Customer photo" />
                                <img className='rounded-full w-12 h-12 border-4 border-orange-light -mr-4' src="/content/img/customers/customer-3.jpg" alt="Customer photo" />
                                <img className='rounded-full w-12 h-12 border-4 border-orange-light -mr-4' src="/content/img/customers/customer-4.jpg" alt="Customer photo" />
                                <img className='rounded-full w-12 h-12 border-4 border-orange-light -mr-4' src="/content/img/customers/customer-5.jpg" alt="Customer photo" />
                                <img className='rounded-full w-12 h-12 border-4 border-orange-light' src="/content/img/customers/customer-6.jpg" alt="Customer photo" />
                            </div>
                            <p className='t'><span className='text-orange-dark'>250,000+</span> delivered meals last year!</p>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="woman enjoying food, meals in a storage container, and food bowls on a table" src="/content/img/hero.png" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
