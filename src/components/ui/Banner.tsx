/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

const Banner = () => {
  return (
    <div>
      <div className="relative">
        <video controls autoPlay className="video-player w-full">
          <source src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/BrGH2Rcx4A_HD.mp4" />
        </video>
        <div className="text-white text-center absolute bottom-2 md:bottom-16 mx-auto w-full">
          <h1 className="text-2xl md:text-3xl">LV SKi</h1>
          <span className="flex items-center justify-center mt-6">
            <button className="text-xs md:text-base w-44 md:w-60 border border-1 border-white px-5 py-3 rounded-full">
              Explore the Collection
            </button>
          </span>
        </div>
      </div>

      <div className="relative">
        <img
          src="https://us.louisvuitton.com/images/is/image/Women_Flight_Mode_WW_HP_Push_DI3.jpg"
          alt=""
        />
        <div className="text-white text-center absolute bottom-2 md:bottom-16 mx-auto w-full">
          <h1 className="text-2xl md:text-3xl">Flight Mode</h1>
          <span className="flex items-center gap-8 justify-center mt-6">
            <button className="text-xs md:text-base border border-1 border-white px-5 py-3 rounded-full">
              Discover the Collection
            </button>
            <button className="text-xs md:text-base border border-1 border-white px-5 py-3 rounded-full">
              Explore All Ready-to-Wear
            </button>
          </span>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://us.louisvuitton.com/images/is/image/PUSH4_OTG_EAST_WEST_2_US_DI3.jpg"
          alt=""
        />
        <div className="text-white text-center absolute bottom-2 md:bottom-16 mx-auto w-full">
          <h1 className="text-2xl md:text-3xl">The New OnTheGo East West</h1>
          <span className="flex items-center justify-center mt-6">
            <button className="text-xs md:text-base w-44 md:w-60 border border-1 border-white px-5 py-3 rounded-full">
              Shop the Bag
            </button>
          </span>
        </div>
      </div>
      <div className="relative">
        <video controls autoPlay className="w-full">
          <source src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/RBQmoXQwtn_HD.mp4" />
        </video>
        <div className="text-white text-center absolute bottom-2 md:bottom-16 mx-auto w-full">
          <h1 className="text-2xl md:text-3xl">Men's Fall 2023 Collection</h1>
          <span className="flex items-center justify-center mt-6">
            <button className="text-xs md:text-base w-44 md:w-60 border border-1 border-white px-5 py-3 rounded-full">
              Discover the Collection
            </button>
          </span>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://us.louisvuitton.com/images/is/image/Jewelry_Blossom_WW_HP_Push_DI3.jpg"
          alt=""
        />
        <div className="text-white text-center absolute bottom-2 md:bottom-16 mx-auto w-full">
          <h1 className="text-2xl md:text-3xl">Louis Vuitton Blossom</h1>
          <span className="flex items-center gap-8 justify-center mt-6">
            <button className="text-xs md:text-base md:w-60 border border-1 border-white px-5 py-3 rounded-full">
              Explore the Collection
            </button>
            <button className="text-xs md:text-base md:w-60 border border-1 border-white px-5 py-3 rounded-full">
              Discover the Campaign
            </button>
          </span>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://us.louisvuitton.com/images/is/image/PUSH7_FRAGRANCE_MYRIAD_US_DI3.jpg"
          alt=""
        />
        <div className="text-white text-center absolute bottom-2 md:bottom-16 mx-auto w-full">
          <h1 className="text-2xl md:text-3xl">Myriad</h1>
          <span className="flex items-center gap-8 justify-center mt-6">
            <button className="text-xs md:text-base md:w-60 border border-1 border-white px-5 py-3 rounded-full">
              Shop the Fragrance
            </button>
            <button className="text-xs md:text-base md:w-60 border border-1 border-white px-5 py-3 rounded-full">
              Discover the Campaign
            </button>
          </span>
        </div>
      </div>
      <div className="relative">
        <video controls autoPlay className="w-full">
          <source src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/1iUNr99lYG_HD.mp4" />
        </video>
        <div className="text-white text-center absolute bottom-2 md:bottom-16 mx-auto w-full">
          <h1 className="text-2xl md:text-3xl">Women's Fashion Campaign</h1>
          <span className="flex items-center justify-center mt-6">
            <button className="text-xs md:text-base w-44 md:w-60 border border-1 border-white px-5 py-3 rounded-full">
              Discover the Campaign
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
