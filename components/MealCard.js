import React from 'react'

function MealCard({ image, name, tags, calories, nutriscore, rating, comments }) {
    return (
        <div className='shadow-xl rounded-xl overflow-hidden hover:-translate-y-5 hover:shadow-lg transform transition duration-150'>
            <img className='w-full' src={`/content/img/meals/${image}.jpg`} alt={name} />
            <div className='p-12 pt-8 lg:p-9 lg:pt-6'>
                <div className='flex mb-3 gap-1'>
                    {tags.map(function (tag, idx) {
                        return (
                            <span key={idx} className={`text-xs font-semibold inline-block px-2 py-1 text-grayC-dark rounded-xl bg-food-${tag}`} >{tag.toUpperCase()}</span>
                        )
                    })}
                </div>
                <p className='text-grayC-dark font-semibold text-2xl mb-8'>{name}</p>
                <ul className='list-none flex flex-col gap-5'>
                    <li className='flex items-center gap-4'><ion-icon name="flame" style={{ color: "#e67e22", height: "1.5rem", width: "1.5rem" }}></ion-icon> <span><strong>{calories}</strong> Calories</span> </li>
                    <li className='flex items-center gap-4'><ion-icon name="restaurant" style={{ color: "#e67e22", height: "1.5rem", width: "1.5rem" }}></ion-icon> <span>Nutriscore &reg; <strong>{nutriscore}</strong></span></li>
                    <li className='flex items-center gap-4'><ion-icon name="star-outline" style={{ color: "#e67e22", height: "1.5rem", width: "1.5rem" }}></ion-icon> <span><strong> {rating}</strong> rating ({comments})</span> </li>
                </ul>
            </div>
        </div>
    )
}

export default MealCard
