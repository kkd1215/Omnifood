import React from 'react'

function Pricing() {
    return (
        <section className='my-24'>
            <div className='containers'>
                <p className='text-orange-dark mb-4 uppercase font-medium tracking-wide'>Pricing</p>
                <h2 className='text-5xl lg:text-4xl leading-tight text-grayC-dark mb-24 sm:mb-12'>Eating well without breaking the bank</h2>
            </div>
            <div className='containers grid grid-cols-2 xs:grid-cols-1 gap-16 lg:gap-11'>
                <div className='p-12 rounded-xl w-[75%] sm:w-full xs:w-[75%] border-2 border-orange-light justify-self-end xs:mx-auto'>
                    <header className='text-center mb-12'>
                        <p className='text-orange-dark font-semibold text-xl tracking-widest mb-8 uppercase'>Starter</p>
                        <p className='text-grayC-dark text-6xl font-semibold mb-4'><span className='text-3xl font-medium mr-2'>$</span>399</p>
                        <p className='text-base lg:text-sm text-[#6f6f6f]'>per month.That's just $13 per meal! </p>
                    </header>
                    <ul className='flex flex-col gap-4'>
                        <li className='flex items-center text-xl lg:text-lg gap-4 leading-5'><ion-icon name="checkmark-outline" style={{ color: "#e67e22", height: "1.5rem", width: "1.5rem" }}></ion-icon><span> 1 meal per day </span></li>
                        <li className='flex items-center text-xl lg:text-lg gap-4 leading-5'><ion-icon name="checkmark-outline" style={{ color: "#e67e22", height: "1.5rem", width: "1.5rem" }}></ion-icon><span> Delivery is free </span></li>
                        <li className='flex items-center text-xl lg:text-lg gap-4 leading-5'><ion-icon name="checkmark-outline" style={{ color: "#e67e22", height: "1.5rem", width: "1.5rem" }}></ion-icon><span> Order from 11am to 9pm </span></li>
                        <li className='flex items-center text-xl lg:text-lg gap-4 leading-5'><ion-icon name="close" style={{ color: "#e67e22", height: "1.5rem", width: "1.5rem" }}></ion-icon><span> </span></li>
                    </ul>
                    <div className='text-center mt-12'>
                        <button className="inline-flex text-white bg-orange-main border-0 py-2 px-6 focus:outline-none hover:bg-orange-dark rounded-lg text-xl font-semibold transform transition duration-150">Start eating well</button>
                    </div>
                </div>
                <div className='p-12 rounded-xl w-[75%] sm:w-full xs:w-[75%] bg-orange-light relative overflow-hidden bestvalue xs:mx-auto'>
                    <header className='text-center mb-12'>
                        <p className='text-orange-dark font-semibold text-xl tracking-widest mb-8 uppercase'>Complete</p>
                        <p className='text-grayC-dark text-6xl font-semibold mb-4'><span className='text-3xl font-medium mr-2'>$</span>649</p>
                        <p className='text-base lg:text-sm text-[#6f6f6f]'>per month.That's just $11 per meal! </p>
                    </header>
                    <ul className='flex flex-col gap-4'>
                        <li className='flex items-center text-xl lg:text-lg gap-4 leading-5'><ion-icon name="checkmark-outline" style={{ color: "#e67e22", height: "1.5rem", width: "1.5rem" }}></ion-icon><span> <strong>2 meals</strong> per day </span></li>
                        <li className='flex items-center text-xl lg:text-lg gap-4 leading-5'><ion-icon name="checkmark-outline" style={{ color: "#e67e22", height: "1.5rem", width: "1.5rem" }}></ion-icon><span> Order <strong> 24 / 7 </strong></span></li>
                        <li className='flex items-center text-xl lg:text-lg gap-4 leading-5'><ion-icon name="checkmark-outline" style={{ color: "#e67e22", height: "1.5rem", width: "1.5rem" }}></ion-icon><span> Delivery is free </span></li>
                        <li className='flex items-center text-xl lg:text-lg gap-4 leading-5'><ion-icon name="checkmark-outline" style={{ color: "#e67e22", height: "1.5rem", width: "1.5rem" }}></ion-icon><span> Get access to latest recipes </span></li>
                    </ul>
                    <div className='text-center mt-12'>
                        <button className="inline-flex text-white bg-orange-main border-0 py-2 px-6 focus:outline-none hover:bg-orange-dark rounded-lg text-xl font-semibold transform transition duration-150">Start eating well</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing
