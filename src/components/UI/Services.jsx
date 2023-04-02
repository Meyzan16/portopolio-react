import React from "react"
import frontendImg from "../../assets/images/front-end.png"
import backendImg from "../../assets/images/backend.png"
import uiImg from "../../assets/images/design.png"
import appsImg from "../../assets/images/apps.png"

const Services = () => {
  return (
    <div>
        <section className="pt-8 sm:pt-0 pb-8"  id="services">
            <div className="container">
                 <div className="text-center">
                    <h2 data-aos="fade-up" data-aos-duration="1200" className=" text-stone-700 text-4xl mb-10">
                        About Me
                    </h2>
                    <p data-aos="fade-up" data-aos-duration="1200" className="text-justify lg:text-center 
                    lg:mx-auto lg:max-w-6xl text-secondary text-md  leading-relaxed">
                    I love turning beautiful designs into usable websites that respond to various devices and user contexts and are powered by code that’s just as beautiful, as well as scalable. I always seek perfection to make my projects unique and creative and I do so by keeping my eyes on the new tools, 
                    reading documentations and follow the right people on linkedin.Fascinated by how complicated programming is, got me interested in deepening it. I started learning Javascript and became more interested in building interactive Web applications.I now spend my time building projects and studying MERN Stack technology.
                    </p>
                 </div>

                 <div className="flex flex-col justify-center py-6">
                        <div className="w-full lg:max-w-6xl lg:mx-auto">
                            <div className="relative text-gray-700 antialiased text-sm font-semibold">

                                {/* vertical line running through the middle */}
                                <div className="hidden absolute w-1 sm:block bg-primary h-full left-1/2 transform
                                -translate-x-1/2"></div>

                                {/* left card */}
                           
                                <div className="mt-6 sm:mt-0 sm:mb-4 flex items-center flex-col sm:flex-row">
                                        <div className="flex justify-start w-full  mx-auto items-center">
                                            <div className="w-full sm:w-1/2 sm:pr-8">
                                                <div data-aos="zoom-in"
                                                data-aos-duration="1100"
                                                data-aos-delay="100"
                                                className="bg-white p-4 rounded group  shadow-md shadow-primary hover:shadow-none 
                                                    hover:bg-primary
                                                    cursor-pointer ease-in duration-150">
                                                    <h3 className="text-stone-700 text-lg mb-3 group-hover:text-white
                                                    group-hover:text-2xl">
                                                        Frontend Developer
                                                    </h3>
                                                    <p className=" text-stone-700 group-hover:text-white
                                                    text-sm leading-6">
                                                       Front-end web developers are responsible for implementing visual elements that are seen and interacted with by users to produce an attractive, interactive website appearance, and handle debugging (problems) that occur.
                                                        
                                                    </p>
                                                    <p className="text-stone-700 text-sm mt-1 group-hover:text-white">
                                                        skills : boostrap,tailwindcss,reactJs,nextjs
                                                    </p>
                                                       
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute rounded-full bg-primary border-white border-4
                                        w-10 h-10 abosulte left-1/2 transform
                                        -translate-x-1/2 -translate-y-4 sm:translate-y-0
                                        flex items-center justify-center">
                                            <figure>
                                                <img src={frontendImg} alt="" />
                                            </figure>
                                        </div>
                                </div>

                                {/* right card */}
                                <div className="mt-6 sm:mt-0 sm:mb-4 flex items-center flex-col sm:flex-row">
                                        <div className="flex justify-end w-full  mx-auto items-center">
                                            <div className="w-full sm:w-1/2 sm:pl-8">
                                                <div data-aos="zoom-in" data-aos-duration="1200"
                                                data-aos-delay="200" className="bg-white 
                                                p-4 rounded group  shadow-md shadow-primary hover:shadow-none 
                                                    hover:bg-primary
                                                    cursor-pointer ease-in duration-150">
                                                    <h3 className="text-stone-700 text-lg mb-3 group-hover:text-white
                                                    group-hover:text-2xl">
                                                        Backend Developer
                                                    </h3>
                                                    <p className=" text-stone-700 group-hover:text-white
                                                    text-sm leading-6">
                                                       
                                                       The back-end web developer is in charge of the job
                                                        developing, storing data, and communication between website databases or applications. The three main components of a back end developer"s work are servers, applications, and databases.
                                                    </p>
                                                    <p className="text-stone-700 text-sm mt-1 group-hover:text-white">
                                                        skills : laravel,nodejs,expressJs,mysql,mongodb
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute rounded-full bg-primary border-white border-4
                                        w-10 h-10 abosulte left-1/2 transform
                                        -translate-x-1/2 -translate-y-4 sm:translate-y-0
                                        flex items-center justify-center">
                                            <figure>
                                                <img src={backendImg} alt="" />
                                            </figure>
                                        </div>
                                </div>

                                {/* left left */}
                                <div className="mt-6 sm:mt-0 sm:mb-4 flex items-center flex-col sm:flex-row">
                                        <div className="flex justify-start w-full  mx-auto items-center">
                                            <div className="w-full sm:w-1/2 sm:pr-8">
                                                <div data-aos="zoom-in" data-aos-duration="1300"
                                                data-aos-delay="300" className="bg-white p-4 rounded group  shadow-md shadow-primary hover:shadow-none 
                                                    hover:bg-primary
                                                    cursor-pointer ease-in duration-150">
                                                    <h3 className="text-stone-700 text-lg mb-3 group-hover:text-white
                                                    group-hover:text-2xl">
                                                        UI/UX Design
                                                    </h3>
                                                    <p className=" text-stone-700 group-hover:text-white
                                                    text-sm leading-6">
                                                        User Interface (UI) is an interface design that focuses on the beauty of a display, and good color selection.
                                                    </p>
                                                    <p className=" text-stone-700 group-hover:text-white
                                                    text-sm leading-6">
                                                        User Experience (UX) is the process of increasing the satisfaction of certain site or application users through the use and pleasure provided in the interaction between the user and the product.
                                                    </p>
                                                    <p className="text-stone-700 text-sm mt-1 group-hover:text-white">
                                                        skills : figma
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute rounded-full bg-primary border-white border-4
                                        w-10 h-10 abosulte left-1/2 transform
                                        -translate-x-1/2 -translate-y-4 sm:translate-y-0
                                        flex items-center justify-center">
                                            <figure>
                                                <img src={uiImg} alt="" />
                                            </figure>
                                        </div>
                                </div>

                                 {/* right card */}
                                 <div className="mt-6 sm:mt-0 sm:mb-4 flex items-center flex-col sm:flex-row">
                                        <div className="flex justify-end w-full  mx-auto items-center">
                                            <div className="w-full sm:w-1/2 sm:pl-8">
                                                <div data-aos="zoom-in" data-aos-duration="1400"
                                                data-aos-delay="400" className="bg-white p-4 rounded group  shadow-md shadow-primary hover:shadow-none 
                                                    hover:bg-primary
                                                    cursor-pointer ease-in duration-150">
                                                    <h3 className="text-stone-700 text-lg mb-3 group-hover:text-white
                                                    group-hover:text-2xl">
                                                        DevOps
                                                    </h3>
                                                    <p className=" text-stone-700 group-hover:text-white
                                                    text-sm leading-6">
                                                      DevOps is a combination of Development and Operations. This combination is designed to increase a company"s ability to process application delivery at high speed.
                                                        
                                                    </p>
                                                    <p className="text-stone-700 text-sm mt-1 group-hover:text-white">
                                                        skills : Github, AWS (development)
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute rounded-full bg-primary border-white border-4
                                        w-10 h-10 abosulte left-1/2 transform
                                        -translate-x-1/2 -translate-y-4 sm:translate-y-0
                                        flex items-center justify-center">
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
