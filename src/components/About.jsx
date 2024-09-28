import React from 'react'

function About() {
    return (
       <>
       <h1 id='about' data-aos="fade-right" className='text-2xl md:text-4xl text-white font-bold text-center mt-20 my-10'>About Me</h1>
        <div className='text-[#bec9c9] p-6 flex flex-col md:flex-row items-center justify-center gap-10 text-md'>
            <div data-aos="fade-up" data-aos-delay="100" className='text-center md:w-1/2 flex flex-col gap-5'>
                <p>
                    I'm <span className='text-[#3decb8] font-semibold'>Hareem</span> ,a dedicated <span className='text-[#3decb8] font-semibold'>front-end developer</span>  <br />with a knack for transforming ideas into visually captivating & highly functional web experiences.My journey in web development is fueled by the Art & science of Coding.
                </p>

                <p>
                    In every project ,I aim to push the boundaries of what's possible , combining innovative design with <span className='text-[#3decb8] font-semibold'>problem solving skills</span>. Whether its ensuring pixel-perfect detail or optimizing the user journey I bring a relentless focus on user satisfaction.
                </p>
                <p className='text-[#3decb8] font-semibold text-xl'>So, how about creating something extraordinary together !!</p>
            </div>
            <div className='md:w-1/2 text-white grid grid-cols-1 md:grid-cols-2 gap-3'>
                    <div data-aos="fade-right" className='bg-[#1f9974] flex items-center gap-4 rounded-xl p-4'>
                        <div>
                            <i className="fa-solid fa-lightbulb text-4xl"></i>
                        </div>
                        <div>
                            <h1 className='text-[#050511] font-bold'>Creativity</h1>
                            <p className='text-sm'>Innovative thinker delivering unique and impactful solutions.</p>
                        </div>
                    </div>

                    <div data-aos="fade-right" data-aos-delay="100" className='bg-[#1f9974] flex items-center gap-4 rounded-xl p-4'>
                        <div>
                            <i className="fa-solid fa-puzzle-piece text-4xl"></i>
                        </div>
                        <div>
                            <h1 className='text-[#050511] font-bold'>Problem Solving</h1>
                            <p className='text-sm'>Analytical approach to resolving complex challenges efficiently.</p>
                        </div>
                    </div>

                    <div data-aos="fade-right" data-aos-delay="200" className='bg-[#1f9974] flex items-center gap-4 rounded-xl p-4'>
                        <div>
                            <i className="fa-solid fa-magnifying-glass text-4xl"></i>
                        </div>
                        <div>
                            <h1 className='text-[#050511] font-bold'>Attention to Details</h1>
                            <p className='text-sm'>Meticulous in ensuring accuracy and precision in every task.</p>
                        </div>
                    </div>

                    <div data-aos="fade-right" data-aos-delay="300" className='bg-[#1f9974] flex items-center gap-4 rounded-xl p-4'>
                        <div>
                            <i className="fa-solid fa-heart text-4xl"></i>
                        </div>
                        <div>
                            <h1 className='text-[#050511] font-bold'>User-Centric Design</h1>
                            <p className='text-sm'>Designing intuitive experiences focused on user needs.</p>
                        </div>
                </div>

            </div>
        </div>
       </>
    )
}

export default About