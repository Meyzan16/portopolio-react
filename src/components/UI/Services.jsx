import React from 'react'
import frontendImg from '../../assets/images/front-end.png'
import backendImg from '../../assets/images/backend.png'
import uiImg from '../../assets/images/design.png'
import appsImg from '../../assets/images/apps.png'

const Services = () => {
  return (
    <div>
        <section className='pt-[3rem] pb-32'  id='services'>
            <div className="container">
                 <div className="text-center">
                    <h2 data-aos='fade-up' data-aos-duration='1200' className=' text-stone-700 text-4xl mb-10'>
                        What do I help
                    </h2>
                    <p data-aos='fade-up' data-aos-duration='1200' className='text-justify lg:text-center 
                    lg:mx-auto lg:max-w-6xl text-secondary text-md  leading-relaxed'>
                    S1 Informatics graduates with a hobby of building Website applications using Laravel and moving to MERN Stack technology. Fascinated by how complicated programming is, got me interested in deepening it. I started learning Javascript and became more interested in building interactive Web applications. I then started working part-time by working on several projects such as information system websites, internship projects and student final projects. 
                    I now spend my time building projects and studying MERN Stack technology.
                    </p>
                 </div>

                 <div className="flex flex-col justify-center py-6">
                        <div className='w-full lg:max-w-6xl lg:mx-auto'>
                            <div className="relative text-gray-700 antialiased text-sm font-semibold">

                                {/* vertical line running through the middle */}
                                <div className="hidden absolute w-1 sm:block bg-primary h-full left-1/2 transform
                                -translate-x-1/2"></div>

                                {/* left card */}
                           
                                <div className='mt-6 sm:mt-0 sm:mb-4 flex items-center flex-col sm:flex-row'>
                                        <div className='flex justify-start w-full  mx-auto items-center'>
                                            <div className='w-full sm:w-1/2 sm:pr-8'>
                                                <div data-aos='fade-right' 
                                                data-aos-duration='1100'
                                                data-aos-delay='100'
                                                className='bg-white p-4 rounded group  shadow-md shadow-primary hover:shadow-none 
                                                    hover:bg-primary
                                                    cursor-pointer ease-in duration-150'>
                                                    <h3 className='text-stone-700 text-lg mb-3 group-hover:text-white
                                                    group-hover:text-2xl'>
                                                        Frontend Developer
                                                    </h3>
                                                    <p className=' text-stone-700 group-hover:text-white
                                                    text-sm leading-6'>
                                                        Pengembang web front-end bertanggung jawab untuk 
                                                        mengimplementasikan elemen visual yang dilihat dan berinteraksi dengan pengguna untuk menghasilkan tampilan situs web yang menarik, interaktif, serta menangani debugging (masalah) yang terjadi.
                                                        
                                                    </p>
                                                    <p className='text-stone-700 text-sm mt-1 group-hover:text-white'>
                                                        keahlian : boostrap,tailwindcss,reactJs,nextjs
                                                    </p>
                                                       
                                                </div>
                                            </div>
                                        </div>

                                        <div className='absolute rounded-full bg-primary border-white border-4
                                        w-10 h-10 abosulte left-1/2 transform
                                        -translate-x-1/2 -translate-y-4 sm:translate-y-0
                                        flex items-center justify-center'>
                                            <figure>
                                                <img src={frontendImg} alt="" />
                                            </figure>
                                        </div>
                                </div>

                                {/* right card */}
                                <div className='mt-6 sm:mt-0 sm:mb-4 flex items-center flex-col sm:flex-row'>
                                        <div className='flex justify-end w-full  mx-auto items-center'>
                                            <div className='w-full sm:w-1/2 sm:pl-8'>
                                                <div data-aos='fade-left' data-aos-duration='1200'
                                                data-aos-delay='200' className='bg-white p-4 rounded group  shadow-md shadow-primary hover:shadow-none 
                                                    hover:bg-primary
                                                    cursor-pointer ease-in duration-150'>
                                                    <h3 className='text-stone-700 text-lg mb-3 group-hover:text-white
                                                    group-hover:text-2xl'>
                                                        Backend Developer
                                                    </h3>
                                                    <p className=' text-stone-700 group-hover:text-white
                                                    text-sm leading-6'>
                                                        Pengembang web back-end bertanggung jawab bertugas 
                                                        mengembangkan, menyimpan data, dan komunikasi antara database situs web atau aplikasi. Tiga komponen utama dari pekerjaan back end developer yaitu server, aplikasi, dan database
                                                        
                                                    </p>
                                                    <p className='text-stone-700 text-sm mt-1 group-hover:text-white'>
                                                        keahlian : laravel,nodejs,,expressJs,mysql
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='absolute rounded-full bg-primary border-white border-4
                                        w-10 h-10 abosulte left-1/2 transform
                                        -translate-x-1/2 -translate-y-4 sm:translate-y-0
                                        flex items-center justify-center'>
                                            <figure>
                                                <img src={backendImg} alt="" />
                                            </figure>
                                        </div>
                                </div>

                                {/* rigiht left */}
                                <div className='mt-6 sm:mt-0 sm:mb-4 flex items-center flex-col sm:flex-row'>
                                        <div className='flex justify-start w-full  mx-auto items-center'>
                                            <div className='w-full sm:w-1/2 sm:pr-8'>
                                                <div data-aos='fade-right' data-aos-duration='1300'
                                                data-aos-delay='300' className='bg-white p-4 rounded group  shadow-md shadow-primary hover:shadow-none 
                                                    hover:bg-primary
                                                    cursor-pointer ease-in duration-150'>
                                                    <h3 className='text-stone-700 text-lg mb-3 group-hover:text-white
                                                    group-hover:text-2xl'>
                                                        UI/UX Design
                                                    </h3>
                                                    <p className=' text-stone-700 group-hover:text-white
                                                    text-sm leading-6'>
                                                       User Interface (UI) merupakan desain antarmuka yang fokus pada keindahan dari sebuah tampilan, dan pemilihan warna yang baik.  
                                                    </p>
                                                    <p className=' text-stone-700 group-hover:text-white
                                                    text-sm leading-6'>
                                                      User Experience (UX) merupakan proses meningkatkan kepuasan pengguna situs atau aplikasi tertentu melalui kegunaan dan kesenangan yang diberikan dalam interaksi antara pengguna dan produk.
                                                    </p>
                                                    <p className='text-stone-700 text-sm mt-1 group-hover:text-white'>
                                                        keahlian : figma
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='absolute rounded-full bg-primary border-white border-4
                                        w-10 h-10 abosulte left-1/2 transform
                                        -translate-x-1/2 -translate-y-4 sm:translate-y-0
                                        flex items-center justify-center'>
                                            <figure>
                                                <img src={uiImg} alt="" />
                                            </figure>
                                        </div>
                                </div>

                                 {/* right card */}
                                 <div className='mt-6 sm:mt-0 sm:mb-4 flex items-center flex-col sm:flex-row'>
                                        <div className='flex justify-end w-full  mx-auto items-center'>
                                            <div className='w-full sm:w-1/2 sm:pl-8'>
                                                <div data-aos='fade-left' data-aos-duration='1400'
                                                data-aos-delay='400' className='bg-white p-4 rounded group  shadow-md shadow-primary hover:shadow-none 
                                                    hover:bg-primary
                                                    cursor-pointer ease-in duration-150'>
                                                    <h3 className='text-stone-700 text-lg mb-3 group-hover:text-white
                                                    group-hover:text-2xl'>
                                                        DevOps
                                                    </h3>
                                                    <p className=' text-stone-700 group-hover:text-white
                                                    text-sm leading-6'>
                                                       DevOps adalah gabungan dari Development dan Operations. Kombinasi tersebut dirancang agar dapat meningkatkan kemampuan sebuah perusahaan untuk proses delivery aplikasi dengan kecepatan tinggi.
                                                        
                                                    </p>
                                                    <p className='text-stone-700 text-sm mt-1 group-hover:text-white'>
                                                        keahlian : Github, AWS (development)
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='absolute rounded-full bg-primary border-white border-4
                                        w-10 h-10 abosulte left-1/2 transform
                                        -translate-x-1/2 -translate-y-4 sm:translate-y-0
                                        flex items-center justify-center'>
                                            <figure>
                                                <img src={appsImg} alt="" />
                                            </figure>
                                        </div>
                                </div>


                            </div>
                        </div>
                 </div>
            </div>
        </section>
    </div>
  )
}

export default Services
