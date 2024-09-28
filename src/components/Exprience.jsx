import React from 'react'

function Exprience() {
    return (
        <div id='experience' className='text-white'>
            <h1  data-aos="zoom-in" className='text-3xl md:text-4xl text-white font-bold text-center mt-20 my-10'>Experience/(Skills)</h1>

            <h1 data-aos="fade-right" className='text-3xl text-[#24d19d] font-semibold text-center'>Front-End</h1>
            <div className='flex gap-10 justify-center flex-wrap p-6 py-12'>
                <div data-aos="zoom-in" className='h-28  flex flex-col justify-between items-center'>
                    <i  className="text-7xl devicon-react-original colored"></i>
                    <p>React</p>
                </div>

                <div data-aos="zoom-in" className='h-28  flex flex-col justify-between items-center'>
                    <i className="text-7xl devicon-redux-original colored"></i>
                    <p>Redux</p>
                </div>

                <div data-aos="zoom-in" className='h-28  flex flex-col justify-between items-center'>
                    <img className='w-[75px] rounded-2xl' src="/659715ef78dd04cdbe11a27b35ff7c49.png" alt="zustand" />
                    <p>JS ES6+</p>
                </div>

                <div data-aos="zoom-in" className='h-28  flex flex-col justify-between items-center'>

                    <i className=" text-7xl devicon-html5-plain colored"></i>
                    <p>HTML5</p>
                </div>

                <div data-aos="zoom-in" className='h-28  flex flex-col justify-between items-center'>
                    <i className="text-7xl devicon-css3-plain colored"></i>
                    <p>CSS3</p>
                </div>

                <div data-aos="zoom-in" className='h-28  flex flex-col justify-between items-center'>
                    <img className='w-[75px] rounded-2xl' src="/images.jfif" alt="zustand" />
                    <p>Zustand</p>
                </div>

            </div>

            <h1 data-aos="fade-right" className='text-3xl text-[#24d19d] font-semibold text-center'>UI/UX Design</h1>
            <div className='flex gap-10 justify-center flex-wrap p-6 py-12'>
                <div data-aos="zoom-in" className='h-24 flex flex-col justify-between items-center'>
                    <i className="text-7xl devicon-tailwindcss-original colored"></i>
                    <p>Tailwind</p>
                </div>

            </div>

            <h1 data-aos="fade-right" className='text-3xl text-[#24d19d] font-semibold text-center'>Backend & Database</h1>
            <div className='flex gap-10 justify-center flex-wrap p-6 py-12'>
                <div data-aos="zoom-in" className='h-24 flex flex-col justify-between items-center'>
                    <i className="text-7xl devicon-firebase-plain colored"></i>
                    <p>Firebase</p>
                </div>

                <div data-aos="zoom-in"className='h-24 flex flex-col justify-between items-center'>

                    <i className="text-7xl devicon-appwrite-plain colored"></i>
                    <p>Appwrite</p>
                </div>

            </div>

            <h1 data-aos="fade-right" className='text-3xl text-[#24d19d] font-semibold text-center'>Version Control & Deployment</h1>
            <div className='flex gap-10 justify-center flex-wrap p-6 py-12'>
                <div data-aos="zoom-in" className='h-24 flex flex-col justify-between items-center'>
                    <i className="text-7xl devicon-git-plain colored"></i>
                    <p>Git</p>
                </div>

                <div data-aos="zoom-in" className='h-24 flex flex-col justify-between items-center'>
                    <i className="text-7xl devicon-github-original"></i>
                    <p>Github</p>
                </div>

                <div data-aos="zoom-in" className='h-24 flex flex-col justify-between items-center'>
                    <i className="text-7xl devicon-vercel-original"></i>
                    <p>Vercel</p>
                </div>

            </div>






        </div>
    )
}

export default Exprience