import React from 'react'
import MealCard from './MealCard'

function Meals() {
    const list = ['Vegetarian', 'Vegan', 'Pescatarian', 'Gluten-free', 'Lactose-free', 'Keto', 'Paleo', 'Low FODMAP', 'Kid-friendly']
    return (
        <section id='meals'>
            <div className='bg-food-vegeterian'></div>
            <div className='bg-food-vegan'></div>
            <div className='bg-food-paleo'></div>
            <div className='containers text-center'>
                <p className='text-orange-dark mb-4 uppercase font-medium tracking-wide'>Meals</p>
                <h2 className='text-5xl lg:text-4xl leading-tight text-grayC-dark mb-24 sm:mb-12'>Omnifood AI chooses from 5,000+ recipes</h2>
            </div>
            <div className='containers grid grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-y-24 gap-x-16 lg:gap-x-11 lg:gap-y-16 mb-12'>
                <MealCard image='meal-1' name='Japanese Gyozas' tags={['vegeterian']} calories='650' nutriscore='74' rating='4.9' comments='537' />
                <MealCard image='meal-2' name='Avocado Salad' tags={['vegan', 'paleo']} calories='400' nutriscore='92' rating='4.8' comments='441' />
                <div className='sm:col-span-full sm:justify-self-center'>
                    <h3 className='text-grayC-dark font-bold mb-8 lg:text-2xl'>Works with any diet:</h3>
                    <ul className='flex flex-col gap-4'>
                        {list.map(function (listItem, idx) {
                            return (
                                <li key={idx} className='flex items-center text-xl gap-4'><ion-icon name="checkmark-outline" style={{ color: "#e67e22", height: "1.5rem", width: "1.5rem" }}></ion-icon><span> {listItem} </span></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className='containers text-lg text-center'>
                <a className='link' href="#">See all recipes &rarr;</a>
            </div>
        </section>
    )
}

export default Meals
