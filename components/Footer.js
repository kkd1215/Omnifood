import React from 'react'

function Footer() {
    return (
        <footer className="pt-32 border-t border-[#eee]">
            <div className='containers grid grid-cols-5 grid-footer gap-x-16 gap-y-24 lg:gap-x-11 lg:gap-y-16'>
                <div className='flex flex-col'>
                    <a href='#' className="flex title-font font-medium items-center text-grayC-900 mb-8 mt-1">
                        <img className='h-6' src="/content/img/omnifood-logo.png" alt="Omnifood logo" />
                    </a>
                    <ul className="list-none flex gap-4">
                        <li>
                            <a href='#' className="text-base text-[#767676] hover:text-grayC-dark transition duration-150"><ion-icon name="logo-instagram" style={{ height: "1.5rem", width: "1.5rem" }}></ion-icon></a>
                        </li>
                        <li>
                            <a href='#' className="text-[#767676] text-base hover:text-grayC-dark transition duration-150"><ion-icon name="logo-facebook" style={{ height: "1.5rem", width: "1.5rem" }}></ion-icon></a>
                        </li>
                        <li>
                            <a href='#' className="text-[#767676] text-base hover:text-grayC-dark transition duration-150"><ion-icon name="logo-twitter" style={{ height: "1.5rem", width: "1.5rem" }}></ion-icon></a>
                        </li>
                    </ul>
                    <p className="text-sm text-[#767676] leading-6 mt-auto">Copyright &copy; 2021 by Omnifood, Inc. All rights reserved.</p>
                </div>
                <div>
                    <p className='text-lg font-medium mb-8 uppercase tracking-widest'>Contact us</p>
                    <address className='pt-1 not-italic'>
                        <p className='text-base text-[#767676] mb-6'>623 Harrison St., 2nd Floor, San Francisco, CA 94107</p>
                        <p className='text-base text-[#767676] '>
                            <a href="tel:415-201-6370" className='hover:text-grayC-dark transition duration-150'>415-201-6370</a><br />
                            <a href="mailto:hello@omnifood.com" className='hover:text-grayC-dark transition duration-150'>hello@omnifood.com</a>
                        </p>
                    </address>
                </div>
                <nav className="list-none">
                    <p className='text-lg font-medium mb-8 uppercase tracking-widest'>Account</p>
                    <ul className='flex flex-col gap-4'>
                        <li>
                            <a href='#' className="text-base text-[#767676] hover:text-grayC-dark transition duration-150">Create account</a>
                        </li>
                        <li>
                            <a href='#' className="text-base text-[#767676] hover:text-grayC-dark transition duration-150">Sign in</a>
                        </li>
                        <li>
                            <a href='#' className="text-base text-[#767676] hover:text-grayC-dark transition duration-150">iOS app</a>
                        </li>
                        <li>
                            <a href='#' className="text-base text-[#767676] hover:text-grayC-dark transition duration-150">Android app</a>
                        </li>
                    </ul>
                </nav>
                <nav className="list-none">
                    <p className='text-lg font-medium mb-8 uppercase tracking-widest'>Company</p>
                    <ul className='flex flex-col gap-4'>
                        <li>
                            <a href='#' className="text-base text-[#767676] hover:text-grayC-dark transition duration-150">About Omnifood</a>
                        </li>
                        <li>
                            <a href='#' className="text-base text-[#767676] hover:text-grayC-dark transition duration-150">For Business</a>
                        </li>
                        <li>
                            <a href='#' className="text-base text-[#767676] hover:text-grayC-dark transition duration-150">Cooking partners</a>
                        </li>
                        <li>
                            <a href='#' className="text-base text-[#767676] hover:text-grayC-dark transition duration-150">Careers</a>
                        </li>
                    </ul>
                </nav>
                <nav className="list-none">
                    <p className='text-lg font-medium mb-8 uppercase tracking-widest'>Resources</p>
                    <ul className='flex flex-col gap-4'>
                        <li>
                            <a href='#' className="text-base text-[#767676] hover:text-grayC-dark transition duration-150">Recipe directory</a>
                        </li>
                        <li>
                            <a href='#' className="text-base text-[#767676] hover:text-grayC-dark transition duration-150">Help center</a>
                        </li>
                        <li>
                            <a href='#' className="text-base text-[#767676] hover:text-grayC-dark transition duration-150">Privacy &amp; terms</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer
