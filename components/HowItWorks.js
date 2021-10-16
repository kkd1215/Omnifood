import React from 'react'

function HowItWorks() {
    return (
        <section className='py-16'>
            <div className='containers'>
                <p className='text-orange-dark mb-4 uppercase font-medium tracking-wide'>How it works</p>
                <h2 className='text-5xl leading-tight text-grayC-dark mb-24'>Your daily dose of health in 3 simple steps</h2>
            </div>
            <div className='containers grid grid-cols-2 gap-y-24 gap-x-16 items-center'>
                <div>
                    <p className='text-8xl text-[#bbb] font-semibold mb-3'>01</p>
                    <h3 className='text-grayC-dark font-bold mb-8'>Tell us what you like (and what not)</h3>
                    <p className='text-lg leading-relaxed'>
                        Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!
                    </p>
                </div>
                <div className='flex justify-center items-center relative circles'>
                    <img className='w-[35%]' src="/content/img/app/app-screen-1.png" alt="Iphone app preferences selection screen" />
                </div>
                <div className='flex justify-center items-center relative circles'>
                    <img className='w-[35%]' src="/content/img/app/app-screen-2.png" alt="Iphone app food selection screen" />
                </div>
                <div>
                    <p className='text-8xl text-[#bbb] font-semibold mb-3'>02</p>
                    <h3 className='text-grayC-dark font-bold mb-8'>Approve your weekly meal plan</h3>
                    <p className='text-lg leading-relaxed'>
                        Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.
                    </p>
                </div>

                <div>
                    <p className='text-8xl text-[#bbb] font-semibold mb-3'>03</p>
                    <h3 className='text-grayC-dark font-bold mb-8'>Receive meals at convenient time</h3>
                    <p className='text-lg leading-relaxed'>
                        Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!
                    </p>
                </div>
                <div className='flex justify-center items-center relative circles'>
                    <img className='w-[35%]' src="/content/img/app/app-screen-3.png" alt="Iphone app order confirmation screen" />
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
