import React from 'react'
import TestimonialCard from './TestimonialCard'

function Testimonials() {
    return (
        <section className='section-testimonials md:grid-cols-1 gap-y-16 lg:gap-y-11 md:gap-y-0 bg-orange-light'>
            <div className='p-20 lg:py-20 lg:px-8'>
                <p className='text-orange-dark mb-4 uppercase font-medium tracking-wide'>Testimonials</p>
                <h2 className='text-5xl lg:text-4xl leading-tight text-grayC-dark mb-24 sm:mb-12'>Once you try it, you can't go back</h2>
                <div className='grid grid-cols-2 gap-y-12 gap-x-20 lg:gap-x-16 lg:gap-y-9'>
                    <TestimonialCard img='dave' name='Dave Bryson' testimony='Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.' />
                    <TestimonialCard img='ben' name='Ben Hadley' testimony="The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!" />
                    <TestimonialCard img='steve' name='Steve Miller' testimony="Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!" />
                    <TestimonialCard img='hannah' name='Hannah Smith' testimony='I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.' />
                </div>
            </div>
            <div className='grid grid-cols-3 xl:grid-cols-2 md:grid-cols-6 gap-4 sm:gap-2 p-4'>
                <figure className='overflow-hidden'>
                    <img className='w-full hover:scale-110 transition duration-400' src={`/content/img/gallery/gallery-1.jpg`} alt="Photo of beautifully arranged food" />
                </figure>
                <figure className='overflow-hidden'>
                    <img className='w-full hover:scale-110 transition duration-400' src={`/content/img/gallery/gallery-2.jpg`} alt="Photo of beautifully arranged food" />
                </figure>
                <figure className='overflow-hidden'>
                    <img className='w-full hover:scale-110 transition duration-400' src={`/content/img/gallery/gallery-3.jpg`} alt="Photo of beautifully arranged food" />
                </figure>
                <figure className='overflow-hidden'>
                    <img className='w-full hover:scale-110 transition duration-400' src={`/content/img/gallery/gallery-4.jpg`} alt="Photo of beautifully arranged food" />
                </figure>
                <figure className='overflow-hidden'>
                    <img className='w-full hover:scale-110 transition duration-400' src={`/content/img/gallery/gallery-5.jpg`} alt="Photo of beautifully arranged food" />
                </figure>
                <figure className='overflow-hidden'>
                    <img className='w-full hover:scale-110 transition duration-400' src={`/content/img/gallery/gallery-6.jpg`} alt="Photo of beautifully arranged food" />
                </figure>
                <figure className='overflow-hidden'>
                    <img className='w-full hover:scale-110 transition duration-400' src={`/content/img/gallery/gallery-7.jpg`} alt="Photo of beautifully arranged food" />
                </figure>
                <figure className='overflow-hidden'>
                    <img className='w-full hover:scale-110 transition duration-400' src={`/content/img/gallery/gallery-8.jpg`} alt="Photo of beautifully arranged food" />
                </figure>
                <figure className='overflow-hidden'>
                    <img className='w-full hover:scale-110 transition duration-400' src={`/content/img/gallery/gallery-9.jpg`} alt="Photo of beautifully arranged food" />
                </figure>
                <figure className='overflow-hidden'>
                    <img className='w-full hover:scale-110 transition duration-400' src={`/content/img/gallery/gallery-10.jpg`} alt="Photo of beautifully arranged food" />
                </figure>
                <figure className='overflow-hidden'>
                    <img className='w-full hover:scale-110 transition duration-400' src={`/content/img/gallery/gallery-11.jpg`} alt="Photo of beautifully arranged food" />
                </figure>
                <figure className='overflow-hidden'>
                    <img className='w-full hover:scale-110 transition duration-400' src={`/content/img/gallery/gallery-12.jpg`} alt="Photo of beautifully arranged food" />
                </figure>
            </div>
        </section>
    )
}

export default Testimonials
