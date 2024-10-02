import React from 'react'

function Portfolio() {
  return (
    <div id='portfolio' className="md:p-20">
      <h1 className='text-2xl md:text-4xl text-white font-bold text-center mt-20 my-10'>Portfolio</h1>
      <div className='p-4 flex flex-col gap-8 md:flex-row md:overflow-x-scroll scroller'>
        <div className='shadow flex flex-col gap-5 justify-between p-4 border-l-2 border-t-2 border-[#31d4a4] flex-shrink-0 w-full md:w-80'>
          <h1 data-aos="fade-right" className='text-[#31d4a4] text-2xl font-semibold'>Dashboard</h1>
          <img data-aos="zoom-in" src="/dashboard-beta-teal.vercel.app_dashboard.png" alt="dashboard" />
          <p className='text-[#abafae]'>
            A highly responsive dashboard built with React, ECharts, FullCalendar.io, and Material UI tables, providing dynamic data visualization and scheduling
          </p>
          <button data-aos="fade-up" className=' border-2 border-[#b0b4b2] text-white italic w-44 p-1 button'><a href="https://dashboard-beta-teal.vercel.app/">Live Website URL</a></button>

        </div>

        <div className='shadow flex flex-col  justify-between p-4 border-l-2 border-t-2 border-[#31d4a4] flex-shrink-0 w-full md:w-80 gap-5'>
          <h1 data-aos="fade-right" className='text-[#31d4a4] text-2xl font-semibold'>FitHive</h1>
          <img data-aos="zoom-in" src="/fithive.vercel.app_(Nest Hub Max) (1).png" alt="ebake" />
          <p className='text-[#abafae]'>
           FitHive: Track workouts, manage fitness goals, and explore 1000+ exercises with instructions and visuals, empowering your journey to wellness and success.
          </p>
          <button data-aos="fade-up" className=' border-2 border-[#b0b4b2] text-white italic w-44 p-1 button'><a href="https://fithive.vercel.app/">Live Website URL</a></button>

        </div>

        <div className='shadow flex flex-col  justify-between p-4 border-l-2 border-t-2 border-[#31d4a4] flex-shrink-0 w-full md:w-80 gap-5'>
          <h1 data-aos="fade-right" className='text-[#31d4a4] text-2xl font-semibold'>Bakery Delight</h1>
          <img data-aos="zoom-in" src="/product-list-with-cart-ten.vercel.app_ (2).png" alt="ebake" />
          <p className='text-[#abafae]'>
            Bakery Delight is a responsive e-commerce platform where users can browse and select bakery items, manage their cart, and confirm their orders, ensuring a seamless shopping experience.
          </p>
          <button data-aos="fade-up" className=' border-2 border-[#b0b4b2] text-white italic w-44 p-1 button'><a href="https://product-list-with-cart-ten.vercel.app/">Live Website URL</a></button>

        </div>

        <div className='shadow flex flex-col justify-between p-4 border-l-2 border-t-2 border-[#31d4a4] flex-shrink-0 w-full md:w-80 gap-5'>
          <h1 data-aos="fade-right" className='text-[#31d4a4] text-2xl font-semibold'>Bookify.com</h1>
          <img data-aos="zoom-in" src="/bookify-com.vercel.app_.png" alt="bookify" />
          <p className='text-[#abafae]'>
            Bookify is a responsive, user-centric e-commerce platform featuring Firebase authentication and cloud services, ensuring secure, seamless order tracking and engagement.
          </p>
          <button data-aos="fade-up" className=' border-2 border-[#b0b4b2] text-white italic w-44 p-1 button'><a href="https://bookify-com.vercel.app/">Live Website URL</a></button>

        </div>
      </div>

    </div>
  )
}

export default Portfolio
