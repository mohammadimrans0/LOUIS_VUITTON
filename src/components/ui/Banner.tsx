/* eslint-disable @next/next/no-img-element */
'use client'

const Banner = () => {
    return (
        <div>
            <div className="relative">
                <img
                    src="https://us.louisvuitton.com/images/is/image/Women_Flight_Mode_WW_HP_Push_DI3.jpg"
                    alt=""
                />
                <div className='text-white text-center absolute bottom-16 mx-auto w-full'>
                        <h1 className='text-3xl font-semibold'>Flight Mode</h1>
                        <span className='flex items-center gap-8 justify-center mt-6'>
                        <button className='border border-1 border-white px-5 py-3 rounded-full'>Discover the Collection</button>
                            <button className='border border-1 border-white px-5 py-3 rounded-full'>Explore All Ready-to-Wear</button>
                        </span>
                </div>
            </div>
            <div className="relative">
                <img
                    src="https://us.louisvuitton.com/images/is/image/PUSH4_OTG_EAST_WEST_2_US_DI3.jpg"
                    alt=""
                />
                <div className='text-white text-center absolute bottom-16 mx-auto w-full'>
                    <h1 className='text-3xl font-semibold'>The New OnTheGo East West</h1>
                    <span className='flex items-center justify-center mt-6'>
                        <button className='w-60 border border-1 border-white px-5 py-3 rounded-full'>Shop the Bag</button>
                    </span>
                </div>
            </div>
            <div className="relative">
                <img
                    src="https://us.louisvuitton.com/images/is/image/Jewelry_Blossom_WW_HP_Push_DI3.jpg"
                    alt=""
                />
                <div className='text-white text-center absolute bottom-16 mx-auto w-full'>
                    <h1 className='text-3xl font-semibold'>Louis Vuitton Blossom</h1>
                    <span className='flex items-center gap-8 justify-center mt-6'>
                        <button className='w-60 border border-1 border-white px-5 py-3 rounded-full'>
                            Explore the Collection</button>
                        <button className='w-60 border border-1 border-white px-5 py-3 rounded-full'>Discover the Campaign</button>
                    </span>
                </div>
            </div>
            <div className="relative">
                <img
                    src="https://us.louisvuitton.com/images/is/image/PUSH7_FRAGRANCE_MYRIAD_US_DI3.jpg"
                    alt=""
                />
                <div className='text-white text-center absolute bottom-16 mx-auto w-full'>
                    <h1 className='text-3xl font-semibold'>Myriad</h1>
                    <span className='flex items-center gap-8 justify-center mt-6'>
                        <button className='w-60 border border-1 border-white px-5 py-3 rounded-full'>
                            Shop the Fragrance
                            </button>
                        <button className='w-60 border border-1 border-white px-5 py-3 rounded-full'>Discover the Campaign</button>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Banner;