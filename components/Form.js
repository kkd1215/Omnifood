import React from 'react'

function Form() {
    return (
        <div>
            <form className='grid grid-cols-2 md:grid-cols-1 gap-y-8 gap-x-6'>
                <div>
                    <label className='block font-medium mb-4' for='name'>
                        Full Name
                    </label>
                    <input className='w-full text-lg border-none bg-orange-light rounded-lg py-2 px-3 shadow-md placeholder-[#aaa]' id='name' required type="text" name="name" placeholder='John Smith' />
                </div>
                <div>
                    <label className='block font-medium mb-4' for='email'>
                        Email address
                    </label>
                    <input className='w-full text-lg border-none bg-orange-light rounded-lg py-2 px-3 shadow-md placeholder-[#aaa]' id='email' required type="email" name="email" placeholder='me@example.com' />
                </div>
                <div>
                    <label className='block font-medium mb-4' for='select'>
                        Where did you hear about us?
                    </label>
                    <select className='w-full text-lg border-none bg-orange-light rounded-lg py-2 px-3 shadow-md placeholder-[#aaa]' name="select" required id="select">
                        <option value=''>Please choose one option</option>
                        <option value='friends'>Friends and family</option>
                        <option value='youtube'>Youtube video</option>
                        <option value='podcast'>Podcast </option>
                        <option value='facebook'>Facebook ad</option>
                        <option value='others'>Others</option>
                    </select>
                </div>
                <button type="submit" className='inline-block bg-[#45260a] text-orange-light text-xl self-end font-semibold shadow-md rounded-lg py-[0.5em] px-[2em] mt-4 md:mt-3 hover:bg-white hover:text-grayC-light transform transition duration-150'>Sign up now</button>
            </form>
        </div>
    )
}

export default Form
