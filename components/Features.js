import React from 'react'

export default function Features() {
    return (
        <section class="text-gray-600 body-font containers">
            <p class="text-base md:text-sm leading-relaxed  xl:w-2/4 lg:w-3/4 mx-auto text-gray-500 -mt-20 mb-16 text-center">Prices include all applicable taxes. Users can cancel at any time. Both of the plans include:</p>
            <div class="container mx-auto">
                <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 space-y-0 ">
                    <div class="p-4 w-1/4 flex flex-col text-center items-center">
                        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-light mb-8 flex-shrink-0">
                            <ion-icon name="infinite" style={{ color: "#e67e22", height: "2rem", width: "2rem" }}></ion-icon>
                        </div>
                        <div class="flex-grow">
                            <h2 class="text-grayC-dark text-2xl md:text-xl title-font font-bold mb-4">Never cook again!</h2>
                            <p class="text-base md:text-sm leading-7">Our subscriptions cover 365 days per year, even including major holidays.</p>
                        </div>
                    </div>
                    <div class="p-4 w-1/4 flex flex-col text-center items-center">
                        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-light mb-8 flex-shrink-0">
                            <ion-icon name="nutrition" style={{ color: "#e67e22", height: "2rem", width: "2rem" }}></ion-icon>
                        </div>
                        <div class="flex-grow">
                            <h2 class="text-grayC-dark text-2xl md:text-xl title-font font-bold mb-4">Local and organic</h2>
                            <p class="text-base md:text-sm leading-7">Our cooks only use local, fresh, and organic products to prepare your meals.</p>
                        </div>
                    </div>
                    <div class="p-4 w-1/4 flex flex-col text-center items-center">
                        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-light mb-8 flex-shrink-0">
                            <ion-icon name="leaf" style={{ color: "#e67e22", height: "2rem", width: "2rem" }}></ion-icon>
                        </div>
                        <div class="flex-grow">
                            <h2 class="text-grayC-dark text-2xl md:text-xl title-font font-bold mb-4">No waste</h2>
                            <p class="text-base md:text-sm leading-7">All our partners only use reusable containers to package all your meals.</p>
                        </div>
                    </div>
                    <div class="p-4 w-1/4 flex flex-col text-center items-center">
                        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-light mb-8 flex-shrink-0">
                            <ion-icon name="pause" style={{ color: "#e67e22", height: "2rem", width: "2rem" }}></ion-icon>
                        </div>
                        <div class="flex-grow">
                            <h2 class="text-grayC-dark text-2xl md:text-xl title-font font-bold mb-4">Pause anytime</h2>
                            <p class="text-base md:text-sm leading-7">Going on vacation? Just pause your subscription, and we refund unused days.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
