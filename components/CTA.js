import React from 'react'
import Form from './Form'

function CTA() {
    return (
        <section className='pt-12 pb-16'>
            <div className='containers '>
                <div className='section-cta md:section-cta-md shadow-2xl rounded-xl bg-gradient-to-br from-[#eb984e] to-orange-main overflow-hidden'>
                    <div className='text-[#45260a] p-12'>
                        <h2 className='text-5xl lg:text-4xl font-extrabold leading-tight mb-6'>Get your first meal for free!</h2>
                        <p className='text-lg mb-12'>Healthy, tasty and hassle-free meals are waiting for you. Start eating well today. You can cancel or pause anytime. And the first meal is on us!</p>
                        <Form />
                    </div>
                    <div className='bg-cta-img bg-cover bg-center' role='img' aria-label='Woman enjoying food'></div>
                </div>
            </div>
        </section>
    )
}

export default CTA
