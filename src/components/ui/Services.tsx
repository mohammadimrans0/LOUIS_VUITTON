/* eslint-disable @next/next/no-img-element */
"use client"

const Services = () => {
    return (
        <div className='mb-16 mt-20'>
            <h1 className="text-center text-2xl font-base">Services</h1>
        <div className="container mx-auto grid grid-cols-3 gap-6 mt-12">
          <div>
            <img
              src="https://eu.louisvuitton.com/images/is/image/HP_Services_Push_Contact_Us_DI3.jpg"
              alt=""
            />
            <h2 className="mt-4 text-xl">How Can We Help You?</h2>
            <p className='text-sm mt-2 mb-2'>Wherever you are, Louis Vuitton Client Advisors will be delighted to assist you.</p>
            <p className="text-sm underline">Contact Us</p>
          </div>
          <div>
            <img
              src="https://us.louisvuitton.com/images/is/image/HP_Services_Push_Art_Of_Gifting_DI3.jpg"
              alt=""
            />
            <h2 className="mt-4 text-xl">Art of Gifting</h2>
            <p className='text-sm mt-2 mb-2'>Choose the perfect gift from our specially curated selection of products. </p>
            <span className='flex items-center gap-4'>
              <p className="text-sm underline">Gifts for Her</p>
              <p className="text-sm underline">Gifts for Him</p>
            </span>
          </div>
          <div>
            <img
              src="https://us.louisvuitton.com/images/is/image/HP_Services_Push_Personalization_DI3.jpg"
              alt=""
            />
            <h2 className="mt-4 text-xl">Personalization</h2>
            <p className='text-sm mt-2 mb-2'>Louis Vuitton’s personalization offer spans a wide range of services.</p>
            <p className="text-sm underline">Explore our Collections</p>
          </div>
        </div>
      </div>
    );
};

export default Services;