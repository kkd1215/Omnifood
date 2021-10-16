import React from 'react'

function TestimonialCard({ img, name, testimony }) {
    return (
        <figure>
            <img className='rounded-full w-16 mb-3' src={`/content/img/customers/${img}.jpg`} alt={`Picture of ${name}`} />
            <blockquote className='text-lg mb-4 text-grayC-dark'>{testimony}</blockquote>
            <p className='text-base text-[#6F6F6F]'>&mdash; {name}</p>
        </figure>
    )
}

export default TestimonialCard
