import React from 'react'

function Services() {
    return (
        <div id='services' className='flex flex-col items-center'>
            <h1 data-aos="fade-right"  className='text-2xl md:text-4xl text-white font-bold text-center mt-20 my-10'>Services</h1>

            <div className="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-10">
                <div data-aos="fade-up-right" className="bg-[#155844] p-4 rounded-2xl border-[1px] border-[#b4c0bc] flex flex-col gap-4 min-h-[400px] max-w-[300px]">
                    <h2 className='text-lg font-semibold text-center'>Custom Web Development</h2>
                    <p className='text-center text-sm text-[#c6d1cc]'>Tailor-made websites and web applications designed to meet specific business needs. Focused on functionality, performance, and scalability.</p>
                    <ul className='list-disc p-4 text-sm'>
                        <li>Responsive and mobile-friendly designs</li>
                        <li>Clean, maintainable code following best practices</li>
                        <li>API and third-party service integration</li>
                        <li>SEO optimization and accessibility standards</li>
                    </ul>
                </div>
                <div data-aos="fade-up-right" className="bg-[#155844] p-4 rounded-2xl border-[1px] border-[#b4c0bc] flex flex-col gap-4 min-h-[400px] max-w-[300px]">
                    <h2  className='text-lg font-semibold text-center'>UI/UX Design & Prototyping</h2>
                    <p  className='text-center text-sm text-[#c6d1cc]'>Crafting intuitive and engaging user interfaces with a focus on user experience. Transforming ideas into interactive prototypes to visualize the end product.</p>
                    <ul className='list-disc p-4 text-sm'>
                        <li>Wireframing and mockups</li>
                        <li>High-fidelity interactive prototypes</li>
                        <li>User journey mapping and research</li>
                        <li>Design systems and component libraries</li>
                    </ul>
                </div>
                <div data-aos="fade-up-right" className="bg-[#155844] p-4 rounded-2xl border-[1px] border-[#b4c0bc] flex flex-col gap-4 min-h-[400px] max-w-[300px]">
                    <h2  className='text-lg font-semibold text-center'>Single Page Application (SPA) Development</h2>
                    <p  className='text-center text-sm text-[#c6d1cc]'>Building fast, dynamic, and responsive single-page applications using modern JavaScript frameworks like React.</p>
                    <ul className='list-disc p-4 text-sm'>
                        <li>State management with Redux or Context API</li>
                        <li>Component-based architecture</li>
                        <li>Client-side routing and lazy loading</li>
                        <li>Integration with RESTful APIs and GraphQL</li>
                    </ul>
                </div>
                <div data-aos="fade-up-right" className="bg-[#155844] p-4 rounded-2xl border-[1px] border-[#b4c0bc] flex flex-col gap-4 min-h-[400px] max-w-[300px]">
                    <h2  className='text-lg font-semibold text-center'>Performance Optimization & SEO</h2>
                    <p  className='text-center text-sm text-[#c6d1cc]'>Enhancing website performance and search engine visibility through code optimization, caching strategies, and SEO best practices.</p>
                    <ul className='list-disc p-4 text-sm'>
                        <li>Page speed and load time improvements</li>
                        <li>Image optimization and lazy loading</li>
                        <li>On-page SEO with meta tags, structured data, and sitemaps</li>
                        <li>Accessibility audits and improvements</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Services