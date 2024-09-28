import React, { useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'
import AOS from "aos"

function Hero() {
    useEffect(()=>{
        AOS.init()

    },[])
    return (
        <div className='w-full md:px-10 flex flex-col-reverse md:flex-row justify-between items-center'>
            <div data-aos="fade-up" className='flex flex-col gap-5 w-full md:w-2/5  md:items-start text-center md:text-left items-center p-4'>
                <p className='text-[#949997] text-lg'>Hey there, I'm</p>
                <h1 className='text-[#21bd8e] text-2xl  md:text-3xl font-semibold'>Hareem Shaikh!</h1>
                <h2 className='text-3xl md:text-5xl text-[#b0b4b2] font-bold'>Front-End Web Developer</h2>
                <p className='my-4 text-[#949997]'>Specializing in building dynamic, user-centric web applications with precision and expertise.</p>

                <button className=' border-2 border-[#b0b4b2] text-white italic w-44 p-1 button'><HashLink smooth to="#contact">Hire Me</HashLink></button>

            </div>
            <div data-aos="zoom-in" className='w-full md:w-2/5 '>
                <img className='w-full' src="/vecteezy_female-muslim-office-engineering_25251749.png" alt="logo" />

            </div>



        </div>
    )
}

export default Hero