import React, { useEffect, useRef} from 'react'
import emailjs from '@emailjs/browser';
import gsap from 'gsap';

function Contact() {
    const formRef = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID, 
            formRef.current, 
            import.meta.env.VITE_USER_ID 
        )
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            })
            .catch((error) => {
                console.log(error.text);
                alert('Failed to send message. Please try again.');
            });

        // Reset the form fields after submission
        e.target.reset();
    };


    return (
        <div id='contact' className='text-white sm:p-10 p-4 border-2 border-[#21bd8e] rounded-t-[200px] mt-10'>
            <h1 data-aos="fade-right" className='text-2xl md:text-4xl text-white font-bold text-center mt-6'>Contact Me</h1>
            <div className='flex flex-col-reverse md:flex-row gap-10 justify-around items-center py-6 md:py-10'>
                <div className='max-w-72 flex flex-col gap-3 text-center md:text-left'>
                    <h1 data-aos="fade-right" className='text-2xl md:text-3xl font-semibold '>Drop me a message</h1>
                    <p data-aos="fade-left" className='text-sm text-[#b8c0bd]'>Reach out to discuss potential projects, collaborations, or any questions. I'm always open to new opportunities and connections.</p>
                    <a href="https://www.linkedin.com/in/hareem-shaikh-6095772a2">
                    <p data-aos="fade-right" data-aos-delay="300"> Let's connect! <i className="fa-brands fa-linkedin text-xl px-2 cursor-pointer text-[#39b69b]"></i></p>

                    </a>
                </div>

                <div>
                    <form ref={formRef} onSubmit={sendEmail} className='flex flex-col gap-2 w-64 p-4 bg-[#197e60] text-sm items-center rounded-xl'>
                        <input
                            className='bg-[#050511] p-2 rounded-lg w-full outline-none'
                            type="text"
                            name="from_name"
                            placeholder='Devid'
                            required
                        />
                        <input
                            className='bg-[#050511] p-2 rounded-lg w-full outline-none'
                            type="email"
                            name="email" 
                            placeholder='dummy@gmail.com'
                            required
                        />
                        <textarea
                            className='bg-[#050511] p-2 rounded-lg w-full outline-none'
                            name="message"
                            placeholder='Your Message Here...'
                            rows="6"
                            required
                        />
                        <input
                            className='bg-[#050511] p-2 rounded-lg w-44 cursor-pointer hover:bg-[#050511d0] outline-none'
                            type="submit"
                            value="Send"
                        />
                    </form>

                </div>
            </div>
            <hr />
            <p className='text-center text-[#43c59e] p-2'>© 2024 Hareem Shaikh. All Rights Reserved.</p>

        </div>
    )
}

export default Contact