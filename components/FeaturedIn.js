import React from 'react'

function FeaturedIn() {
    return (
        <section className='pt-12 pb-8'>
            <div className="containers">
                <h2 className='text-sm text-[#888] font-medium tracking-wider text-center mb-6 uppercase'>As featured in</h2>
                <div className='flex justify-around'>
                    <img className='sm:h-5 md:h-7 h-8 brightness-0 opacity-50' src="/content/img/logos/techcrunch.png" alt="Techcrunch Logo" />
                    <img className='sm:h-5 md:h-7 h-8 brightness-0 opacity-50' src="/content/img/logos/business-insider.png" alt="Business Insider Logo" />
                    <img className='sm:h-5 md:h-7 h-8 brightness-0 opacity-50' src="/content/img/logos/the-new-york-times.png" alt="The New York Times Logo" />
                    <img className='sm:h-5 md:h-7 h-8 brightness-0 opacity-50' src="/content/img/logos/forbes.png" alt="Forbes Logo" />
                    <img className='sm:h-5 md:h-7 h-8 brightness-0 opacity-50' src="/content/img/logos/usa-today.png" alt="USA Today Logo" />
                </div>
            </div>
        </section>
    )
}

export default FeaturedIn
